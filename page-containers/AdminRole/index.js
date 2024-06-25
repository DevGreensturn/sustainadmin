import React, {useEffect, useState} from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';

import { Popover, OverlayTrigger} from 'react-bootstrap';
import {data} from "./data";

const AdminRolesection =()=>{

    const [show, setShow] = useState(false);
    const handleClose =()=> setShow(false);
    const handleShow =()=>setShow(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit =()=> setShowEdit(false);
    const handleShowEdit =()=>setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete =()=> setShowDelete(false);
    const handleShowDelete =()=> setShowDelete(true);


    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(data)
    }, []);

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h4">Action Confirmation</Popover.Header>
          <Popover.Body>
            
            <div className="mt-2">
            <div>
            <button type="btn" className="btn btn-sm btn-outline-primary rounded-pill w-100" onClick={handleShowEdit}>Edit</button>
            </div>
            <div className="my-3">
            <button type="btn" className="btn btn-sm btn-outline-danger rounded-pill w-100" onClick={handleShowDelete}>Delete</button>
            </div>
            </div>
          </Popover.Body>
        </Popover>
      );



    const columns = [
    	
        {
            name: <b>User ID</b>,
            selector: (row) => row.userID,
            wrap:"true",
            editable:"true"
        },
        {
            name: <b className="text-center">User Name</b>,
            selector: (row) => row.userName,
            wrap:"true"
        },
        {
            name: <b className="text-center">Email</b>,
            selector: (row) => row.userEmail,
            wrap:"true"
        },
        {
            name: <b className="text-center">Phone Number</b>,
            selector: (row) => row.phoneNumber,
            wrap:"true"
        },
        {
            name: <div className="text-center"><b>Role</b></div>,
            selector: (row) => row.Role,
            wrap:"true"
        },
        {
            name: <b>Action</b>,
            selector: (row) => row.Action,
            wrap:"true", 
        },
    ];
    
    const rows = [
        {
            userID: "0001",
            userName: "Jonedoe",
            userEmail: " johndoe@example.com",
            phoneNumber: "+1-234-567-8901",
            Role: "Admin",
            Action:<div className="more-vertical">
                 <OverlayTrigger trigger="click" placement="left" overlay={popover} rootClose>
                 <img src='/images/more-vertical.svg' alt=''/>
                </OverlayTrigger>
                </div>
            
            // Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },

        {
            userID: "0002",
            userName: "Jane mith",
            userEmail: "janesmith@example.com",
            phoneNumber: "+1-234-567-8902",
            Role: "Editor",
            Action: <div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },
        {
            userID: "0003",
            userName: "Robert brown",
            userEmail: "robertbrown@example.com",
            phoneNumber: "+1-234-567-8903",
            Role: "Viewer",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },
        {
            userID: "0004",
            userName: "Emily davis",
            userEmail: "emilydavis@example.com",
            phoneNumber: "+1-234-567-8904",
            Role: "Admin",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },
        {
            userID: "0005",
            userName: "Davidmartin",
            userEmail: "davidmartin@example.com",
            phoneNumber: "+1-234-567-8905",
            Role: "Admin",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },
    ];

    const customStyles ={
        rows:{
            style:{
                minHeight: '72px', // override the row height
            }
        }
    }
    
    return(
        <>
        <section>
    <div className="row my-3 p-2">
          <div className="col-md-12">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h2>User List</h2>
              </div>
              <div className="d-flex">
                  <button type="btn" className="btn btn-outline-success mx-3">
                    Filters
                  </button>
                  <Link href="/addMonthlyData">
                    <button type="btn" className="btn btn-outline-success">
                      Add New
                    </button>
                  </Link>
                </div>
            </div>
            </div>
        </div>
        <div className='row my-3 p-2'>
        <div className='col-md-12'>
            
        <DataTable 
            columns={columns} 
            data={rows} 
            fixedHeader
            pagination
            striped
            customStyles={customStyles}
        />

            </div>
            </div>

            <>
                <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                backdrop="static"
                centered
                >
                    <Modal.Header closeButton style={{border:"0"}}></Modal.Header>
                    <Modal.Body>
                        <>
                       <div>
                        <div className="d-flex align-items-center">
                            <img src="/images/wasteManagement_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Waste Management</h4>
                             
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Kind of Waste</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Non Hazard</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Waste Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Solid</option>
                                    <option value="1">Abu Dhabi</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Main Collection Company</label>
                                <input type="text" className="form-control" placeholder="Tadweer" />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Total Waste Removed from Site</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unit of Measurement</label>

                            <select className="form-select" aria-label="Default select example">
                                    <option selected>kg</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            
                            </div>
                            
                        </div>
 
                        <div className="row mt-3 ">
                            
                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="1" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Used by Trucks (Liters)</label>
                                <input type="text" className="form-control" placeholder="10" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Supporting Document (If Any)</label>
                                <input type="file" className="form-control" placeholder="Upload Documents" />
                            </div>
                        </div>

                        
                       </div>


                    <div className="my-4 d-flex justify-content-between">
                    <div>
                    <button type="btn" className="btn btn-outline-secondary" onClick={handleClose}> Close </button>
                    </div>
                    <div>
                    <button type="btn" className="btn btn-outline-success" onClick={handleClose}> Save Changes </button>
                    </div>
                    </div>
                       </>

                        </Modal.Body>
                </Modal>

                {/* Edit Section */}

                <Modal
                show={showEdit}
                onHide={handleCloseEdit}
                size="lg"
                backdrop="static"
                centered
                >
                    <Modal.Header closeButton style={{border:"0"}}>
                    <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                       <div>
                        <div className="d-flex align-items-center">
                            <img src="/images/wasteManagement_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Waste Management</h4>
                             
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Kind of Waste</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Non Hazard</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Waste Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Solid</option>
                                    <option value="1">Abu Dhabi</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Main Collection Company</label>
                                <input type="text" className="form-control" placeholder="Tadweer" />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Total Waste Removed from Site</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unit of Measurement</label>

                            <select className="form-select" aria-label="Default select example">
                                    <option selected>kg</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            
                            </div>
                            
                        </div>
 
                        <div className="row mt-3 ">
                            
                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="1" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Used by Trucks (Liters)</label>
                                <input type="text" className="form-control" placeholder="10" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Supporting Document (If Any)</label>
                                <input type="file" className="form-control" placeholder="Upload Documents" />
                            </div>
                        </div>

                        
                       </div>


                    <div className="my-4 d-flex justify-content-between">
                    <div>
                    <button type="btn" className="btn btn-outline-secondary" onClick={handleCloseEdit}> Close </button>
                    </div>
                    <div>
                    <button type="btn" className="btn btn-outline-success" onClick={handleCloseEdit}> Save Changes </button>
                    </div>
                    </div>
                       </>

                        </Modal.Body>
                </Modal>


                {/* Delete section */}

                <Modal
                show={showDelete}
                onHide={handleCloseDelete}
                size="md"
                backdrop="static"
                centered
                >
                    <Modal.Header closeButton style={{border:"0"}}>
                    <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                       <div className=" text-center">
                        <h5>Are you sure want to delete this record.</h5>
                    </div>
                    <div className="mt-4 d-flex justify-content-between">
                    <div>
                    <button type="btn" className="btn btn-outline-secondary rounded-pill" onClick={handleCloseDelete} style={{width:"10rem"}}> Close </button>
                    </div>
                    <div>
                    <button type="btn" className="btn btn-outline-success rounded-pill" onClick={handleCloseDelete} style={{width:"10rem"}}>Yes </button>
                    </div>
                    </div>
                       </>
                        </Modal.Body>
                </Modal>

                </>

            </section>
        </>
    )
}
export default AdminRolesection;