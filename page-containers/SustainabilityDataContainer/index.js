
import styles from "./SustainabilityDataContainer.module.scss";
import PieChart from "./PieChart";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import JouleCharts from "./charts/jouleChart";
import EnergyComsuption from "./EnergyComsumption";
import WaterComsuption from "./WaterComsumption";
import ConcreteMixChart from "./ConcreteMix";
import BuildingMaterialChart from "./BuildingMaterials";

const SustainabilityDataContainer = () => {
 
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

      
      <EnergyComsuption />
      <div className="mt-3">
      <WaterComsuption />
      </div>
      <div className="mt-3">
        <ConcreteMixChart />
      </div>
      <div className="mt-5">
        <BuildingMaterialChart />
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
