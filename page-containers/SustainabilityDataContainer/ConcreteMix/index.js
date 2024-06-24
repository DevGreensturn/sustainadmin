import { useState } from "react";
import { Pie} from 'react-chartjs-2';
import ConcreteMixpie from "../charts/concereteMix";

const ConcreteMixChart =()=>{
    const [activeButton, setActiveButton] = useState("button1");
    const handleButtonClick =(button)=>{
      setActiveButton(button);
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
          <Pie data={pieChartData3} options={options}/>
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