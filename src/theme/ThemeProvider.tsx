/**
 * 5W Documentation Block for ThemeProvider Component
 * ============================================
 * 
 * WHAT:
 * - A React context provider component that manages theme state for the entire application
 * - Integrates Ant Design's ConfigProvider and X Design System's XProvider
 * - Provides theme switching functionality between light and dark modes
 * - Persists theme preference in localStorage
 * 
 * WHY:
 * - Centralizes theme management across the application
 * - Enables consistent theming for all UI components
 * - Provides a seamless dark/light mode switching experience
 * - Ensures theme persistence across page reloads
 * 
 * HOW:
 * - Uses React Context API to share theme state
 * - Implements localStorage for theme persistence
 * - Wraps application with necessary theme providers
 * - Exposes useTheme hook for theme consumption
 * 
 * WHO:
 * - Used by the root layout component
 * - Consumed by any component needing theme awareness
 * - Maintained by UI/UX developers
 * 
 * WHEN:
 * - Initialized at application startup
 * - Theme changes triggered by user preference
 * - Theme state persisted on every change
 */

'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { XProvider } from '@ant-design/x';
import { ConfigProvider } from 'antd';
import { lightTheme, darkTheme } from './themes';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ 
  themeMode: 'light',
  toggleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme) {
      setThemeMode(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ConfigProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        <XProvider>
          {children}
        </XProvider>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}