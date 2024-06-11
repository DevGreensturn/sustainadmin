
import React from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { useState,useEffect } from "react";
import { ADMINAPI } from "../../../apiWrapper";


const ProjectListTable =(projectId,packageId)=>{
    console.log(projectId,"YYY");
    const [row ,setRow] = useState([]);
    const [isLoader, setIsLoader] = useState(false);

    const handleFetchProject = async () => {
        setIsLoader(true)
        try {
         
       await ADMINAPI({
             url: `http://3.108.58.161:3001/api/v1/suppliers?projectId=${projectId.projectId}`,
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
    //   {
    //     "_id": "6666c1178add944435c850da",
    //     "supplierId": 1,
    //     "name": "Acme Corporation",
    //     "address": "123 Elm Street",
    //     "type": "Manufacturer",
    //     "packageId": {
    //         "_id": "665486deed3a1b1774f9ae63",
    //         "name": "Building",
    //         "status": "ACTIVE",
    //         "createdAt": "2024-05-27T13:13:02.261Z",
    //         "updatedAt": "2024-05-27T13:13:02.261Z",
    //         "__v": 0
    //     },

    const columns = [
    	{
            name: <b>ID</b>,
            selector: (row) => row.supplierId,
        },
        {
            name: <b>Supplier Name</b>,
            selector: (row) => row.name,
            wrap:"true"
        },
        {
            name: <b>Address </b>,
            selector: (row) => row.address,
            wrap:"true"
        },
        {
            name: <b>Type</b>,
            selector: (row) => row.type,
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
    
    const rows = [
        {
            personID: "001",
            project: "AA Energy Limited",
            projectPackage: "089 Kutch Green Apt. 448",
            mainContactor: "Wood Work Subcontractor",
            
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>
        },
         {
            personID: "002",
            project: "Supplier North",
            projectPackage: "979 Immanuel Ferry Suit 526",
            mainContactor: "Steel Supplier",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
         {
            personID: "003",
            project: "Supplier ZX",
            projectPackage: "8587 Farida Ports",
            mainContactor: "MEP Subcontractor",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>     
         },
         {
            personID: "004",
            project: "Supplier CM",
            projectPackage: "768 Destiny Suits 600",
            mainContactor: "Diesel Supplier",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
        
         {
            personID: "005",
            project: "Supplier Camelias",
            projectPackage: "042 Mylene Throughway ",
            mainContactor: "Asphalt",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
         {
            personID: "006",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>   
         },
         {
            personID: "007",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>   
         },
         {
            personID: "008",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>  
         },
         {
            personID: "009",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>  
         },
         {
            personID: "010",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>   
         },
    ];

    useEffect(() => {
        handleFetchProject();
      }, [projectId.projectId]);
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