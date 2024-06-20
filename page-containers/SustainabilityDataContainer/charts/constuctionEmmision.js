import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const ConstructionEmissionpie = ()=>{

    const data = {
        labels: ['Dec 2023', 'Jan 2024', 'Feb 2024', 'March 2024', 'Apr 2024', 'May 2024'],
        datasets: [
            {
              label: 'Abu Dhabi',
              data: [65, 59, 80, 81, 56, 35],
              fill: false,
              backgroundColor: 'rgba(96,26,54,0.4)',
              borderColor: 'rgba(96,26,54,1)',
              borderDash: [5, 5],
              // tension: 0.1
            },
            {
              label: 'Dubai',
              data: [30, 70, 60, 91, 66, 5],
              fill: false,
              backgroundColor: 'rgba(165,76,255,0.4)',
              borderColor: 'rgba(165,76,255,1)',
              borderDash: [5, 5],
              // tension: 0.1
            },
            {
                label: 'Arab Emirate',
                data: [8, 18, 20, 30, 45, 51],
                fill: false,
                backgroundColor: 'rgba(163, 44, 196,0.4)',
                borderColor: 'rgb(163, 44, 196,1)',
                borderDash: [5, 5],
                // tension: 0.1
              },
              {
                label: 'GCC',
                data: [9, 20, 23, 36, 35, 85],
                fill: false,
                backgroundColor: 'rgba(124, 30, 218,0.4)',
                borderColor: 'rgb(124, 30, 218,1)',
                borderDash: [5, 5],
                // tension: 0.1
              },
              {
                label: 'Internationality',
                data: [5, 15, 60, 19, 46, 57],
                fill: false,
                backgroundColor: 'rgba(189, 147, 211,0.4)',
                borderColor: 'rgb(189, 147, 211,1)',
                borderDash: [5, 5],
                // tension: 0.1
              },
              {
                label: 'Sourced Internally',
                data: [1, 2, 6, 9, 6, 57],
                fill: false,
                backgroundColor: 'rgba(122, 74, 136,0.4)',
                borderColor: 'rgb(189, 147, 211,1)',
                borderDash: [5, 5],
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
            grid:{
              display: false
            },
          },
          y: {
            grid:{
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
export default ConstructionEmissionpie;
