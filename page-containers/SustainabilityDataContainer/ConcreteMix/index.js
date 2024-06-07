import PieChart from "../PieChart";
import { useState } from "react";
import JouleCharts from "../charts/jouleChart";

const ConcreteMixChart =()=>{
    const [activeButton, setActiveButton] = useState(null);
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
          data: [20, 40, 40],
          backgroundColor: ["#3DE175", "#60F793", "#00AD3B"],
        },
      ],
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
    const pieChartData3 = {
      labels: ["Precast", "Cast-in-situ"],
      datasets: [
        {
          label: "My Dataset",
          data: [40, 60],
          backgroundColor: ["#EE7722", "#FB9A54"],
        },
      ],
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
          <h3>Concrete Mix</h3>
          <hr />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="../Images/EnergyComsuption.png" alt="" /></div>
                <div className="mx-2"><h4>Concrete Mix</h4></div>
              </div>
              
              <div>
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <PieChart data={pieChartData3} />
          </div>
        </div>  
        </div>
        
      </div>
        </section>
    )
}

export default ConcreteMixChart;