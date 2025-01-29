'use client';

/**
 * 5W Documentation Block for Mobile Dashboard Page
 * ==========================================
 * 
 * WHAT:
 * - Mobile dashboard page component
 * - Displays key statistics and data visualizations
 * - Implements responsive mobile-optimized charts and cards
 * - Provides real-time data monitoring interface
 * 
 * WHY:
 * - Delivers critical business metrics to mobile users
 * - Enables quick access to important statistics on-the-go
 * - Maintains data visibility in a mobile-friendly format
 * - Supports informed decision-making for mobile users
 * 
 * HOW:
 * - Uses Ant Design components for UI elements
 * - Implements @ant-design/plots for data visualization
 * - Utilizes CSS modules for mobile-responsive styling
 * - Integrates with MobileMainLayout for consistent structure
 * 
 * WHO:
 * - Used by mobile users needing dashboard access
 * - Accessed by team members monitoring metrics
 * - Maintained by frontend development team
 * 
 * WHEN:
 * - Loaded when users access dashboard on mobile devices
 * - Displays real-time and historical data updates
 * - Active during mobile user dashboard sessions
 */

import React from 'react';
import { Card, Typography, Progress, List } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import MainLayout from '@/layouts/MainLayout';
import styles from './styles.module.css';

const { Title, Text } = Typography;

const DashboardPage = () => {
  // Sample data for the area chart
  const visitData = [
    { date: 'Mon', pageView: 100, sessions: 50 },
    { date: 'Tue', pageView: 120, sessions: 60 },
    { date: 'Wed', pageView: 140, sessions: 70 },
    { date: 'Thu', pageView: 160, sessions: 80 },
    { date: 'Fri', pageView: 180, sessions: 90 },
    { date: 'Sat', pageView: 200, sessions: 100 },
    { date: 'Sun', pageView: 220, sessions: 110 },
  ];

  // Sample data for recent orders
  const recentOrders = [
    { key: '1', trackingNo: '#002456', product: 'Camera lens', total: 40, status: 'Rejected', amount: '$40,570' },
    { key: '2', trackingNo: '#002456', product: 'Laptop', total: 300, status: 'Pending', amount: '$1,80,139' },
    { key: '3', trackingNo: '#998530', product: 'Mobile', total: 20, status: 'Approved', amount: '$90,989' },
  ];

  return (
    <MainLayout>
      <div className="p-4">
        {/* Statistics Cards */}
        <div className={styles.statsGrid}>
          <Card className={styles.statsCard}>
            <Title level={5} className={styles.statsTitle}>Total Page Views</Title>
            <Title level={3} className={styles.statsValue}>4,42,236</Title>
            <Text type="success" className={styles.statsPercentage}>
              <ArrowUpOutlined /> 59.3%
            </Text>
          </Card>

          <Card className={styles.statsCard}>
            <Title level={5} className={styles.statsTitle}>Total Users</Title>
            <Title level={3} className={styles.statsValue}>78,250</Title>
            <Text type="success" className={styles.statsPercentage}>
              <ArrowUpOutlined /> 70.5%
            </Text>
          </Card>

          <Card className={styles.statsCard}>
            <Title level={5} className={styles.statsTitle}>Total Orders</Title>
            <Title level={3} className={styles.statsValue}>18,800</Title>
            <Text type="success" className={styles.statsPercentage}>
              <ArrowUpOutlined /> 27.4%
            </Text>
          </Card>

          <Card className={styles.statsCard}>
            <Title level={5} className={styles.statsTitle}>Total Sales</Title>
            <Title level={3} className={styles.statsValue}>$35,078</Title>
            <Text type="success" className={styles.statsPercentage}>
              <ArrowUpOutlined /> 27.4%
            </Text>
          </Card>
        </div>

        {/* Visitor Analytics Chart */}
        <Card title="Unique Visitor" className={styles.chartCard}>
          <Area
            data={visitData}
            xField="date"
            yField="pageView"
          />
        </Card>

        {/* Income Overview */}
        <Card title="Income Overview" className={styles.chartCard}>
          <div className="mb-4">
            <Text>This Week Statistics</Text>
            <Title level={3}>$7,650</Title>
          </div>
          <Progress percent={75} status="active" />
        </Card>

        {/* Recent Orders List */}
        <Card title="Recent Orders" className={styles.listCard}>
          <List
            dataSource={recentOrders}
            renderItem={(item) => (
              <List.Item
                key={item.key}
                extra={
                  <Text
                    style={{
                      color:
                        item.status === 'Approved' ? '#52C41A' :
                        item.status === 'Pending' ? '#1890FF' : '#FF4D4F',
                    }}
                  >
                    {item.status}
                  </Text>
                }
              >
                <List.Item.Meta
                  title={item.product}
                  description={`${item.trackingNo} | ${item.amount}`}
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;