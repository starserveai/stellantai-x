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
  themeColor: string;
  setThemeColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  themeMode: 'light',
  toggleTheme: () => {},
  themeColor: '#0173CE',
  setThemeColor: () => {}
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [themeColor, setThemeColor] = useState('#0173CE');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    const savedColor = localStorage.getItem('themeColor');
    if (savedTheme) {
      setThemeMode(savedTheme);
    }
    if (savedColor) {
      setThemeColor(savedColor);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleSetThemeColor = (color: string) => {
    setThemeColor(color);
    localStorage.setItem('themeColor', color);
  };

  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;
  const themeWithColor = {
    ...currentTheme,
    token: {
      ...currentTheme.token,
      colorPrimary: themeColor,
    },
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, themeColor, setThemeColor: handleSetThemeColor }}>
      <ConfigProvider theme={themeWithColor}>
        <XProvider>
          {children}
        </XProvider>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}