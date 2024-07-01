import React, {useState, useEffect} from "react";
import { ADMINAPI } from "../../../../apiWrapper";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';
import { useRouter } from "next/navigation";

const NonrenowableTable =({projectId, projectPack})=>{
    const [show, setShow] = useState(false);
    const handleClose =()=> setShow(false);
    const handleShow =()=>{
      setShow(true);
      setEnergyOutput("");
      setfuelType("");
      setNumberOfTrips("");
      setTotalSpending("");
      setUnit("");
      setUsage("");
      setVolume("");
      setfuelUsed("");
    }

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit =()=> setShowEdit(false);
    const handleShowEdit =(row)=>  {
        setfuelType(row.fuelType);
        setUsage(row.equipment);
        setVolume(row.volume)
        setUnit(row.unit)
        setEnergyOutput(row.energyOutput)
        setTotalSpending(row.totalSpending)
        setNumberOfTrips(row.noOfTrips)
        setfuelUsed(row.fuelUsedByTrucks)
        setNonRenewId(row._id)
        setShowEdit(true)
    }

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete =()=> setShowDelete(false);
    const handleShowDelete = (row) => {
        console.log(row,"LLLL");
        setNonRenewId(row._id)
        setShowDelete(true)
      }

    const navigate = useRouter();

    const [fuelType, setfuelType] = useState("");
    const [equipment, setUsage] = useState("");
    const [totalSpending, setTotalSpending] = useState("");
    const [volume, setVolume] = useState("");
    const [unit, setUnit] = useState("");
    const [noOfTrips, setNumberOfTrips] = useState("");
    const [fuelUsedByTrucks, setfuelUsed] = useState("");
    const [energyOutput, setEnergyOutput] = useState("");
    const [nonRenewId, setNonRenewId] = useState("");
    

    let fuelTypeArr =  ['Diesel','Petrol','CNG','LPG'];
    let usageArr = ['Equipment', 'Generator', 'Others'];
    let unitTypeArr = ['US Gallon', 'Litre', 'Cubic Meter'];

    const columns = [
    	
        {
            name: <b>Fuel Type</b>,
            selector: (row) => row.fuelType,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Usage </b>,
            selector: (row) => row.equipment,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Volume</b>,
            selector: (row) => row.volume,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>Unit</b>,
            selector: (row) => row.unit,
            wrap:"true",
            sortable: true,
        },
        
        {
            name: <b>Energy Output <br/>(kWh) </b>,
            selector: (row) => row.energyOutput,
            wrap:"true",
            sortable: true,
        },

        {
            name: <b>Total Spending <br/>(AED)</b>,
            selector: (row) => row.totalSpending,
            wrap:"true",
            sortable: true,
        },

        {
            name: <b>Supporting Document</b>,
            selector: (row) => "dummy",
            wrap:"true",
            sortable: true,
        },

        {
            name: <b>No. Of Trips </b>,
            selector: (row) => row.noOfTrips,
            wrap:"true",
            sortable: true,
        },

        {
            name: <b>Fuel Used <span>by Trucks(L) (One full Trip)</span></b>,
            selector: (row) => row.fuelUsedByTrucks,
            wrap:"true",
            sortable: true,
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
            wrap:"true",
           
        },
    ];
    console.log("Srajal",projectId,projectPack);
    const handleChangeFuelType = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setfuelType(selectedValue);
      };
    const handleChangeUsage = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected 000000");
        setUsage(selectedValue);
    }
    const handleChangeUnitType = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setUnit(selectedValue);
    }
    const handleEditChanges = async() => {
        const payload = {
            // Construct payload based on your form data
            // projectId:projectId,
            // packageId:projectPack,
            fuelType: fuelType,
            equipment: equipment,
            volume: volume,
            unit: unit,
            energyOutput: energyOutput,
            totalSpending: totalSpending,
            noOfTrips: noOfTrips,
            fuelUsedByTrucks: fuelUsedByTrucks ,
            supportingDocument: "2 attachments"
            
          };
        //   console.log("nonRenewId",nonRenewId)
          try {
            await ADMINAPI({
              url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/non-renewable/${nonRenewId}`,
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

    const [rows, setRows] = useState([]);

    const handleSaveChanges = async () => {
        const payload = {
          // Construct payload based on your form data
          projectId:projectId,
          packageId:projectPack,
          energyNonRenewableId: 111000,
          fuelType: fuelType,
          equipment: equipment,
          volume: volume,
          unit: unit,
          energyOutput: energyOutput,
          totalSpending: totalSpending,
          noOfTrips: noOfTrips,
          fuelUsedByTrucks: fuelUsedByTrucks ,
          supportingDocument: "2 attachments",
        };
      
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/non-renewable`,
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
            method: "GET",
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/non-renewable`
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
      const handleDeleteConfirm = async() => {
            
        try {
            console.log("data>>>>",rows);
            await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/non-renewable/${nonRenewId}`,
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
        
                      // toast.error(data?.message);
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
    return(
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="/images/nonRenowable.png" alt="" />
                    <h5 className="mx-2">Non Renewable Energy</h5>
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
                            <img src="/images/nonRenowable_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Energy Consumption</h4>
                                <h5>Non Renewable Sources</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Fuel Type</label>
                                <select className="form-select" aria-label="Default select example"
                                 onChange={(e) => handleChangeFuelType(e)}
                                 value={fuelType}
                                >
                                    {fuelTypeArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Usage</label>
                                <select className="form-select" aria-label="Default select example"
                                 onChange={(e) => handleChangeUsage(e)}
                                 value={equipment}>
                                    {usageArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Total Spending(AED)</label>
                                <input type="text" className="form-control" placeholder=""
                                value={totalSpending} onChange={(e) => setTotalSpending(e.target.value)} required />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Volume</label>
                                <input type="text" className="form-control" placeholder="" 
                                value={volume} onChange={(e) => setVolume(e.target.value)} required />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unit Type</label>
                                <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeUnitType(e)} value={unit}>
                                {unitTypeArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Energy output(kWh)</label>
                                <input type="text" className="form-control" placeholder="" value={energyOutput} onChange={(e) => setEnergyOutput(e.target.value)} required />
                            </div>
                        </div>

                        <hr className="my-4"/>
                        
                        <div className="row my-3 ">
                            <h2>Logistics</h2>

                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="" value={noOfTrips} onChange={(e) => setNumberOfTrips(e.target.value)} required/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Used by Trucks(L)(One full trip)</label>
                                <input type="text" className="form-control" placeholder="" value={fuelUsedByTrucks} onChange={(e)=> setfuelUsed(e.target.value)} />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Support Document (If Any)</label>
                                <input type="file" className="form-control" placeholder="Upload document" />
                            </div>
                        </div>
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
                       <div>
                        <div className="d-flex align-items-center">
                            <img src="/images/nonRenowable_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Energy Consumption</h4>
                                <h5>Non Renewable Sources</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Fuel Type</label>
                                <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeFuelType(e)}
                value={fuelType}>
                                   {fuelTypeArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Usage</label>
                                <select className="form-select" aria-label="Default select example"  onChange={(e) => handleChangeUsage(e)}
                value={equipment}>
                                     {usageArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Total Spending(AED)</label>
                                <input type="text" className="form-control" placeholder="" value={totalSpending} onChange={(e) => setTotalSpending(e.target.value)} required />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Volume</label>
                                <input type="text" className="form-control" placeholder="" value={volume} onChange={(e) => setVolume(e.target.value)} required/>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unit Type</label>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeUnitType(e)} value={unit}>
                                {unitTypeArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Energy output(kWh)</label>
                                <input type="text" className="form-control" placeholder="" value={energyOutput} onChange={(e) => setEnergyOutput(e.target.value)} required/>
                            </div>
                        </div>

                        <hr className="my-4"/>
                        
                        <div className="row my-3 ">
                            <h2>Logistics</h2>

                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="" value={noOfTrips} onChange={(e) => setNumberOfTrips(e.target.value)} required/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Used by Trucks(L)(One full trip)</label>
                                <input type="text" className="form-control" placeholder="" value={fuelUsedByTrucks} onChange={(e)=> setfuelUsed(e.target.value)}/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Support Document (If Any)</label>
                                <input type="file" className="form-control" placeholder="Upload document" />
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
export default NonrenowableTable;