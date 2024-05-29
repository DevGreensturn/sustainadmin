
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import React from "react";
import DataTable from "react-data-table-component";

const ProjectListTable =()=>{
    
    const columns = [
    	{
            name: <b>Project Reference Number</b>,
            selector: (row) => row.personID,
        },
        {
            name: <b>Project</b>,
            selector: (row) => row.project,
            wrap:"true"
        },
        {
            name: <b>Project Package</b>,
            selector: (row) => row.projectPackage,
            wrap:"true"
        },
        {
            name: <b>Main Contractor</b>,
            selector: (row) => row.mainContactor,
            wrap:"true"
        },
        {
            name: <b>Package Typology</b>,
            selector: (row) => row.packageTypology,
            wrap:"true"
        },
        {
            name: <b>Package Current Progress</b>,
            selector: (row) => row.packageCurrentProgress,
            wrap:"true"
        },

        {
            name: <b>Cumulative Manhour</b>,
            selector: (row) => row.CumulativeManhour,
            wrap:"true"
        },
        {
            name: <b>Plot Area (m2)</b>,
            selector: (row) => row.PloatArea,
            wrap:"true"
        },
        {
            name: <b>GFA (m2)</b>,
            selector: (row) => row.GFA,
            wrap:"true"
        },
        {
            name: <b>Road Length (km)</b>,
            selector: (row) => row.RoadLength,
            wrap:"true"
        },
        {
            name: <b>Infrastructure (Ha)</b>,
            selector: (row) => row.InfraStructure,
            wrap:"true"
        },
        {
            name: <b>Subscription Category</b>,
            selector: (row) => row.SubscriptionCategory,
            wrap:"true"
        },
        {
            name: <b>Subscription Tier</b>,
            selector: (row) => row.SubscriptionTier,
            wrap:"true"
        },
        {
            name: <b>Action</b>,
            selector: (row) => row.Action,
            wrap:"true",
            width:"180px"
        },
    ];
    
    const rows = [
        {
            personID: "001",
            project: "Downtown Tower",
            projectPackage: "Enabling Works",
            mainContactor: "Company X",
            packageTypology: "Infrastructure",
            packageCurrentProgress: "90%",
            CumulativeManhour: "115,200.00",
            PloatArea:"25,000.00",
            GFA:"-",
            RoadLength: "-",
            InfraStructure: "2.5",
            SubscriptionCategory:"Infrastructure",
            SubscriptionTier:"Tier 1 - 100Ha",
            Action :<div className="d-flex align-items-center"><button type="btn" className="btn btn-sm btn-outline-secondary">Edit</button>, <button type="btn" className="btn btn-sm btn-outline-danger">Delete</button></div>   
         },
         {
            personID: "002",
            project: "Downtown Tower",
            projectPackage: "Building",
            mainContactor: "Company Y",
            packageTypology: "Building",
            packageCurrentProgress: "50%",
            CumulativeManhour: "230,400.00",
            PloatArea:"25,000.00",
            GFA:"60,000.00",
            RoadLength: "-",
            InfraStructure: "-",
            SubscriptionCategory:"Building",
            SubscriptionTier:"Tier 3 - 50,000sqm",
            Action :<div className="d-flex align-items-center"><button type="btn" className="btn btn-sm btn-outline-secondary">Edit</button>, <button type="btn" className="btn btn-sm btn-outline-danger">Delete</button></div>    
         },
         {
            personID: "003",
            project: "Downtown Tower",
            projectPackage: "Community Facility",
            mainContactor: "Company Z",
            packageTypology: "Building",
            packageCurrentProgress: "10%",
            CumulativeManhour: "19,200.00",
            PloatArea:"25,000.00",
            GFA:"10,000.00",
            RoadLength: "-",
            InfraStructure: "-",
            SubscriptionCategory:"Building",
            SubscriptionTier:"Tier 1 - 20,000sqm",
            Action :<div className="d-flex align-items-center"><button type="btn" className="btn btn-sm btn-outline-secondary">Edit</button>, <button type="btn" className="btn btn-sm btn-outline-danger">Delete</button></div>      
         },
         {
            personID: "004",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            packageTypology: "Road",
            packageCurrentProgress: "1%",
            CumulativeManhour: "9,600.00",
            PloatArea:"-",
            GFA:"-",
            RoadLength: "5",
            InfraStructure: "-",
            SubscriptionCategory:"Road",
            SubscriptionTier:"Tier 1 - 8km",
            Action :<div className="d-flex align-items-center"><button type="btn" className="btn btn-sm btn-outline-secondary">Edit</button>, <button type="btn" className="btn btn-sm btn-outline-danger">Delete</button></div>     
         },
        
         {
            personID: "005",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            packageTypology: "Road",
            packageCurrentProgress: "1%",
            CumulativeManhour: "9,600.00",
            PloatArea:"-",
            GFA:"-",
            RoadLength: "5",
            InfraStructure: "-",
            SubscriptionCategory:"Road",
            SubscriptionTier:"Tier 1 - 8km",
            Action :<div className="d-flex align-items-center"><button type="btn" className="btn btn-sm btn-outline-secondary">Edit</button>, <button type="btn" className="btn btn-sm btn-outline-danger">Delete</button></div>     
         },
         {
            personID: "006",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            packageTypology: "Road",
            packageCurrentProgress: "1%",
            CumulativeManhour: "9,600.00",
            PloatArea:"-",
            GFA:"-",
            RoadLength: "5",
            InfraStructure: "-",
            SubscriptionCategory:"Road",
            SubscriptionTier:"Tier 1 - 8km",
            Action :<div className="d-flex align-items-center"><button type="btn" className="btn btn-sm btn-outline-secondary">Edit</button>, <button type="btn" className="btn btn-sm btn-outline-danger">Delete</button></div>    
         },
         {
            personID: "007",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            packageTypology: "Road",
            packageCurrentProgress: "1%",
            CumulativeManhour: "9,600.00",
            PloatArea:"-",
            GFA:"-",
            RoadLength: "5",
            InfraStructure: "-",
            SubscriptionCategory:"Road",
            SubscriptionTier:"Tier 1 - 8km",
            Action :<div className="d-flex align-items-center"><button type="btn" className="btn btn-sm btn-outline-secondary">Edit</button>, <button type="btn" className="btn btn-sm btn-outline-danger">Delete</button></div>     
         },
         {
            personID: "008",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            packageTypology: "Road",
            packageCurrentProgress: "1%",
            CumulativeManhour: "9,600.00",
            PloatArea:"-",
            GFA:"-",
            RoadLength: "5",
            InfraStructure: "-",
            SubscriptionCategory:"Road",
            SubscriptionTier:"Tier 1 - 8km",
            Action :<div className="d-flex align-items-center"><button type="btn" className="btn btn-sm btn-outline-secondary">Edit</button>, <button type="btn" className="btn btn-sm btn-outline-danger">Delete</button></div>     
         },
         {
            personID: "009",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            packageTypology: "Road",
            packageCurrentProgress: "1%",
            CumulativeManhour: "9,600.00",
            PloatArea:"-",
            GFA:"-",
            RoadLength: "5",
            InfraStructure: "-",
            SubscriptionCategory:"Road",
            SubscriptionTier:"Tier 1 - 8km",
            Action :<div className="d-flex align-items-center"><button type="btn" className="btn btn-sm btn-outline-secondary">Edit</button>, <button type="btn" className="btn btn-sm btn-outline-danger">Delete</button></div>      
         },
         {
            personID: "010",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            packageTypology: "Road",
            packageCurrentProgress: "1%",
            CumulativeManhour: "9,600.00",
            PloatArea:"-",
            GFA:"-",
            RoadLength: "5",
            InfraStructure: "-",
            SubscriptionCategory:"Road",
            SubscriptionTier:"Tier 1 - 8km",
            Action :<div className="d-flex align-items-center"><button type="btn" className="btn btn-sm btn-outline-secondary">Edit</button>, <button type="btn" className="btn btn-sm btn-outline-danger">Delete</button></div>     
         },
    ];


    

    return(
        <section>
        <div className="">
            <div className="row">
                <div className="col-md-12">
                    <div>
                    <DataTable 
                    columns={columns} 
                    data={rows} 
                    fixedHeader
                    pagination
                    striped
                />
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
export default ProjectListTable;