import React, {useState, useEffect} from "react";
import { ADMINAPI } from "../../../../apiWrapper";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';
import { useRouter } from "next/navigation";

const NonrenowableTable =()=>{
    const [show, setShow] = useState(false);
    const handleClose =()=> setShow(false);
    const handleShow =()=>setShow(true);

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
            wrap:"true"
        },
        {
            name: <b className="text-center">Usage </b>,
            selector: (row) => row.equipment,
            wrap:"true"
        },
        {
            name: <b className="text-center">Volume</b>,
            selector: (row) => row.volume,
            wrap:"true"
        },
        {
            name: <b>Unite</b>,
            selector: (row) => row.unit,
            wrap:"true"
        },
        
        {
            name: <b>Energy Output <br/>(kWh) </b>,
            selector: (row) => row.energyOutput,
            wrap:"true"
        },

        {
            name: <b>Total Spending <br/>(AED)</b>,
            selector: (row) => row.totalSpending,
            wrap:"true"
        },

        {
            name: <b>Supporting Document</b>,
            selector: (row) => "dummy",
            wrap:"true"
        },

        {
            name: <b>No. Of Trips </b>,
            selector: (row) => row.noOfTrips,
            wrap:"true"
        },

        {
            name: <b>Fuel Used <span>by Trucks(L) (One full Trip)</span></b>,
            selector: (row) => row.fuelUsedByTrucks,
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
            wrap:"true",
           
        },
    ];
    
    const rows = [
        {
            fuelType: "Diesel",
            usage: "Equipment",
            volume: "200",
            unite:"Liter",
            EnergyOutput: "-",
            TotalSpending: "1344",
            supportingDocument: "2 Attachments",
            numberOfTrips:"1",
            fuelUsed:"10",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },

         {
            fuelType: "Diesel",
            usage: "Generator",
            volume: "300",
            unite:"Liter",
            EnergyOutput: "1,000",
            TotalSpending: "1452",
            supportingDocument: "1 Attachment",
            numberOfTrips:"2",
            fuelUsed:"25",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
    ];


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
                                <input type="text" className="form-control" placeholder=" "
                                value={totalSpending} onChange={(e) => setTotalSpending(e.target.value)} required />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Volume</label>
                                <input type="text" className="form-control" placeholder="200" 
                                value={volume} onChange={(e) => setVolume(e.target.value)} required />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unite Type</label>
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
                                <input type="text" className="form-control" placeholder="-" value={energyOutput} onChange={(e) => setEnergyOutput(e.target.value)} required />
                            </div>
                        </div>

                        <hr className="my-4"/>
                        
                        <div className="row my-3 ">
                            <h2>Logistics</h2>

                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="1" value={noOfTrips} onChange={(e) => setNumberOfTrips(e.target.value)} required/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Used by Trucks(L)(One full trip)</label>
                                <input type="text" className="form-control" placeholder="10" value={fuelUsedByTrucks} onChange={(e)=> setfuelUsed(e.target.value)} />
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
                                <input type="text" className="form-control" placeholder="1234567890" value={totalSpending} onChange={(e) => setTotalSpending(e.target.value)} required />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Volume</label>
                                <input type="text" className="form-control" placeholder="200" value={volume} onChange={(e) => setVolume(e.target.value)} required/>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unite Type</label>
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
                                <input type="text" className="form-control" placeholder="-" value={energyOutput} onChange={(e) => setEnergyOutput(e.target.value)} required/>
                            </div>
                        </div>

                        <hr className="my-4"/>
                        
                        <div className="row my-3 ">
                            <h2>Logistics</h2>

                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="1" value={noOfTrips} onChange={(e) => setNumberOfTrips(e.target.value)} required/>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Used by Trucks(L)(One full trip)</label>
                                <input type="text" className="form-control" placeholder="10" value={fuelUsedByTrucks} onChange={(e)=> setfuelUsed(e.target.value)}/>
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