import React, {useState} from "react";
import WorkerTransportation from "./workerTransportation";
import SiteVehicles from "./siteVehicles";
import BusinessTravel from "./businessTravel";
import EmployeeCommuting from "./employeeCommuting";

const PeopleTransportation =({projectId,projectPack})=>{
 
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
                <img src="/images/PeopleTransportation.png" alt="" className="img-fluid"/>
                <div className="mx-2">
                    <h4>PeopleTransportation</h4>
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
                    <WorkerTransportation projectId={projectId} projectPack={projectPack}/>
                
                  <div className="mt-5">
                <hr />
                    <SiteVehicles projectId={projectId} projectPack={projectPack}/>
                </div> 

                 <div className="mt-5">
                <hr />
                    <BusinessTravel  projectId={projectId} projectPack={projectPack}/>
                </div> 
                <div className="mt-5">
                <hr />
                    <EmployeeCommuting projectId={projectId} projectPack={projectPack} />
                </div> 
               
               

                </div>
            </div>
           </div>
            }
        </section>
    )
}
export default PeopleTransportation;