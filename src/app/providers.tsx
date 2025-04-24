"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Create a context for dark mode
const DarkModeContext = createContext<{
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}>({
  isDarkMode: true,
  toggleDarkMode: () => {},
});

// Provider component
export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode] = useState(true);

  // Force dark mode on mount
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
    
    // Prevent light mode from being applied
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const htmlElement = document.documentElement;
          if (!htmlElement.classList.contains("dark")) {
            htmlElement.classList.add("dark");
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleDarkMode = () => {
    // This function is kept for compatibility but will always force dark mode
    document.documentElement.classList.add("dark");
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Custom hook to use dark mode
export const useDarkMode = () => useContext(DarkModeContext); 