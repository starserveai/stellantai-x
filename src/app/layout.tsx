"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import { ConfigProvider } from 'antd';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#00b96b', // Example custom primary color
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}