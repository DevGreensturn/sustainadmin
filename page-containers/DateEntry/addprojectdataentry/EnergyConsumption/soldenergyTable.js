import React, {useState,useEffect} from "react";

import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';

const SoldenergyTable =({projectId, projectPack})=>{
    const [show, setShow] = useState(false);
    const handleClose =()=> setShow(false);
    const handleShow =()=>setShow(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit =()=> setShowEdit(false);
    const handleShowEdit =()=>setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete =()=> setShowDelete(false);
    const handleShowDelete =()=> setShowDelete(true);

    const [soldEnergy,setsoldEnergy] = useState("");

    const [rows, setRows] = useState([]);

    const columns = [
    	
        {
            name: <b>Energy Type</b>,
            selector: (row) => row.energyType,
            wrap:"true"
        },
        {
            name: <b className="text-center">Reading Date </b>,
            selector: (row) => row.readingDate,
            wrap:"true"
        },
        {
            name: <b className="text-center">Sold Energy</b>,
            selector: (row) => row.soldenergy,
            wrap:"true"
        },
        {
            name: <b>Unit</b>,
            selector: (row) => row.unit,
            wrap:"true"
        },

        {
            name: <b>Supporting Document</b>,
            selector: (row) => row.supportingdocument,
            wrap:"true"
        },

        {
            name: <b>Action</b>,
            cell: row => (
                <div className="d-flex align-items-center">
                    <FaRegEdit 
                        style={{ color: "secondary", fontSize: "20px", cursor: 'pointer' }} 
                        onClick={() => handleShowEdit(row)} 
                    />
                    <MdDeleteForever 
                        className="mx-2" 
                        style={{ color: "red", fontSize: "20px", cursor: 'pointer' }} 
                        onClick={() => handleShowDelete(row)} 
                    />
                </div>
            ),
            wrap: true,
            width: "180px"
        },
      ];
    
    // const rows = [
    //     {
    //         energyType: "Electricity",
    //         readingDate: "20 March 2024",
    //         soldenergy: "1,500",
    //         unite:"Joule",
    //         supportingdocument:"1 Attachment",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
    //     },

    //      {
    //         energyType: "Cooling",
    //         readingDate: "25 March 2024",
    //         soldenergy: "2,000",
    //         unite:"kWh",
    //         supportingdocument:"1 Attachment",

    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
    //      },
    // ];

    const customStyles ={
        rows:{
            style:{
                minHeight: '72px', // override the row height
            }
        }
    }

    const handleSaveChanges = async () => {
        const payload = {
          // Construct payload based on your form data
          projectId:projectId,
          packageId:projectPack,
          energyType:energyType,
          soldEnergy:soldEnergy,
          unit:unit,
          readingDate:readingDate,
          supportingDocument: "2 attachments"
        };
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/sold`,
            method: "POST",
            body: { ...payload },
          })
            .then((data) => {
              if (data.status === true) {
                setShow(false);
                setTimeout(() => {
                  navigate.push("/addMonthlyData", { scroll: false });
                }, 100);
                fetchTable();
    
                return data;
              } else {
                // toast.error(data?.message);
              }
            })
            .catch((err) => {
              //   toast.error(err?.message);
            });
        } catch (error) {
          console.log(error, "errorooo");
        }
      };
      const fetchTable = async () => {
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/energy`,
            method: "GET",
          }).then((data) => {
            let userData = data.response;
            setRows(userData);
            console.log(userData, "ooooooossssssss");
          });
        } catch (error) {
          console.log(error, "errorooo");
        }
      };

    return (
       
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="/images/soldEnergy.png" alt="" />
                    <h5 className="mx-2">Sold Energy</h5>
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
                                <h5>Sold Energy</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="">Energy Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Electricity</option>
                                    <option value="1">Wind</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                            <label htmlFor="">Reading Date</label>
                            <input type="date" className="form-control" placeholder="Company X" />
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Sold Energy</label>
                                <input type="text" className="form-control" placeholder="1,544" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unit</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Joule</option>
                                    <option value="1">kWh</option>
                                </select>
                            </div>
                           
                            <div className="col-md-4">
                            <label htmlFor="">Supporting Document (if Any)</label>
                                <input type="file" className="form-control" />
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
                                <h5>Sold Energy</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="">Energy Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Electricity</option>
                                    <option value="1">Wind</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                            <label htmlFor="">Reading Date</label>
                            <input type="date" className="form-control" placeholder="Company X" />
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Sold Energy</label>
                                <input type="text" className="form-control" placeholder="1,544" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unite</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Joule</option>
                                    <option value="1">kWh</option>
                                </select>
                            </div>
                           
                            <div className="col-md-4">
                            <label htmlFor="">Supporting Document (if Any)</label>
                                <input type="file" className="form-control" />
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
export default SoldenergyTable;