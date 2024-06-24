import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const EnergyComsuptionpie = ()=>{

    const data = {
        labels: ['Dec 2023', 'Jan 2024', 'Feb 2024', 'March 2024', 'Apr 2024', 'May 2024'],
        datasets: [
            {
              label: 'Utility Provider Energy',
              data: [65, 59, 80, 81, 56, 35],
              fill: false,
              backgroundColor: 'rgba(0,173,59,0.4)',
              borderColor: 'rgba(0,173,59,1)',
              borderDash: [5, 5],
              borderWidth: 2,
            },
            {
              label: 'Non Renewable Sources',
              data: [30, 70, 60, 91, 66, 5],
              fill: false,
              backgroundColor: 'rgba(61,225,117,0.4)',
              borderColor: 'rgba(61,225,117,1)',
              borderDash: [5, 5],
              borderWidth: 2,
              // tension: 0.1
            },
            {
                label: 'Renewable Sources',
                data: [10, 20, 60, 91, 66, 75],
                fill: false,
                backgroundColor: 'rgba(96, 247, 147,0.4)',
                borderColor: 'rgb(96, 247, 147,1)',
                borderDash: [5, 5],
                borderWidth: 2,
                // tension: 0.1
              },
          ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: false,
            text: 'Monthly Sales Data',
          },
          
        },
        scales: {
          x: {
            border:{dash: [10, 10]},
            grid:{
              tickBorderDash: [4, 4],
              display: false
            },
          },
          y: {
            border:{dash: [4, 4]},
            grid:{
            tickBorderDash: [4, 4],
            display: true
            }
          }
      }
      };
   
    return(
        <>
        <Line data={data} options={options} />
        </>
    )
}
export default EnergyComsuptionpie;
