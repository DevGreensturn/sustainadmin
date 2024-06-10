import PieChart from "../PieChart";
import { useState } from "react";
import JouleCharts from "../charts/jouleChart";

const BuildingMaterialChart =()=>{
    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick =(button)=>{
      setActiveButton(button);
    };
  
    
    const pieChartData4 = {
      labels: [
        "Abu Dhabi",
        "Dubai",
        "Other Emirate",
        "GCC",
        "Internationally",
        "Sourced Internally",
      ],
      datasets: [
        {
          label: "My Dataset",
          data: [40, 20, 5, 20, 5, 10],
          backgroundColor: [
            "#601A36",
            "#A54CFF",
            "#A32CC4",
            "#7C1EDA",
            "#BD93D3",
            "#7A4A88",
          ],
        },
      ],
    };
   
    
    return(
        <section>
            <div className="row">
        <div className="col-md-12">
          <h3>Building Materials</h3>
          <hr />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="../Images/BuildingMaterials.png" alt="" /></div>
                <div className="mx-2"><h4>Material Purchased</h4></div>
              </div>
              
              <div>
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <PieChart data={pieChartData4} />
          </div>
        </div>  
        </div>
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="../Images/BuildingMaterials.png" alt="" /></div>
                <div className="mx-2"><h4>Material Purchased</h4></div>
              </div>
            
              <div>
              <span>This Month</span>
              <h5>Sep 2023 to Apr 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <PieChart data={pieChartData4} />
          </div>
        </div>  
        </div>
      </div>
        </section>
    )
}

export default BuildingMaterialChart;