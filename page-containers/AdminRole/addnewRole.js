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


const Addnewrole =()=>{

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
            name: <b>Role</b>,
            selector: (row) => row.Role,
            wrap:"true",
            editable:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Created By</b>,
            selector: (row) => row.createdBy,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Created Date</b>,
            selector: (row) => row.createDate,
            wrap:"true",
            sortable: true,
        },

        {
            name: <b>Action</b>,
            selector: (row) => row.Action,
            wrap:"true",
            sortable: true,
        },
    ];
    
    const rows = [
        {
            Role: "Suplier",
            createdBy: "Admin",
            createDate: "21-06-2024",

            Action:<div className="more-vertical">
                 <OverlayTrigger trigger="click" placement="left" overlay={popover} rootClose>
                 <img src='/images/more-vertical.svg' alt=''/>
                </OverlayTrigger>
                </div>
        },

        {
            Role: "Suplier",
            createdBy: "Admin",
            createDate: "21-06-2024",
            Action:<div className="more-vertical">
                 <img src='/images/more-vertical.svg' alt=''/>
                </div>
        },
        {
            Role: "Suplier",
            createdBy: "Admin",
            createDate: "21-06-2024",
            Action:<div className="more-vertical">
            <img src='/images/more-vertical.svg' alt=''/>
           </div>
        },
        {
            Role: "Suplier",
            createdBy: "Admin",
            createDate: "21-06-2024",
            
            Action:<div className="more-vertical">
            <img src='/images/more-vertical.svg' alt=''/>
           </div>
        },
        {
            Role: "Suplier",
            createdBy: "Admin",
            createDate: "21-06-2024",
            Action:<div className="more-vertical">
            <img src='/images/more-vertical.svg' alt=''/>
           </div>
        },
        {
            Role: "Suplier",
            createdBy: "Admin",
            createDate: "21-06-2024",
            Action:<div className="more-vertical">
            <img src='/images/more-vertical.svg' alt=''/>
           </div>
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
                <h2>Roles</h2>
              </div>
              <div className="d-flex">
                    <button type="btn" className="btn btn-outline-success" onClick={handleShowEdit}>
                      Add New Role
                    </button>
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
                        
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <label>Role Name</label>
                                <input type="text" className="form-control" />
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
                    <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                       <div>
                        
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="">Role Name</label>
                                <input type="text" className="form-control" placeholder="Role Name"/>
                            </div>

                            <div className="col-md-6">
                            <label htmlFor="">Module Dropdown</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Module Dropdown</option>
                                    <option value="1">Module Dropdown</option>
                                    <option value="2">Module Dropdown</option>
                                    <option value="3">Module Dropdown</option>
                                </select>
                            </div>
                        </div>   

                        <div className="row my-4">
                            <div className="col-md-12">
                                <div className="d-flex justify-content-between">

                                <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        <label class="form-check-label" for="flexSwitchCheckDefault">View</label>
                                </div>

                                        <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Edit</label>
                                        </div>
                                        <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" />
                                        <label class="form-check-label" for="flexSwitchCheckDisabled">Delete</label>
                                        </div>
                                        <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" />
                                        <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Add</label>
                                        </div>

                                </div>
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
export default Addnewrole;