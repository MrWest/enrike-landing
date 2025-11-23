"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AnimationContextType {
  isPreloaderComplete: boolean;
  setPreloaderComplete: (isComplete: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [isPreloaderComplete, setPreloaderComplete] = useState(false);
  return (
    <AnimationContext.Provider value={{ isPreloaderComplete, setPreloaderComplete }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};
