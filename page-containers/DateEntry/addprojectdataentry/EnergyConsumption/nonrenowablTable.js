import React, {useState} from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';

const NonrenowableTable =()=>{
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
            name: <b>Fuel Type</b>,
            selector: (row) => row.fuelType,
            wrap:"true"
        },
        {
            name: <b className="text-center">Usage </b>,
            selector: (row) => row.usage,
            wrap:"true"
        },
        {
            name: <b className="text-center">Volume</b>,
            selector: (row) => row.volume,
            wrap:"true"
        },
        {
            name: <b>Unite</b>,
            selector: (row) => row.unite,
            wrap:"true"
        },
        
        {
            name: <b>Energy Output <br/>(kWh) </b>,
            selector: (row) => row.EnergyOutput,
            wrap:"true"
        },

        {
            name: <b>Total Spending <br/>(AED)</b>,
            selector: (row) => row.TotalSpending,
            wrap:"true"
        },

        {
            name: <b>Supporting Document</b>,
            selector: (row) => row.supportingDocument,
            wrap:"true"
        },

        {
            name: <b>No. Of Trips </b>,
            selector: (row) => row.numberOfTrips,
            wrap:"true"
        },

        {
            name: <b>Fuel Used <span>by Trucks(L) (One full Trip)</span></b>,
            selector: (row) => row.fuelUsed,
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
            fuelType: "Diesel",
            usage: "Equipment",
            volume: "200",
            unite:"Liter",
            EnergyOutput: "-",
            TotalSpending: "1344",
            supportingDocument: "2 Attachments",
            numberOfTrips:"1",
            fuelUsed:"10",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },

         {
            fuelType: "Diesel",
            usage: "Generator",
            volume: "300",
            unite:"Liter",
            EnergyOutput: "1,000",
            TotalSpending: "1452",
            supportingDocument: "1 Attachment",
            numberOfTrips:"2",
            fuelUsed:"25",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
    ];


    return(
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="/images/nonRenowable.png" alt="" />
                    <h5 className="mx-2">Non Renewable Energy</h5>
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
                            <img src="/images/nonRenowable_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Energy Consumption</h4>
                                <h5>Non Renewable Sources</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Fuel Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Diesel</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Usage</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Equipment</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Total Spending(AED)</label>
                                <input type="text" className="form-control" placeholder="1234567890" />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Volume</label>
                                <input type="text" className="form-control" placeholder="200" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unite Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Litter</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Energy output(kWh)</label>
                                <input type="text" className="form-control" placeholder="-" />
                            </div>
                        </div>

                        <hr className="my-4"/>
                        
                        <div className="row my-3 ">
                            <h2>Logistics</h2>

                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="1" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Used by Trucks(L)(One full trip)</label>
                                <input type="text" className="form-control" placeholder="10" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Support Document (If Any)</label>
                                <input type="file" className="form-control" placeholder="Upload document" />
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
                            <img src="/images/nonRenowable_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Energy Consumption</h4>
                                <h5>Non Renewable Sources</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Fuel Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Diesel</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Usage</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Equipment</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Total Spending(AED)</label>
                                <input type="text" className="form-control" placeholder="1234567890" />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Volume</label>
                                <input type="text" className="form-control" placeholder="200" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unite Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Litter</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Energy output(kWh)</label>
                                <input type="text" className="form-control" placeholder="-" />
                            </div>
                        </div>

                        <hr className="my-4"/>
                        
                        <div className="row my-3 ">
                            <h2>Logistics</h2>

                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="1" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Used by Trucks(L)(One full trip)</label>
                                <input type="text" className="form-control" placeholder="10" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Support Document (If Any)</label>
                                <input type="file" className="form-control" placeholder="Upload document" />
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
    )
}
export default NonrenowableTable;