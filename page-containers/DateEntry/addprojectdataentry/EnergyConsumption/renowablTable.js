import React, {useState, useEffect} from "react";
import { ADMINAPI } from "../../../../apiWrapper";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';
import { useRouter } from "next/router";

const RenowableEnergyTable =()=>{
    const [show, setShow] = useState(false);
    const handleClose =()=> setShow(false);
    const handleShow =()=>{
        setType("");
        setSource("");
        setConsumption("");
        setUnit("");
        setShow(true);
    }

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit =()=> setShowEdit(false);
    const handleShowEdit =(rows)=>{
        setRenewId(rows._id);
        setConsumption(rows.consumption);
        setUnit(rows.unit);
        setType(rows.type);
        setSource(rows.source);
        setShowEdit(true);
    }

    const [showDelete, setShowDelete] = useState(false);

    const [type, setType] = useState("");
    const [source, setSource] = useState("");
    const [consumption, setConsumption] = useState("");
    const [unit, setUnit] = useState("");
    const [renewId, setRenewId] = useState("");

    const navigate = useRouter()

    const handleCloseDelete =()=> setShowDelete(false);
    const handleShowDelete =(rows)=>  {
        setShowDelete(true);
        setRenewId(rows._id)
    }
    const [rows, setRows] = useState("");
    
    let typeArr = ['Biomass', 'Geothermal', 'Hydro', 'Solar', 'Wind'];
    let unitArr = ['Kwh', 'Joule', 'Wh'];

    const columns = [
    	
        {
            name: <b>Type</b>,
            selector: (row) => row.type,
            wrap:"true"
        },
        {
            name: <b clasgitsName="text-center">Source </b>,
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
            selector: (row) => row.unit,
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
        }
    ];
    const handleChangeType = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setType(selectedValue);
      };
    const handleChangeUnit = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setUnit(selectedValue);
      };
    // const rows = [
    //     {
    //         type: "Solar",
    //         source: "Company X",
    //         consumption: "1344",
    //         unite:"Joule",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
    //     },

    //      {
    //         type: "Wind",
    //         source: "Company Y",
    //         consumption: "1452",
    //         unite:"kWh",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
    //      },
    // ];

    // Function to handle save operation
    const handleSaveChanges = async () => {
      const payload = {
        // Construct payload based on your form data
        type:type, 
        source:source, 
        consumption:consumption, 
        unit:unit,   
      };
      try {
        await ADMINAPI({
          url:  `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/renewable`,
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
              method: "GET",
              url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/renewable`
            }).then((data) => {
                let userData = data.response;
                console.log(userData)
                console.log("Srajal")
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

      const handleDeleteConfirm = async() => {
            
        try {
     
            await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/renewable/${renewId}`,
                method: "PATCH",
                 
                 }).then((data) => {
                    if (data.status === true) {
                        setShowDelete(false)
                        handleCloseDelete();
                        fetchTable();
                      setTimeout(() => {
                        navigate.push("/addMonthlyData", { scroll: false });
                      }, 100);
                    } else {
                        console.log(data?.message,"rtrttt");
                        setShowDelete(false)
        
                    //   toast.error(data?.message);
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
      useEffect(() => {
        fetchTable();
      }, []);
      
      const handleEditChanges = async () => {
       const payload = {
        // Construct payload based on your form data
        type:type, 
        source:source, 
        consumption:consumption, 
        unit:unit,   
      };
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/renewable/${renewId}`,
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
                                <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeType(e)}
                value={type}>
                                   {typeArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>

                            <div className="col-md-6">
                            <label htmlFor="">Source</label>
                            <input type="text" className="form-control" placeholder="Company X" value={source} onChange={(e) => setSource(e.target.value)} required/>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="">Consumption</label>
                                <input type="text" className="form-control" placeholder="1344" value={consumption} onChange={(e) => setConsumption(e.target.value)} required/>
                            </div>

                            <div className="col-md-6">
                            <label htmlFor="">Unite</label>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeUnit(e)}
                value={unit}>
                                   {unitArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>
                           
                        </div>

                       
                       </div>


                    <div className="my-4 d-flex justify-content-between">
                    <div>
                    <button type="btn" className="btn btn-outline-secondary" onClick={handleClose}> Cancel </button>
                    </div>
                    <div>
                    <button type="btn" className="btn btn-outline-success" onClick={handleSaveChanges}> Add </button>
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
                                <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeType(e)}
                value={type}>
                                   {typeArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>

                            <div className="col-md-6">
                            <label htmlFor="">Source</label>
                            <input type="text" className="form-control" placeholder="Company X" value={source} onChange={(e) => setSource(e.target.value)} required/>
                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="">Consumption</label>
                                <input type="text" className="form-control" placeholder="1344" value={consumption} onChange={(e) => setConsumption(e.target.value)} required/>
                            </div>

                            <div className="col-md-6">
                            <label htmlFor="">Unite</label>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeUnit(e)}
                value={unit}>
                                   {unitArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>
                           
                        </div>

                       
                       </div>


                    <div className="my-4 d-flex justify-content-between">
                    <div>
                    <button type="btn" className="btn btn-outline-secondary" onClick={handleCloseEdit}> Cancel </button>
                    </div>
                    <div>
                    <button type="btn" className="btn btn-outline-success" onClick={handleEditChanges}> Add </button>
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
export default RenowableEnergyTable;