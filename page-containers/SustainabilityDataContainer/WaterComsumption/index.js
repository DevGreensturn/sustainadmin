import PieChart from "../PieChart";
import { useState } from "react";

import JouleCharts from "../charts/jouleChart";
const WaterComsuption =()=>{
    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick =(button)=>{
      setActiveButton(button);
    };
  
   
    const pieChartData2 = {
      labels: ["Drinking Water", "Non-Drinking Water"],
      datasets: [
        {
          label: "My Dataset",
          data: [40, 60],
          backgroundColor: ["#4A3AFF", "#6183FF"],
        },
      ],
    };
   
    return(
        <section>
            <div className="row">
        <div className="col-md-12">
          <h3> Water Consumption</h3>
          <hr />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="../Images/water_Consumption.png" alt="" /></div>
                <div className="mx-2"><h4>Water Consumption</h4></div>
              </div>
              
              <div>
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          
          <PieChart data={pieChartData2} />
          </div>
        </div>

          
        </div>
        <div className="col-md-6">

        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="../Images/water_Consumption.png" alt="" /></div>
                <div className="mx-2"><h4>Water Consumption</h4></div>
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
      
      


      
      

                {/* <Tabs
                  defaultActiveKey="Monthly"
                  id="noanim-tab-example"
                  className="tabBox"
                  >
              <Tab eventKey="Monthly" title="Monthly">
                <h6>Monthly</h6>
              </Tab>

              <Tab eventKey="Quarterly" title="Quarterly" >
                <h6>Quarterly</h6>
              </Tab>

              <Tab eventKey="Yearly" title="Yearly">
                <h6>Yearly</h6>
              </Tab>
            </Tabs> */}
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



                {/* <Tabs
                  defaultActiveKey="Joule"
                  id="noanim-tab-example"
                  className="tabBox"
                  >
                     
                    <Tab eventKey="Joule" title="Joule" className="mt-5">
                    <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
                     <JouleCharts />
                     </div>
                    </Tab>
                    

                    <Tab eventKey="kWh" title="kWh" >
                      <h6>kWh</h6>
                    </Tab>

                    <Tab eventKey="Wh" title="Wh">
                      <h6>Wh</h6>
                    </Tab>
                  </Tabs> */}
                </div>

                <div className="row mt-3">
        <div className="col-md-12">
        
        <div className="mt-3">
      {activeButton === 'button1' && (
        <div className="">
         <JouleCharts />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
           <JouleCharts />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
           <JouleCharts />
        </div>
      )}

      {activeButton === 'button4' && (
        <div className="">
           <JouleCharts />
        </div>
      )}

      {activeButton === 'button5' && (
        <div className="">
           <JouleCharts />
        </div>
      )}

      {activeButton === 'button6' && (
        <div className="">
           <JouleCharts />
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
export default WaterComsuption;