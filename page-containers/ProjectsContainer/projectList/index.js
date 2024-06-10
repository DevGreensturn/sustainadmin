
import React from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState,useEffect } from "react";
import { ADMINAPI } from "../../../apiWrapper";
import {Loader} from "../../../comman/loader"

const ProjectListTable =()=>{
    const [row ,setRow] = useState([]);
    const [isLoader, setIsLoader] = useState(false);

    const handleFetchProject = async () => {
        setIsLoader(true)
        try {
         
       await ADMINAPI({
             url: `http://3.108.58.161:3002/api/v1/projects?id=3&page=1`,
             method: "GET",
            
            }).then((data) => {
              let userData = data.response;
              setRow(userData)
              setIsLoader(false)
            console.log(userData,"ooooooo");
            });
          
        } catch (error) {
          console.log(error, "errorooo");
          setIsLoader(false)

        }
      };
    
    const columns = [
    	{
            name: <b>Project Reference Number</b>,
            selector: (row) => row.referenceNo,
        },
        {
            name: <b>Project</b>,
            selector: (row) => row.projectName,
            wrap:"true"
        },
        {
            name: <b>Project Package</b>,
            selector: (row) => row.projectPackageId?.name,
            wrap:"true"
        },
        {
            name: <b>Main Contractor</b>,
            selector: (row) => row.mainContractor,
            wrap:"true"
        },
        {
            name: <b>Package Typology</b>,
            selector: (row) => row.topology,
            wrap:"true"
        },
        {
            name: <b>Package Current Progress</b>,
            selector: (row) => row.packageCurrentPackage,
            wrap:"true"
        },

        {
            name: <b>Cumulative Manhour</b>,
            selector: (row) => row.manHours,
            wrap:"true"
        },
        {
            name: <b>Plot Area (m2)</b>,
            selector: (row) => row.plotArea,
            wrap:"true"
        },
        {
            name: <b>GFA (m2)</b>,
            selector: (row) => row.gfa,
            wrap:"true"
        },
        {
            name: <b>Road Length (km)</b>,
            selector: (row) => row.infrastructure,
            wrap:"true"
        },
        {
            name: <b>Infrastructure (Ha)</b>,
            selector: (row) => row.infrastructure,
            wrap:"true"
        },
        {
            name: <b>Subscription Category</b>,
            selector: (row) => row.SubscriptionCategory,
            wrap:"true"
        },
        {
            name: <b>Subscription Tier</b>,
            selector: (row) => row.subscriptionTier,
            wrap:"true"
        },
        {
            name: <b>Action</b>,
            selector: row => (
                <div className="d-flex align-items-center">
                  <FaRegEdit style={{ color: "secondary", fontSize: "20px" }} />
                  <MdDeleteForever className="mx-2" style={{ color: "red", fontSize: "20px" }} />
                </div>
              ),
            wrap:"true",
            width:"180px"
        },
    ];
    
    // {
    //     "_id": "6655751e60d4032ac67d8b2b",
    //     "referenceNo": 123,
    //     "projectName": "New Project",
    //     "projectPackageId": {
    //         "_id": "665486fbed3a1b1774f9ae66",
    //         "name": "Main Works",
    //         "status": "ACTIVE",
    //         "createdAt": "2024-05-27T13:13:31.058Z",
    //         "updatedAt": "2024-05-27T13:13:31.058Z",
    //         "__v": 0
    //     },
    //     "mainContractor": "Main Contractor Inc.",
    //     "topology": "Urban",
    //     "packageCurrentPackage": "Package123",
    //     "manHours": "2000",
    //     "plotArea": "5000 sqm",
    //     "gfa": "4500 sqm",
    //     "infrastructure": "2 km",
    //     "infrastructure": "Basic",
    //     "SubscriptionCategory": "Building",
    //     "subscriptionTier": "Gold",
    //     "SustainabilityRating": "High",
    //     "createdAt": "2024-05-28T06:09:34.604Z",
    //     "updatedAt": "2024-05-28T06:09:34.604Z",
    //     "__v": 0
    // },
    // const rows = [
    //     {
    //         personID: "001",
    //         project: "Downtown Tower",
    //         projectPackage: "Enabling Works",
    //         mainContactor: "Company X",
    //         packageTypology: "Infrastructure",
    //         packageCurrentProgress: "90%",
    //         CumulativeManhour: "115,200.00",
    //         PloatArea:"25,000.00",
    //         GFA:"-",
    //         RoadLength: "-",
    //         InfraStructure: "2.5",
    //         SubscriptionCategory:"Infrastructure",
    //         SubscriptionTier:"Tier 1 - 100Ha",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>
    //     },
    //      {
    //         personID: "002",
    //         project: "Downtown Tower",
    //         projectPackage: "Building",
    //         mainContactor: "Company Y",
    //         packageTypology: "Building",
    //         packageCurrentProgress: "50%",
    //         CumulativeManhour: "230,400.00",
    //         PloatArea:"25,000.00",
    //         GFA:"60,000.00",
    //         RoadLength: "-",
    //         InfraStructure: "-",
    //         SubscriptionCategory:"Building",
    //         SubscriptionTier:"Tier 3 - 50,000sqm",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
    //      },
    //      {
    //         personID: "003",
    //         project: "Downtown Tower",
    //         projectPackage: "Community Facility",
    //         mainContactor: "Company Z",
    //         packageTypology: "Building",
    //         packageCurrentProgress: "10%",
    //         CumulativeManhour: "19,200.00",
    //         PloatArea:"25,000.00",
    //         GFA:"10,000.00",
    //         RoadLength: "-",
    //         InfraStructure: "-",
    //         SubscriptionCategory:"Building",
    //         SubscriptionTier:"Tier 1 - 20,000sqm",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>     
    //      },
    //      {
    //         personID: "004",
    //         project: "Dubai Road",
    //         projectPackage: "Main Works",
    //         mainContactor: "Company G",
    //         packageTypology: "Road",
    //         packageCurrentProgress: "1%",
    //         CumulativeManhour: "9,600.00",
    //         PloatArea:"-",
    //         GFA:"-",
    //         RoadLength: "5",
    //         InfraStructure: "-",
    //         SubscriptionCategory:"Road",
    //         SubscriptionTier:"Tier 1 - 8km",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
    //      },
        
    //      {
    //         personID: "005",
    //         project: "Dubai Road",
    //         projectPackage: "Main Works",
    //         mainContactor: "Company G",
    //         packageTypology: "Road",
    //         packageCurrentProgress: "1%",
    //         CumulativeManhour: "9,600.00",
    //         PloatArea:"-",
    //         GFA:"-",
    //         RoadLength: "5",
    //         InfraStructure: "-",
    //         SubscriptionCategory:"Road",
    //         SubscriptionTier:"Tier 1 - 8km",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
    //      },
    //      {
    //         personID: "006",
    //         project: "Dubai Road",
    //         projectPackage: "Main Works",
    //         mainContactor: "Company G",
    //         packageTypology: "Road",
    //         packageCurrentProgress: "1%",
    //         CumulativeManhour: "9,600.00",
    //         PloatArea:"-",
    //         GFA:"-",
    //         RoadLength: "5",
    //         InfraStructure: "-",
    //         SubscriptionCategory:"Road",
    //         SubscriptionTier:"Tier 1 - 8km",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>   
    //      },
    //      {
    //         personID: "007",
    //         project: "Dubai Road",
    //         projectPackage: "Main Works",
    //         mainContactor: "Company G",
    //         packageTypology: "Road",
    //         packageCurrentProgress: "1%",
    //         CumulativeManhour: "9,600.00",
    //         PloatArea:"-",
    //         GFA:"-",
    //         RoadLength: "5",
    //         InfraStructure: "-",
    //         SubscriptionCategory:"Road",
    //         SubscriptionTier:"Tier 1 - 8km",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>   
    //      },
    //      {
    //         personID: "008",
    //         project: "Dubai Road",
    //         projectPackage: "Main Works",
    //         mainContactor: "Company G",
    //         packageTypology: "Road",
    //         packageCurrentProgress: "1%",
    //         CumulativeManhour: "9,600.00",
    //         PloatArea:"-",
    //         GFA:"-",
    //         RoadLength: "5",
    //         InfraStructure: "-",
    //         SubscriptionCategory:"Road",
    //         SubscriptionTier:"Tier 1 - 8km",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>  
    //      },
    //      {
    //         personID: "009",
    //         project: "Dubai Road",
    //         projectPackage: "Main Works",
    //         mainContactor: "Company G",
    //         packageTypology: "Road",
    //         packageCurrentProgress: "1%",
    //         CumulativeManhour: "9,600.00",
    //         PloatArea:"-",
    //         GFA:"-",
    //         RoadLength: "5",
    //         InfraStructure: "-",
    //         SubscriptionCategory:"Road",
    //         SubscriptionTier:"Tier 1 - 8km",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>  
    //      },
    //      {
    //         personID: "010",
    //         project: "Dubai Road",
    //         projectPackage: "Main Works",
    //         mainContactor: "Company G",
    //         packageTypology: "Road",
    //         packageCurrentProgress: "1%",
    //         CumulativeManhour: "9,600.00",
    //         PloatArea:"-",
    //         GFA:"-",
    //         RoadLength: "5",
    //         InfraStructure: "-",
    //         SubscriptionCategory:"Road",
    //         SubscriptionTier:"Tier 1 - 8km",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>   
    //      },
    // ];
    useEffect(() => {
        handleFetchProject();
      }, []);
    
    return(
        
        <section>
        <div className="">
            <div className="row">
                <div className="col-md-12">
                    <div>
                    <DataTable 
                    columns={columns} 
                    data={row} 
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