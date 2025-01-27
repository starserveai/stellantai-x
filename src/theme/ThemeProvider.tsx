import React from 'react';
import { XProvider } from '@ant-design/x';
import { ConfigProvider } from 'antd';

const stellantTheme = {
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

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ConfigProvider theme={stellantTheme}>
      <XProvider>
        {children}
      </XProvider>
    </ConfigProvider>
  );
}