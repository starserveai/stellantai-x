'use client';

/**
 * 5W Documentation Block for MobileMainLayout Component
 * ==========================================
 * 
 * WHAT:
 * - Mobile-specific layout component for the application
 * - Provides a responsive interface optimized for small screens
 * - Implements a collapsible drawer menu and mobile-friendly header
 * - Part of the device-specific layout system referenced by app/layout.tsx
 * 
 * WHY:
 * - Ensures optimal user experience on mobile devices
 * - Provides touch-friendly navigation and interactions
 * - Maintains consistent branding while adapting to smaller screens
 * - Reduces layout complexity for mobile users
 * 
 * HOW:
 * - Uses Ant Design's Layout, Drawer, and Menu components
 * - Implements a hamburger menu for main navigation
 * - Provides a simplified header with essential actions
 * - Manages state for drawer menus (main menu and settings)
 * - Integrates with ThemeProvider for consistent styling
 * 
 * WHO:
 * - Used by mobile device users accessing the application
 * - Referenced by the root layout for mobile viewport sizes
 * - Maintained by frontend developers
 * 
 * WHEN:
 * - Rendered when the application detects a mobile viewport
 * - Active during mobile user sessions
 * - State updates occur on user interactions (menu open/close)
 */

import React, { useState } from 'react';
import { Layout, Button, Menu, Badge, Avatar, Drawer, Typography } from 'antd';
import Image from 'next/image';
import {
  MenuOutlined,
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  LogoutOutlined,
  ProjectOutlined,
  TeamOutlined,
  FileTextOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Nunito } from 'next/font/google';
import { useTheme } from '@/theme/ThemeProvider';

const nunito = Nunito({ subsets: ['latin'], weight: ['700'] });

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

interface MobileMainLayoutProps {
  children: React.ReactNode;
  logoText?: string;
}

const menuItems = [
  {
    key: '/mobile/dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
  {
    key: '/mobile/projects',
    icon: <ProjectOutlined />,
    label: 'Projects',
  },
  {
    key: '/mobile/team',
    icon: <TeamOutlined />,
    label: 'Team',
  },
  {
    key: '/mobile/documents',
    icon: <FileTextOutlined />,
    label: 'Documents',
  },
  {
    key: '/mobile/settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
  {
    key: '/mobile/help',
    icon: <QuestionCircleOutlined />,
    label: 'Help & Support',
  },
];

export default function MobileMainLayout({ children, logoText = 'StellAntAI' }: MobileMainLayoutProps) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const pathname = usePathname();
  const { themeMode, toggleTheme } = useTheme();

  const showMenu = () => {
    setMenuVisible(true);
  };

  const onMenuClose = () => {
    setMenuVisible(false);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onDrawerClose = () => {
    setDrawerVisible(false);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{
        padding: '0 16px',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={showMenu}
            style={{ fontSize: '18px', padding: '4px 8px' }}
          />
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '12px' }}>
            <Image src="/icon.svg" alt="StellAntAI Logo" width={24} height={24} />
            <span className={nunito.className} style={{ color: '#0173CE', marginLeft: '8px', fontSize: '18px', fontWeight: 700 }}>
              {logoText}
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Badge count={5} style={{ marginRight: 16 }}>
            <BellOutlined style={{ fontSize: 20 }} />
          </Badge>
          <Avatar
            src="/settings/profile.jpg"
            style={{ cursor: 'pointer' }}
            onClick={showDrawer}
          />
        </div>
      </Header>

      <Content style={{ marginTop: 64, padding: '16px', background: '#F5F5F5' }}>
        {children}
      </Content>

      <Drawer
        title="Menu"
        placement="left"
        onClose={onMenuClose}
        open={menuVisible}
        width="75%"
      >
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          style={{ border: 'none' }}
          items={menuItems.map(item => ({
            ...item,
            label: <Link href={item.key} onClick={onMenuClose}>{item.label}</Link>,
          }))}
        />
      </Drawer>

      <Drawer
        title="Settings"
        placement="right"
        onClose={onDrawerClose}
        open={drawerVisible}
        width="75%"
      >
        <div style={{ padding: '20px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Image
              src="/settings/profile.jpg"
              alt="Profile"
              width={120}
              height={120}
              style={{ borderRadius: '50%' }}
            />
            <h3 style={{ marginTop: '16px', marginBottom: '4px' }}>Stella Ant</h3>
            <p style={{ color: '#666' }}>stella.ant@stellantai.com</p>
            <p style={{ color: '#666', marginTop: '4px' }}>Administrator</p>
          </div>
        </div>
      </Drawer>

      <Footer style={{ textAlign: 'center', padding: '12px' }}>
        StellantAI ©{new Date().getFullYear()} Created by StellAnt
      </Footer>
    </Layout>
  );
}