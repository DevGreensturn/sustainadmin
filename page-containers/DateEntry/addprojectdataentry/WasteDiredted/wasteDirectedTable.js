import React, { useState,useEffect } from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';
import { ADMINAPI } from "../../../../apiWrapper";
import { useRouter } from 'next/router';


const WasteDirectedTable = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const router = useRouter();
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const [rows, setRows] = useState()

    const [kindOfWaste, setKindOfWaste] = useState("");
    const [wasteType, setWasteType] = useState("");
    const [directedOperationType, setDirectedOperationType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("");
    const [supportingDocument, setSupportingDocument] = useState("");
    const [mainCollectionCompany, setMainCollectionCompany] = useState("");
    const [noOfTrips, setNumberOfTrips] = useState("");
    const [fuelUsed, setFuelUsed] = useState("");



const handleEdit = (row) => {
   setKindOfWaste (row.kindOfWaste);
   setWasteType(row.wasteType);
   setDirectedOperationType(row.directedOperationType);
   setQuantity(row.quantity);
   setUnit(row.unit);
   setSupportingDocument(row.supportingDocument);
   setMainCollectionCompany(row.mainCollectionCompany);
   setNumberOfTrips(row.noOfTrips);
   setFuelUsed(row.fuelUsed);
   setShowEdit(true)
}
    

     let wasteArr=["solid","liquid"];
     let disposalArr=["Incineration with energy recovery","Incineration without energy recovery","Landfilling","Others"];
     let unitArr=["Joule","Kwh","Wh"];
     let kindOfWasteArr=["non-hazard","hazard"];


    const handleCloseAddModal = () => {
        setShowAddModal(false);
        setFormData({

            kindOfWaste: "",
            wasteType: "",
            directedOperationType: "",
            quantity: 0,
            unit: "",
            supportingDocument: "",
            mainCollectionCompany: "",
            noOfTrips: "",
            fuelUsed: "",
            safeDelete: false,
        });
    };
    const handleChangeType = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setWasteType(selectedValue);
      };

      const handleChange = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setDirectedOperationType(selectedValue);
      };

      const handleChanges = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setUnit(selectedValue);
      };

      const handleType = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setKindOfWaste(selectedValue);
      };


    const handleAddRecord = async () => {
        const payload = {
            kindOfWaste: kindOfWaste,
            wasteType: wasteType,
            directedOperationType: directedOperationType,
            quantity: quantity,
            unit: unit,
            supportingDocument: supportingDocument,
            mainCollectionCompany: mainCollectionCompany,
            noOfTrips: noOfTrips,
            fuelUsed: fuelUsed

        };
        console.log("payload", payload)

        try {
            await ADMINAPI({
                url: "http://35.154.130.173:3002/api/v1/data-entry/direct-disposals/",
                method: "POST",
                body: { ...payload },
            })
                .then((data) => {
                    if (data.status === true) {
                       
                        setShow(false);
                        setTimeout(() => {
                         router.push("/addMonthlyData", { scroll: false });
                          
                        }, 100);
                        

                        return data;
                    } else {

                    }
                })
                .catch((err) => {

                });
        } catch (error) {
            console.log(error, "errorooo");
        }
    };
      
    const fetchTable = async () => {
        try {
          await ADMINAPI({
            url:"http://35.154.130.173:3002/api/v1/data-entry/direct-disposals/" ,
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
      useEffect(() => {
        fetchTable();
      }, []);

      const handleEditChanges=async () =>{
        const payload = {
            kindOfWaste: kindOfWaste,
            wasteType: wasteType,
            directedOperationType: directedOperationType,
            quantity: quantity,
            unit: unit,
            supportingDocument: supportingDocument,
            mainCollectionCompany: mainCollectionCompany,
            noOfTrips: noOfTrips,
            fuelUsed: fuelUsed
        }
      
      
      try {
        await ADMINAPI({
          url: "http://35.154.130.173:3002/api/v1/data-entry/direct-disposals/",
          method: "put",
          body: { ...payload },
        })
          .then((data) => {
            if (data.status === true) {
              setShowEdit(false);
              setTimeout(() => {
                navigate.push("/addMonthlyData", { scroll: false });
              }, 100);
              fetchTable();
              return data;
            } else {
              
            }
          })
          .catch((err) => {
           
          });
      } catch (error) {
        console.log(error, "errorooo");
      }
    };

    const columns = [

        {
            name: <b>Waste Type</b>,
            selector: (row) => row.wasteType,
            wrap: "true"
        },
        {
            name: <b className="text-center">Kind of Waste </b>,
            selector: (row) => row.kindOfWaste,
            wrap: "true"
        },
        {
            name: <b className="text-center">Main Collection <br />Company</b>,
            selector: (row) => row.mainCollectionCompany,
            wrap: "true"
        },
        {
            name: <b className="text-center">Disposal Operation Type</b>,
            selector: (row) => row.directedOperationType,
            wrap: "true"
        },
        {
            name: <b className="text-center">Quantity</b>,
            selector: (row) => row.quantity,
            wrap: "true"
        },
        {
            name: <div className="text-center"><b>Unit Of Measurement</b></div>,
            selector: (row) => row.unit,
            wrap: "true"
        },

        {
            name: <b className="text-center">No. Of Trips</b>,
            selector: (row) => row.noOfTrips,
            wrap: "true"
        },
        {
            name: <div><b>Fuel Used By</b><br /> Trucks(litres)(one full trip, from source)</div>,
            selector: (row) => row.fuelUsed,
            wrap: "true"
        },
        {
            name: <b className="text-center">Supporting Document</b>,
            selector: (row) => row.supportingDocument,
            wrap: "true"
        },

        {
            name: <b>Action</b>,
            cell: row => (
                <div className="d-flex align-items-center">
                    <FaRegEdit 
                        style={{ color: "secondary", fontSize: "20px", cursor: 'pointer' }} 
                        onClick={() => handleEdit(row)} 
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


    const customStyles = {
        rows: {
            style: {
                minHeight: '72px',
            }
        }
    }


    return (
        <section>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img src="/images/wasteDirected.png" alt="" />
                    <h5 className="mx-2">Waste Directed to Disposal </h5>
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
                    <Modal.Header closeButton style={{ border: "0" }}></Modal.Header>
                    <Modal.Body>
                        <>
                            <div>
                                <div className="d-flex align-items-center">
                                    <img src="/images/wasteDiredcted_Modal.png" alt="" className="img-fluid" />
                                    <div className="mx-2">
                                        <h4>Waste Directed to Disposal</h4>

                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <label htmlFor="">Kind of Waste</label>
                                        <select className="form-select" aria-label="Default select example"
                                         onChange={(e) => handleType(e)}
                                         value={kindOfWaste}>  {kindOfWasteArr?.map((category, indexCat) => (
                                             <option key={indexCat} value={category}>
                                               {category}
                                             </option>
                                         
                                         ))}
                                            {/* <option selected>non hazard</option>
                                            <option value="1">hazard</option> */}

                                        </select>
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">Waste Type</label>
                                        <select className="form-select" aria-label="Default select example"
                                        onChange={(e) => handleChangeType(e)}
                                        value={wasteType}>  {wasteArr?.map((category, indexCat) => (
                                            <option key={indexCat} value={category}>
                                              {category}
                                            </option>
                                        
                                        ))}
                                            {/* <option selected>solid</option>
                                            <option value="1">liquid</option> */}
                                        </select>
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">Disposal Operation Type</label>
                                        <select className="form-select" aria-label="Default select example"
                                         onChange={(e) => handleChange(e)}
                                         value={directedOperationType}>  {disposalArr?.map((category, indexCat) => (
                                             <option key={indexCat} value={category}>
                                               {category}
                                             </option>
                                         
                                         ))}
                                            {/* <option selected>Reuse</option>
                                            <option value="1">Recycling</option>
                                            <option value="2">Others</option> */}
                                        </select>
                                    </div>


                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <label htmlFor="">Quantity</label>
                                        <input type="text" className="form-control" placeholder="123" 
                                           value={quantity} onChange={(e)=> setQuantity(e.target.value)} />
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">Unit of Measurement</label>

                                        <select className="form-select" aria-label="Default select example"
                                         onChange={(e) => handleChanges(e)}
                                         value={unit}>  {unitArr?.map((category, indexCat) => (
                                             <option key={indexCat} value={category}>
                                               {category}
                                             </option>
                                         
                                         ))}
                                            {/* <option selected>Wh</option>
                                            <option selected>Kwh</option>
                                            <option selected>Joule</option> */}

                                        </select>
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">Supporting Document (If Any)</label>
                                        <input type="file" className="form-control" placeholder="Upload Documents" 
                                           value={supportingDocument} onChange={(e)=> setSupportingDocument(e.target.value)} />
                                    </div>


                                </div>
                                
                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <label htmlFor="">No Of Trips</label>
                                        <input type="text" className="form-control" placeholder="" value={noOfTrips} onChange={(e)=> setNumberOfTrips(e.target.value)} />
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">fuel UsedBy Trucks</label>
                                        <input type="text" className="form-control" placeholder="" 
                                         value={fuelUsed} onChange={(e)=> setFuelUsed(e.target.value)} />
                                    </div>

                                    

                                    <div className="col-md-4">
                                        <label htmlFor="">Main Collection Of Company</label>
                                        <input type="text" className="form-control" placeholder=""
                                           value={mainCollectionCompany} onChange={(e)=> setMainCollectionCompany(e.target.value)} />
                                    </div>


                                </div>
                                  

                            </div>


                            <div className="my-4 d-flex justify-content-between">
                                <div>
                                    <button type="btn" className="btn btn-outline-secondary" onClick={handleClose}> Close </button>
                                </div>
                                <div>
                                    <button type="btn" className="btn btn-outline-success" onClick={handleAddRecord}> Save Changes </button>
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
                    <Modal.Header closeButton style={{ border: "0" }}>
                        <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                            <div>
                                <div className="d-flex align-items-center">
                                    <img src="/images/wasteDiredcted_Modal.png" alt="" className="img-fluid" />
                                    <div className="mx-2">
                                        <h4>Waste Directed to Disposal</h4>

                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <label htmlFor="">Kind of Waste</label>
                                        <select className="form-select" aria-label="Default select example"
                                         onChange={(e) => handleType(e)}
                                         value={kindOfWaste}>  {kindOfWasteArr?.map((category, indexCat) => (
                                             <option key={indexCat} value={category}>
                                               {category}
                                             </option>
                                         
                                         ))}
                                            {/* <option selected>non hazard</option>
                                            <option value="1">hazard</option> */}

                                        </select>
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">Waste Type</label>
                                        <select className="form-select" aria-label="Default select example"
                                        onChange={(e) => handleChangeType(e)}
                                        value={wasteType}>  {wasteArr?.map((category, indexCat) => (
                                            <option key={indexCat} value={category}>
                                              {category}
                                            </option>
                                        
                                        ))}
                                           

                                        </select>
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">Disposal Operation Type</label>
                                        <select className="form-select" aria-label="Default select example"
                                         onChange={(e) => handleChange(e)}
                                         value={directedOperationType}>  {disposalArr?.map((category, indexCat) => (
                                             <option key={indexCat} value={category}>
                                               {category}
                                             </option>
                                         
                                         ))}
                                            {/* <option selected>Reuse</option> */}
                                            {/* <option value="1">Recycling</option>
                                            <option value="2">Others</option> */}
                                        </select>
                                    </div>


                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <label htmlFor="">Quantity</label>
                                        <input type="text" className="form-control" placeholder="123" 
                                         value={quantity} onChange={(e)=> setQuantity(e.target.value)} />
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">Unit of Measurement</label>

                                        <select className="form-select" aria-label="Default select example"
                                         onChange={(e) => handleChanges(e)}
                                         value={unit}>  {unitArr?.map((category, indexCat) => (
                                             <option key={indexCat} value={category}>
                                               {category}
                                             </option>
                                         
                                         ))}
                                            {/* <option selected>kg</option>
                                            <option value="1">Wh</option>
                                            <option value="2">Kwh</option>
                                            <option value="3">Joule</option> */}
                                        </select>
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">Supporting Document (If Any)</label>
                                        <input type="file" className="form-control" placeholder="Upload Documents" 
                                         value={supportingDocument} onChange={(e)=> setSupportingDocument(e.target.value)} />
                                    </div>
                                    <div className="row mt-3">
                                    <div className="col-md-4">
                                        <label htmlFor="">No Of Trips</label>
                                        <input type="text" className="form-control" placeholder="" value={noOfTrips} onChange={(e)=> setNumberOfTrips(e.target.value)} />
                                    </div>
                                    </div>
                                    
                               

                                    <div className="col-md-4">
                                        <label htmlFor="">fuel UsedBy Trucks</label>
                                        <input type="text" className="form-control" placeholder="" 
                                         value={fuelUsed} onChange={(e)=> setFuelUsed(e.target.value)} />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="">Main Collection Of Company</label>
                                        <input type="text" className="form-control" placeholder=""
                                           value={mainCollectionCompany} onChange={(e)=> setMainCollectionCompany(e.target.value)} />
                                    </div>

                                </div>
                                
                                
                            </div>

                            <div className="my-4 d-flex justify-content-between">
                                <div>
                                    <button type="btn" className="btn btn-outline-secondary" onClick={handleCloseEdit}> Close </button>
                                </div>
                                <div>
                                    <button type="btn" className="btn btn-outline-success" onClick={handleEditChanges}> Save Changes </button>
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
                    <Modal.Header closeButton style={{ border: "0" }}>
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                            <div className=" text-center">
                                <h5>Are you sure want to delete this record.</h5>
                            </div>
                            <div className="mt-4 d-flex justify-content-between">
                                <div>
                                    <button type="btn" className="btn btn-outline-secondary rounded-pill" onClick={handleCloseDelete} style={{ width: "10rem" }}> Close </button>
                                </div>
                                <div>
                                    <button type="btn" className="btn btn-outline-success rounded-pill" onClick={handleCloseDelete} style={{ width: "10rem" }}>Yes </button>
                                </div>
                            </div>
                        </>
                    </Modal.Body>
                </Modal>

            </>
        </section>
    )
}
export default WasteDirectedTable;

