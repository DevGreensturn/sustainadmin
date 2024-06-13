
import React from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { useState,useEffect } from "react";
import { ADMINAPI } from "../../../apiWrapper";


const DataEntryTable =()=>{
    const [row ,setRow] = useState([]);


    const handleMonthlyReports = async () => {
        try {
         
       await ADMINAPI({
             url: `http://3.108.58.161:3002/api/v1/monthly-reports`,
             method: "GET",
            
            }).then((data) => {
              let userData = data.response;
              setRow(userData)
            console.log(userData,"monthly report");
            });
          
        } catch (error) {
          console.log(error, "new errr")

        }
      };
    const columns = [
    	
        {
            name: <b>Reporting Month</b>,
            selector: (row) => row.reportingMonthYear,
            wrap:"true"
        },
        {
            name: <b className="text-center">Packages Progress <br />This Month </b>,
            selector: (row) => row.packagesProgressThisMonth,
            wrap:"true"
        },
        {
            name: <b className="text-center">Manhour During <br />This Month</b>,
            selector: (row) => (row.cumulativeManhour+" "+"Manhour"),
            wrap:"true"
        },
        {
            name: <b>Reported By</b>,
            selector: (row) => (row.reportedBy.firstName+" "+row.reportedBy.lastName),
            wrap:"true"
        },
        
        {
            name: <b>Report Status</b>,
            selector: (row) => (
                <div>
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                        {row.reportStatus}
                    </button>
                </div>
            ),
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
            
            project: "Sep 2023",
            projectPackage: "33%",
            mainContactor: "5,500 Manhour",
            packageTypology: "User Name",
            reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-secondary">Submitted</button></div>,
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>
        },
         {
            
            project: "Oct 2023",
            projectPackage: "36%",
            mainContactor: "6,500 Manhour",
            packageTypology: "User Name",
            reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-success">Audited</button></div>,
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
         {
           
            project: "Nov 2023",
            projectPackage: "56%",
            mainContactor: "6,000 Manhour",
            packageTypology: "User Name",
            reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-secondary">Submitted</button></div>,
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>     
         },
         {
            
            project: "Dec 2023",
            projectPackage: "60%",
            mainContactor: "65,00 Manhour",
            packageTypology: "User Name",
            reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-danger">Returned</button></div>,
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
        
         {
           
            project: "Jan 2024",
            projectPackage: "66%",
            mainContactor: "60,00 Manhour",
            packageTypology: "User Name",
            reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-secondary">Submitted</button></div>,
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
         {
            
            project: "Feb 2024",
            projectPackage: "70%",
            mainContactor: "10,00 Manhour",
            packageTypology: "User Name",
            reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-secondary">Submitted</button></div>,
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>   
         },
         {
            
            project: "Mar 2024",
            projectPackage: "75%",
            mainContactor: "12,000 Manhour",
            packageTypology: "User Name",
            reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-secondary">Drafts</button></div>,
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>   
         },
         {
            
            project: "Apr 2024",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            packageTypology: "Road",
            reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-secondary">Submitted</button></div>,
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>  
         },
         {
            project: "May 2024",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            packageTypology: "Road",
            reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-secondary">Submitted</button></div>,
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>  
         },
         {
            project: "Jun 2023",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            packageTypology: "Road",
            reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-secondary">Submitted</button></div>,
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>   
         },
    ];
    useEffect(() => {
        handleMonthlyReports();
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
export default DataEntryTable;