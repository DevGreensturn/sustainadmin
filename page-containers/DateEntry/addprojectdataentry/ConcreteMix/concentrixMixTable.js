import React, {useState} from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';

const ConcentrixMixTable =()=>{
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
            name: <b>Concrete <br />Mixes No.</b>,
            selector: (row) => row.ConcreteMix,
            wrap:"true"
        },
        {
            name: <b className="text-center">Type </b>,
            selector: (row) => row.type,
            wrap:"true"
        },
        {
            name: <b className="text-center">Volume</b>,
            selector: (row) => row.volume,
            wrap:"true"
        },
        {
            name: <b className="text-center">Proportion<br/> of Total used(%)</b>,
            selector: (row) => row.Proportion,
            wrap:"true"
        },
        {
            name: <b className="text-center">28 Days<br /> Strength(N/mm2) </b>,
            selector: (row) => row.Strength,
            wrap:"true"
        },

        {
            name: <b className="text-center">Cement Content <br/>(kg/m3)</b>,
            selector: (row) => row.CementContent,
            wrap:"true"
        },
        {
            name: <b className="text-center">Slag Content<br/>(Kg/m3)</b>,
            selector: (row) => row.SlagContent,
            wrap:"true"
        },
        {
            name: <b className="text-center">Fly Ash Content <br />(Kg/m3)</b>,
            selector: (row) => row.FlyAshContent,
            wrap:"true"
        },

        {
            name: <b className="text-center">Silica Fume<br /> Content(kg/m3)</b>,
            selector: (row) => row.SilicaFume,
            wrap:"true"
        },

        {
            name: <b className="text-center">Slag Content<br/>(Kg/m3)</b>,
            selector: (row) => row.SlagContent,
            wrap:"true"
        },

        {
            name: <b className="text-center">Fly Ash Content<br/>(Kg/m3)</b>,
            selector: (row) => row.FlyAsh,
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
            ConcreteMix: "0001",
            type: "Precast",
            volume: "1344",
            Proportion: "1344",
            Strength: "1344",
            CementContent: "1344",
            SlagContent:"1344",
            FlyAshContent:"1344",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },

         {
            ConcreteMix: "0001",
            type: "Precast",
            volume: "1344",
            Proportion: "1344",
            Strength: "1344",
            CementContent: "1344",
            SlagContent:"1344",
            FlyAshContent:"1344",
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
                    <img src="/images/concereteMix.png" alt="" />
                    <h5 className="mx-2">Concerete Mix</h5>
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
                            <img src="/images/ConcentrixMix_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Concerete Mix</h4>
                             
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Concrete Mixes No.</label>
                                <input type="text" className="form-control" placeholder="0001" />

                               
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Precast</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Volume</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Proportion of Total Used (%)</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">28 Days Strength (N/mm2)</label>
                            <input type="text" className="form-control" placeholder="1344" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Cement Content (kg/m3)</label>
                                <input type="text" className="form-control" placeholder="Add Text" />
                            </div>
                        </div>
 
                        <div className="row mt-3 ">
                            
                            <div className="col-md-4">
                                <label htmlFor="">Slag Content (Kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fly Ash Content (Kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Silica Fume Content (Kg/m3)</label>
                                <input type="file" className="form-control" placeholder="1322" />
                            </div>
                        </div>

                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">Natural Pozzolan Content(kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Limestone Content (kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Embodied GHG (CO2e/m3)</label>
                                <input type="file" className="form-control" placeholder="1322" />
                            </div>
                        </div>


                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Used by Trucks (Liters)</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Precast</option>
                                    <option value="1">One</option>
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
                    <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                       <div>
                        <div className="d-flex align-items-center">
                            <img src="/images/ConcentrixMix_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Concerete Mix</h4>
                             
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Concrete Mixes No.</label>
                                <input type="text" className="form-control" placeholder="0001" />

                               
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Precast</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Volume</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Proportion of Total Used (%)</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">28 Days Strength (N/mm2)</label>
                            <input type="text" className="form-control" placeholder="1344" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Cement Content (kg/m3)</label>
                                <input type="text" className="form-control" placeholder="Add Text" />
                            </div>
                        </div>
 
                        <div className="row mt-3 ">
                            
                            <div className="col-md-4">
                                <label htmlFor="">Slag Content (Kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fly Ash Content (Kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Silica Fume Content (Kg/m3)</label>
                                <input type="file" className="form-control" placeholder="1322" />
                            </div>
                        </div>

                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">Natural Pozzolan Content(kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Limestone Content (kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Embodied GHG (CO2e/m3)</label>
                                <input type="file" className="form-control" placeholder="1322" />
                            </div>
                        </div>


                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Used by Trucks (Liters)</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Precast</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
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
export default ConcentrixMixTable;