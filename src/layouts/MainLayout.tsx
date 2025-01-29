'use client';

/**
 * 5W Documentation Block for MainLayout Component
 * ==========================================
 * 
 * WHAT:
 * - Desktop-specific layout component for the application
 * - Provides a responsive interface optimized for larger screens
 * - Implements a collapsible sidebar and fixed header
 * - Part of the device-specific layout system referenced by app/layout.tsx
 * - Integrates with global styling through MainLayout.module.css
 * 
 * WHY:
 * - Ensures optimal user experience on desktop devices
 * - Provides efficient navigation and workspace organization
 * - Maintains consistent branding while utilizing larger screen real estate
 * - Enables quick access to all application features
 * 
 * HOW:
 * - Uses Ant Design's Layout components with custom styling
 * - Implements a collapsible sidebar for main navigation
 * - Provides a fixed header with user profile and notifications
 * - Manages state for sidebar collapse and settings drawer
 * - Integrates with ThemeProvider for dark/light mode support
 * - Applies custom styles through MainLayout.module.css for consistent theming
 * 
 * WHO:
 * - Used by desktop users accessing the application
 * - Referenced by the root layout for desktop viewport sizes
 * - Maintained by frontend developers
 * 
 * WHEN:
 * - Rendered when the application detects a desktop viewport
 * - Active during desktop user sessions
 * - State updates occur on user interactions (sidebar toggle, theme switch)
 */

import React, { useState } from 'react';
import { Layout, Button, Menu, Badge, Avatar, Drawer, Breadcrumb, Typography, Switch, MenuProps } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Image from 'next/image';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  LogoutOutlined,
  ProjectOutlined,
  TeamOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
  HomeOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Nunito } from 'next/font/google';
import styles from './MainLayout.module.css';
import { useTheme } from '@/theme/ThemeProvider';

const nunito = Nunito({ subsets: ['latin'], weight: ['700'] });

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

interface MainLayoutProps {
  children: React.ReactNode;
  logoText?: string;
}

const menuItems = [
  {
    key: '/web/dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
  {
    key: '/projects',
    icon: <ProjectOutlined />,
    label: 'Projects',
  },
  {
    key: '/team',
    icon: <TeamOutlined />,
    label: 'Team',
  },
  {
    key: '/documents',
    icon: <FileTextOutlined />,
    label: 'Documents',
  },
  {
    key: '/settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
  {
    key: '/help',
    icon: <QuestionCircleOutlined />,
    label: 'Help & Support',
  },
];

type MenuItem = Required<MenuProps>['items'][number];

const userMenuItems: MenuItem[] = [
  {
    key: 'profile',
    icon: <UserOutlined />,
    label: 'Profile',
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
  {
    type: 'divider',
  },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    label: 'Logout',
  },
];

export default function MainLayout({ children, logoText = 'StellAntAI' }: MainLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const pathname = usePathname();
  const { themeMode, toggleTheme } = useTheme();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onDrawerClose = () => {
    setDrawerVisible(false);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 10,
          backgroundColor: '#0173CE',
          boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
          borderTopRightRadius: '20px'
        }}
      >
        <div style={{ padding: '16px 0', height: '64px', display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '48px', paddingLeft: collapsed ? '28px' : '24px' }}>
            <Image src="/icon.svg" alt="StellAntAI Logo" width={20} height={20} style={{ filter: 'brightness(0) invert(1)' }} />
            {!collapsed && (
              <span className={nunito.className} style={{ color: '#fff', marginLeft: '12px', fontSize: '18px', fontWeight: 700 }}>
                {logoText}
              </span>
            )}
          </div>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          style={{
            marginTop: '8px',
            backgroundColor: '#0173CE',
            color: '#fff'
          }}
          theme="dark"
          className={styles.mainMenu}
          items={menuItems.map(item => ({
            ...item,
            label: <Link href={item.key} style={{ color: 'inherit' }}>{item.label}</Link>,
          }))}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'all 0.2s' }}>
        <Header style={{ padding: 0, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            style={{ fontSize: '16px', width: 64, height: 64 }}
          />
          <div style={{ display: 'flex', alignItems: 'center', marginRight: 24 }}>
            <Badge count={5} style={{ marginRight: 24 }}>
              <BellOutlined style={{ fontSize: 20 }} />
            </Badge>
            <Avatar 
              src="/settings/profile.jpg"
              style={{ cursor: 'pointer' }}
              onClick={showDrawer}
            />
          </div>
        </Header>
        <div style={{ background: '#F5F5F5', padding: '16px 16px 0' }}>
          <div style={{ background: '#fff', padding: '12px 24px', marginBottom: '16px', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            <Breadcrumb
              items={[
                {
                  href: '/',
                  title: <HomeOutlined />,
                },
                {
                  title: pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1),
                },
              ]}
            />
          </div>
          <Content style={{ margin: '0 0 24px', padding: 24, background: '#fff', minHeight: 280 }}>
            {children}
          </Content>
        </div>
        <Footer style={{ textAlign: 'center' }}>
          StellantAI ©{new Date().getFullYear()} Created by StellAnt
        </Footer>
      </Layout>
      <Drawer
        title="Settings"
        placement="right"
        onClose={onDrawerClose}
        open={drawerVisible}
        width={320}
      >
        <div style={{ padding: '20px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Image
              src="/settings/profile.jpg"
              alt="Profile"
              width={300}
              height={300}
              style={{ borderRadius: '50%' }}
            />
            <h3 style={{ marginTop: '16px', marginBottom: '4px' }}>Stella Ant</h3>
            <p style={{ color: '#666' }}>stella.ant@stellantai.com</p>
            <p style={{ color: '#666', marginTop: '4px' }}>Administrator</p>
          </div>
          <div style={{ padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span>Dark Mode</span>
              <Switch
                checked={themeMode === 'dark'}
                onChange={toggleTheme}
                checkedChildren="🌙"
                unCheckedChildren="☀️"
              />
            </div>
          </div>
        </div>
      </Drawer>
    </Layout>
  );
}