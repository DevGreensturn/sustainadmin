// import React, { useState, useEffect } from "react";
// import DataTable from "react-data-table-component";
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { MdDeleteForever } from "react-icons/md";
// import { FaRegEdit } from "react-icons/fa";
// import { RiFilter2Fill } from "react-icons/ri";
// import { Modal, Button } from 'react-bootstrap';
// import { ADMINAPI } from "../../../../apiWrapper";
// import { useRouter } from 'next/router';



// const WasteDirectedTable = ({ projectId, projectPack }) => {


//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => {
//         setKindOfWaste("");
//         setWasteType("");
//         setDirectedOperationType("");
//         setQuantity("")
//         setUnit("")
//         setSupportingDocument("")
//         setMainCollectionCompany("")
//         setNumberOfTrips("")
//         setFuelUsed("")
//         setShow(true);

//     }

//     const router = useRouter();
//     const [showEdit, setShowEdit] = useState(false);
//     const handleCloseEdit = () => setShowEdit(false);



//     const [showDelete, setShowDelete] = useState(false);
//     const handleCloseDelete = () => setShowDelete(false);
//     const handleShowDelete = (row) => {
//         setWasteId(row._id)
//         setShowDelete(true);
//     }
//     const [rows, setRows] = useState()

//     const [kindOfWaste, setKindOfWaste] = useState("");
//     const [wasteType, setWasteType] = useState("");
//     const [directedOperationType, setDirectedOperationType] = useState("");
//     const [quantity, setQuantity] = useState("");
//     const [unit, setUnit] = useState("");
//     const [supportingDocument, setSupportingDocument] = useState("");
//     const [mainCollectionCompany, setMainCollectionCompany] = useState("");
//     const [noOfTrips, setNumberOfTrips] = useState("");
//     const [fuelUsed, setFuelUsed] = useState("");
//     const [wasteId, setWasteId] = useState("");
//     const [error, setError] = useState({});




//     const handleEdit = (row) => {
//         setKindOfWaste(row.kindOfWaste);
//         setWasteType(row.wasteType);
//         setDirectedOperationType(row.directedOperationType);
//         setQuantity(row.quantity);
//         setUnit(row.unit);
//         setSupportingDocument(row.supportingDocument);
//         setMainCollectionCompany(row.mainCollectionCompany);
//         setNumberOfTrips(row.noOfTrips);
//         setFuelUsed(row.fuelUsed);
//         setWasteId(row._id)
//         setShowEdit(true)
//     }


//     let wasteArr = ["solid", "liquid"];
//     let disposalArr = ["Incineration with energy recovery", "Incineration without energy recovery", "Landfilling", "Others"];
//     let unitArr = ["Joule", "Kwh", "Wh"];
//     let kindOfWasteArr = ["non-hazard", "hazard"];


//     const handleChangeType = (e) => {
//         e.preventDefault();
//         const selectedValue = e.target.value;
//         console.log(selectedValue, "Selected Value");
//         setWasteType(selectedValue);
//         if(selectedValue!==""){
//             let err = {...error}
//             err.wasteType=""
//             setError(err)
//           }
//     };
//    

//     const handleChange = (e) => {
//         e.preventDefault();
//         const selectedValue = e.target.value;
//         console.log(selectedValue, "Selected Value");
//         setDirectedOperationType(selectedValue);
//         if(selectedValue!==""){
//             let err = {...error}
//             err.directedOperationType=""
//             setError(err)
//           }
//     };

//     const handleChanges = (e) => {
//         e.preventDefault();
//         const selectedValue = e.target.value;
//         console.log(selectedValue, "Selected Value");
//         setUnit(selectedValue);
//         if(selectedValue!==""){
//             let err = {...error}
//             err.unit=""
//             setError(err)
//           }
//     };

//     const handleType = (e) => {
//         e.preventDefault();
//         const selectedValue = e.target.value;
//         console.log(selectedValue, "Selected Value");
//         setKindOfWaste(selectedValue);
//         if(selectedValue!==""){
//             let err = {...error}
//             err.kindOfWaste=""
//             setError(err)
//           }
//     };


//     const handleAddRecord = async (e) => {
//         e.preventDefault();
//         switch ("") {
//             case kindOfWaste:
//                 let error1 = { ...error, kindOfWaste: "KindOfWaste is required" }
//                 setError(error1);
//                 break;
//             case wasteType:
//                 let error2 = { ...error, wasteType: "WasteType is required" }
//                 setError(error2);
//                 break;
//             case directedOperationType:
//                 let error3 = { ...error, directedOperationType: "DirectedOperationType is required" }
//                 setError(error3);
//                 break;
//             case quantity:
//                 let error4 = { ...error, quantity: "Quantity is required" }
//                 setError(error4);
//                 break;
//             case unit:
//                 let error5 = { ...error, unit: "Unit is required" }
//                 setError(error5);
//                 break;
//             case mainCollectionCompany:
//                 let error6 = { ...error, smainCollectionCompan: "MainCollectionCompany is required" }
//                 setError(error6);
//                 break;
//             case noOfTrips:
//                 let error7 = { ...error, noOfTrips: "No Of Trips is required" }
//                 setError(error7);
//                 break;
//             case fuelUsed:
//                 let error8 = { ...error, fuelUsed: "Fuel Used is required" }
//                 setError(error8);
//                 break;
//             case fuelUsed:
//                 let error9 = { ...error, fuelUsed: "Fuel Used is required" }
//                 setError(error9);
//                 break;
//             default:
//                 const payload = {
//                     projectId: projectId,
//                     packageId: projectPack,
//                     kindOfWaste: kindOfWaste,
//                     wasteType: wasteType,
//                     directedOperationType: directedOperationType,
//                     quantity: quantity,
//                     unit: unit,
//                     supportingDocument: supportingDocument,
//                     mainCollectionCompany: mainCollectionCompany,
//                     noOfTrips: noOfTrips,
//                     fuelUsed: fuelUsed

//                 };
//                 console.log("payload", payload)
//                 try {
//                     await ADMINAPI({
//                         url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/direct-disposals/`,
//                         method: "POST",
//                         body: { ...payload },
//                     })
//                         .then((data) => {
//                             if (data.status === true) {

//                                 setShow(false);
//                                 setTimeout(() => {
//                                     router.push("/addMonthlyData", { scroll: false });

//                                 }, 100);
//                                 fetchTable();

//                                 return data;
//                             } else {

//                             }
//                         })
//                         .catch((err) => {

//                         });
//                 } catch (error) {
//                     console.log(error, "errorooo");

//                 };
//                 break;

//         };
//     };





//     const fetchTable = async () => {
//         try {
//             await ADMINAPI({
//                 url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/direct-disposals/`,
//                 method: "GET",
//             }).then((data) => {
//                 let userData = data.response;
//                 setRows(userData);
//                 console.log(userData, "ooooooossssssss");
//             });
//         } catch (error) {
//             console.log(error, "errorooo");
//         }
//     };
//     useEffect(() => {
//         fetchTable();
//     }, []);

//     const handleEditChanges = async () => {
//         const payload = {
//             projectId: projectId,
//             packageId: projectPack,
//             kindOfWaste: kindOfWaste,
//             wasteType: wasteType,
//             directedOperationType: directedOperationType,
//             quantity: quantity,
//             unit: unit,
//             supportingDocument: supportingDocument,
//             mainCollectionCompany: mainCollectionCompany,
//             noOfTrips: noOfTrips,
//             fuelUsed: fuelUsed
//         }


//         try {
//             await ADMINAPI({
//                 url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/direct-disposals/${wasteId}`,
//                 method: "put",
//                 body: { ...payload },
//             })
//                 .then((data) => {
//                     if (data.status === true) {
//                         setShowEdit(false);
//                         setTimeout(() => {
//                             router.push("/addMonthlyData", { scroll: false });
//                         }, 100);
//                         fetchTable();
//                         return data;
//                     } else {

//                     }
//                 })
//                 .catch((err) => {

//                 });
//         } catch (error) {
//             console.log(error, "errorooo");
//         }
//     };



//     const handleDeleteConfirm = async () => {

//         try {

//             await ADMINAPI({
//                 url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/direct-disposals/${wasteId}`,
//                 method: "PATCH",

//             }).then((data) => {
//                 if (data.status === true) {
//                     setShowDelete(false)
//                     handleCloseDelete();
//                     fetchTable()
//                     setTimeout(() => {
//                         router.push("/addMonthlyData", { scroll: false });
//                     }, 100);
//                 } else {
//                     console.log(data?.message, "rtrttt");
//                     setShowDelete(false)

//                     toast.error(data?.message);
//                 }
//             }).catch(err => {
//                 setShowDelete(false)

//                 console.log(err, "rtrttt");
//                 // toast.error(err?.message);
//             })

//         } catch (error) {
//             console.log(error, "errorooo");
//             //    toast.error(data?.message);


//         }
//     };

//     const columns = [

//         {
//             name: <b>Waste Type</b>,
//             selector: (row) => row.wasteType,
//             wrap: "true",
//             sortable: true,
//         },
//         {
//             name: <b className="text-center">Kind of Waste </b>,
//             selector: (row) => row.kindOfWaste,
//             wrap: "true",
//             sortable: true,
//         },
//         {
//             name: <b className="text-center">Main Collection <br />Company</b>,
//             selector: (row) => row.mainCollectionCompany,
//             wrap: "true",
//             sortable: true,
//         },
//         {
//             name: <b className="text-center">Disposal Operation Type</b>,
//             selector: (row) => row.directedOperationType,
//             wrap: "true",
//             sortable: true,
//         },
//         {
//             name: <b className="text-center">Quantity</b>,
//             selector: (row) => row.quantity,
//             wrap: "true",
//             sortable: true,
//         },
//         {
//             name: <div className="text-center"><b>Unit Of Measurement</b></div>,
//             selector: (row) => row.unit,
//             wrap: "true",
//             sortable: true,
//         },

//         {
//             name: <b className="text-center">No. Of Trips</b>,
//             selector: (row) => row.noOfTrips,
//             wrap: "true",
//             sortable: true,
//         },
//         {
//             name: <div><b>Fuel Used By</b><br /> Trucks(litres)(one full trip, from source)</div>,
//             selector: (row) => row.fuelUsed,
//             wrap: "true",
//             sortable: true,
//         },
//         {
//             name: <b className="text-center">Supporting Document</b>,
//             selector: (row) => row.supportingDocument,
//             wrap: "true",
//             sortable: true,
//         },

//         {
//             name: <b>Action</b>,
//             cell: row => (
//                 <div className="d-flex align-items-center">
//                     <FaRegEdit
//                         style={{ color: "secondary", fontSize: "20px", cursor: 'pointer' }}
//                         onClick={() => handleEdit(row)}
//                     />
//                     <MdDeleteForever
//                         className="mx-2"
//                         style={{ color: "red", fontSize: "20px", cursor: 'pointer' }}
//                         onClick={() => handleShowDelete(row)}
//                     />
//                 </div>
//             ),
//             wrap: true,
//             width: "180px",
//             sortable: true,

//         },
//     ];


//     const customStyles = {
//         rows: {
//             style: {
//                 minHeight: '72px',
//             }
//         }
//     }


//     return (
//         <section>
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="d-flex align-items-center">
//                     <img src="/images/wasteDirected.png" alt="" />
//                     <h5 className="mx-2">Waste Directed to Disposal </h5>
//                 </div>
//                 <div>
//                     <button type="btn" className="btn btn-outline-success" onClick={handleShow}>
//                         + Add
//                     </button>
//                 </div>

//             </div>

//             <div className="my-3">

//                 <DataTable
//                     columns={columns}
//                     data={rows}
//                     fixedHeader
//                     pagination
//                     striped
//                     customStyles={customStyles}
//                 />
//             </div>

//             <>
//                 <Modal
//                     show={show}
//                     onHide={handleClose}
//                     size="lg"
//                     backdrop="static"
//                     centered
//                 >
//                     <Modal.Header closeButton style={{ border: "0" }}></Modal.Header>
//                     <Modal.Body>
//                         <>
//                             <div>
//                                 <div className="d-flex align-items-center">
//                                     <img src="/images/wasteDiredcted_Modal.png" alt="" className="img-fluid" />
//                                     <div className="mx-2">
//                                         <h4>Waste Directed to Disposal</h4>

//                                     </div>
//                                 </div>

//                                 <div className="row mt-3">
//                                     <div className="col-md-4">
//                                         <label htmlFor="">Kind of Waste</label>
//                                         <select className="form-select" aria-label="Default select example"
//                                             onChange={(e) => handleType(e)}
//                                             value={kindOfWaste}>  {kindOfWasteArr?.map((category, indexCat) => (
//                                                 <option key={indexCat} value={category}>
//                                                     {category}
//                                                 </option>

//                                             ))}
//                                             {/* <option selected>non hazard</option>
//                                             <option value="1">hazard</option> */}

//                                         </select>
//                                     </div>
//                                     <div className="col-md-4">
//                                         <label htmlFor="">Waste Type</label>
//                                         <select className="form-select" aria-label="Default select example"
//                                             onChange={(e) => handleChangeType(e)}
//                                             value={wasteType}>  {wasteArr?.map((category, indexCat) => (
//                                                 <option key={indexCat} value={category}>
//                                                     {category}
//                                                 </option>

//                                             ))}
//                                             {/* <option selected>solid</option>
//                                             <option value="1">liquid</option> */}
//                                         </select>
//                                     </div>

//                                     <div className="col-md-4">
//                                         <label htmlFor="">Disposal Operation Type</label>
//                                         <select className="form-select" aria-label="Default select example"
//                                             onChange={(e) => handleChange(e)}
//                                             value={directedOperationType}>  {disposalArr?.map((category, indexCat) => (
//                                                 <option key={indexCat} value={category}>
//                                                     {category}
//                                                 </option>

//                                             ))}
//                                             {/* <option selected>Reuse</option>
//                                             <option value="1">Recycling</option>
//                                             <option value="2">Others</option> */}
//                                         </select>
//                                     </div>


//                                 </div>

//                                 <div className="row mt-3">
//                                     <div className="col-md-4">
//                                         <label htmlFor="">Quantity</label>
//                                         <input type="text" className="form-control" placeholder=""
//                                             value={quantity} onChange={(e) => setQuantity(e.target.value)} />
//                                     </div>

//                                     <div className="col-md-4">
//                                         <label htmlFor="">Unit of Measurement</label>

//                                         <select className="form-select" aria-label="Default select example"
//                                             onChange={(e) => handleChanges(e)}
//                                             value={unit}>  {unitArr?.map((category, indexCat) => (
//                                                 <option key={indexCat} value={category}>
//                                                     {category}
//                                                 </option>

//                                             ))}
//                                             {/* <option selected>Wh</option>
//                                             <option selected>Kwh</option>
//                                             <option selected>Joule</option> */}

//                                         </select>
//                                     </div>

//                                     <div className="col-md-4">
//                                         <label htmlFor="">Supporting Document (If Any)</label>
//                                         <input type="file" className="form-control" placeholder="Upload Documents"
//                                             value={supportingDocument} onChange={(e) => setSupportingDocument(e.target.value)} />
//                                     </div>


//                                 </div>

//                                 <div className="row mt-3">
//                                     <div className="col-md-4">
//                                         <label htmlFor="">No Of Trips</label>
//                                         <input type="text" className="form-control" placeholder="" value={noOfTrips} onChange={(e) => setNumberOfTrips(e.target.value)} />
//                                     </div>

//                                     <div className="col-md-4">
//                                         <label htmlFor="">fuel UsedBy Trucks</label>
//                                         <input type="text" className="form-control" placeholder=""
//                                             value={fuelUsed} onChange={(e) => setFuelUsed(e.target.value)} />
//                                     </div>



//                                     <div className="col-md-4">
//                                         <label htmlFor="">Main Collection Of Company</label>
//                                         <input type="text" className="form-control" placeholder=""
//                                             value={mainCollectionCompany} onChange={(e) => setMainCollectionCompany(e.target.value)} />
//                                     </div>


//                                 </div>


//                             </div>


//                             <div className="my-4 d-flex justify-content-between">
//                                 <div>
//                                     <button type="btn" className="btn btn-outline-secondary" onClick={handleClose}> Close </button>
//                                 </div>
//                                 <div>
//                                     <button type="btn" className="btn btn-outline-success" onClick={handleAddRecord}> Save Changes </button>
//                                 </div>
//                             </div>
//                         </>

//                     </Modal.Body>
//                 </Modal>

//                 {/* Edit Section */}

//                 <Modal
//                     show={showEdit}
//                     onHide={handleCloseEdit}
//                     size="lg"
//                     backdrop="static"
//                     centered
//                 >
//                     <Modal.Header closeButton style={{ border: "0" }}>
//                         <Modal.Title>Edit</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <>
//                             <div>
//                                 <div className="d-flex align-items-center">
//                                     <img src="/images/wasteDiredcted_Modal.png" alt="" className="img-fluid" />
//                                     <div className="mx-2">
//                                         <h4>Waste Directed to Disposal</h4>

//                                     </div>
//                                 </div>

//                                 <div className="row mt-3">
//                                     <div className="col-md-4">
//                                         <label htmlFor="">Kind of Waste</label>
//                                         <select className="form-select" aria-label="Default select example"
//                                             onChange={(e) => handleType(e)}
//                                             value={kindOfWaste}>  {kindOfWasteArr?.map((category, indexCat) => (
//                                                 <option key={indexCat} value={category}>
//                                                     {category}
//                                                 </option>

//                                             ))}
//                                             {/* <option selected>non hazard</option>
//                                             <option value="1">hazard</option> */}

//                                         </select>
//                                     </div>

//                                     <div className="col-md-4">
//                                         <label htmlFor="">Waste Type</label>
//                                         <select className="form-select" aria-label="Default select example"
//                                             onChange={(e) => handleChangeType(e)}
//                                             value={wasteType}>  {wasteArr?.map((category, indexCat) => (
//                                                 <option key={indexCat} value={category}>
//                                                     {category}
//                                                 </option>

//                                             ))}


//                                         </select>
//                                     </div>

//                                     <div className="col-md-4">
//                                         <label htmlFor="">Disposal Operation Type</label>
//                                         <select className="form-select" aria-label="Default select example"
//                                             onChange={(e) => handleChange(e)}
//                                             value={directedOperationType}>  {disposalArr?.map((category, indexCat) => (
//                                                 <option key={indexCat} value={category}>
//                                                     {category}
//                                                 </option>

//                                             ))}
//                                             {/* <option selected>Reuse</option> */}
//                                             {/* <option value="1">Recycling</option>
//                                             <option value="2">Others</option> */}
//                                         </select>
//                                     </div>


//                                 </div>

//                                 <div className="row mt-3">
//                                     <div className="col-md-4">
//                                         <label htmlFor="">Quantity</label>
//                                         <input type="text" className="form-control" placeholder=""
//                                             value={quantity} onChange={(e) => setQuantity(e.target.value)} />
//                                     </div>

//                                     <div className="col-md-4">
//                                         <label htmlFor="">Unit of Measurement</label>

//                                         <select className="form-select" aria-label="Default select example"
//                                             onChange={(e) => handleChanges(e)}
//                                             value={unit}>  {unitArr?.map((category, indexCat) => (
//                                                 <option key={indexCat} value={category}>
//                                                     {category}
//                                                 </option>

//                                             ))}
//                                             {/* <option selected>kg</option>
//                                             <option value="1">Wh</option>
//                                             <option value="2">Kwh</option>
//                                             <option value="3">Joule</option> */}
//                                         </select>
//                                     </div>
//                                     <div className="col-md-4">
//                                         <label htmlFor="">Supporting Document (If Any)</label>
//                                         <input type="file" className="form-control" placeholder="Upload Documents"
//                                             value={supportingDocument} onChange={(e) => setSupportingDocument(e.target.value)} />
//                                     </div>
//                                     <div className="row mt-3">
//                                         <div className="col-md-4">
//                                             <label htmlFor="">No Of Trips</label>
//                                             <input type="text" className="form-control" placeholder="" value={noOfTrips} onChange={(e) => setNumberOfTrips(e.target.value)} />
//                                         </div>
//                                     </div>



//                                     <div className="col-md-4">
//                                         <label htmlFor="">fuel UsedBy Trucks</label>
//                                         <input type="text" className="form-control" placeholder=""
//                                             value={fuelUsed} onChange={(e) => setFuelUsed(e.target.value)} />
//                                     </div>
//                                     <div className="col-md-4">
//                                         <label htmlFor="">Main Collection Of Company</label>
//                                         <input type="text" className="form-control" placeholder=""
//                                             value={mainCollectionCompany} onChange={(e) => setMainCollectionCompany(e.target.value)} />
//                                     </div>

//                                 </div>


//                             </div>

//                             <div className="my-4 d-flex justify-content-between">
//                                 <div>
//                                     <button type="btn" className="btn btn-outline-secondary" onClick={handleCloseEdit}> Close </button>
//                                 </div>
//                                 <div>
//                                     <button type="btn" className="btn btn-outline-success" onClick={handleEditChanges}> Save Changes </button>
//                                 </div>
//                             </div>
//                         </>

//                     </Modal.Body>
//                 </Modal>


//                 {/* Delete section */}

//                 <Modal
//                     show={showDelete}
//                     onHide={handleCloseDelete}
//                     size="md"
//                     backdrop="static"
//                     centered
//                 >
//                     <Modal.Header closeButton style={{ border: "0" }}>
//                         <Modal.Title>Delete</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <>
//                             <div className=" text-center">
//                                 <h5>Are you sure want to delete this record.</h5>
//                             </div>
//                             <div className="mt-4 d-flex justify-content-between">
//                                 <div>
//                                     <button type="btn" className="btn btn-outline-secondary rounded-pill" onClick={handleCloseDelete} style={{ width: "10rem" }}> Close </button>
//                                 </div>
//                                 <div>
//                                     <button type="btn" className="btn btn-outline-success rounded-pill" onClick={handleDeleteConfirm} style={{ width: "10rem" }}>Yes </button>
//                                 </div>
//                             </div>
//                         </>
//                     </Modal.Body>
//                 </Modal>

//             </>
//         </section>
//     )
// }
// export default WasteDirectedTable;



import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Modal, Button } from 'react-bootstrap';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { ADMINAPI } from "../../../../apiWrapper";
import { useRouter } from 'next/router';
import styles from './WasteDirectedTable.module.css';

const WasteDirectedTable = ({ projectId, projectPack }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setKindOfWaste("");
        setWasteType("");
        setDirectedOperationType("");
        setQuantity("");
        setUnit("");
        setSupportingDocument("");
        setMainCollectionCompany("");
        setNumberOfTrips("");
        setFuelUsed("");
        setShow(true);
    };

    const router = useRouter();
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (row) => {
        setWasteId(row._id);
        setShowDelete(true);
    };

    const [rows, setRows] = useState([]);

    const [kindOfWaste, setKindOfWaste] = useState("");
    const [wasteType, setWasteType] = useState("");
    const [directedOperationType, setDirectedOperationType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("");
    const [supportingDocument, setSupportingDocument] = useState("");
    const [mainCollectionCompany, setMainCollectionCompany] = useState("");
    const [numberOfTrips, setNumberOfTrips] = useState("");
    const [fuelUsed, setFuelUsed] = useState("");
    const [wasteId, setWasteId] = useState("");
    const [error, setError] = useState({});

    const handleEdit = (row) => {
        setKindOfWaste(row.kindOfWaste);
        setWasteType(row.wasteType);
        setDirectedOperationType(row.directedOperationType);
        setQuantity(row.quantity);
        setUnit(row.unit);
        setSupportingDocument(row.supportingDocument);
        setMainCollectionCompany(row.mainCollectionCompany);
        setNumberOfTrips(row.numberOfTrips);
        setFuelUsed(row.fuelUsed);
        setWasteId(row._id);
        setShowEdit(true);
    };

    const wasteArr = ["solid", "liquid"];
    const disposalArr = ["Incineration with energy recovery", "Incineration without energy recovery", "Landfilling", "Others"];
    const unitArr = ["Joule", "Kwh", "Wh"];
    const kindOfWasteArr = ["non-hazard", "hazard"];

    const handleChangeType = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        setWasteType(selectedValue);
        if (selectedValue !== "") {
            let err = { ...error };
            err.wasteType = "";
            setError(err);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        setDirectedOperationType(selectedValue);
        if (selectedValue !== "") {
            let err = { ...error };
            err.directedOperationType = "";
            setError(err);
        }
    };

    const handleChanges = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        setUnit(selectedValue);
        if (selectedValue !== "") {
            let err = { ...error };
            err.unit = "";
            setError(err);
        }
    };

    const handleType = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        setKindOfWaste(selectedValue);
        if (selectedValue !== "") {
            let err = { ...error };
            err.kindOfWaste = "";
            setError(err);
        }
    };

    const handleAddRecord = async (e) => {
        console.log("asdfsw3eredsedrf");
        e.preventDefault();
        switch ("") {
            case kindOfWaste:
                let error1 = { ...error, kindOfWaste: "KindOfWaste is required" };
                console.log("errorr",error1);
                setError(error1);
                break;
            case wasteType:
                let error2 = { ...error, wasteType: "WasteType is required" };
                setError(error2);
                break;
            case directedOperationType:
                let error3 = { ...error, directedOperationType: "DirectedOperationType is required" };
                setError(error3);
                break;
            case quantity:
                let error4 = { ...error, quantity: "Quantity is required" };
                setError(error4);
                break;
            case unit:
                console.log("unitttt",unit);
                let error5 = { ...error, unit: "Unit is required" };
                setError(error5);
                console.log("unitttt",error5);

                break;
            case mainCollectionCompany:
                let error6 = { ...error, mainCollectionCompany: "MainCollectionCompany is required" };
                setError(error6);
                break;
            case numberOfTrips:
                let error7 = { ...error, numberOfTrips: "No Of Trips is required" };
                setError(error7);
                break;
            case fuelUsed:
                let error8 = { ...error, fuelUsed: "Fuel Used is required" };
                setError(error8);
                break;
            default:
                const payload = {
                    projectId: projectId,
                    packageId: projectPack,
                    kindOfWaste: kindOfWaste,
                    wasteType: wasteType,
                    directedOperationType: directedOperationType,
                    quantity: quantity,
                    unit: unit,
                    supportingDocument: supportingDocument,
                    mainCollectionCompany: mainCollectionCompany,
                    numberOfTrips: numberOfTrips,
                    fuelUsed: fuelUsed
                };

                try {
                    const response = await ADMINAPI({
                        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/direct-disposals/`,
                        method: "POST",
                        body: { ...payload },
                    });

                    if (response.status === true) {
                        setShow(false);
                        setTimeout(() => {
                            router.push("/addMonthlyData", { scroll: false });
                        }, 100);
                        fetchTable();
                    }
                } catch (error) {
                    console.log(error);
                }
                break;
        }
    };

    const fetchTable = async () => {
        try {
            const response = await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/direct-disposals/`,
                method: "GET",
            });

            if (response.status === true) {
                setRows(response.response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTable();
    }, []);

    const handleEditChanges = async () => {
        const payload = {
            projectId: projectId,
            packageId: projectPack,
            kindOfWaste: kindOfWaste,
            wasteType: wasteType,
            directedOperationType: directedOperationType,
            quantity: quantity,
            unit: unit,
            supportingDocument: supportingDocument,
            mainCollectionCompany: mainCollectionCompany,
            numberOfTrips: numberOfTrips,
            fuelUsed: fuelUsed
        };

        try {
            const response = await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/direct-disposals/${wasteId}`,
                method: "PUT",
                body: { ...payload },
            });

            if (response.status === true) {
                setShowEdit(false);
                setTimeout(() => {
                    router.push("/addMonthlyData", { scroll: false });
                }, 100);
                fetchTable();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteConfirm = async () => {
        try {
            const response = await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/direct-disposals/${wasteId}`,
                method: "PATCH",
            });

            if (response.status === true) {
                setShowDelete(false);
                handleCloseDelete();
                fetchTable();
                setTimeout(() => {
                    router.push("/addMonthlyData", { scroll: false });
                }, 100);
            } else {
                console.log(response?.message);
               
            }
        } catch (error) {
            console.log(error);
        }
    };


    const columns = [

        {
            name: <b>Waste Type</b>,
            selector: (row) => row.wasteType,
            wrap: "true",
            sortable: true,
        },
        {
            name: <b className="text-center">Kind of Waste </b>,
            selector: (row) => row.kindOfWaste,
            wrap: "true",
            sortable: true,
        },
        {
            name: <b className="text-center">Main Collection <br />Company</b>,
            selector: (row) => row.mainCollectionCompany,
            wrap: "true",
            sortable: true,
        },
        {
            name: <b className="text-center">Disposal Operation Type</b>,
            selector: (row) => row.directedOperationType,
            wrap: "true",
            sortable: true,
        },
        {
            name: <b className="text-center">Quantity</b>,
            selector: (row) => row.quantity,
            wrap: "true",
            sortable: true,
        },
        {
            name: <div className="text-center"><b>Unit Of Measurement</b></div>,
            selector: (row) => row.unit,
            wrap: "true",
            sortable: true,
        },

        {
            name: <b className="text-center">No. Of Trips</b>,
            selector: (row) => row.numberOfTrips,
            wrap: "true",
            sortable: true,
        },
        {
            name: <div><b>Fuel Used By</b><br /> Trucks(litres)(one full trip, from source)</div>,
            selector: (row) => row.fuelUsed,
            wrap: "true",
            sortable: true,
        },
        {
            name: <b className="text-center">Supporting Document</b>,
            selector: (row) => row.supportingDocument,
            wrap: "true",
            sortable: true,
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
            width: "180px",
            sortable: true,

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
                                            value={kindOfWaste}
                                        >
                                            <option value="">Please select kind of waste</option>
                                            {kindOfWasteArr?.map((category, indexCat) => (
                                                <option key={indexCat} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                        {error && error.kindOfWaste && <span className={styles["error-message"]}>{error.kindOfWaste}</span>}
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="">Waste Type</label>
                                        <select className="form-select" aria-label="Default select example"
                                            onChange={(e) => handleChangeType(e)}
                                            value={wasteType}
                                        >
                                            <option value="">Please select waste type</option>
                                            {wasteArr?.map((category, indexCat) => (
                                                <option key={indexCat} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                        {error && error.wasteType && <span className={styles["error-message"]}>{error.wasteType}</span>}
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="">Disposal Operation Type</label>
                                        <select className="form-select" aria-label="Default select example"
                                            onChange={(e) => handleChange(e)}
                                            value={directedOperationType}
                                        >
                                            <option value="">Please select Disposal Operation Type</option>
                                            {disposalArr?.map((category, indexCat) => (
                                                <option key={indexCat} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                        {error && error.directedOperationType && <span className={styles["error-message"]}>{error.directedOperationType}</span>}
                                    </div>



                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <label htmlFor="">Quantity</label>
                                        <input type="text" className="form-control" placeholder=""
                                            value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                             {error && error.quantity && <span className={styles["error-message"]}>{error.quantity}</span>}
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">Unit of Measurement</label>
                                        <select className="form-select" aria-label="Default select example"
                                            onChange={(e) => handleChanges(e)}
                                            value={unit}
                                            name="unit"
                                        >
                                            <option value="">Please select Unit of Measurement</option>
                                            {unitArr?.map((category, indexCat) => (
                                                <option key={indexCat} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                            {error && error.unit && <span className={styles["error-message"]}>{error.unit}</span>}
                                       
                                    </div>


                                    <div className="col-md-4">
                                        <label htmlFor="">Supporting Document (If Any)</label>
                                        <input type="file" className="form-control" placeholder="Upload Documents"
                                            value={supportingDocument} onChange={(e) => setSupportingDocument(e.target.value)} />

                                    </div>


                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <label htmlFor="">No Of Trips</label>
                                        <input type="text" className="form-control" placeholder="" value={numberOfTrips} onChange={(e) => setNumberOfTrips(e.target.value)} />
                                        {error && error.numberOfTrips && <span className={styles["error-message"]}>{error.numberOfTrips}</span>}
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">fuel UsedBy Trucks</label>
                                        <input type="text" className="form-control" placeholder=""
                                            value={fuelUsed} onChange={(e) => setFuelUsed(e.target.value)} />
                                             {error && error.fuelUsed && <span className={styles["error-message"]}>{error.fuelUsed}</span>}
                                    </div>



                                    <div className="col-md-4">
                                        <label htmlFor="">Main Collection Of Company</label>
                                        <input type="text" className="form-control" placeholder=""
                                            value={mainCollectionCompany} onChange={(e) => setMainCollectionCompany(e.target.value)} />
                                             {error && error.mainCollectionCompany && <span className={styles["error-message"]}>{error.mainCollectionCompany}</span>}
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
                                        <input type="text" className="form-control" placeholder=""
                                            value={quantity} onChange={(e) => setQuantity(e.target.value)} />
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
                                            value={supportingDocument} onChange={(e) => setSupportingDocument(e.target.value)} />
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <label htmlFor="">No Of Trips</label>
                                            <input type="text" className="form-control" placeholder="" value={numberOfTrips} onChange={(e) => setNumberOfTrips(e.target.value)} />
                                        </div>
                                    </div>



                                    <div className="col-md-4">
                                        <label htmlFor="">fuel UsedBy Trucks</label>
                                        <input type="text" className="form-control" placeholder=""
                                            value={fuelUsed} onChange={(e) => setFuelUsed(e.target.value)} />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="">Main Collection Of Company</label>
                                        <input type="text" className="form-control" placeholder=""
                                            value={mainCollectionCompany} onChange={(e) => setMainCollectionCompany(e.target.value)} />
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
                                    <button type="btn" className="btn btn-outline-success rounded-pill" onClick={handleDeleteConfirm} style={{ width: "10rem" }}>Yes </button>
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