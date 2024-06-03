import React from "react";
import Utilityprovidertable from "./utilityProviderTable";
import NonrenowableTable from "./nonrenowablTable";

const EnergyComsuption =()=>{
    
    return(
        <section>
           <div className="row">
            <div className="col-md-12">
                <div className="d-flex align-items-center">
                <img src="../Images/EnergyComsuption.png" alt="" className="img-fluid"/>
                <div className="mx-2">
                    <h4>Energy Consumption</h4>
                </div>
                </div>
                <hr />
            </div>
           </div>
           <div className="row mt-3">
            <div className="col-md-12">
                <div className="mb-0">
                    <Utilityprovidertable />
                
                <div className="mt-5">
                <hr />
                    <NonrenowableTable />
                </div>
                </div>
            </div>
           </div>
        </section>
    )
}
export default EnergyComsuption;