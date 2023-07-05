// import React, { useEffect, useRef } from 'react';
// import { Chart } from 'chart.js/auto'; // Import the auto package

// const LineChart = (props) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chartConfig = {
//       type: 'line',
//       data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//         datasets: [
//           {
//             label: 'Dataset',
//             data: [65, 59, 80, 81, 56, 55],
//             backgroundColor: 'rgba(0, 173, 121, 0.2)',
//             borderColor: 'rgba(0, 173, 121, 1)',
//             borderWidth: 1,
//             pointRadius: 0,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//           x: {
//             display: false,
//           },
//           y: {
//             display: false,
//           },
//         },
//       },
//     };

//     const chartInstance = new Chart(chartRef.current, chartConfig);

//     return () => {
//       chartInstance.destroy();
//     };
//   }, []);

//   return <canvas ref={chartRef} />;
// };

// export default LineChart;
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto'; // Import the auto package

const LineChart = (props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartConfig = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Dataset',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: props.backgroundColor || 'rgba(0, 173, 121, 0.2)',
            borderColor: props.borderColor || 'rgba(0, 173, 121, 1)',
            borderWidth: 1,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
    };

    const chartInstance = new Chart(chartRef.current, chartConfig);

    return () => {
      chartInstance.destroy();
    };
  }, [props.backgroundColor, props.borderColor]); // Include props.backgroundColor and props.borderColor in the dependency array

  return <canvas ref={chartRef} />;
};

export default LineChart;

