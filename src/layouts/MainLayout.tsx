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
import { Layout, Button, Menu, Badge, Avatar, Drawer, Breadcrumb, Typography, Switch, MenuProps, Row } from 'antd';
import { useRouter } from 'next/navigation';
import { EditOutlined } from '@ant-design/icons';
const { Header, Sider, Content, Footer } = Layout;
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
  HomeOutlined,
  AreaChartOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Nunito } from 'next/font/google';
import styles from './MainLayout.module.css';
import { useTheme } from '@/theme/ThemeProvider';

const nunito = Nunito({ subsets: ['latin'], weight: ['600'] });


const { Title } = Typography;

interface MainLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  {
    key: '/web/dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
  {
    key: '/web/analytics',
    icon: <AreaChartOutlined />,
    label: 'Analytics',
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
    children: [
      {
        key: '/settings/theme',
        icon: <SettingOutlined />,
        label: 'Theme Settings',
      }
    ]
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

export default function MainLayout({ children }: MainLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const pathname = usePathname();
  const { themeMode, toggleTheme } = useTheme();
  const router = useRouter();

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
        breakpoint="lg"
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 10,
          backgroundColor: themeMode === 'dark' ? '#001529' : '#0173CE',
          boxShadow: themeMode === 'dark' ? '3px 0 5px rgba(255, 255, 255, 0.1)' : '3px 0 5px rgba(0, 0, 0, 0.35)',
          borderTopRightRadius: '20px'
        }}
      >
        <div style={{ padding: '16px 0', height: '64px', display: 'flex', alignItems: 'center' }}>
          <Link href="https://StellantAI.com" id="logo" style={{ display: 'flex', alignItems: 'center', height: '48px', paddingLeft: collapsed ? '28px' : '24px', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
            <Image src="/icon.svg" alt="Stellant AI Logo" width={20} height={20} style={{ filter: 'brightness(0) invert(1)' }} />
            <div className={styles.logo}>
              <span className={`${styles.logoText} ${nunito.className}`}>Stellant AI</span>
            </div>
          </Link>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          style={{
            marginTop: '8px',
            backgroundColor: themeMode === 'dark' ? '#001529' : '#0173CE',
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
        <Header style={{ padding: 0, background: themeMode === 'dark' ? '#141414' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleCollapsed}
              style={{ fontSize: '16px', width: 64, height: 64 }}
            />
            <Breadcrumb
              items={[
                {
                  href: '/',
                  title: <HomeOutlined style={{ fontSize: 16 }} />,
                },
                {
                  title: pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1),
                },
              ]}
              style={{ marginLeft: 16 }}
            />
          </div>
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
        <div style={{ background: themeMode === 'dark' ? '#000000' : '#F5F5F5', padding: 24 }}>
          <Content style={{ background: themeMode === 'dark' ? '#141414' : '#fff', minHeight: 280, padding: 24, borderRadius: 8 }}>
            {children}
          </Content>
        </div>
        <Footer style={{ textAlign: 'center' }}>
          StellantAI ©{new Date().getFullYear()} Created by <Link href="https://stellantai.com" target="_blank" rel="noopener noreferrer">Stellant AI</Link>
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
            <p style={{ color: themeMode === 'dark' ? '#A6A6A6' : '#666' }}>stella.ant@stellantai.com</p>
            <p style={{ color: themeMode === 'dark' ? '#A6A6A6' : '#666', marginTop: '4px' }}>Administrator</p>
          </div>
          <div style={{ padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span>Dark Mode</span>
              <Switch
                checked={themeMode === 'dark'}
                onChange={toggleTheme}
                checkedChildren="🌙"
                unCheckedChildren="☀️"
              />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ display: 'block', marginBottom: '12px' }}>Theme Colors</span>
              <Row gutter={[8, 8]}>
                {[
                  { color: '#0173CE', label: 'Ocean Blue' },
                  { color: '#FF4D4F', label: 'Ruby Red' },
                  { color: '#FA8C16', label: 'Sunset Orange' },
                  { color: '#FAAD14', label: 'Golden Yellow' },
                  { color: '#13C2C2', label: 'Turquoise' },
                  { color: '#52C41A', label: 'Forest Green' },
                  { color: '#1890FF', label: 'Sky Blue' },
                  { color: '#722ED1', label: 'Royal Purple' }
                ].map((theme, index) => (
                  <div
                    key={index}
                    onClick={() => router.push('/settings/theme')}
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: theme.color,
                      borderRadius: '4px',
                      cursor: 'pointer',
                      margin: '0 4px',
                      transition: 'transform 0.2s',
                      transform: 'scale(1)'
                    }}
                    title={theme.label}
                  />
                ))}
              </Row>
            </div>
          </div>
        </div>
      </Drawer>
    </Layout>
  );
}