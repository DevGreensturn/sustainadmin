
import { useEffect, useState } from "react";
import { Pie} from 'react-chartjs-2';
import SolidWastepie from "../charts/solidWastePie";
import LiquidWastepie from "../charts/LiquidwasteRemovalpie";
import SolidWatedisposalline from "../charts/Solidwatedisposal";
import { ADMINAPI } from "../../../apiWrapper";

const WasteManagementChart =({project,packageValue,selectedDate})=>{
    const [activeButton, setActiveButton] = useState("button1");
    const [totalWasteData,setTotalWasteData] = useState([])
    const [wasteDirectedData,setWasteDirectedData]=useState([])
    const[labelData,setLabelData]=useState([])
    const[wasteDivirtedData,setWasteDivirtedData]=useState([])
    const[labelData1,setLabelData1]=useState([])

   
    const handleButtonClick =(button)=>{
      setActiveButton(button);
    };
  
    console.log("pragya>>>>>>>>>>>>>>>>>>>>>",project,packageValue,selectedDate)
    const pieChartData5 = {
      labels: [
        "Liquid Waste Removed From Site",
        "Liquid Waste Diverted From Disposal",
        "Liquid Waste Directed To Disposal",
      ],
      datasets: [
        {
          label: "My Dataset",
          data: [40, 60,],
          backgroundColor: ["#007FFF", "#6495ED"],
        },
      ],
    };
    const pieChartData6 = {
      labels: [
        "Waste diverted from disposal",
        "Waste directed to disposal"
      ],
      datasets: [
        {
          label: "My Dataset",
          data: totalWasteData,
          backgroundColor: ["#007FFF", "#3B4B61"],
        },
      ],
    };

    const pieChartData7 = {
      labels: labelData1,
        
      datasets: [
        {
          label: "My Dataset",
          data: wasteDivirtedData,
          backgroundColor: ["#007FFF", "#3B4B61", "#6495ED" ],
        },
      ],
    };

    const pieChartData8 = {
      labels: 
            labelData,
      
      datasets: [
        {
          label: "My Dataset",
          data: wasteDirectedData,
          backgroundColor: ["#007FFF", "#3B4B61", "#6495ED","#03488A"],
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'right', 
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    const fetchWasteData = async () => {
      try {
        
        const payload = {
          packageId: packageValue,
        projectId: project,
        dateRange: selectedDate
        };
        const response = await ADMINAPI({
          url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/charts/total-waste/pie`, // Adjust URL as per your backend endpoint
          method: "POST",
          body: payload,
        });
        console.log("response",response)
        if (response) {
          let data=[response.divertedPercentage,response.directedPercentage]
          setTotalWasteData(data)
        } else {
          console.error("Failed to fetch waste management data:", response.message);
        }
        
      } catch (error) {
        console.error("Error fetching waste management data:", error);
      }
    };

    useEffect(() => {

      console.log("pragya>>>>>>>>>>>>>>>>>>>>>")
      fetchWasteData();
      fetchWasteDirectedData();
      fetchWasteDivertedData()

    }, [project,packageValue,selectedDate]);

    const fetchWasteDivertedData=async()=>{
      const payload={
        packageId: packageValue,
        projectId: project,
        dateRange: selectedDate
      };
      console.log("payload",payload)
      try {
        const response= await ADMINAPI({
       url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/charts/diverted/pie`,
       method: "POST",
       body: { ...payload },
     })
     console.log("response",response);
     if (response) {
       let labels2=[]
       let data2=[]
       response.result.forEach(ele => {
         labels2.push(ele.divertedOperationType)
         data2.push(ele.percentage)
       });
       setLabelData1(labels2)
    
       setWasteDivirtedData(data2)
     } else {
       console.error("Failed to fetch waste management data:", response.message);
     }
     
   } catch (error) {
     console.error("Error fetching waste management data:", error);
   }

    }




    const fetchWasteDirectedData=async()=>{
      const payload={
        packageId: packageValue,
        projectId: project,
        dateRange: selectedDate
      };
      console.log("payload",payload)
        
      try {
           const response= await ADMINAPI({
          url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/charts/directed-disposal/pie`,
          method: "POST",
          body: { ...payload },
        })
        console.log("response",response);
        if (response) {
          let labels1=[]
          let data1=[]
          response.result.forEach(ele => {
            labels1.push(ele.directedOperationType)
            data1.push(ele.percentage)
          });
          setLabelData(labels1)
       
          setWasteDirectedData(data1)
        } else {
          console.error("Failed to fetch waste management data:", response.message);
        }
        
      } catch (error) {
        console.error("Error fetching waste management data:", error);
      }

    }
    return(
        <section>
            <div className="row">
        <div className="col-md-12">
          <h3> Waste Management</h3>
          <hr />
        </div>
      </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
              <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/resycled.svg" alt="" /></div>
                <div className="mx-2"><h4>Total Waste Removed From Site</h4></div>
              </div>
              
              <div>
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-center" style={{maxWidth:"450px", width:"100%", margin:"0 auto"}}>
          <Pie data={pieChartData6} options={options}/>
          </div>
        </div> 
              </div>


              <div className="col-md-6">
              <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/resycled.svg" alt="" /></div>
                <div className="mx-2"><h4>Total Waste Removed From Site </h4></div>
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
          <SolidWastepie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
          <SolidWastepie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
              <SolidWastepie />
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
          </div>
        </div>


      <div className="row mt-3">
        <div className="col-md-6">
        
       

          
        </div>
        <div className="col-md-6">

       
        </div>
      </div>

      <div className="row mt-3">
      <section>
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="row">
          <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/resycled.svg" alt="" /></div>
                <div className="mx-2"><h4>Waste Diverted from Disposal</h4></div>
              </div>
              
              <div>
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <Pie data={pieChartData7} options={options}/>
          </div>
        </div>  
        </div>
            
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/resycled.svg" alt="" /></div>
                <div className="mx-2"><h4>Waste Diverted from Disposal </h4></div>
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
                    tonnes
                </button>
                <button 
                  className={`${activeButton === 'button5' ? 'button active' : 'button'}`}
                  onClick={() => handleButtonClick('button5')}
                >
                  kg
                </button>
                  <button 
                    className={`${activeButton === 'button6' ? 'button active' : 'button'}`} 
                    onClick={() => handleButtonClick('button6')}
                  >
                    lbs
                  </button>
                  </div>



                
                </div>

                <div className="row mt-3">
        <div className="col-md-12">
        
        <div className="mt-3">
      {activeButton === 'button1' && (
        <div className="">
         <LiquidWastepie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
          <LiquidWastepie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
           <LiquidWastepie />
        </div>
      )}

      {activeButton === 'button4' && (
        <div className="">
          <LiquidWastepie />
        </div>
      )}

      {activeButton === 'button5' && (
        <div className="">
           <LiquidWastepie />
        </div>
      )}

      {activeButton === 'button6' && (
        <div className="">
<LiquidWastepie />
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
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <div className="row">
          <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/wasteDirected.png" alt="" /></div>
                <div className="mx-2"><h4>Waste Directed to Disposal</h4></div>
              </div>
            
              <div className="text-end">
              <span>This Month</span>
              <h5>Sep 2023 to Apr 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <Pie data={pieChartData8} options={options}/>
          </div>
        </div>  
        </div>
           
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/wasteDirected.png" alt="" /></div>
                <div className="mx-2"><h4>Waste Directed to Disposal</h4></div>
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
                    tonnes
                </button>
                <button 
                  className={`${activeButton === 'button5' ? 'button active' : 'button'}`}
                  onClick={() => handleButtonClick('button5')}
                >
                  kg
                </button>
                  <button 
                    className={`${activeButton === 'button6' ? 'button active' : 'button'}`} 
                    onClick={() => handleButtonClick('button6')}
                  >
                    lbs
                  </button>
                  </div>
                </div>

                <div className="row mt-3">
        <div className="col-md-12">
        
        <div className="mt-3">
      {activeButton === 'button1' && (
        <div className="">
          <SolidWatedisposalline /> 
         {/* <TranspotationFuelpie />
         */}
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
         <SolidWatedisposalline />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
         <SolidWatedisposalline />
        </div>
      )}

      {activeButton === 'button4' && (
        <div className="">
         <SolidWatedisposalline />
        </div>
      )}

      {activeButton === 'button5' && (
        <div className="">
          <SolidWatedisposalline />
        </div>
      )}

      {activeButton === 'button6' && (
        <div className="">
         <SolidWatedisposalline />
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
        </div>
      </div>

        </section>
      </div>
        </section>
    )
}
export default WasteManagementChart;


