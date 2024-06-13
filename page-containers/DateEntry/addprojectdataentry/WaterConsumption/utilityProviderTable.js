import React, {useState} from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';

const Utilityprovidertable =()=>{
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
            name: <b>Meter No.</b>,
            selector: (row) => row.meterNo,
            wrap:"true"
        },
        {
            name: <b className="text-center">Account No.</b>,
            selector: (row) => row.accountNo,
            wrap:"true"
        },
        {
            name: <b className="text-center">Service Provider</b>,
            selector: (row) => row.serviceprovider,
            wrap:"true"
        },
        {
            name: <b>Reading Date</b>,
            selector: (row) => row.readingdate,
            wrap:"true"
        },
        
        {
            name: <b>Meter Reading</b>,
            selector: (row) => row.meterreading,
            wrap:"true"
        },

        {
            name: <b style={{textAlign:"center"}}>Drinking/<br /> Non Drinking Wate</b>,
            selector: (row) => row.Drinking,
            wrap:"true"
        },

        {
            name: <b>Consumption</b>,
            selector: (row) => row.consumption,
            wrap:"true"
        },

        {
            name: <b>Unit </b>,
            selector: (row) => row.unit,
            wrap:"true"
        },

        {
            name: <b>Supporting <br/>Document</b>,
            selector: (row) => row.supporting,
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
            meterNo: "0001",
            accountNo: "1234567890",
            serviceprovider: "DEWA",
            readingdate:"10 March 2024",
            meterreading: "1344",
            Drinking: "Drinking Water",
            consumption: "200",
            unit:"US Gallon",
            supporting: "1 Attachment",
            
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },

         {
            meterNo: "0002",
            accountNo: "1234567890",
            serviceprovider: "DEWA",
            readingdate:"23 March 2024",
            meterreading: "1452",
            Drinking: "Drinking Water",
            consumption: "1,000",
            unit:"Liter",
            supporting: "1 Attachment",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
    ];


    return(
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="../Images/utilityProviderWater.png" alt="" />
                    <h5 className="mx-2">Utility Provider Water</h5>
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
                            <img src="../Images/WaterComsuption_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Water Consumption</h4>
                                <h5>Non Renewable Sources</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Meter No.</label>
                                <input type="text" className="form-control" placeholder="0001" />

                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Account No.</label>
                                <input type="text" className="form-control" placeholder="54345658" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Service Provider</label>
                                <input type="text" className="form-control" placeholder="DEWA" />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Reading Date</label>
                                <input type="date" className="form-control" placeholder="" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Meter Reading</label>
                            <input type="date" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Drinking/Non Drinking Water</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Drinking Water</option>
                                    <option value="1">Non Drinking Water</option>
                                   
                                </select>
                            </div>
                        </div>

                        
                        <div className="row my-3 ">
                            
                            <div className="col-md-4">
                                <label htmlFor="">Consumption</label>
                                <input type="text" className="form-control" placeholder="200" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Unit</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Us Gallon</option>
                                    <option value="1">Litre</option>
                                    <option value="1">Cubic Meter</option>
                                   
                                 
                                </select>
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
                            <img src="../Images/WaterComsuption_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Water Consumption</h4>
                                <h5>Non Renewable Sources</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Meter No.</label>
                                <input type="text" className="form-control" placeholder="0001" />

                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Account No.</label>
                                <input type="text" className="form-control" placeholder="54345658" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Service Provider</label>
                                <input type="text" className="form-control" placeholder="DEWA" />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Reading Date</label>
                                <input type="date" className="form-control" placeholder="" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Meter Reading</label>
                            <input type="date" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Drinking/Non Drinking Water</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Drinking Water</option>
                                    <option value="1">Non Drinking Water</option>
                                   
                                </select>
                            </div>
                        </div>

                        
                        <div className="row my-3 ">
                            
                            <div className="col-md-4">
                                <label htmlFor="">Consumption</label>
                                <input type="text" className="form-control" placeholder="200" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Unit</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Us Gallon</option>
                                    <option value="1">Litre</option>
                                    <option value="1">Cubic Meter</option>
                                   
                                </select>
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
export default Utilityprovidertable;