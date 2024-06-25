import React, {useState} from "react";

import Utilityprovidertable from "./utilityProviderTable";
import NonrenowableTable from "./nonrenowablTable";
import RenowableEnergyTable from "./renowablTable";
import SoldenergyTable from "./soldenergyTable";
import ReductionEnerguTable from "./reductionEnergyTable";

const EnergyComsuption =({projectId, projectPack})=>{
 
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
                <img src="/images/EnergyComsuption.png" alt="" className="img-fluid"/>
                <div className="mx-2">
                    <h4>Energy Consumption</h4>
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
                    <Utilityprovidertable  projectId ={projectId} projectPack={projectPack}/>
                
                <div className="mt-5">
                <hr />
                    <NonrenowableTable projectId ={projectId} projectPack={projectPack}/>
                </div>

                <div className="mt-5">
                <hr />
                    <RenowableEnergyTable projectId ={projectId} projectPack={projectPack}/>
                </div>

                <div className="mt-5">
                <hr />
                    <SoldenergyTable projectId ={projectId} projectPack={projectPack}/>
                </div>

                <div className="mt-5">
                <hr />
                    <ReductionEnerguTable  projectId ={projectId} projectPack={projectPack}/>
                </div>

                </div>
            </div>
           </div>
            }
        </section>
    )
}
export default EnergyComsuption;