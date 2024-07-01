import { useState,useEffect } from "react";
import { Pie} from 'react-chartjs-2';
import Materialpurchasedpie from "../charts/materialpurchased";
import MaterialpurchasedTypepie from "../charts/materialpurchasedType";
import { ADMINAPI } from "../../../apiWrapper";

import { toast } from "react-toastify";


const BuildingMaterialChart =({project,packageValue,selectedDate})=>{
    const [activeButton, setActiveButton] = useState("button1");

    const [buildingData, setBuildingData] = useState([]);
    const [buildingData1, setBuildingData1] = useState([]);
    const [labelsData,setLabelData] = useState([])
    const [labelsData1,setLabelData1] = useState([])




    const handleButtonClick =(button)=>{
      setActiveButton(button);
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
    

const pieChartData5 = {
  labels: labelsData1,
  datasets: [
    {
      label: "My Dataset",
      data: buildingData1,
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

    const pieChartData4 = {
      labels: labelsData,
      datasets: [
        {
          label: "My Dataset",
          data: buildingData,
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
   const fetchBuildingPieChart = async() =>{
    const payload ={
      packageId: packageValue,
      projectId: project,
      dateRange: selectedDate
    };
    console.log("payload",payload)

    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/charts/building/pie`,
        method: "POST",
        body: { ...payload },
      })
        .then((data) => {
          if (data.status === true) {
         console.log(data,"JKLKLJL");
            toast.success(data?.message);
            let labels1=[]
            let data1=[]
            data.result.forEach(ele => {
              labels1.push(ele.materialSource)
              data1.push(ele.percentage)
            });
            setLabelData(labels1)
            setBuildingData(data1)
          } 
        })
        .catch((err) => {
            toast.error(err?.message);
        });
    } catch (error) {
      
      console.log(error, "errorooo");
    }
   }
   useEffect(() => {
    console.log("tttttttttttttttt",packageValue)
    fetchBuildingPieChart();
    fetchBuildingtypePieChart();
  }, [project,packageValue]);


  const fetchBuildingtypePieChart = async() =>{
    const payload ={
      packageId: packageValue,
      projectId: project,
      dateRange: selectedDate
    };
    console.log("payload",payload)

    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/charts/building-type/pie`,
        method: "POST",
        body: { ...payload },
      })
        .then((data) => {
          if (data.status === true) {
         console.log(data,"JKLKLJL");
            toast.success(data?.message);
            let labels1=[]
            let data1=[]
            data.result.forEach(ele => {
              labels1.push(ele.materialType)
              data1.push(ele.percentage)
            });
            setLabelData1(labels1)
            setBuildingData1(data1)
          } 
        })
        .catch((err) => {
            toast.error(err?.message);
        });
    } catch (error) {
      
      console.log(error, "errorooo");
    }
   }

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
                <div><img src="/images/BuildingMaterials.png" alt="" /></div>
                <div className="mx-2"><h4>Material Purchased </h4></div>
              </div>
              
              <div>
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <Pie data={pieChartData4} options={options}/>
          </div>
        </div>  
        </div>
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/BuildingMaterials.png" alt="" /></div>
                <div className="mx-2"><h4>Material Purchased</h4></div>
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
         <Materialpurchasedpie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
         <Materialpurchasedpie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
         <Materialpurchasedpie />
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
                <div><img src="/images/BuildingMaterials.png" alt="" /></div>
                <div className="mx-2"><h4>Material Purchased Type</h4></div>
              </div>
              
              <div>
              <span>This Month</span>
              <h5>April 2024</h5>
              </div>
            </div>
            <hr style={{opacity:".1"}}/>
          </div>
          <div className="d-flex justify-content-between" style={{maxWidth:"350px", width:"100%", margin:"0 auto", paddingBottom:"30px"}}>
          <Pie data={pieChartData5} options={options}/>
          </div>
        </div>  
        </div>
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/BuildingMaterials.png" alt="" /></div>
                <div className="mx-2"><h4>Material Purchased Type</h4></div>
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
          <MaterialpurchasedTypepie />

        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
          <MaterialpurchasedTypepie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
          <MaterialpurchasedTypepie />
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

export default BuildingMaterialChart;