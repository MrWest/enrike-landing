"use client";

import { createContext } from 'react';

// Define the shape of the context value
type AppContextType = {
  onArticleOpen: (articleKey: string) => void;
};

// Create the context with a default value
export const AppContext = createContext<AppContextType | undefined>(undefined);
