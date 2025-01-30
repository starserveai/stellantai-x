'use client';

/**
 * 5W Documentation Block for Web Analytics Page
 * ==========================================
 * 
 * WHAT:
 * - Desktop-optimized analytics page component
 * - Displays detailed analytics and data insights
 * - Implements responsive data visualizations
 * - Provides comprehensive analytics interface
 * 
 * WHY:
 * - Delivers in-depth analytics for desktop users
 * - Enables detailed data analysis on large screens
 * - Maintains optimal data visibility and interaction
 * - Supports advanced analytics capabilities
 * 
 * HOW:
 * - Uses Ant Design components for enterprise-grade UI
 * - Implements @ant-design/plots for advanced visualizations
 * - Uses MainLayout for consistent desktop structure
 * - Provides comprehensive analytics grid layout
 * 
 * WHO:
 * - Used by desktop users requiring detailed analytics
 * - Accessed by team members for data analysis
 * - Maintained by frontend development team
 * 
 * WHEN:
 * - Loaded when users access analytics on desktop devices
 * - Displays real-time and historical analytics
 * - Active during desktop user analytics sessions
 */

import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { Area } from '@ant-design/plots';
import MainLayout from '@/layouts/MainLayout';

const { Title } = Typography;

export default function AnalyticsPage() {
  // Sample data for the analytics chart
  const analyticsData = [
    { date: '2023-01', value: 3 },
    { date: '2023-02', value: 4 },
    { date: '2023-03', value: 3.5 },
    { date: '2023-04', value: 5 },
    { date: '2023-05', value: 4.9 },
    { date: '2023-06', value: 6 },
    { date: '2023-07', value: 7 },
  ];

  return (
    <MainLayout>
      <div className="p-6">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Card>
              <Title level={4}>Performance Analytics</Title>
              <Area
                data={analyticsData}
                xField="date"
                yField="value"
                smooth
                areaStyle={{
                  fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
                }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
};