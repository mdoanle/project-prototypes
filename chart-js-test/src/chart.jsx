import React from 'react';
import { Line } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';

const LineChart = () => {
  const lineChartData = {
    labels: ['10/13', '10/14', '10/15', '10/16', '10/17', '10/18', '10/19', '10/20', '10/21', '10/22', '10/23', '10/24', '10/25', '10/26', '10/27', '10/28', '10/29', '10/30', '10/31'],
    datasets: [
      {
        data: [195.6,
          195.6,
          194.4,
          195.8,
          197.8,
          194.6,
          192.6,
          192.0,
          194.0,
          193.3,
          190.4,
          193.0,
          192.4,
          192.2,
          192.2,
          191.2,
          191.6,
          190.0,
          196.5],
        label: 'Weight (lbs)',
        borderColor: '#3333ff',
        fill: false,
        lineTension: 0.5,
        pointRadius: 7,
        pointBackgroundColor: '#000000'
      }
    ]
  };

  return (
    <Line
      type="line"
      width={160}
      height={60}
      options={{
        title: {
          display: true,
          text: 'COVID-19 Cases of Last 6 Months',
          fontSize: 20
        },
        legend: {
          display: true, // Is the legend shown?
          position: 'bottom' // Position of the legend.
        }
      }}
      data={lineChartData}
    />
  );
};

export default LineChart;
