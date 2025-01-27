'use client';

import React from 'react';
import { Card, Row, Col, Table, Typography, Progress, Breadcrumb } from 'antd';
import { ArrowUpOutlined, HomeOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

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

  const columns = [
    { title: 'Tracking No.', dataIndex: 'trackingNo', key: 'trackingNo' },
    { title: 'Product Name', dataIndex: 'product', key: 'product' },
    { title: 'Total Order', dataIndex: 'total', key: 'total' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Text
          style={{
            color:
              status === 'Approved' ? '#52C41A' :
              status === 'Pending' ? '#1890FF' : '#FF4D4F',
          }}
        >
          {status}
        </Text>
      ),
    },
    { title: 'Total Amount', dataIndex: 'amount', key: 'amount' },
  ];

  return (
    <MainLayout>
      <div className="p-6">
        <Row gutter={[24, 24]}>
          {/* Rest of the dashboard content */}
          <Col xs={24} sm={12} lg={6}>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <Title level={5}>Total Page Views</Title>
              <div className="flex items-center justify-between">
                <Title level={3}>4,42,236</Title>
                <Text type="success" className="flex items-center">
                  <ArrowUpOutlined /> 59.3%
                </Text>
              </div>
              <Text type="secondary">You made an extra 35,000 this year</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <Title level={5}>Total Users</Title>
              <div className="flex items-center justify-between">
                <Title level={3}>78,250</Title>
                <Text type="success" className="flex items-center">
                  <ArrowUpOutlined /> 70.5%
                </Text>
              </div>
              <Text type="secondary">You made an extra 8,900 this year</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <Title level={5}>Total Orders</Title>
              <div className="flex items-center justify-between">
                <Title level={3}>18,800</Title>
                <Text type="success" className="flex items-center">
                  <ArrowUpOutlined /> 27.4%
                </Text>
              </div>
              <Text type="secondary">You made an extra 1,943 this year</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <Title level={5}>Total Sales</Title>
              <div className="flex items-center justify-between">
                <Title level={3}>$35,078</Title>
                <Text type="success" className="flex items-center">
                  <ArrowUpOutlined /> 27.4%
                </Text>
              </div>
              <Text type="secondary">You made an extra $20,395 this year</Text>
            </Card>
          </Col>

          {/* Visitor Analytics Chart */}
          <Col xs={24} lg={16}>
            <Card title="Unique Visitor" className="shadow-md hover:shadow-lg transition-shadow">
              <Area
                data={visitData}
                xField="date"
                yField="pageView"
                seriesField="type"
              />
            </Card>
          </Col>

          {/* Income Overview */}
          <Col xs={24} lg={8}>
            <Card title="Income Overview" className="shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Text>This Week Statistics</Text>
                <Title level={3}>$7,650</Title>
              </div>
              <Progress percent={75} status="active" />
            </Card>
          </Col>

          {/* Recent Orders Table */}
          <Col span={24}>
            <Card title="Recent Orders" className="shadow-md hover:shadow-lg transition-shadow">
              <Table
                columns={columns}
                dataSource={recentOrders}
                pagination={false}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;