import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const EmissionsCharts = ()=>{

    const data = {
        labels: ['Dec 2023', 'Jan 2024', 'Feb 2024', 'March 2024', 'Apr 2024', 'May 2024'],
        datasets: [
            {
              label: 'Construction Emission',
              data: [0, 30, 20, 15, 25, 5, 10],
              fill: false,
              backgroundColor: 'rgba(0,173,59,0.4)',
              borderColor: 'rgba(0,173,59,1)',
              // tension: 0.1
            },
            {
              label: 'Transportation Emission',
              data: [0, 17, 10, 25, 15, 5, 35],
              fill: false,
              backgroundColor: 'rgba(255,113,139,0.4)',
              borderColor: 'rgba(255,113,139,1)',
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
            display: false
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
export default EmissionsCharts;


const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Line Chart with Advanced Animations',
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutBounce',
      onProgress: function(animation) {
        console.log('Animation progress: ', animation.currentStep / animation.numSteps);
      },
      onComplete: function(animation) {
        console.log('Animation complete');
      },
    },
  };
