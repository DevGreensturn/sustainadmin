import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const TranspotationFuelpie = ()=>{

    const data = {
        labels: ['Dec 2023', 'Jan 2024', 'Feb 2024', 'March 2024', 'Apr 2024', 'May 2024'],
        datasets: [
            {
              label: 'Logistics: Fuel to site',
              data: [65, 59, 80, 81, 56, 35],
              fill: false,
              backgroundColor: 'rgba(0,127,255,0.4)',
              borderColor: 'rgba(0,127,255,1)',
              borderDash: [5, 5],
              borderWidth: 2,
              // tension: 0.1
            },
            {
              label: 'Logistics: Building Material to site',
              data: [20, 10, 60, 21, 36, 5],
              fill: false,
              backgroundColor: 'rgba(0,180,154,0.4)',
              borderColor: 'rgba(0,180,154,1)',
              borderDash: [5, 5],
              borderWidth: 2,
              // tension: 0.1
            },
            
            {
                label: 'Logistics: Concrete to site',
                data: [100, 30, 40, 91, 61, 3],
                fill: false,
                backgroundColor: 'rgba(3,72,138,0.4)',
                borderColor: 'rgba(3,72,138,1)',
                borderDash: [5, 5],
                borderWidth: 2,
                // tension: 0.1
              },

              {
                label: 'Logistics: Water to site',
                data: [0, 70, 60, 91, 66, 5],
                fill: false,
                backgroundColor: 'rgba(59,75,97,0.4)',
                borderColor: 'rgba(59,75,97,1)',
                borderDash: [5, 5],
                borderWidth: 2,
                // tension: 0.1
              },

              {
                label: 'Logistics: Waste from site',
                data: [30, 40, 50, 91, 76, 100],
                fill: false,
                backgroundColor: 'rgba(80,0,182,0.4)',
                borderColor: 'rgba(80,0,182,1)',
                borderDash: [5, 5],
                borderWidth: 2,
                // tension: 0.1
              },

              {
                label: 'People Transportation: Workers from and to site',
                data: [40, 70, 60, 31, 96, 5],
                fill: false,
                backgroundColor: 'rgba(238,119,34,0.4)',
                borderColor: 'rgba(238,119,34,1)',
                borderDash: [5, 5],
                borderWidth: 2,
                // tension: 0.1
              },

              {
                label: 'People Transportation: Employee Commuting',
                data: [10, 30, 10, 91, 16, 50],
                fill: false,
                backgroundColor: 'rgba(165,76,255,0.4)',
                borderColor: 'rgba(165,76,255,1)',
                borderDash: [5, 5],
                borderWidth: 2,
                // tension: 0.1
              },

              {
                label: 'People Transportation: Site Vehicles',
                data: [3, 7, 60, 91, 46, 58],
                fill: false,
                backgroundColor: 'rgba(100,149,237,0.4)',
                borderColor: 'rgba(100,149,237,1)',
                borderDash: [5, 5],
                borderWidth: 2,
                
              },

              {
                label: 'People Transportation: Business Travel',
                data: [30, 70, 62, 19, 64, 85],
                fill: false,
                backgroundColor: 'rgba(100,149,237,0.4)',
                borderColor: 'rgba(100,149,237,1)',
                borderDash: [5, 5],
                borderWidth: 2,

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
export default TranspotationFuelpie;
