import React from "react";

import EnergyComsuption from "../EnergyConsumption";


import WaterConsumption from "../WaterConsumption";
import ConcereteMix from "../datatList/ConcreteMix";
import WorkerTransportation from "../peopleTransportation/workerTransportation";
import SiteVehicles from "../peopleTransportation/siteVehicles";
import BusinessTravel from "../peopleTransportation/businessTravel";
import PeopleTransportation from "../peopleTransportation";

const AddprojectEntry =()=>{
    return(
        <section>
      <div className="p-4">
        <div className="row">
          <div className="col-md-12">
            <div className="my-1">
                <h3>Project Progress</h3>
                <hr />
            </div>
          </div>
        </div>
            <div className="row">
                <div className="col-md-4">
                    <label>Project Reference No</label>
                    <input type="text" className="form-control" placeholder="002" disabled/>
                </div>
                <div className="col-md-4">
                    <label>Project Name</label>
                    <input type="text" className="form-control" placeholder="Down Town - Building" disabled/>
                </div>
                <div className="col-md-4">
                    <label>Reporting Month</label>
                    <input type="text" className="form-control" placeholder="002" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4">
                    <label>Packages Progress this Month</label>
                    <input type="text" className="form-control" placeholder="Packages Progress" />
                </div>
                <div className="col-md-4">
                    <label>Manhour During this Month</label>
                    <input type="text" className="form-control" placeholder="Manhour" />
                </div>
                <div className="col-md-4">
                    <label>Reported By</label>
                    <input type="text" className="form-control" placeholder="Reported By" />
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-12 ">
                    <div className="d-flex justify-content-end">
                        <button type="btn" className="btn btn-outline-secondary mx-3">Cancel</button>
                        <button type="btn" className="btn btn-outline-success">Submit</button>
                    </div>
                </div>
                
            </div>

            <div className="row mt-3">
                <div className="col-md-12">
                   <EnergyComsuption />
                   
                   <WaterConsumption />
                   <ConcereteMix />
                   <PeopleTransportation/>
                   {/* <WorkerTransportation />
                   <SiteVehicles/>
                   <BusinessTravel/> */}
                  
                </div>
            </div>

        </div>
        </section>
    )
}
export default AddprojectEntry;