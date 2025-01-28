/**
 * 5W Documentation Block for Theme Configuration
 * =========================================
 * 
 * WHAT:
 * - Defines theme configurations for light and dark modes using Ant Design's ThemeConfig
 * - Specifies design tokens for colors, typography, and component styles
 * - Provides consistent styling across the application
 * - Customizes Ant Design component appearances
 * 
 * WHY:
 * - Ensures consistent visual design across the application
 * - Enables seamless switching between light and dark modes
 * - Maintains design system compliance
 * - Provides centralized control over UI appearance
 * 
 * HOW:
 * - Uses Ant Design's ThemeConfig interface for type safety
 * - Defines token values for global design variables
 * - Customizes individual component styles
 * - Exports themes for use in ThemeProvider
 * 
 * WHO:
 * - Used by ThemeProvider for application-wide theming
 * - Maintained by UI/UX designers and developers
 * - Referenced by components for consistent styling
 * 
 * WHEN:
 * - Applied during application initialization
 * - Referenced during theme switches
 * - Updated when design system changes
 */

import type { ThemeConfig } from 'antd';

export const lightTheme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#004D7E',
    colorTextSecondary: '#49607A',
    colorFillSecondary: '#F3F6F9',
    colorBgContainer: '#FFFFFF',
    colorText: '#1F1F1F',
    colorBorder: '#E5E5E5',
    borderRadius: 8,
    colorSuccess: '#52C41A',
    colorWarning: '#FAAD14',
    colorError: '#FF4D4F',
    colorInfo: '#1890FF',
  },
  components: {
    Card: {
      borderRadius: 12,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    },
    Table: {
      borderRadius: 8,
      headerBg: '#F8F9FA',
    },
    Button: {
      borderRadius: 6,
    },
  },
};

export const darkTheme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#1890FF',
    colorTextSecondary: '#8B949E',
    colorFillSecondary: '#1F2937',
    colorBgContainer: '#121212',
    colorText: '#E5E5E5',
    colorBorder: '#30363D',
    borderRadius: 8,
    colorSuccess: '#52C41A',
    colorWarning: '#FAAD14',
    colorError: '#FF4D4F',
    colorInfo: '#1890FF',
  },
  components: {
    Card: {
      borderRadius: 12,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    },
    Table: {
      borderRadius: 8,
      headerBg: '#1F2937',
    },
    Button: {
      borderRadius: 6,
    },
  },
};