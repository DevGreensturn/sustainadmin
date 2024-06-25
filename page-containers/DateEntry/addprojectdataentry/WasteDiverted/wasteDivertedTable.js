// import React, {useState} from "react";
// import DataTable from "react-data-table-component";
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { MdDeleteForever } from "react-icons/md";
// import { FaRegEdit } from "react-icons/fa";
// import { RiFilter2Fill } from "react-icons/ri";
// import { Modal, Button } from 'react-bootstrap';

// const WasteDivertedTable =()=>{
//     const [show, setShow] = useState(false);
//     const handleClose =()=> setShow(false);
//     const handleShow =()=>setShow(true);

//     const [showEdit, setShowEdit] = useState(false);
//     const handleCloseEdit =()=> setShowEdit(false);
//     const handleShowEdit =()=>setShowEdit(true);

//     const [showDelete, setShowDelete] = useState(false);
//     const handleCloseDelete =()=> setShowDelete(false);
//     const handleShowDelete =()=> setShowDelete(true);
       



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



//     const columns = [
    	
//         {
//             name: <b>Waste Type</b>,
//             selector: (row) => row.WasteType ,
//             wrap:"true"
//         },
//         {
//             name: <b className="text-center">Kind of Waste </b>,
//             selector: (row) => row.KindofWaste,
//             wrap:"true"
//         },
//         {
//             name: <b className="text-center">Main Collection <br />Company</b>,
//             selector: (row) => row.MainCollection,
//             wrap:"true"
//         },
//         {
//             name: <b className="text-center">Disposal Operation Type</b>,
//             selector: (row) => row.MainCollection,
//             wrap:"true"
//         },
//         {
//             name: <b className="text-center">Quantity</b>,
//             selector: (row) => row.TotalWaste,
//             wrap:"true"
//         },
//         {
//             name: <div className="text-center"><b>Unit Of Measurement</b></div>,
//             selector: (row) => row.UnitOf,
//             wrap:"true"
//         },

//         {
//             name: <b className="text-center">No. Of Trips</b>,
//             selector: (row) => row.NoOfTrips,
//             wrap:"true"
//         },
//         {
//             name: <div><b>Fuel Used By</b><br /> Trucks(litres)(one full trip, from source)</div>,
//             selector: (row) => row.FuelUsedBy,
//             wrap:"true"
//         },
//         {
//             name: <b className="text-center">Supporting Document</b>,
//             selector: (row) => row.SupportingDocument,
//             wrap:"true"
//         },

//         {
//             name: <b>Action</b>,
//             selector: (row) => row.Action,
//             wrap:"true",
           
//         },
//     ];
    
//     const rows = [
//         {
//             WasteType: "Non Hazard",
//             KindofWaste: "Solid",
//             MainCollection: "Landfilling",
//             TotalWaste: "123",
//             UnitOf: "Kg",
//             SupportingDocument:"1 Attachment",

//             Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
//         },

//          {
//             WasteType: "Non Hazard",
//             KindofWaste: "Liquid",
//             MainCollection: "Other Disposal Operations",
//             TotalWaste: "123",
//             UnitOf: "Liter",
//             SupportingDocument:"1 Attachment",

//             Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
//          },
//     ];
//     const customStyles ={
//         rows:{
//             style:{
//                 minHeight: '72px', 
//             }
//         }
//     }


//     return(
//         <section>
//                 <div className="d-flex align-items-center justify-content-between">
//                     <div className="d-flex align-items-center">
//                     <img src="/images/wasteDiverted.png" alt="" />
//                     <h5 className="mx-2">Waste Directed to Disposal </h5>
//                     </div>
//                     <div>
//                         <button type="btn" className="btn btn-outline-success" onClick={handleShow}>
//                             + Add
//                         </button>
//                     </div>  
                
//                 </div>

//                 <div className="my-3">

//                 <DataTable 
//                     columns={columns} 
//                     data={rows} 
//                     fixedHeader
//                     pagination
//                     striped
//                     customStyles={customStyles}
//                 />
//                 </div>

//                 <>
//                 <Modal
//                 show={show}
//                 onHide={handleClose}
//                 size="lg"
//                 backdrop="static"
//                 centered
//                 >
//                     <Modal.Header closeButton style={{border:"0"}}></Modal.Header>
//                     <Modal.Body>
//                         <>
//                        <div>
//                         <div className="d-flex align-items-center">
//                             <img src="/images/wasteDiverted_Modal.png" alt="" className="img-fluid"/>
//                             <div className="mx-2">
//                                 <h4>Waste Directed to Disposal</h4>
                             
//                             </div>
//                         </div>

//                         <div className="row mt-3">
//                             <div className="col-md-4">
//                                 <label htmlFor="">Kind of Waste</label>
//                                 <select className="form-select" aria-label="Default select example">
//                                     <option selected>Non Hazard</option>
//                                     <option value="1">One</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div>

//                             <div className="col-md-4">
//                             <label htmlFor="">Waste Type</label>
//                                 <select className="form-select" aria-label="Default select example">
//                                     <option selected>Solid</option>
//                                     <option value="1">Abu Dhabi</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div>

//                             <div className="col-md-4">
//                                 <label htmlFor="">Disposal Operation Type</label>
//                                 <select className="form-select" aria-label="Default select example">
//                                     <option selected>Landfilling</option>
//                                     <option value="1">Abu Dhabi</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div>


//                         </div>

//                         <div className="row mt-3">
//                             <div className="col-md-4">
//                                 <label htmlFor="">Quantity</label>
//                                 <input type="text" className="form-control" placeholder="123" />
//                             </div>

//                             <div className="col-md-4">
//                             <label htmlFor="">Unit of Measurement</label>

//                             <select className="form-select" aria-label="Default select example">
//                                     <option selected>kg</option>
//                                     <option value="1">One</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div>

//                             <div className="col-md-4">
//                                 <label htmlFor="">Supporting Document (If Any)</label>
//                                 <input type="file" className="form-control" placeholder="Upload Documents" />
//                             </div>
                            
//                         </div>
 
                        
//                        </div>


//                     <div className="my-4 d-flex justify-content-between">
//                     <div>
//                     <button type="btn" className="btn btn-outline-secondary" onClick={handleClose}> Close </button>
//                     </div>
//                     <div>
//                     <button type="btn" className="btn btn-outline-success" onClick={handleClose}> Save Changes </button>
//                     </div>
//                     </div>
//                        </>

//                         </Modal.Body>
//                 </Modal>

//                 {/* Edit Section */}

//                 <Modal
//                 show={showEdit}
//                 onHide={handleCloseEdit}
//                 size="lg"
//                 backdrop="static"
//                 centered
//                 >
//                     <Modal.Header closeButton style={{border:"0"}}>
//                     <Modal.Title>Edit</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <>
//                        <div>
//                         <div className="d-flex align-items-center">
//                             <img src="/images/wasteDiverted_Modal.png" alt="" className="img-fluid"/>
//                             <div className="mx-2">
//                                 <h4>Waste Directed to Disposal</h4>
                             
//                             </div>
//                         </div>

//                         <div className="row mt-3">
//                             <div className="col-md-4">
//                                 <label htmlFor="">Kind of Waste</label>
//                                 <select className="form-select" aria-label="Default select example">
//                                     <option selected>Non Hazard</option>
//                                     <option value="1">One</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div>

//                             <div className="col-md-4">
//                             <label htmlFor="">Waste Type</label>
//                                 <select className="form-select" aria-label="Default select example">
//                                     <option selected>Solid</option>
//                                     <option value="1">Abu Dhabi</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div>

//                             <div className="col-md-4">
//                                 <label htmlFor="">Disposal Operation Type</label>
//                                 <select className="form-select" aria-label="Default select example">
//                                     <option selected>Landfilling</option>
//                                     <option value="1">Abu Dhabi</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div>


//                         </div>

//                         <div className="row mt-3">
//                             <div className="col-md-4">
//                                 <label htmlFor="">Quantity</label>
//                                 <input type="text" className="form-control" placeholder="123" />
//                             </div>

//                             <div className="col-md-4">
//                             <label htmlFor="">Unit of Measurement</label>

//                             <select className="form-select" aria-label="Default select example">
//                                     <option selected>kg</option>
//                                     <option value="1">One</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div>

//                             <div className="col-md-4">
//                                 <label htmlFor="">Supporting Document (If Any)</label>
//                                 <input type="file" className="form-control" placeholder="Upload Documents" />
//                             </div>
//                         </div>
//                        </div>

//                     <div className="my-4 d-flex justify-content-between">
//                     <div>
//                     <button type="btn" className="btn btn-outline-secondary" onClick={handleCloseEdit}> Close </button>
//                     </div>
//                     <div>
//                     <button type="btn" className="btn btn-outline-success" onClick={handleCloseEdit}> Save Changes </button>
//                     </div>
//                     </div>
//                        </>

//                         </Modal.Body>
//                 </Modal>


//                 {/* Delete section */}

//                 <Modal
//                 show={showDelete}
//                 onHide={handleCloseDelete}
//                 size="md"
//                 backdrop="static"
//                 centered
//                 >
//                     <Modal.Header closeButton style={{border:"0"}}>
//                     <Modal.Title>Delete</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <>
//                        <div className=" text-center">
//                         <h5>Are you sure want to delete this record.</h5>
//                     </div>
//                     <div className="mt-4 d-flex justify-content-between">
//                     <div>
//                     <button type="btn" className="btn btn-outline-secondary rounded-pill" onClick={handleCloseDelete} style={{width:"10rem"}}> Close </button>
//                     </div>
//                     <div>
//                     <button type="btn" className="btn btn-outline-success rounded-pill" onClick={handleCloseDelete} style={{width:"10rem"}}>Yes </button>
//                     </div>
//                     </div>
//                        </>
//                         </Modal.Body>
//                 </Modal>

//                 </>
//         </section>
//     )
// }
// export default WasteDivertedTable;




import React, { useState,useEffect } from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';
import { ADMINAPI } from "../../../../apiWrapper";
import { useRouter } from 'next/router';



const WasteDivertedTable = ({projectId, projectPack}) => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () =>  {
        setKindOfWaste("");
        setWasteType("");
        setDivertedOperationType("");
        setQuantity("")
        setUnit("")
        setSupportingDocument("")
        setMainCollectionCompany("")
        setNumberOfTrips("")
        setFuelUsed("")
        setShow(true) ;

    }
      
    const router = useRouter();
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (row) => {
        setWasteId(row._id)
        setShowDelete(true);
    }
    const [rows, setRows] = useState()

    const [kindOfWaste, setKindOfWaste] = useState("");
    const [wasteType, setWasteType] = useState("");
    const [divertedOperationType, setDivertedOperationType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("");
    const [supportingDocument, setSupportingDocument] = useState("");
    const [mainCollectionCompany, setMainCollectionCompany] = useState("");
    const [noOfTrips, setNumberOfTrips] = useState("");
    const [fuelUsed, setFuelUsed] = useState("");
    const [wasteId, setWasteId] = useState("");



const handleEdit = (row) => {
   setKindOfWaste (row.kindOfWaste);
   setWasteType(row.wasteType);
   setDivertedOperationType(row.divertedOperationType);
   setQuantity(row.quantity);
   setUnit(row.unit);
   setSupportingDocument(row.supportingDocument);
   setMainCollectionCompany(row.mainCollectionCompany);
   setNumberOfTrips(row.noOfTrips);
   setFuelUsed(row.fuelUsed);
   setWasteId(row._id)
   setShowEdit(true)
}
    

     let wasteArr=["solid","liquid"];
     let disposalArr=["Reuse","Recycling","Others"];
     let unitArr=["Joule","Kwh","Wh"];
     let kindOfWasteArr=["non-hazard","hazard"];


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
        setDivertedOperationType(selectedValue);
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
            projectId:projectId,
            packageId:projectPack,
            kindOfWaste: kindOfWaste,
            wasteType: wasteType,
            divertedOperationType: divertedOperationType,
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
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/divert-disposals/`,
                method: "POST",
                body: { ...payload },
            })
                .then((data) => {
                    if (data.status === true) {
                       
                        setShow(false);
                        setTimeout(() => {
                         router.push("/addMonthlyData", { scroll: false });
                          
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
      
    const fetchTable = async () => {
        try {
          await ADMINAPI({
            url:`${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/divert-disposals/` ,
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
            projectId:projectId,
            packageId:projectPack,
            kindOfWaste: kindOfWaste,
            wasteType: wasteType,
            divertedOperationType: divertedOperationType,
            quantity: quantity,
            unit: unit,
            supportingDocument: supportingDocument,
            mainCollectionCompany: mainCollectionCompany,
            noOfTrips: noOfTrips,
            fuelUsed: fuelUsed
        }
      
      
      try {
        await ADMINAPI({
         url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/divert-disposals/${wasteId}`,
          method: "put",
          body: { ...payload },
        })
          .then((data) => {
            if (data.status === true) {
              setShowEdit(false);
              setTimeout(() => {
                router.push("/addMonthlyData", { scroll: false });
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


    
    const handleDeleteConfirm = async() => {
            
        try {
     
            await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/divert-disposals/${wasteId}`,
                method: "PATCH",
                 
                 }).then((data) => {
                    if (data.status === true) {
                        setShowDelete(false)
                        handleCloseDelete();
                        fetchTable()
                      setTimeout(() => {
                        router.push("/addMonthlyData", { scroll: false });
                      }, 100);
                    } else {
                        console.log(data?.message,"rtrttt");
                        setShowDelete(false)
        
                      toast.error(data?.message);
                    }
                 }).catch(err =>{
                    setShowDelete(false)
    
            console.log(err,"rtrttt");
            // toast.error(err?.message);
                 })
               
             } catch (error) {
               console.log(error, "errorooo");
            //    toast.error(data?.message);
    
     
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
            selector: (row) => row.divertedOperationType,
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
                    <img src="/images/wasteDiverted.png" alt="" />
                    <h5 className="mx-2">Waste Diverted to Disposal </h5>
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
                                        <h4>Waste Diverted to Disposal</h4>

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
                                         value={divertedOperationType}>  {disposalArr?.map((category, indexCat) => (
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
                                        <input type="text" className="form-control" placeholder="" 
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
                                        <h4>Waste Diverted to Disposal</h4>

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
                                         value={divertedOperationType}>  {disposalArr?.map((category, indexCat) => (
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
export default WasteDivertedTable;



