'use client';

/**
 * 5W Documentation Block for Tablet Dashboard Page
 * ==========================================
 * 
 * WHAT:
 * - Tablet-optimized dashboard page component
 * - Displays key metrics and data visualizations
 * - Implements responsive tablet-friendly charts and cards
 * - Provides comprehensive data monitoring interface
 * 
 * WHY:
 * - Delivers business metrics optimized for tablet viewing
 * - Enables efficient data access on medium-sized screens
 * - Maintains data visibility in a tablet-friendly format
 * - Supports informed decision-making for tablet users
 * 
 * HOW:
 * - Uses Ant Design components for UI elements
 * - Implements @ant-design/plots for data visualization
 * - Uses Row/Col grid system for tablet-responsive layout
 * - Integrates with MainLayout for consistent structure
 * 
 * WHO:
 * - Used by tablet users accessing dashboard data
 * - Accessed by team members using tablet devices
 * - Maintained by frontend development team
 * 
 * WHEN:
 * - Loaded when users access dashboard on tablet devices
 * - Displays real-time and historical data updates
 * - Active during tablet user dashboard sessions
 */

import React from 'react';
import { Card, Row, Col, Table, Typography, Progress } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import MainLayout from '@/components/layout/MainLayout';

const { Title, Text } = Typography;

const TabletDashboardPage = () => {
  const visitData = [
    { date: 'Mon', pageView: 100, sessions: 50 },
    { date: 'Tue', pageView: 120, sessions: 60 },
    { date: 'Wed', pageView: 140, sessions: 70 },
    { date: 'Thu', pageView: 160, sessions: 80 },
    { date: 'Fri', pageView: 180, sessions: 90 },
    { date: 'Sat', pageView: 200, sessions: 100 },
    { date: 'Sun', pageView: 220, sessions: 110 },
  ];

  const recentOrders = [
    { key: '1', trackingNo: '#002456', product: 'Camera lens', total: 40, status: 'Rejected', amount: '$40,570' },
    { key: '2', trackingNo: '#002456', product: 'Laptop', total: 300, status: 'Pending', amount: '$1,80,139' },
    { key: '3', trackingNo: '#998530', product: 'Mobile', total: 20, status: 'Approved', amount: '$90,989' },
  ];

  const columns = [
    { title: 'Product', dataIndex: 'product', key: 'product' },
    { title: 'Status', dataIndex: 'status', key: 'status',
      render: (status: string) => (
        <Text style={{ color: status === 'Approved' ? '#52C41A' : status === 'Pending' ? '#1890FF' : '#FF4D4F' }}>
          {status}
        </Text>
      ),
    },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
  ];

  return (
    <MainLayout>
      <div className="p-4">
        <Row gutter={[16, 16]}>
          <Col xs={12}>
            <Card className="shadow-md">
              <Title level={5}>Page Views</Title>
              <Title level={3}>4,42,236</Title>
              <Text type="success"><ArrowUpOutlined /> 59.3%</Text>
            </Card>
          </Col>
          <Col xs={12}>
            <Card className="shadow-md">
              <Title level={5}>Total Sales</Title>
              <Title level={3}>$35,078</Title>
              <Text type="success"><ArrowUpOutlined /> 27.4%</Text>
            </Card>
          </Col>

          <Col span={24}>
            <Card title="Visitor Analytics" className="shadow-md">
              <Area
                data={visitData}
                xField="date"
                yField="pageView"
                seriesField="type"
              />
            </Card>
          </Col>

          <Col span={24}>
            <Card title="Recent Orders" className="shadow-md">
              <Table
                columns={columns}
                dataSource={recentOrders}
                pagination={false}
                size="small"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
};

export default TabletDashboardPage;