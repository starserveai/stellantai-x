'use client';

import React, { useEffect } from 'react';
import { Card, Typography, Row, Col, Checkbox } from 'antd';
import MainLayout from '@/layouts/MainLayout';
import { useTheme } from '@/theme/ThemeProvider';

const { Title } = Typography;

const themeColors = [
  { key: 'blue', color: '#0173CE', label: 'Ocean Blue' },
  { key: 'red', color: '#FF4D4F', label: 'Ruby Red' },
  { key: 'orange', color: '#FA8C16', label: 'Sunset Orange' },
  { key: 'yellow', color: '#FAAD14', label: 'Golden Yellow' },
  { key: 'cyan', color: '#13C2C2', label: 'Turquoise' },
  { key: 'green', color: '#52C41A', label: 'Forest Green' },
  { key: 'blue', color: '#1890FF', label: 'Sky Blue' },
  { key: 'purple', color: '#722ED1', label: 'Royal Purple' },
];

export default function ThemeSettingsPage() {
  const { themeMode, themeColor, setThemeColor } = useTheme();
  const [selectedColor, setSelectedColor] = React.useState(themeColor);

  useEffect(() => {
    setSelectedColor(themeColor);
  }, [themeColor]);

  const handleThemeSelect = (color: string) => {
    setSelectedColor(color);
    setThemeColor(color);
  };

  return (
    <MainLayout>
      <Card>
        <Title level={4}>Theme Settings</Title>
        <div style={{ marginTop: '24px' }}>
          <Title level={5}>Select Color Theme:</Title>
          <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
            {themeColors.map((theme) => (
              <Col key={`${theme.key}-${theme.color}`} xs={12} sm={8} md={6} lg={4}>
                <div
                  onClick={() => handleThemeSelect(theme.color)}
                  style={{
                    border: `2px solid ${selectedColor === theme.color ? theme.color : themeMode === 'dark' ? '#434343' : '#d9d9d9'}`,
                    borderRadius: '8px',
                    padding: '16px',
                    cursor: 'pointer',
                    backgroundColor: themeMode === 'dark' ? '#141414' : '#fff',
                    transition: 'all 0.3s',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '60px',
                      backgroundColor: theme.color,
                      borderRadius: '4px',
                      marginBottom: '12px',
                    }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: themeMode === 'dark' ? '#fff' : '#000' }}>
                      {theme.label}
                    </span>
                    <Checkbox checked={selectedColor === theme.color} onChange={() => handleThemeSelect(theme.color)} />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Card>
    </MainLayout>
  );
}