import React, {useState} from "react";
import ConcentrixMixTable from "./concentrixMixTable";

const ConcereteMix =()=>{
 
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
                <img src="../Images/ConcentrixMix.png" alt="" className="img-fluid"/>
                <div className="mx-2">
                    <h4>Concrete Mix</h4>
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
                <ConcentrixMixTable />
                </div>
            </div>
           </div>
            }
        </section>
    )
}
export default ConcereteMix;