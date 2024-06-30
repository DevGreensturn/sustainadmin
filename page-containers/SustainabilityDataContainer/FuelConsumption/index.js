import { Pie} from 'react-chartjs-2';

import { useEffect, useState } from "react";
import TranspotationFuelpie from "../charts/transpotationFuel";
import FuelComsumptionpie from "../charts/fuelcomsuptionpie";
import { ADMINAPI } from '../../../apiWrapper';
import { toast } from 'react-toastify';

const FuelComsumptionChart =({project,packageValue,selectedDate})=>{
    const [activeButton, setActiveButton] = useState("button1");
    const [transportationLabels, setTransportationLabels] = useState([])
    const [transportationData, setTransportationData] = useState([])
    const [fuelLabels, setFuelLabels] = useState([])
    const [fuelData, setFuleData] = useState([])
    const handleButtonClick =(button)=>{
      setActiveButton(button);
    };
  
    
    const pieChartData5 = {
      // labels: [
      //   "Logistics: Fuel to site",
      //   "Logistics: Building Material to site",
      //   "Logistics: Concrete to site",
      //   "Logistics: Water to site",
      //   "Logistics: Waste from site",
      //   "People Transportation: Workers from and to site",
      //   "People Transportation: Employee Commuting",
      //   "People Transportation: Site Vehicles",
      //   "People Transportation: Business Travel"
      // ],
      labels:transportationLabels,
      datasets: [
        {
          label: "My Dataset",
          data: transportationData,
          backgroundColor: ["#007FFF", "#00B69B", "#03488A", "#3B4B61", "#5000B6", "#EE7722", "#A54CFF", "#6495ED", "#9D9D9D"],
        },
      ],
    };

    const pieChartData6 = {
      // labels: [
      //   "Transportation Fuel",
      //   "Equipment",
      //   "Generator"
      // ],

      labels:fuelLabels,
      datasets: [
        {
          label: "My Dataset",
          data: fuelData,
          backgroundColor: ["#007FFF", "#3B4B61", "#6495ED" ],
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

    const fetchTransportationPieChart = async () => {
      const payload = {
        packageId: packageValue,
        projectId: project,
        dateRange: selectedDate
      };
      console.log("payload",payload)
      try {
        await ADMINAPI({
          url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/charts/transportation/pie`,
          method: "POST",
          body: { ...payload },
        })
          .then((data) => {
            if (data.status === true) {
           console.log(data,"ttttt");
              toast.success(data?.message);
              let labels1=[]
              let data1=[]
              data.result.forEach(ele => {
                labels1.push(ele.model)
                data1.push(ele.percentage)
              });
              setTransportationLabels(labels1)
              setTransportationData(data1)
            } 
          })
          .catch((err) => {
              toast.error(err?.message);
          });
      } catch (error) {
        
        console.log(error, "errorooo");
      }
    };

    const fetchFuelPieChart = async () => {
      const payload = {
        packageId: packageValue,
        projectId: project,
        dateRange: selectedDate
      };
      console.log("payload",payload)
      try {
        await ADMINAPI({
          url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/charts/fuel-consumption/pie`,
          method: "POST",
          body: { ...payload },
        })
          .then((data) => {
            if (data.status === true) {
           console.log(data,"ttttt");
              toast.success(data?.message);
              let labels1=[]
              let data1=[]
              data.result.forEach(ele => {
                labels1.push(ele.equipment)
                data1.push(ele.percentage)
              });
              setFuelLabels(labels1)
              setFuleData(data1)
            } 
          })
          .catch((err) => {
              toast.error(err?.message);
          });
      } catch (error) {
        
        console.log(error, "errorooo");
      }
    };

    useEffect(() => {
      fetchTransportationPieChart();
      fetchFuelPieChart();
    }, [project,packageValue,selectedDate]);


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
                <div><img src="/images/transPotation.svg" alt="" /></div>
                <div className="mx-2"><h4>Transportation Fuel </h4></div>
              </div>
              
              <div className="text-end">
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"450px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <Pie data={pieChartData5} options={options}/>
          </div>
        </div>  
        </div>

        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/transPotation.svg" alt="" /></div>
                <div className="mx-2"><h4>Transportation Fuel</h4></div>
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
         <TranspotationFuelpie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
         <TranspotationFuelpie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
         <TranspotationFuelpie />
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
                <div><img src="/images/FuelComsumption.svg" alt="" /></div>
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
          <Pie data={pieChartData6} options={options}/>
          </div>
        </div>  
      </div>
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/nonRenowable.png" alt="" /></div>
                <div className="mx-2"><h4>Fuel Consumption</h4></div>
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
          <FuelComsumptionpie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
          <FuelComsumptionpie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
          <h6 style={{color:"#000"}}>satya</h6>
          <FuelComsumptionpie />
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

export default FuelComsumptionChart;