/**
 * 5W Documentation Block for WebMainLayout Component
 * ==========================================
 * 
 * WHAT:
 * - Desktop-specific layout component for the application
 * - Provides a responsive interface optimized for larger screens
 * - Implements a structured layout with header, main content, and footer
 * - Part of the device-specific layout system
 * - Integrates with WebMainLayout.module.css for styling
 * 
 * WHY:
 * - Ensures optimal user experience on desktop devices
 * - Provides consistent layout structure for web views
 * - Maintains clear separation of concerns for device-specific layouts
 * - Enables efficient organization of page content
 * 
 * HOW:
 * - Uses React functional component architecture
 * - Implements CSS modules for scoped styling
 * - Provides flexible container system for content organization
 * - Maintains semantic HTML structure (header, main, footer)
 * - Uses CSS Grid/Flexbox for responsive layouts
 * 
 * WHO:
 * - Used by desktop/web users accessing the application
 * - Referenced by pages requiring desktop-optimized layout
 * - Maintained by frontend developers
 * 
 * WHEN:
 * - Rendered when the application detects a desktop viewport
 * - Active during desktop user sessions
 * - Used as wrapper for web-specific page content
 */

'use client';

import React, { useState } from 'react';
import { Layout, Button, Menu, Badge, Avatar, Drawer, Breadcrumb, Typography, Switch, MenuProps } from 'antd';
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
import { useTheme } from '@/theme/ThemeProvider';

const nunito = Nunito({ subsets: ['latin'], weight: ['700'] });

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

interface WebMainLayoutProps {
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
    key: '/web/projects',
    icon: <ProjectOutlined />,
    label: 'Projects',
  },
  {
    key: '/web/team',
    icon: <TeamOutlined />,
    label: 'Team',
  },
  {
    key: '/web/documents',
    icon: <FileTextOutlined />,
    label: 'Documents',
  },
  {
    key: '/web/settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
  {
    key: '/web/help',
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

export default function WebMainLayout({ children, logoText = 'StellAntAI' }: WebMainLayoutProps) {
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
          borderTopRightRadius: '20px',
          borderBottomRightRadius: '20px'
        }}
      >
        <div style={{ padding: '16px 0', height: '64px', display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '48px', paddingLeft: collapsed ? '28px' : '24px' }}>
            <Image src="/icon.svg" alt="StellAntAI Logo" width={24} height={24} style={{ filter: 'brightness(0) invert(1)' }} />
            {!collapsed && (
              <span className={nunito.className} style={{ color: '#fff', marginLeft: '12px', fontSize: '20px', fontWeight: 700 }}>
                {logoText}
              </span>
            )}
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          style={{
            marginTop: '8px',
            backgroundColor: '#0173CE'
          }}
          items={menuItems.map(item => ({
            ...item,
            label: <Link href={item.key} style={{ color: 'inherit' }}>{item.label}</Link>,
          }))}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'all 0.2s' }}>
        <Header style={{ padding: 0, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
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
                  href: '/web',
                  title: <HomeOutlined />,
                },
                {
                  title: pathname.split('/')[2]?.charAt(0).toUpperCase() + pathname.split('/')[2]?.slice(1) || 'Dashboard',
                },
              ]}
            />
          </div>
          <Content style={{ margin: '0 0 24px', padding: 24, background: '#fff', minHeight: 280, borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            {children}
          </Content>
        </div>
        <Footer style={{ textAlign: 'center', padding: '16px' }}>
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