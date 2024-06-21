import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const LiquidWastepie = ()=>{

    const data = {
        labels: ['Dec 2023', 'Jan 2024', 'Feb 2024', 'March 2024', 'Apr 2024', 'May 2024'],
        datasets: [
            {
              label: 'Liquid Waste Removed From Site',
              data: [65, 59, 80, 81, 56, 35],
              fill: false,
              backgroundColor: 'rgba(0,127,255,0.4)',
              borderColor: 'rgba(0,127,255,1)',
              borderDash: [5, 5],
              borderWidth: 2,
              // tension: 0.1
            },
            {
              label: 'Liquid Waste Diverted From Disposal',
              data: [20, 10, 60, 21, 36, 5],
              fill: false,
              backgroundColor: 'rgba(100,149,237,0.4)',
              borderColor: 'rgba(100,149,237,1)',
              borderDash: [5, 5],
              borderWidth: 2,
              // tension: 0.1
            },
            
            {
                label: 'Liquid Waste Directed To Disposal',
                data: [100, 30, 40, 91, 61, 3],
                fill: false,
                backgroundColor: 'rgba(3,72,138,0.4)',
                borderColor: 'rgba(3,72,138,1)',
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
export default LiquidWastepie;
