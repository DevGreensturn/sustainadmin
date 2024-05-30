
import React from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";

const ProjectListTable =()=>{
    
    const columns = [
    	{
            name: <b>ID</b>,
            selector: (row) => row.personID,
        },
        {
            name: <b>Supplier Name</b>,
            selector: (row) => row.project,
            wrap:"true"
        },
        {
            name: <b>Address </b>,
            selector: (row) => row.projectPackage,
            wrap:"true"
        },
        {
            name: <b>Type</b>,
            selector: (row) => row.mainContactor,
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