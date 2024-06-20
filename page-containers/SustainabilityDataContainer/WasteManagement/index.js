import PieChart from "../PieChart";
import { useState } from "react";

import JouleCharts from "../charts/jouleChart";
import SolidWastepie from "../charts/solidWastePie";
import LiquidWastepie from "../charts/LiquidwasteRemovalpie";
import SolidWatedisposalline from "../charts/Solidwatedisposal";
const WasteManagementChart =()=>{
    const [activeButton, setActiveButton] = useState("button1");
    const handleButtonClick =(button)=>{
      setActiveButton(button);
    };
  
    
    const pieChartData5 = {
      labels: [
        "Incineration(with energy recovery)",
        "Incineration(without energy recovery)",
        "Landfilling",
        "Other Disposal Operations",
      ],
      datasets: [
        {
          label: "My Dataset",
          data: [40, 30, 15, 15],
          backgroundColor: ["#007FFF", "#6495ED", "#03488A", "#3B4B61"],
        },
      ],
    };
    const pieChartData6 = {
      labels: [
        "Preparation for reuse",
        "Recycling",
        "Other Recovery Operations"
      ],
      datasets: [
        {
          label: "My Dataset",
          data: [40, 40, 20],
          backgroundColor: ["#007FFF", "#3B4B61", "#6495ED" ],
        },
      ],
    };

    return(
        <section>
            <div className="row">
        <div className="col-md-12">
          <h3> Waste Management</h3>
          <hr />
        </div>
      </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
              <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/resycled.svg" alt="" /></div>
                <div className="mx-2"><h4>Solid Waste Removed From Site</h4></div>
              </div>
              
              <div>
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <PieChart data={pieChartData5} />
          </div>
        </div> 
              </div>


              <div className="col-md-6">
              <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/resycled.svg" alt="" /></div>
                <div className="mx-2"><h4>Solid Waste Removed From Site </h4></div>
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
          <SolidWastepie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
          <SolidWastepie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
              <SolidWastepie />
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
          </div>
        </div>


      <div className="row mt-3">
        <div className="col-md-6">
        
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/resycled.svg" alt="" /></div>
                <div className="mx-2"><h4>Liquid Waste Removed From Site</h4></div>
              </div>
              
              <div>
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <PieChart data={pieChartData5} />
          </div>
        </div> 

          
        </div>
        <div className="col-md-6">

        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/resycled.svg" alt="" /></div>
                <div className="mx-2"><h4>Liquid Waste Removed From Site</h4></div>
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
          <LiquidWastepie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
        <LiquidWastepie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
        <LiquidWastepie />
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
      <section>
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="row">
          <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/resycled.svg" alt="" /></div>
                <div className="mx-2"><h4>Solid Waste Diverted from Disposal</h4></div>
              </div>
              
              <div>
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <PieChart data={pieChartData5} />
          </div>
        </div>  
        </div>
            
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/water_Consumption.png" alt="" /></div>
                <div className="mx-2"><h4>Solid Waste Diverted from Disposal</h4></div>
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
                    tonnes
                </button>
                <button 
                  className={`${activeButton === 'button5' ? 'button active' : 'button'}`}
                  onClick={() => handleButtonClick('button5')}
                >
                  kg
                </button>
                  <button 
                    className={`${activeButton === 'button6' ? 'button active' : 'button'}`} 
                    onClick={() => handleButtonClick('button6')}
                  >
                    lbs
                  </button>
                  </div>



                
                </div>

                <div className="row mt-3">
        <div className="col-md-12">
        
        <div className="mt-3">
      {activeButton === 'button1' && (
        <div className="">
         <LiquidWastepie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
          <LiquidWastepie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
           <LiquidWastepie />
        </div>
      )}

      {activeButton === 'button4' && (
        <div className="">
          <LiquidWastepie />
        </div>
      )}

      {activeButton === 'button5' && (
        <div className="">
           <LiquidWastepie />
        </div>
      )}

      {activeButton === 'button6' && (
        <div className="">
<LiquidWastepie />
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
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <div className="row">
          <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/wasteDirected.png" alt="" /></div>
                <div className="mx-2"><h4>Solid Waste Directed to Disposal</h4></div>
              </div>
            
              <div className="text-end">
              <span>This Month</span>
              <h5>Sep 2023 to Apr 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <PieChart data={pieChartData6} />
          </div>
        </div>  
        </div>
           
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/water_Consumption.png" alt="" /></div>
                <div className="mx-2"><h4>Solid Waste Diverted from Disposal</h4></div>
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
                    tonnes
                </button>
                <button 
                  className={`${activeButton === 'button5' ? 'button active' : 'button'}`}
                  onClick={() => handleButtonClick('button5')}
                >
                  kg
                </button>
                  <button 
                    className={`${activeButton === 'button6' ? 'button active' : 'button'}`} 
                    onClick={() => handleButtonClick('button6')}
                  >
                    lbs
                  </button>
                  </div>
                </div>

                <div className="row mt-3">
        <div className="col-md-12">
        
        <div className="mt-3">
      {activeButton === 'button1' && (
        <div className="">
         <SolidWatedisposalline />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
         <SolidWatedisposalline />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
         <SolidWatedisposalline />
        </div>
      )}

      {activeButton === 'button4' && (
        <div className="">
         <SolidWatedisposalline />
        </div>
      )}

      {activeButton === 'button5' && (
        <div className="">
          <SolidWatedisposalline />
        </div>
      )}

      {activeButton === 'button6' && (
        <div className="">
         <SolidWatedisposalline />
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
        </div>
      </div>

        </section>
      </div>
        </section>
    )
}
export default WasteManagementChart;



