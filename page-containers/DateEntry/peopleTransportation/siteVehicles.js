import React, {useState,useEffect} from "react";
import { ADMINAPI } from "../../../apiWrapper";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';
import { useRouter } from "next/router";

const SiteVehicles =({projectId,projectPack})=>{

    const [show, setShow] = useState(false);
    const handleClose =()=> setShow(false);
    const handleShow =()=>{
        setDistanceTraveledForAllVehicles("");
        setFuelConsumption("");
        setNumberOfVehicles("");
        setShow(true);
    }

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit =()=> setShowEdit(false);
    const handleShowEdit =(row)=>{
        setDistanceTraveledForAllVehicles(row.distanceTraveledForAllVehicles);
        setFuelConsumption(row.fuelConsumption);
        setNumberOfVehicles(row.numberOfVehicles);
        setSiteVehiclesId(row._id);
        setShowEdit(true);
    }
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete =()=> setShowDelete(false);
    const handleShowDelete =(row)=> {
        setShowDelete(true);
        setSiteVehiclesId(row._id);
    }
    const [siteVehiclesId, setSiteVehiclesId ]= useState([]);
    const [distanceTraveledForAllVehicles, setDistanceTraveledForAllVehicles]= useState("");
    const [numberOfVehicles, setNumberOfVehicles]= useState("");
    const [fuelConsumption, setFuelConsumption]= useState("");

    const[rows,setRows] = useState([]);
    const navigate = useRouter();

    const columns = [
    	
        {
            name: <b>Number of Vehicles(Excluding Worker Buses)</b>,
            selector: (row) => row.numberOfVehicles,
            wrap:"true"
        },
        {
            name: <b className="text-center">Distance Traveled for all Vehicles(Excluding Worker Buse) </b>,
            selector: (row) => row.distanceTraveledForAllVehicles,
            wrap:"true"
        },
        {
            name: <b className="text-center">Fuel Cunsumption(Excluding Worker Buse) </b>,
            selector: (row) => row.fuelConsumption,
            wrap:"true"
        },

        {
            name: <b>Supporting Document</b>,
            selector: (row) => row.supportingDocument,
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
    //         numberOfVehicles : "5",
    //         distanceTraveledForAllVehicles: "5240km",
    //         fuelConsumption: "524Liter",
    //         supportingDocument:"1 attachments",
    //         reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-secondary">Submitted</button></div>,
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
    //     },
    //      {
    //         numberOfVehicles : "2",
    //         distanceTraveledForAllVehicles: "430km",
    //         fuelConsumption: "43Liter",
           
    //         supportingDocument:"1 attachments",
    //         reportStatus :<div><button type="btn" className="btn btn-sm btn-outline-success">Audited</button></div>,
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
            numberOfVehicles:numberOfVehicles,
            distanceTraveledForAllVehicles:distanceTraveledForAllVehicles,
            fuelConsumption:fuelConsumption,
            supportingDocument: "dummy",     
          };
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/site-vehicle`,
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
                // toast.error(err?.message);
            });
        } catch (error) {
          console.log(error, "errorooo");
        }
      };
      const fetchTable = async () => {
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/site-vehicle`,
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
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/site-vehicle/${siteVehiclesId}`,
                method: "PATCH",
                 
                 }).then((data) => {
                    if (data.status === true) {
                        setShowDelete(false)
                        handleCloseDelete();
                        fetchTable()
                      setTimeout(() => {
                        navigate.push("/addMonthlyData", { scroll: false });
                      }, 100);
                    } else {
                        console.log(data?.message,"rtrttt");
                        setShowDeleteConfirmation(false)
        
                      toast.error(data?.message);
                    }
                 }).catch(err =>{
                    setShowDeleteConfirmation(false)
    
            console.log(err,"rtrttt");
            // toast.error(err?.message);
                 })
               
             } catch (error) {
               console.log(error, "errorooo");
            //    toast.error(data?.message);
    
     
             }
      };

      const handleEditChanges = async () => {
        const payload = {
          // Construct payload based on your form data
        //   projectId:projectId,
        //   packageId:projectPack,
          numberOfVehicles:numberOfVehicles,
          distanceTraveledForAllVehicles:distanceTraveledForAllVehicles,
          fuelConsumption:fuelConsumption,
          supportingDocument: "dummy",     
        };
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/site-vehicle/${siteVehiclesId}`,
            method: "put",
            body: { ...payload },
          })
            .then((data) => {
              if (data.status === true) {
                setShow(false);
                handleCloseEdit();
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


    return(
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="/images/SiteVehicles.png" alt="" />
                    <h5 className="mx-2">Site Vehicles</h5>
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
                                <h5>Site Vehicles</h5>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="Number of Vehicles">Number Of Vehicles</label>
                                <input type="text" className="form-control" placeholder="" value={numberOfVehicles}
                onChange={(e) => setNumberOfVehicles(e.target.value)}
                required/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Distance Traveled For all Vehicles </label>
                                <input type="text" className="form-control" placeholder=""  value={distanceTraveledForAllVehicles}
                onChange={(e) => setDistanceTraveledForAllVehicles(e.target.value)}
                required/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Consumption</label>
                                <input type="text" className="form-control" placeholder="" value={fuelConsumption}
                onChange={(e) => setFuelConsumption(e.target.value)}
                required />
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
                    <button type="btn" className="btn btn-outline-success" onClick={handleSaveChanges}> Save Changes </button>
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
                       
                        <div className="d-flex align-items-center">
                            <img src="/images/PeopleTransportation.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>PeopleTransportation</h4>
                                <h5>Site Vehicles</h5>
                            </div>

                            <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="Number of Vehicles">Number Of Vehicles</label>
                                <input type="text" className="form-control" placeholder="" value={numberOfVehicles}
                onChange={(e) => setNumberOfVehicles(e.target.value)}
                required/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Distance Traveled For all Vehicles </label>
                                <input type="text" className="form-control" placeholder=""  value={distanceTraveledForAllVehicles}
                onChange={(e) => setDistanceTraveledForAllVehicles(e.target.value)}
                required/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Consumption</label>
                                <input type="text" className="form-control" placeholder="" value={fuelConsumption}
                onChange={(e) => setFuelConsumption(e.target.value)}
                required />
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
                    <button type="btn" className="btn btn-outline-success rounded-pill" onClick={handleDeleteConfirm} style={{width:"10rem"}}>Yes </button>
                    </div>
                    </div>
                       </>
                        </Modal.Body>
                </Modal>

                </>
        </section>
    )
}
export default SiteVehicles;