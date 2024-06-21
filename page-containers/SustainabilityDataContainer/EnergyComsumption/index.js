import { useState } from "react";
import EnergyComsuptionpie from "../charts/energycomsumptionpie";
import { Pie} from 'react-chartjs-2';

const EnergyComsuption =()=>{
    const [activeButton, setActiveButton] = useState("button1");
    const handleButtonClick =(button)=>{
      setActiveButton(button);
    };
  
    const pieChartData = {
      labels: [
        "Utility Provider Energy",
        "Non-Renewable Sources",
        "Renewable Sources",
      ],
      datasets: [
        {
          label: "My Dataset",
          data: [40, 40, 20],
          backgroundColor: ["#00AD3B", "#3DE175", "#60F793"],
        },
      ],
    };
    
    const options = {
      responsive: true,

      plugins: {
        legend: {
          position: 'right', // Position the labels on the right side
          labels: {
            usePointStyle: true,
          },
        },

        datalabels: {
          formatter: (value, context) => {
            let sum = 0;
            let dataArr = context.chart.data.datasets[0].data;
            dataArr.map(data => {
              sum += data;
            });
            let percentage = ((value * 100) / sum).toFixed(2) + '%';
            return percentage + '\n' + value;
          },
          color: '#000',
          font: {
            weight: 'bold',
          },
        },

      },
      
    };
  

    return(
        <section>
            <div className="row">
        <div className="col-md-12">
          <h3> Energy Consumption</h3>
          <hr />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/EnergyComsuption.png" alt="" /></div>
                <div className="mx-2"><h4>Energy Consumption</h4></div>
              </div>
              
              <div>
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <Pie data={pieChartData} options={options}/>
          </div>
        </div>
        </div>
        
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/EnergyComsuption.png" alt="" /></div>
                <div className="mx-2"><h4>Energy Consumption</h4></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">

            <div style={{backgroundColor:"#F8F8FF"}} className="d-flex justify-content-around p-2"> 
                  <button 
                  type="btn"
                    className={`${activeButton === 'button1' ? 'button active' : 'button'}`} 
                    onClick={() => handleButtonClick('button1')}
                  >
                    Monthly
                </button>
                <button 
                  className={`${activeButton === 'button2' ? 'button active' : 'button'}`}
                  onClick={() => handleButtonClick('button2')}
                >
                  Quarterly
                </button>
                  <button 
                    className={`${activeButton === 'button3' ? 'button active' : 'button'}`} 
                    onClick={() => handleButtonClick('button3')}
                  >
                    Yearly
                  </button>
                  </div>
      
    
                </div>

                <div className="col-md-6">
                  
                <div style={{backgroundColor:"#F8F8FF"}} className="d-flex justify-content-around p-2"> 
                  <button 
                  type="btn"
                    className={`${activeButton === 'button4' ? 'button active' : 'button'}`} 
                    onClick={() => handleButtonClick('button4')}
                  >
                    Joule
                </button>
                <button 
                  className={`${activeButton === 'button5' ? 'button active' : 'button'}`}
                  onClick={() => handleButtonClick('button5')}
                >
                  kWh
                </button>
                  <button 
                    className={`${activeButton === 'button6' ? 'button active' : 'button'}`} 
                    onClick={() => handleButtonClick('button6')}
                  >
                    Wh
                  </button>
                  </div>
                </div>

                <div className="row mt-3">
        <div className="col-md-12">
        
        <div className="mt-3">
      {activeButton === 'button1' && (
        <div className="">
         <EnergyComsuptionpie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
         <EnergyComsuptionpie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
         <EnergyComsuptionpie />
        </div>
      )}

      {activeButton === 'button4' && (
        <div className="">
         <EnergyComsuptionpie />
        </div>
      )}

      {activeButton === 'button5' && (
        <div className="">
         <EnergyComsuptionpie />
        </div>
      )}

      {activeButton === 'button6' && (
        <div className="">
         <EnergyComsuptionpie />
        </div>
      )}

      </div>

      </div>
      </div>
                
                </div>
              </div>
              
            </div>
            
          </div>

         
           
        </div>

      </div>
        </section>
    )
}
export default EnergyComsuption;