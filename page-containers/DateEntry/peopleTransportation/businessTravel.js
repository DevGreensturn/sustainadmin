import React, {useState,useEffect} from "react";

import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';
import { ADMINAPI } from "../../../apiWrapper";
import { useRouter } from 'next/router';



const BusinessTravel =({projectId, projectPack})=>{

    const [show, setShow] = useState(false);
    const handleClose =()=> setShow(false);
    const handleShow =()=>{
        setNumberOfTravellers("");
        setDistance("");
        setShow(true);
    }

    const [showEdit, setShowEdit] = useState(false);
    const router = useRouter();
    const handleCloseEdit =()=> setShowEdit(false);
    const handleShowEdit =()=>setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete =()=> setShowDelete(false);
    const handleShowDelete =(row)=> {
       setBusinessId(row._id)
       
        setShowDelete(true);
    }
       

    const [rows, setRows] = useState()

    const handleEdit=(row)=>{
        setNumberOfTravellers(row.numberOfTravellersByAirplane);
        setDistance(row.distanceTravelledByOneTraveller);
        setBusinessId(row._id)
        setShowEdit(true)
    }

    const handleAddRecord = async () =>{
        const payload={

            projectId:projectId,
            packageId:projectPack,
            numberOfTravellersByAirplane:
            numberOfTravellersByAirplane, 
            distanceTravelledByOneTraveller:distanceTravelledByOneTraveller
        };
        
        console.log("payload",payload);

        
        try {
            await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/business-travel`,
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
            url:`${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/business-travel` ,
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


      const handleDeleteConfirm = async() => {
            
        try {
     
            await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/business-travel/${businessId}`,
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

      const handleEditChanges=async () =>{
        const payload={
            projectId:projectId,
            packageId:projectPack,
            numberOfTravellersByAirplane:
            numberOfTravellersByAirplane, 
            distanceTravelledByOneTraveller:distanceTravelledByOneTraveller
        };
        try {
            await ADMINAPI({
             url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/business-travel/${businessId}`,
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


    const [numberOfTravellersByAirplane,setNumberOfTravellers]=useState("");
    const[distanceTravelledByOneTraveller,setDistance]=useState("");
    const [businessId,setBusinessId] = useState("");

    const columns = [
    	
        {
            name: <b>Number of Traveler's(by airplane's)</b>,
            selector: (row) => row.numberOfTravellersByAirplane,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Distance Traveled for one  Traveler </b>,
            selector: (row) => row.distanceTravelledByOneTraveller,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>Supporting Document</b>,
            selector: (row) => row.supportingDocument,
            wrap:"true",
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
    
    
    const customStyles ={
        rows:{
            style:{
                minHeight: '72px',
            }
        }
    }

    return(
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="/images/BusinessTravel.png" alt="" />
                    <h5 className="mx-2">Business Travel</h5>
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
                            <img src="/images/PeopleTransportation.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>PeopleTransportation</h4>
                                <h5>Business Travel</h5>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                            <label htmlFor="">Number Of Traveler's (by airplane's) </label>
                            <input type="number" className="form-control" placeholder="" 
                            value={numberOfTravellersByAirplane} onChange={(e)=> setNumberOfTravellers(e.target.value)} />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Distance Traveled For all Traveler </label>
                                <input type="text" className="form-control" placeholder="" 
                                value={distanceTravelledByOneTraveller} onChange={(e)=> setDistance(e.target.value)}/>
                            </div>


                        </div>         

                        </div>

                            <div className="col-md-4">
                                <label htmlFor="">Supporting Document (If Any)</label>
                                <input type="file" className="form-control" placeholder="Upload document" />
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
                    <Modal.Header closeButton style={{border:"0"}}>
                    <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                       <div>
                        <div className="d-flex align-items-center">
                            <img src="/images/PeopleTransportation.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>PeopleTransportation</h4>
                                <h5>Business Travel</h5>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="Number of Traveler's"></label>
                                <input type="text" className="form-control" placeholder=""
                                  value={numberOfTravellersByAirplane} onChange={(e)=> setNumberOfTravellers(e.target.value)} />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Distance Traveled for all Traveler</label>
                                <input type="text" className="form-control" placeholder=""
                                  value={distanceTravelledByOneTraveller} onChange={(e)=> setDistance(e.target.value)} />
                            </div>


                        </div>         

                        </div>

                            <div className="col-md-4">
                                <label htmlFor="">Supporting Document (If Any)</label>
                                <input type="file" className="form-control" placeholder="Upload document" />
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
                    <button type="btn" className="btn btn-outline-success rounded-pill" onClick={ handleDeleteConfirm} style={{width:"10rem"}}>Yes </button>
                    </div>
                    </div>
                       </>
                        </Modal.Body>
                </Modal>

                </>
        </section>
    )
}
export default BusinessTravel;