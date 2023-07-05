import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Data',
        data: [10, 20, 15, 25, 30],
        backgroundColor: 'rgba(75,192,192,0.4)',
        barPercentage: 1, // Set bar percentage to fill the available space
        categoryPercentage: 1, // Set category percentage to fill the available space
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
        min: 0, // Set minimum value of y-axis
        max: 40, // Set maximum value of y-axis
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    layout: {
      padding: 0, // Remove padding/margin
    },
    maintainAspectRatio: false, // Disable aspect ratio to set custom height
  };

  return <Bar data={data} options={options} height={80} />;
};

export default BarChart;
