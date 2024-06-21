import React, {useState} from "react";

import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';

const ReductionEnerguTable =()=>{
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
            name: <b>Initiative Name</b>,
            selector: (row) => row.initiativename,
            wrap:"true"
        },
        {
            name: <b className="text-center">Source </b>,
            selector: (row) => row.source,
            wrap:"true"
        },
        {
            name: <b className="text-center">Energy Amount</b>,
            selector: (row) => row.energyamount,
            wrap:"true"
        },
        {
            name: <b>Unite</b>,
            selector: (row) => row.unite,
            wrap:"true",
            
        },

        {
            name: <b>Calculation Method</b>,
            selector: (row) => row.calculationmethod,
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
            initiativename: "LED Lighting",
            source: "Energy Consumption-Utility Provider Energy",
            energyamount: "1234567890",
            unite:"Joule",
            calculationmethod:"Estimated",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },

         {
            initiativename: "Fuel Optimization",
            source: "Energy Consumption-Non Renewable Resource",
            energyamount: "1234567890",
            unite:"kWh",
            calculationmethod:"Modeled",

            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
    ];

    const customStyles ={
        rows:{
            style:{
                minHeight: '72px', // override the row height
            }
        }
    }

    
    return (
       
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="/images/ReductionEnergyTable.png" alt="" />
                    <h5 className="mx-2">Reduction of Energy Consumption</h5>
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
                    striped
                    customStyles={customStyles}
                    
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
                            <img src="/images/soldEnergy_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Energy Consumption</h4>
                                <h5>Reduction of Energy Consumption</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Initiative Name</label>
                                <input type="date" className="form-control" placeholder="LED Lighting" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Source</label>
                            <select className="form-select" aria-label="Default select example">
                                    <option selected>Energy Consumption - Utility Provider Energy</option>
                                    <option value="1">Wind</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Energy Amount</label>
                                <input type="text" className="form-control" placeholder="24271"/>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Sold Energy</label>
                                <input type="text" className="form-control" placeholder="264271" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unite</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Joule</option>
                                    <option value="1">kWh</option>
                                </select>
                            </div>
                           
                            <div className="col-md-4">
                            <label htmlFor="">calculation Method</label>
                            <select className="form-select" aria-label="Default select example">
                                    <option selected>Estimated</option>
                                    <option value="1">kWh</option>
                            </select>
                            </div>

                        </div>

                       
                       </div>


                    <div className="my-4 d-flex justify-content-between">
                    <div>
                    <button type="btn" className="btn btn-outline-secondary" onClick={handleClose}> Cancel </button>
                    </div>
                    <div>
                    <button type="btn" className="btn btn-outline-success" onClick={handleClose}> Add </button>
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
                            <img src="/images/soldEnergy_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Energy Consumption</h4>
                                <h5>Reduction of Energy Consumption</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Initiative Name</label>
                                <input type="date" className="form-control" placeholder="LED Lighting" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Source</label>
                            <select className="form-select" aria-label="Default select example">
                                    <option selected>Energy Consumption - Utility Provider Energy</option>
                                    <option value="1">Wind</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Energy Amount</label>
                                <input type="text" className="form-control" placeholder="24271"/>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Sold Energy</label>
                                <input type="text" className="form-control" placeholder="264271" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unite</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Joule</option>
                                    <option value="1">kWh</option>
                                </select>
                            </div>
                           
                            <div className="col-md-4">
                            <label htmlFor="">calculation Method</label>
                            <select className="form-select" aria-label="Default select example">
                                    <option selected>Estimated</option>
                                    <option value="1">kWh</option>
                            </select>
                            </div>

                        </div>

                       
                       </div>


                    <div className="my-4 d-flex justify-content-between">
                    <div>
                    <button type="btn" className="btn btn-outline-secondary" onClick={handleCloseEdit}> Cancel </button>
                    </div>
                    <div>
                    <button type="btn" className="btn btn-outline-success" onClick={handleCloseEdit}> Add </button>
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
export default ReductionEnerguTable;