import { useEffect, useState } from "react";
import { Pie} from 'react-chartjs-2';
import ConcreteMixpie from "../charts/concereteMix";
import { ADMINAPI } from "../../../apiWrapper";
import { toast } from "react-toastify";

const ConcreteMixChart =({project,packageValue,selectedDate})=>{
    const [activeButton, setActiveButton] = useState("button1");
    const [concreteData,setConcreteData] = useState([])
    const [labelsData,setLabelData] = useState([])

    const handleButtonClick =(button)=>{
      setActiveButton(button);
    };
  

    const pieChartData3 = {
      labels: labelsData,
      datasets: [
        {
          label: "My Dataset",
          data: concreteData,
          backgroundColor: ["#EE7722", "#FB9A54"],
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

    const fetchConcretePieChart = async () => {
      const payload = {
        packageId: packageValue,
        projectId: project,
        dateRange: selectedDate
      };
      console.log("payload",payload)
      try {
        await ADMINAPI({
          url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/charts/concrete/pie`,
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
                labels1.push(ele.type)
                data1.push(ele.percentage)
              });
              setLabelData(labels1)
              setConcreteData(data1)
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
      fetchConcretePieChart();
    }, [project,packageValue,selectedDate]);

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
                <div><img src="/images/ConcentrixMix.png" alt="" /></div>
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
          <Pie data={pieChartData3} options={options} />
          </div>
        </div>  
        </div>
        <div className="col-md-6">
        <div className="card" style={{border:"0"}}>
          <div className="card-body">
            <div className="">
              <div className="d-flex align-items-baseline">
                <div><img src="/images/ConcentrixMix.png" alt="" /></div>
                <div className="mx-2"><h4>Concrete Mix</h4></div>
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
                    Cubic meter
                </button>
                <button 
                  className={`${activeButton === 'button5' ? 'button active' : 'button'}`}
                  onClick={() => handleButtonClick('button5')}
                >
                  Cubic Feet
                </button>
                  <button 
                    className={`${activeButton === 'button6' ? 'button active' : 'button'}`} 
                    onClick={() => handleButtonClick('button6')}
                  >
                    Cubic Yards
                  </button>
                  </div>



                
                </div>

                <div className="row mt-3">
        <div className="col-md-12">
        
        <div className="mt-3">
      {activeButton === 'button1' && (
        <div className="">
          <ConcreteMixpie />
        </div>
      )}
      
      {activeButton === 'button2' && (
        <div className="">
          <ConcreteMixpie />
        </div>
      )}

      {activeButton === 'button3' && (
        <div className="">
          <ConcreteMixpie />
        </div>
      )}

      {activeButton === 'button4' && (
        <div className="">
          <ConcreteMixpie />
        </div>
      )}

      {activeButton === 'button5' && (
        <div className="">
          <ConcreteMixpie />
        </div>
      )}

      {activeButton === 'button6' && (
        <div className="">
          <ConcreteMixpie />
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

export default ConcreteMixChart;