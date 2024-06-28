import { useState,useEffect } from "react";
import EnergyComsuptionpie from "../charts/energycomsumptionpie";
import { Pie} from 'react-chartjs-2';

// import ChartDataLabels from 'chartjs-plugin-datalabels';
// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ADMINAPI } from "../../../apiWrapper";

const EnergyComsuption =()=>{
    const [activeButton, setActiveButton] = useState("button1");
    const [energyData, setEnergyData] = useState({

    });

    const handleButtonClick =(button)=>{
      setActiveButton(button);
    };
  console.log(energyData,"LLLLLLL");
    const pieChartData = {
      labels: [
        "Utility Provider Energy",
        "Non-Renewable Sources",
        "Renewable Sources",
      ],
      datasets: [
        {
          label: "My Dataset",
          data: [energyData?.providerPercentage, energyData?.nonRenewablePercentage, energyData?.renewablePercentage],
          backgroundColor: ["#00AD3B", "#3DE175", "#60F793"],
        },
      ],
    };
    
    const options = {
      responsive: true,
      plugins: {
        datalabels: {
          formatter: (value, context) => {
            let sum = 0;
            let dataArr = context.chart.data.datasets[0].data;
            dataArr.map(data => {
              sum += data;
            });
            // let percentage = ((value * 100) / sum).toFixed(2) + '%';
            // return percentage + '\n' + value;
          },
          color: '#fff',
          font: {
            weight: 'bold',
          },
        },

        legend: {
          position: 'right', // Position the labels on the right side
          labels: {
            usePointStyle: true,
          },
        },

       

      },
      
    };
  const fetchEnergyPieChart = async () => {
    const payload = {
      packageId: "60d5ec49f7d5ab001c8d5dbf",
      projectId: "60d5ec49f7d5ab001c8d5dc0",
      "dateRange": "2024-06-17T11:50:36.188Z"
    };
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/charts/energy/pie`,
        method: "POST",
        body: { ...payload },
      })
        .then((data) => {
          if (data.status === true) {
         console.log(data,"JKLKLJL");
            toast.success(data?.message);
            setEnergyData({
              "renewablePercentage": data.renewablePercentage,//15.291540456380698,
              "nonRenewablePercentage": data.nonRenewablePercentage,//0,
              "providerPercentage": data.providerPercentage,//84.70845954361931,
              "totalNonRenewableConsumption":data.totalNonRenewableConsumption,// 0,
              "totalProviderEnergyConsumption": data.totalProviderEnergyConsumption,//54.95252388888889,
              "totalRenewableConsumption": data.totalRenewableConsumption,//9.920009722222222
            })
  
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
    fetchEnergyPieChart();
  }, []);
    return(
        <section>
            <div className="row">
        <div className="col-md-12">
          <h3> Energy Consumption</h3>
          <hr />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/EnergyComsuption.png" alt="" /></div>
                <div className="mx-2"><h4>Energy Consumption</h4></div>
              </div>
              
              <div>
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-center" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <Pie data={pieChartData} options={options}/>
          </div>
        </div>
        </div>
        
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/EnergyComsuption.png" alt="" /></div>
                <div className="mx-2"><h4>Energy Consumption</h4></div>
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
         <EnergyComsuptionpie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
         <EnergyComsuptionpie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
         <EnergyComsuptionpie />
        </div>
      )}

      {activeButton === 'button4' && (
        <div className="">
         <EnergyComsuptionpie />
        </div>
      )}

      {activeButton === 'button5' && (
        <div className="">
         <EnergyComsuptionpie />
        </div>
      )}

      {activeButton === 'button6' && (
        <div className="">
         <EnergyComsuptionpie />
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
export default EnergyComsuption;