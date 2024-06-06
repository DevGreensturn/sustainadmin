import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

const JouleCharts = ()=>{

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
              label: 'Sales 2023',
              data: [65, 59, 80, 81, 56, 35],
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
            },
            {
              label: 'Sales 2024',
              data: [30, 70, 60, 91, 66, 5],
              fill: false,
              backgroundColor: 'rgba(153,102,255,0.4)',
              borderColor: 'rgba(153,102,255,1)',
            },
            {
                label: 'Sales 2022',
                data: [10, 20, 60, 91, 66, 75],
                fill: false,
                backgroundColor: 'rgba(153,102,255,0.4)',
                borderColor: 'rgba(153,102,255,1)',
              },

              {
                label: 'Sales 2021',
                data: [100, 20, 60, 91, 66, 45],
                fill: false,
                backgroundColor: 'rgba(255, 87,0.1)',
                borderColor: 'rgba(255, 87,1)',
              },
          ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Monthly Sales Data',
          },
        },
      };

    return(
        <>
        <Line data={data} options={options} />
        </>
    )
}
export default JouleCharts;
