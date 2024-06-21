import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const Transportemmisionpie = ()=>{

    const data = {
        labels: ['Dec 2023', 'Jan 2024', 'Feb 2024', 'March 2024', 'Apr 2024', 'May 2024'],
        datasets: [
            {
              label: 'Transportation Emission',
              data: [0, 100, 20, 15, 25, 85, 10],
              fill: false,
              backgroundColor: 'rgba(59,75,97,0.4)',
              borderColor: 'rgba(59,75,97,1)',
              borderDash: [5, 5],
              borderWidth: 2,
              // tension: 0.1
            },
            {
              label: 'Construction Emission',
              data: [0, 78, 10, 25, 15, 5, 85],
              fill: false,
              backgroundColor: 'rgba(0,127,255,0.4)',
              borderColor: 'rgba(0,127,255,1)',
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
export default Transportemmisionpie;
