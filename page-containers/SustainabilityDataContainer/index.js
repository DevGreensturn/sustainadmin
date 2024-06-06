
import styles from "./SustainabilityDataContainer.module.scss";
import PieChart from "./PieChart";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import JouleCharts from "./charts/jouleChart";

const SustainabilityDataContainer = () => {
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
  return (

    <section>
    <div className="p-4">
      <div className="row">
        <div className="col-md-8">
          <div className="my-5">
            <h3>Select Project</h3>
          <select className="form-select" aria-label="Default select example">
            <option selected>Downtown Tower - Building</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="my-5">
            <h3>Select Month</h3>
          <select className="form-select" aria-label="Default select example">
            <option selected>April 2024</option>
            <option value="1">March 2024</option>
            <option value="2">Feb 2024</option>
            <option value="3">Jan 2024</option>
          </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h3>Energy Consumption</h3>
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
          <PieChart data={pieChartData} />
          </div>
        </div>

        </div>
        <div className="col-md-6">

        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="../Images/EnergyComsuption.png" alt="" /></div>
                <div className="mx-2"><h4>Energy Consumption</h4></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                <Tabs
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
            </Tabs>
                </div>

                <div className="col-md-6">
                <Tabs
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
                  </Tabs>
                </div>
              </div>
              
            </div>
            
          </div>

         
           
        </div>

        </div>
      </div>
      </div>
      </section>

    // <div className={styles.sustainWrapper}>
    //   Energy Consumption
    //   <div>
    //     <PieChart data={pieChartData} className={styles.pieChart} />
    //   </div>
    //   <div>Water Consumption</div>
    //   <div>
    //     <PieChart data={pieChartData2} className={styles.pieChart} />
    //   </div>
    //   <div>Concrete Mix</div>
    //   <div>
    //     <PieChart data={pieChartData3} className={styles.pieChart} />
    //   </div>
    //   <div>Building Materials</div>
    //   <div>
    //     <PieChart data={pieChartData4} className={styles.pieChart} />
    //     <PieChart data={pieChartData4} className={styles.pieChart} />
    //   </div>
    //   <div>Waste Management</div>
    //   <div>
    //     <PieChart data={pieChartData5} className={styles.pieChart} />
    //     <PieChart data={pieChartData6} className={styles.pieChart} />
    //   </div>
    //   <div>Fuel Consumption</div>
    // </div>
  );
};

export default SustainabilityDataContainer;
