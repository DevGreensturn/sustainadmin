
import styles from "./SustainabilityDataContainer.module.scss";
import PieChart from "./PieChart";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState ,useEffect} from "react";
import JouleCharts from "./charts/jouleChart";
import EnergyComsuption from "./EnergyComsumption";
import WaterComsuption from "./WaterComsumption";
import ConcreteMixChart from "./ConcreteMix";
import BuildingMaterialChart from "./BuildingMaterials";
import WasteManagementChart from "./WasteManagement";
import FuelComsumptionChart from "./FuelConsumption";
import EmissionManagementChart from "./Emissions";
import { ADMINAPI } from "../../apiWrapper/";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SustainabilityDataContainer = () => {
  const [project, setProject] = useState("");
  const [projectList, setProjectList] = useState([]);
  const [packageValue, setPackage] = useState("");
  const [packageList, setpackageList] = useState([]);
  const [selectedDate,setSelectedDate] = useState("")
  const handleChangeProjectName = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setProject(selectedValue);
  };

  const handleChangePackage = (e) =>{
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setPackage(selectedValue);
  } 

  const handleChangeDate = (date) =>{
    const dateNew = new Date(date);
    const timeZoneOffset = dateNew.getTimezoneOffset();
    const adjustedDate = new Date(date.getTime() - (timeZoneOffset * 60000));
    const isoDateString = adjustedDate.toISOString();
    console.log("selected date", isoDateString)
    setSelectedDate(isoDateString)
  }

  const fetchProject = async () => {
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/projects?id=3&page=1`,
        method: "GET",
      }).then((data) => {
        let userData = data.response;
        setProjectList(userData);
        console.log(userData, "oooooooPPPP");
      });
    } catch (error) {
      console.log(error, "errorooo");
    }
  };

  const fetchPackageList = async () => {
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/packages`,
        method: "GET",
      }).then((data) => {
        let userData = data.response;
        setpackageList(userData);
        console.log(userData, "ooooooo");
      });
    } catch (error) {
      console.log(error, "errorooo");
    }
  };

  useEffect(() => {
    fetchProject();
    fetchPackageList();
  }, []);

  return (

    <section>
    <div className="p-4">

      <div className="row">
      <div className="col-md-4">
      <div className="my-5">
                <h3>Select Project</h3>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => handleChangeProjectName(e)}
                  name="category"
                  id="category"
                  value={project} // Bind the state variable to the value prop
                >
                  <option value="">Project </option>
                  {projectList?.map((category, indexCat) => (
                    <option key={indexCat} value={category?._id}>
                      {category?.projectName}
                    </option>
                  ))}
                </select>
                </div>
              </div>
              <div className="col-md-4">
              <div className="my-5">
                <h3>Select Package</h3>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => handleChangePackage(e)}
                  name="package"
                  id="package"
                  value={packageValue} // Bind the state variable to the value prop
                >
                  <option value=""> Package</option>
                  {packageList?.map((category, indexCat) => (
                    <option key={indexCat} value={category?._id}>
                      {category?.name}
                    </option>
                  ))}
                </select>
                </div>
              </div>
            
        <div className="col-md-4">
          <div className="my-5">
            <h3>Select Month</h3>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => handleChangeDate(date)}
              dateFormat="MM/yyyy"
              className="form-select"
              showMonthYearPicker
              showFullMonthYearPicker
              showFourColumnMonthYearPicker
            />
          </div>
        </div>
      </div>

      
      <EnergyComsuption />
      <div className="mt-3">
      <WaterComsuption />
      </div>
      <div className="mt-3">
        <ConcreteMixChart project={project} packageValue={packageValue} selectedDate={selectedDate} />
      </div>
      <div className="mt-5">
        <BuildingMaterialChart  project={project} packageValue={packageValue}/>
      </div>
      <div className="mt-5">
      <WasteManagementChart project={project} packageValue={packageValue} selectedDate={selectedDate} />
      </div>
      <div className="mt-5">
      <FuelComsumptionChart project={project} packageValue={packageValue} selectedDate={selectedDate} />
      </div>
      <div className="mt-5">
      <EmissionManagementChart />
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
