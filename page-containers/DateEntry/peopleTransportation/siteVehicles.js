import React, {useState} from "react";

import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';

const SiteVehicles =()=>{

    const [show, setShow] = useState(false);
    const handleClose =()=> setShow(false);
    const handleShow =()=>setShow(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit =()=> setShowEdit(false);
    const handleShowEdit =()=>setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete =()=> setShowDelete(false);
    const handleShowDelete =()=> setShowDelete(true);

    const columns = [
    	
        {
            name: <b>Number of Vehicles(Excluding Worker Buses)</b>,
            selector: (row) => row.numberOfVehicles,
            wrap:"true"
        },
        {
            name: <b className="text-center">Distance Traveled for all Vehicles(Excluding Worker Buse) </b>,
            selector: (row) => row.distanceTraveledForAllVehicles,
            wrap:"true"
        },
        {
            name: <b className="text-center">Fuel Cunsumption(Excluding Worker Buse) </b>,
            selector: (row) => row.fuelConsumption,
            wrap:"true"
        },

        {
            name: <b>Supporting Document</b>,
            selector: (row) => row.supportingDocument,
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
            numberOfVehicles : "5",
            distanceTraveledForAllVehicles: "5240km",
            fuelConsumption: "524Liter",
            supportingDocument:"1 attachments",
            reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-secondary">Submitted</button></div>,
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },
         {
            numberOfVehicles : "2",
            distanceTraveledForAllVehicles: "430km",
            fuelConsumption: "43Liter",
           
            supportingDocument:"1 attachments",
            reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-success">Audited</button></div>,
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
    ];


    return(
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="../Images/SiteVehicles.png" alt="" />
                    <h5 className="mx-2">Site Vehicles</h5>
                    </div>
                    <div>
                        <button type="btn" className="btn btn-outline-success" onClick={handleShow}>
                            + Add
                        </button>
                    </div>  
                
                </div>

                <div className="my-3">

                <DataTable 
                    columns={columns} 
                    data={rows} 
                    fixedHeader
                    pagination
                    
                />
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
                            <img src="../Images/PeopleTransportation.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>PeopleTransportation</h4>
                                <h5>Site Vehicles</h5>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="Number of Vehicles"></label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Distance Traveled For all Vehicles </label>
                                <input type="text" className="form-control" placeholder="5430" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Consumption</label>
                                <input type="text" className="form-control" placeholder="543" />
                            </div>

                        </div>         

                        </div>

                            <div className="col-md-4">
                                <label htmlFor="">Supporting Document (If Any)</label>
                                <input type="file" className="form-control" placeholder="Upload document" />
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
                            <img src="../Images/PeopleTransportation.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>PeopleTransportation</h4>
                                <h5>Site Vehicles</h5>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="Number of  Vehicles"></label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Distance Traveled for all Vehicles</label>
                                <input type="text" className="form-control" placeholder="430" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Consumption </label>
                                <input type="text" className="form-control" placeholder="43" />
                            </div>

                        </div>         

                        </div>

                            <div className="col-md-4">
                                <label htmlFor="">Supporting Document (If Any)</label>
                                <input type="file" className="form-control" placeholder="Upload document" />
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
    )
}
export default SiteVehicles;