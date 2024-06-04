import React, {useState} from "react";
import Utilityprovidertable from "./utilityProviderTable";
import WaterTankerTable from "./waterTankerTable";
import BottledWaterTable from "./bottledWaterTable";

// import Utilityprovidertable from "./utilityProviderTable";
// import NonrenowableTable from "./nonrenowablTable";
// import RenowableEnergyTable from "./renowablTable";
// import SoldenergyTable from "./soldenergyTable";
// import ReductionEnerguTable from "./reductionEnergyTable";

const WaterConsumption =()=>{
 
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

    return(
        <section>
           <div className="row">
            <div className="col-md-12">
                <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                <img src="../Images/water_Consumption.png" alt="" className="img-fluid"/>
                <div className="mx-2">
                    <h4>Water Consumption</h4>
                </div>
                </div>

                <div >
                    <button type="btn" className="btn btn-outline-success" onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'}</button>
                </div>
                </div>
                <hr />
            </div>
           </div>
           {isVisible &&
           <div className="row mt-3">
            <div className="col-md-12">
                
                <div className="mb-0">
                
                <Utilityprovidertable />

                <div className="mt-5">
                <hr />
                <WaterTankerTable />
                </div>

                <div className="mt-5">
                <hr />
                <BottledWaterTable />
                </div>

                <div className="mt-5">
                <hr />
                <h6>Sold Energy Table </h6>
                </div>

                <div className="mt-5">
                <hr />
                <h6> Reduction Energy Table </h6>
                </div>

                </div>
            </div>
           </div>
            }
        </section>
    )
}
export default WaterConsumption;