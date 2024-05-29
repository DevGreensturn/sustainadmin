import React from "react";
import styles from "./SustainabilityDataContainer.module.scss";
import PieChart from "./PieChart";

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
    <div className={styles.sustainWrapper}>
      Energy Consumption
      <div>
        <PieChart data={pieChartData} className={styles.pieChart} />
      </div>
      <div>Water Consumption</div>
      <div>
        <PieChart data={pieChartData2} className={styles.pieChart} />
      </div>
      <div>Concrete Mix</div>
      <div>
        <PieChart data={pieChartData3} className={styles.pieChart} />
      </div>
      <div>Building Materials</div>
      <div>
        <PieChart data={pieChartData4} className={styles.pieChart} />
        <PieChart data={pieChartData4} className={styles.pieChart} />
      </div>
      <div>Waste Management</div>
      <div>
        <PieChart data={pieChartData5} className={styles.pieChart} />
        <PieChart data={pieChartData6} className={styles.pieChart} />
      </div>
      <div>Fuel Consumption</div>
    </div>
  );
};

export default SustainabilityDataContainer;
