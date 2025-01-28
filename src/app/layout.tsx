/**
 * 5W Documentation Block for RootLayout Component
 * ==========================================
 * 
 * WHAT:
 * - This is the root layout component that wraps all pages in the Next.js application
 * - It provides the base HTML structure and global configurations
 * - Implements global styling and theme configuration using Ant Design
 * - Manages device-specific layouts through /app/layouts directory:
 *   - Web layout: Uses MainLayout for desktop views
 *   - Tablet layout: Uses TabletMainLayout for medium screens
 *   - Mobile layout: Uses MobileMainLayout for small screens
 * - Global styles are applied through:
 *   - /app/globals.css for project-wide styles
 *   - /theme/themeConfig.ts for Ant Design customization
 *   - /theme/ThemeProvider.tsx for dark/light mode management
 * 
 * WHY:
 * - Creates a consistent layout structure across all pages
 * - Centralizes global UI configurations and theme settings
 * - Ensures proper font loading and styling application
 * - Maintains consistent design system implementation
 * 
 * HOW:
 * - Wraps all child components with necessary providers (ConfigProvider)
 * - Applies global font settings using Next.js font optimization
 * - Implements global CSS styles through globals.css
 * - Sets up theme configuration for Ant Design components
 * - Device-specific layouts are automatically applied based on screen size:
 *   - /components/layout/MainLayout.tsx for desktop
 *   - /components/layout/MobileMainLayout.tsx for mobile
 *   - Responsive design handled through CSS and component props
 * 
 * WHO:
 * - Used by Next.js 13+ App Router
 * - Integrated with Ant Design (antd) component library
 * - Utilized by developers building on this application
 * - Consumed by all pages and components in the application
 * 
 * WHEN:
 * - Executed during initial app bootstrap
 * - Applied to every page request
 * - Re-rendered when theme configurations change
 * - Active throughout the entire user session
 */

"use client";


import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/theme/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}