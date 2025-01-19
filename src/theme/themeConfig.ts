// src/theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16, // Base font size
    colorPrimary: '#0070f3', // Customize the primary color for main elements
    colorTextSecondary: '#52c41a', // Secondary color for text
    colorFillSecondary: '#e6f7ff', // Secondary fill color for subtle backgrounds
    colorLink: '#52c41a', // Optional: Use secondary color for links if desired
  },
};

export default theme;