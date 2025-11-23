"use client";

import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { AnimationProvider } from '@/components/home/AnimationContext';
import { SectionProvider, useSection } from '@/context/SectionContext';

const SECTION_IDS = ['hero', 'proceso', 'metodologia', 'intervencion', 'diagnostico']; // Centralized constant

type AppLayoutProps = {
  children: React.ReactNode;
};

const LayoutWithObserver = ({ children }: AppLayoutProps) => {
  const headerRef = useRef<HTMLElement>(null);
  const { setActiveSection } = useSection();

  useLayoutEffect(() => {
    if (!headerRef.current) return;

    const updateHeaderHeight = (target: HTMLElement) => {
      const height = target.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    };

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        updateHeaderHeight(entry.target as HTMLElement);
      }
    });

    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map(id => document.getElementById(id)); // Use the centralized constant

    const options = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      const intersectingEntries = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => entry.target.id);

      if (intersectingEntries.length > 0) {
        if (intersectingEntries.includes('hero')) {
          setActiveSection('hero');
        } else {
          const prioritizedSection = SECTION_IDS // Use the centralized constant
            .slice()
            .reverse()
            .find(id => intersectingEntries.includes(id));
          
          if (prioritizedSection) {
            setActiveSection(prioritizedSection);
          }
        }
      }
    };

    const observer = new IntersectionObserver(callback, options);
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [setActiveSection]);

  return (
    <>
      <Header ref={headerRef} />
      <main>{children}</main>
    </>
  );
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <AnimationProvider>
      <SectionProvider>
        <LayoutWithObserver>{children}</LayoutWithObserver>
      </SectionProvider>
    </AnimationProvider>
  );
};