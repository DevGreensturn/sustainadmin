import React, {useState} from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';

const BottledWaterTable =()=>{
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
            name: <b className="text-center">Drinking <br />Non Drinking Water</b>,
            selector: (row) => row.DrinkingWater,
            wrap:"true"
        },
        {
            name: <b className="text-center">Water Bottle Capacity <br />(Litres)</b>,
            selector: (row) => row.WaterBottleCapacity,
            wrap:"true"
        },
        {
            name: <b className="text-center">Water Bottle<br /> Quantity</b>,
            selector: (row) => row.WaterBottle,
            wrap:"true"
        },
        {
            name: <b>No. of Trips</b>,
            selector: (row) => row.NoofTrips,
            wrap:"true"
        },
        
        {
            name: <div className="text-center"><b>Fuel used by Trucks</b><br /> (litres)(one full trip, from source)</div>,
            selector: (row) => row.Fuelusedby,
            wrap:"true"
        },

        {
            name: <b>Supporting Document</b>,
            selector: (row) => row.SupportingDocument,
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
            DrinkingWater: "Drinking Water",
            WaterBottleCapacity: "0.5",
            WaterBottle: "1344",
            NoofTrips:"2",
            Fuelusedby: "25",
            SupportingDocument:"1 Attachment",

            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },

         {
            DrinkingWater: "Drinking Water",
            WaterBottleCapacity: "0.33",
            WaterBottle: "1452",
            NoofTrips:"1",
            Fuelusedby: "10",
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
                    <img src="/images/bottled_water.png" alt="" />
                    <h5 className="mx-2">Bottled Water</h5>
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
                            <img src="/images/bottled_water_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Water Consumption</h4>
                                <h5>Bottled Water</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Drinking/Non Drinking Water</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Drinking/Non Drinking Water</option>
                                    <option value="1">Drinking Water</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Water Bottle Capacity (Liters)</label>
                            <input type="text" className="form-control" placeholder="0,5" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Water Bottle Quantity</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                        </div>

                        <div className="row mt-3">
                            

                            <div className="col-md-4">
                            <label htmlFor="">No. of Trips</label>
                             <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Fuel Used by Trucks (Liters)</label>

                            <select className="form-select" aria-label="Default select example">
                                    <option selected>1344</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Supporting Document (If Any)</label>
                            <input type="file" className="form-control" placeholder="" />
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
                            <img src="/images/bottled_water_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Water Consumption</h4>
                                <h5>Bottled Water</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Drinking/Non Drinking Water</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Drinking/Non Drinking Water</option>
                                    <option value="1">Drinking Water</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Water Bottle Capacity (Liters)</label>
                            <input type="text" className="form-control" placeholder="0,5" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Water Bottle Quantity</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                        </div>

                        <div className="row mt-3">
                            

                            <div className="col-md-4">
                            <label htmlFor="">No. of Trips</label>
                             <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Fuel Used by Trucks (Liters)</label>

                            <select className="form-select" aria-label="Default select example">
                                    <option selected>1344</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Supporting Document (If Any)</label>
                            <input type="file" className="form-control" placeholder="" />
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
export default BottledWaterTable;