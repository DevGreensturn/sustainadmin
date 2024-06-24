import React, {useState,useEffect} from "react";
import { ADMINAPI } from "../../../../apiWrapper";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';

const RenowableEnergyTable =()=>{
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
            name: <b>Type</b>,
            selector: (row) => row.type,
            wrap:"true"
        },
        {
            name: <b className="text-center">Source </b>,
            selector: (row) => row.source,
            wrap:"true"
        },
        {
            name: <b className="text-center">Consumption</b>,
            selector: (row) => row.consumption,
            wrap:"true"
        },
        {
            name: <b>Unite</b>,
            selector: (row) => row.unite,
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
            type: "Solar",
            source: "Company X",
            consumption: "1344",
            unite:"Joule",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },

         {
            type: "Wind",
            source: "Company Y",
            consumption: "1452",
            unite:"kWh",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
    ];

    const fetchTable = async () => {
        try {
          await ADMINAPI({
            method: "GET",
            url: 'http://35.154.130.173:3002/api/v1/data-entry/non-renewable'
          }).then((data) => {
            let userData = data.response;
            console.log(userData)
            setRows(userData);
            console.log(userData, "ooo789090");
          });
        } catch (error) {
          console.log(error, "err456656");
        }
      };
      useEffect(() => {
        fetchTable();
      }, []);

    return (
       
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="/images/Renowable.png" alt="" />
                    <h5 className="mx-2">Renewable Sources</h5>
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
                            <img src="/images/Renowable_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Energy Consumption</h4>
                                <h5>Renewable Sources</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="">Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Solar</option>
                                    <option value="1">Wind</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                            <label htmlFor="">Source</label>
                            <input type="text" className="form-control" placeholder="Company X" />
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="">Consumption</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-6">
                            <label htmlFor="">Unite</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Joule</option>
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
                            <img src="/images/Renowable_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Energy Consumption</h4>
                                <h5>Renewable Sources</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="">Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Solar</option>
                                    <option value="1">Wind</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                            <label htmlFor="">Source</label>
                            <input type="text" className="form-control" placeholder="Company X" />
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="">Consumption</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-6">
                            <label htmlFor="">Unite</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Joule</option>
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
export default RenowableEnergyTable;