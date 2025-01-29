import React from 'react';
import { DualAxes } from '@ant-design/plots';

const DualAxisBarChart = () => {
  // Sample data for the dual-axis chart
  const data1 = [
    { date: 'Mon', value: 30 },
    { date: 'Tue', value: 40 },
    { date: 'Wed', value: 35 },
    { date: 'Thu', value: 50 },
    { date: 'Fri', value: 49 },
    { date: 'Sat', value: 60 },
    { date: 'Sun', value: 70 },
  ];

  const data2 = [
    { date: 'Mon', count: 200 },
    { date: 'Tue', count: 300 },
    { date: 'Wed', count: 250 },
    { date: 'Thu', count: 400 },
    { date: 'Fri', count: 390 },
    { date: 'Sat', count: 480 },
    { date: 'Sun', count: 520 },
  ];

  const dualAxesConfig = {
    data: [data1, data2],
    xField: 'date',
    yField: ['value', 'count'],
    height: 400,
    padding: [20, 20, 50, 50],
    geometryOptions: [
      {
        geometry: 'column',
        color: '#0173CE',
        label: {
          position: 'middle',
          style: {
            fill: '#FFFFFF',
          },
        },
      },
      {
        geometry: 'line',
        color: '#52C41A',
        lineStyle: {
          lineWidth: 2,
        },
        point: {
          size: 5,
          shape: 'circle',
          style: {
            fill: '#52C41A',
            stroke: '#fff',
            lineWidth: 2,
          },
        },
      },
    ],
    xAxis: {
      label: {
        autoRotate: true,
      },
    },
    yAxis: [
      {
        title: {
          text: 'Value',
        },
      },
      {
        title: {
          text: 'Count',
        },
      },
    ],
    legend: {
      position: 'top',
      itemName: {
        style: {
          fill: '#666',
        },
      },
    },
    tooltip: {
      shared: true,
      showMarkers: false,
    },
    interactions: [
      {
        type: 'element-highlight',
      },
      {
        type: 'active-region',
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <DualAxes {...dualAxesConfig} />
    </div>
  );
};

export default DualAxisBarChart;