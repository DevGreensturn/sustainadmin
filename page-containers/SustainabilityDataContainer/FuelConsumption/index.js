import PieChart from "../PieChart";
import { useState } from "react";
import JouleCharts from "../charts/jouleChart";

const FuelComsumptionChart =()=>{
    const [activeButton, setActiveButton] = useState(null);
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
          <h3>Fuel Consumption</h3>
          <hr />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="../Images/transPotation.svg" alt="" /></div>
                <div className="mx-2"><h4>Transportation Fuel</h4></div>
              </div>
              
              <div className="text-end">
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
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="../Images/FuelComsumption.svg" alt="" /></div>
                <div className="mx-2"><h4>Fuel Consumption</h4></div>
              </div>
            
              <div className="text-end">
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <PieChart data={pieChartData6} />
          </div>
        </div>  
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="../Images/nonRenowable.png" alt="" /></div>
                <div className="mx-2"><h4>Monthly Fuel Consumption</h4></div>
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

      </div>

      </div>
      </div>
                
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
        </section>
    )
}

export default FuelComsumptionChart;