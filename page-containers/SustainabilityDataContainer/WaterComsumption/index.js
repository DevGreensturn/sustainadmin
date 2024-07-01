
import { useState,useEffect } from "react";
import { Pie} from 'react-chartjs-2';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ADMINAPI } from "../../../apiWrapper";
import WaterComsuptionpie from "../charts/waterComsumption";
const WaterComsuption =({project,packageValue,selectedDate})=>{
    const [activeButton, setActiveButton] = useState("button1");
    const [WaterData, setWaterData] = useState({

    });
    const handleButtonClick =(button)=>{
      setActiveButton(button);
    };
  
   console.log(WaterData,"LLLLLL");
    const pieChartData2 = {
      labels: ["Drinking Water", "Non-Drinking Water"],
      datasets: [
        {
          label: "My Dataset",
          data: [WaterData.bottlePercentage, WaterData.totalWaterConsumption],
          backgroundColor: ["#4A3AFF", "#6183FF"],
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

    const fetchWaterPieChart = async () => {
      const payload = {
        packageId: packageValue,
      projectId: project,
      dateRange: selectedDate
      };
      try {
        await ADMINAPI({
          url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/charts/water/pie`,
          method: "POST",
          body: { ...payload },
        })
          .then((data) => {
            if (data.status === true) {
           console.log(data,"waterAPi ");
              toast.success(data?.message);
              setWaterData({
                "bottlePercentage": 11, //data.waterPercentage,//15.291540456380698,
                "totalWaterConsumption": 89,//data.totalBottleConsumption,//0,
              })
    
            } 
          })
          .catch((err) => {
            console.log(err, "errorooo9000");

              toast.error(err?.message);

          });
      } catch (error) {
        
        console.log(error, "errorooo9000");
      }
    };
  
    useEffect(() => {
      fetchWaterPieChart();
    }, []);
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
                <div><img src="/images/water_Consumption.png" alt="" /></div>
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
          
          <Pie data={pieChartData2} options={options}/>
          </div>
        </div>

          
        </div>
        <div className="col-md-6">

        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/water_Consumption.png" alt="" /></div>
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
                </div>

                <div className="row mt-3">
        <div className="col-md-12">
        
        <div className="mt-3">
      {activeButton === 'button1' && (
        <div className="">
         <WaterComsuptionpie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
         <WaterComsuptionpie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
         <WaterComsuptionpie />
        </div>
      )}

      {activeButton === 'button4' && (
        <div className="">
         <WaterComsuptionpie />
        </div>
      )}

      {activeButton === 'button5' && (
        <div className="">
         <WaterComsuptionpie />
        </div>
      )}

      {activeButton === 'button6' && (
        <div className="">
         <WaterComsuptionpie />
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