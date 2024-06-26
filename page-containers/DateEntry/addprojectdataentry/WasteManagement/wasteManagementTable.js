import React, {useState} from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';

const WasteManagementTable =()=>{
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
            name: <b>Kind of Waste</b>,
            selector: (row) => row.KindofWaste,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Waste Type </b>,
            selector: (row) => row.WasteType,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Main Collection <br />Company</b>,
            selector: (row) => row.MainCollection,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Total Waste <br/>Removed From Site</b>,
            selector: (row) => row.TotalWaste,
            wrap:"true",
            sortable: true,
        },
        {
            name: <div className="text-center"><b>Unit Of <br />Measurement</b></div>,
            selector: (row) => row.UnitOf,
            wrap:"true",
            sortable: true,
        },

        {
            name: <b className="text-center">No. Of Trips</b>,
            selector: (row) => row.NoOfTrips,
            wrap:"true",
            sortable: true,
        },
        {
            name: <div><b>Fuel Used By</b><br /> Trucks(litres)(one full trip, from source)</div>,
            selector: (row) => row.FuelUsedBy,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Supporting<br /> Document</b>,
            selector: (row) => row.SupportingDocument,
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
            KindofWaste: "Non Hazard",
            WasteType: "Solid",
            MainCollection: "Tadweer",
            TotalWaste: "1344",
            UnitOf: "kg",
            NoOfTrips: "1",
            FuelUsedBy:"10",
            SupportingDocument:"1 Attachment",

            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },

         {
            KindofWaste: "Non Hazard ",
            WasteType: "Liquid",
            MainCollection: "Company A",
            TotalWaste: "1452",
            UnitOf: "Liter",
            NoOfTrips: "2",
            FuelUsedBy:"25",
            SupportingDocument:"1 Attachment",

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


    return(
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="/images/wasteManagement.png" alt="" />
                    <h5 className="mx-2">Waste Management</h5>
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
    )
}
export default WasteManagementTable;