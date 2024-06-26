import React, {useState} from "react";

import WasteManagementTable from "./wasteManagementTable";
import WasteDirected from "../WasteDiredted/wasteDirectedTable";

import WasteDiverted from "../WasteDiverted/wasteDivertedTable";




const WasteManagement =({projectId, projectPack})=>{
 
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
                <img src="/images/wasteManagement.png" alt="" className="img-fluid"/>
                <div className="mx-2">
                    <h4>Waste Management</h4>
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
                    {/* <WasteManagementTable /> */}
                    <WasteDirected projectId ={projectId} projectPack={projectPack} />
                    

                <div className="mt-5">
                <hr />
                    <WasteDiverted projectId ={projectId} projectPack={projectPack}/>
                </div>
                </div>
            </div>
           </div>
            }
        </section>
    )
}
export default WasteManagement;