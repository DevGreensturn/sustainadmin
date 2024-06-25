import React, {useState,useEffect} from "react";
import { ADMINAPI } from "../../../../apiWrapper";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';
import { useRouter } from "next/router";

const ReductionEnerguTable =({projectId, projectPack})=>{
    const [show, setShow] = useState(false);
    const handleClose =()=> setShow(false);
    const handleShow =()=>{
        setCalculationMethod("");
        setEnergyAmount("");
        setInitiativeName("");
        setSoldEnergy("");
        setUnit("");
        setSource("");
        setShow(true);
    }

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit =()=> setShowEdit(false);
    const handleShowEdit =(row)=>{
        setInitiativeName(row.initiativeName);
        setEnergyAmount(row.energyAmount);
        setCalculationMethod(row.calculationMethod);
        setSource(row.source);
        setUnit(row.unit);
        setReductionId(row._id);
        setShowEdit(true);
    }
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete =()=> setShowDelete(false);
    const handleShowDelete =(row)=> {
        setReductionId(row._id);
        setShowDelete(true);
    }
    const navigate = useRouter();

    const[initiativeName,setInitiativeName]= useState();
    const[source,setSource]= useState();
    const[energyAmount,setEnergyAmount]= useState();
    const[unit,setUnit]= useState();
    const[calculationMethod,setCalculationMethod]= useState();
    const[soldEnergy,setSoldEnergy]= useState();

    const [rows, setRows] = useState([]);
    const [reductionId, setReductionId] = useState("");

    
    const handleChangeUnit = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setUnit(selectedValue);
    };
    const handleChangeSource = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setSource(selectedValue);
    };
    const handleChangeCalculationMethod = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setCalculationMethod(selectedValue);
    };

    let sourceArr = ['Utility Provider Energy', 'Renewable Energy', 'Non-Renewable Energy']
    ;
    let unitArr =  ['Kwh', 'Joule', 'Wh'];
    let calculationMethodArr =  ['Estimated', 'Modeled', 'Measured'];

    const columns = [
    	
        {
            name: <b>Initiative Name</b>,
            selector: (row) => row.initiativeName,
            wrap:"true"
        },
        {
            name: <b className="text-center">Source </b>,
            selector: (row) => row.source,
            wrap:"true"
        },
        {
            name: <b className="text-center">Energy Amount</b>,
            selector: (row) => row.energyAmount,
            wrap:"true"
        },
        {
            name: <b>Unit</b>,
            selector: (row) => row.unit,
            wrap:"true",
            
        },

        {
            name: <b>Calculation Method</b>,
            selector: (row) => row.calculationMethod,
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
    //         initiativename: "LED Lighting",
    //         source: "Energy Consumption-Utility Provider Energy",
    //         energyamount: "1234567890",
    //         unite:"Joule",
    //         calculationmethod:"Estimated",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
    //     },

    //      {
    //         initiativename: "Fuel Optimization",
    //         source: "Energy Consumption-Non Renewable Resource",
    //         energyamount: "1234567890",
    //         unite:"kWh",
    //         calculationmethod:"Modeled",

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
          initiativeName:initiativeName,
          source:source,
          energyAmount:energyAmount,
          unit:unit,
          calculationMethod:calculationMethod,
        };
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/reduction/`,
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
            url:`${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/reduction/`,
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

      const handleEditChanges = async () => {
        const payload = {
          // Construct payload based on your form data
          projectId:projectId,
          packageId:projectPack,
          initiativeName:initiativeName,
          source:source,
          energyAmount:energyAmount,
          unit:unit,
          calculationMethod:calculationMethod,
        };
        try {
          await ADMINAPI({
            url:`${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/reduction/${reductionId}`,
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


      const handleDeleteConfirm = async() => {
            
        try {
     
            await ADMINAPI({
                url:`${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/reduction/${reductionId}`,
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
    
    return (
       
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="/images/ReductionEnergyTable.png" alt="" />
                    <h5 className="mx-2">Reduction of Energy Consumption</h5>
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
                            <img src="/images/ReductionEnergyTable.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Energy Consumption</h4>
                                <h5>Reduction of Energy Consumption</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Initiative Name</label>
                                <input type="text" className="form-control" placeholder="" value={initiativeName}
                onChange={(e) => setInitiativeName(e.target.value)}
                required/>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Source</label>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeSource(e)}
                value={source}
              >
                {sourceArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Energy Amount</label>
                                <input type="text" className="form-control" placeholder="" value={energyAmount}
                onChange={(e) => setEnergyAmount(e.target.value)}
                required/>
                            </div>

                        </div>

                        <div className="row mt-3">
                           

                            <div className="col-md-4">
                            <label htmlFor="">Unit</label>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeUnit(e)}
                value={unit}
              >
                {unitArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>
                           
                            <div className="col-md-4">
                            <label htmlFor="">calculation Method</label>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeCalculationMethod(e)}
                value={calculationMethod}
              >
                {calculationMethodArr?.map((category, indexCat) => (
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
                    <button type="btn" className="btn btn-outline-success" onClick={handleSaveChanges }> Add </button>
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
                            <img src="/images/ReductionEnergyTable.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Energy Consumption</h4>
                                <h5>Reduction of Energy Consumption</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Initiative Name</label>
                                <input type="text" className="form-control" placeholder="" value={initiativeName}
                onChange={(e) => setInitiativeName(e.target.value)}
                required/>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Source</label>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeSource(e)}
                value={source}
              >
                {sourceArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Energy Amount</label>
                                <input type="text" className="form-control" placeholder="" value={energyAmount}
                onChange={(e) => setEnergyAmount(e.target.value)}
                required/>
                            </div>

                        </div>

                        <div className="row mt-3">

                            <div className="col-md-4">
                            <label htmlFor="">Unit</label>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeUnit(e)}
                value={unit}
              >
                {unitArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>
                           
                            <div className="col-md-4">
                            <label htmlFor="">calculation Method</label>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeCalculationMethod(e)}
                value={calculationMethod}
              >
                {calculationMethodArr?.map((category, indexCat) => (
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
export default ReductionEnerguTable;