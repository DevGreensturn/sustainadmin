import React, {useState} from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';

const BuildingMaterialTable =()=>{
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
            name: <b>Material Type</b>,
            selector: (row) => row.MaterialType,
            wrap:"true"
        },
        {
            name: <b className="text-center">Material <br />Source </b>,
            selector: (row) => row.MaterialSource,
            wrap:"true"
        },
        {
            name: <b className="text-center">Material <br/>Classification</b>,
            selector: (row) => row.MaterialClassification,
            wrap:"true"
        },
        {
            name: <b className="text-center">Supplier /<br/> subcontractor</b>,
            selector: (row) => row.Suppliersubcontractor,
            wrap:"true"
        },
        {
            name: <div className="text-center"><b>Road Distance</b><br/>(km)(b/w airport/port or factory/
            warehouse and the project)</div>,
            selector: (row) => row.RoadDistance,
            wrap:"true"
        },

        {
            name: <b className="text-center">No. Of Trips</b>,
            selector: (row) => row.NoOfTrips,
            wrap:"true"
        },
        {
            name: <div><b>Fuel Used By</b><br /> Trucks(litres)(one full trip, from source)</div>,
            selector: (row) => row.FuelUsedBy,
            wrap:"true"
        },
        {
            name: <b className="text-center">Weight as per the BOQ(Tonnes)</b>,
            selector: (row) => row.Weightasper,
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
            MaterialType: "Rebar",
            MaterialSource: "Abu Dhabi",
            MaterialClassification: "Non Renewable Material",
            Suppliersubcontractor: "Supplier North",
            RoadDistance: "1344",
            NoOfTrips: "1",
            FuelUsedBy:"20",
            Weightasper:"1344",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },

         {
            MaterialType: "Asphalt",
            MaterialSource: "Abu Dhabi",
            MaterialClassification: "Non Renewable Material",
            Suppliersubcontractor: "Supplier Camellias",
            RoadDistance: "1452",
            NoOfTrips: "1",
            FuelUsedBy:"30",
            Weightasper:"1452",
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
                    <img src="/images/BuildingMaterials.png" alt="" />
                    <h5 className="mx-2">Building Materials</h5>
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
                            <img src="/images/BuildingMaterials_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Building Materials</h4>
                             
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Material Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Rebar</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                               
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Material Source</option>
                                    <option value="1">Abu Dhabi</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Material Classification</label>
                                <input type="text" className="form-control" placeholder="Non Renewable Matarial" />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Supplier / subcontractor</label>
                                <input type="text" className="form-control" placeholder="Supplier North" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Weight as per the BOQ(Tonnes)</label>
                            <input type="text" className="form-control" placeholder="1322" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Quantification Method</label>
                                <input type="text" className="form-control" placeholder="Estimated" />
                            </div>
                        </div>
 
                        <div className="row mt-3 ">
                            
                            <div className="col-md-4">
                                <label htmlFor="">Material Cost(AED)</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Percentage of total material procurement that is recycled(%)</label>
                                <input type="text" className="form-control" placeholder="20%" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Supporting Document (If Any)</label>
                                <input type="file" className="form-control" placeholder="Upload Documents" />
                            </div>
                        </div>

                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="1" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Road Distance</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Used by Trucks (Liters)</label>
                                <input type="text" className="form-control" placeholder="1344" />
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
                            <img src="/images/BuildingMaterials_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Building Materials</h4>
                             
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Material Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Rebar</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                               
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Material Source</option>
                                    <option value="1">Abu Dhabi</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Material Classification</label>
                                <input type="text" className="form-control" placeholder="Non Renewable Matarial" />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Supplier / subcontractor</label>
                                <input type="text" className="form-control" placeholder="Supplier North" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Weight as per the BOQ(Tonnes)</label>
                            <input type="text" className="form-control" placeholder="1322" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Quantification Method</label>
                                <input type="text" className="form-control" placeholder="Estimated" />
                            </div>
                        </div>
 
                        <div className="row mt-3 ">
                            
                            <div className="col-md-4">
                                <label htmlFor="">Material Cost(AED)</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Percentage of total material procurement that is recycled(%)</label>
                                <input type="text" className="form-control" placeholder="20%" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Supporting Document (If Any)</label>
                                <input type="file" className="form-control" placeholder="Upload Documents" />
                            </div>
                        </div>

                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="1" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Road Distance</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Used by Trucks (Liters)</label>
                                <input type="text" className="form-control" placeholder="1344" />
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
export default BuildingMaterialTable;