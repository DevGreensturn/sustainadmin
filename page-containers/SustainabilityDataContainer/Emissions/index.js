import { Pie} from 'react-chartjs-2';

import { useState } from "react";
import JouleCharts from "../charts/jouleChart";
import EmisionsCharts from "../charts/EmisionsCharts";
import ConstructionEmmisionpie from "../charts/constuctionEmmision";
import ConstructionEmissionpie from "../charts/constuctionEmmision";
import Transportemmisionpie from "../charts/TransportEmission";

const EmissionManagementChart =()=>{
    const [activeButton, setActiveButton] = useState("button1");
    const handleButtonClick =(button)=>{
      setActiveButton(button);
    };
  
   
    const pieChartDataConstruction = {
      labels: [
        "Energy Consumption- Utility Provider Energy",
        "Energy Consumption-Non renewable Sources",
        "Energy Consumption-Renewable Sources",
        "Sold Energy",
        "Water Consumption",
        "Concrete Mix",
        "Building Material",
        "Waste"
      ],
      datasets: [
        {
          label: "My Dataset",
          data: [25, 10, 15, 10, 5, 5, 15, 15],
          backgroundColor: ["#007FFF", "#00B69B", "#03488A", "#3B4B61", "#5000B6", "#EE7722", "#A54CFF", "#6495ED"],
        },
      ],
    };
    const pieChartData6 = {
      labels: [
        "Transportation Emission",
        "Construction Emission",
      ],
      datasets: [
        {
          label: "My Dataset",
          data: [40, 60],
          backgroundColor: ["#007FFF", "#3B4B61" ],
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
      },
    };


    return(
        <section>
            <div className="row">
        <div className="col-md-12">
          <h3>Emissions</h3>
          <hr />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/ConstructionImg.svg" alt="" /></div>
                <div className="mx-2"><h4>Construction Emission </h4></div>
              </div>
              
              <div className="text-end">
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <Pie data={pieChartDataConstruction} options={options}/>
          </div>
        </div>  
        </div>
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/ConstructionImg.svg" alt="" /></div>
                <div className="mx-2"><h4>Construction Emission</h4></div>
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

                

                <div className="row mt-3">
        <div className="col-md-12">
        
        <div className="mt-3">
      {activeButton === 'button1' && (
        <div className="">
                <ConstructionEmissionpie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
                <ConstructionEmissionpie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
                <ConstructionEmissionpie />
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

      <div className="row mt-3">
      <div className="col-md-6">
      <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/TranspotaionImssion.svg" alt="" /></div>
                <div className="mx-2"><h4>Transportation Emission</h4></div>
              </div>
            
              <div className="text-end">
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <Pie data={pieChartData6} options={options}/>
          </div>
        </div> 
      </div>

        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/Emission.svg" alt="" /></div>
                <div className="mx-2"><h4>Transportation Emission</h4></div>
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

                

                <div className="row mt-3">
        <div className="col-md-12">
        
        <div className="mt-3">
      {activeButton === 'button1' && (
        <div className="">
         <Transportemmisionpie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
         <Transportemmisionpie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
         <Transportemmisionpie />
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


      <div className="row mt-3">
      <div className="col-md-6">
      <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/Emission.svg" alt="" /></div>
                <div className="mx-2"><h4>Emission</h4></div>
              </div>
            
              <div className="text-end">
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <Pie data={pieChartData6} options={options}/>
          </div>
        </div> 
      </div>

        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/Emission.svg" alt="" /></div>
                <div className="mx-2"><h4>Emission</h4></div>
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

                

                <div className="row mt-3">
        <div className="col-md-12">
        
        <div className="mt-3">
      {activeButton === 'button1' && (
        <div className="">
         <EmisionsCharts />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
           <EmisionsCharts />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
           <EmisionsCharts />
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

export default EmissionManagementChart;