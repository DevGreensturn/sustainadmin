import React, {useState,useEffect} from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';
import { ADMINAPI } from "../../../../apiWrapper";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BottledWaterTable =()=>{
    const [show, setShow] = useState(false);
    const handleClose =()=> setShow(false);
    const handleShow =()=>setShow(true);
    const navigate = useRouter();
    const [rows, setRows] = useState([]);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit =()=> setShowEdit(false);
    const handleShowEdit =()=>setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete =()=> setShowDelete(false);
    const handleShowDelete =()=> setShowDelete(true);
    const [water, setWater] = useState("");
    const [capacity, setCapacity] = useState("");
    const [quantity, setQuantity] = useState("");
    const [trips, setTrips] = useState("");
    const [fuel, setFuel] = useState("");
    const [waterId, setWaterId] = useState("");




    const columns = [
        {
            name: <b className="text-center">Drinking <br />Non Drinking Water</b>,
            selector: (row) => row.waterType,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Water Bottle Capacity <br />(Litres)</b>,
            selector: (row) => row.waterBottleCapacity,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Water Bottle<br /> Quantity</b>,
            selector: (row) => row.waterBottleQuantity,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>No. of Trips</b>,
            selector: (row) => row.noOfTrips,
            wrap:"true",
            sortable: true,
        },
        
        {
            name: <div className="text-center"><b>Fuel used by Trucks</b><br /> (litres)(one full trip, from source)</div>,
            selector: (row) => row.fuelUsedByTruck,
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
            cell: (row) => (
              <div className="d-flex align-items-center">
                <FaRegEdit
                  style={{ color: "secondary", fontSize: "20px", cursor: "pointer" }}
                  onClick={() => handleEdit(row)}
                />
                <MdDeleteForever
                  className="mx-2"
                  style={{ color: "red", fontSize: "20px", cursor: "pointer" }}
                  onClick={() => handleDelete(row)}
                />
              </div>
            ),
            wrap: true,
            width: "180px",
            sortable: true,
          },
    ];
    
    const row = [
        {
            DrinkingWater: "Drinking Water",
            WaterBottleCapacity: "0.5",
            WaterBottle: "1344",
            NoofTrips:"2",
            Fuelusedby: "25",
            SupportingDocument:"1 Attachment",

            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },

         {
            DrinkingWater: "Drinking Water",
            WaterBottleCapacity: "0.33",
            WaterBottle: "1452",
            NoofTrips:"1",
            Fuelusedby: "10",
            SupportingDocument:"1 Attachment",

            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
    ];

    const customStyles ={
        rows:{
            style:{
                minHeight: '72px', // override the row height
            }
        }
    }
    
    let waterArr = ["Drinking Water", "Non-Drinking Water"];
    let fuelArr = ["1344", "1452"];


    const handleChangeWater = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setWater(selectedValue);
      };
      const handleChangFuel = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setFuel(selectedValue);
      };

      const handleSaveChanges = async () => {
        const payload = {
          packageId: "60d5ec49f7d5ab001c8d5dbf",
          projectId: "60d5ec49f7d5ab001c8d5dc0",
          reportId: "60d5ec49f7d5ab001c8d5dc1",
          emissionInputId: 123,
          waterType:  water,//"Drinking Water",
          waterBottleCapacity: capacity ,//5000,
          waterBottleQuantity: quantity,// 7,
          noOfTrips: trips,// 5,
          fuelUsedByTruck: fuel,// 150,
          supportingDocument: "document-url",
          safeDelete: false,
         
        };

        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/water-bottle`,
            method: "POST",
            body: { ...payload },
          })
            .then((data) => {
              if (data.status === true) {
                setShow(false);
                toast.success(data?.message);
                fetchWaterBottle();
                setTimeout(() => {
                  navigate.push("/addMonthlyData", { scroll: false });
                }, 100);
    
                return data;
              } else {
                // toast.error(data?.message);
                handleClose();
              }
            })
            .catch((err) => {
              handleClose();
    
              //   toast.error(err?.message);
            });
        } catch (error) {
          handleClose();
          console.log(error, "errorooo");
        }
      };
      const fetchWaterBottle = async () => {
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/water-bottle`,
            method: "GET",
          }).then((data) => {
            let userData = data.response;
            setRows(userData);
            console.log(userData, "bottle");
          });
        } catch (error) {
          console.log(error, "errorooo");
        }
      };
      const handleEdit = async (row) => {
        // Logic to handle editing the row
    
        console.log("Edit row:uuuuuu", row);
          setWater(row.waterType), // serviceProvider: serviceProvider, //"DEWA",
          setQuantity(row.waterBottleQuantity), // meterReading: meterReading, // "1400",
          setCapacity(row.waterBottleCapacity), // consumption: consumption, //"1400",
          setTrips(row.noOfTrips), // unit: waterUnit, //"Joule",
          setFuel(row.fuelUsedByTruck),
          setWaterId(row._id);
          setShowEdit(true);
        // For example, you might open a modal with a form to edit the row's details
      };
      const handleEditChanges = async () => {
        const payload = {
          
            emissionInputId: 123,
            waterType:  water,//"Drinking Water",
            waterBottleCapacity: capacity ,//5000,
            waterBottleQuantity: quantity,// 7,
            noOfTrips: trips,// 5,
            fuelUsedByTruck: fuel,// 150,
            supportingDocument: "document-url",
            safeDelete: false,
           
          };
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/water-bottle/${waterId}`,
            method: "put",
            body: { ...payload },
          })
            .then((data) => {
              if (data.status === true) {
                setShow(false);
                handleCloseEdit();
              toast.success(data?.message);
                fetchWaterBottle();
                setTimeout(() => {
                  navigate.push("/addMonthlyData", { scroll: false });
                }, 100);
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
      const handleDelete = (row) => {
        console.log(row, "LLLL");
        setWaterId(row._id);
        setShowDelete(true);
      };
      const handleDeleteConfirm = async () => {
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/water-bottle/${waterId}`,
            method: "PATCH",
          })
            .then((data) => {
              if (data.status === true) {
                setShowDelete(false);
                handleCloseDelete();
                fetchWaterBottle();
                setTimeout(() => {
                  navigate.push("/addMonthlyData", { scroll: false });
                }, 100);
              } else {
                console.log(data?.message, "rtrttt");
                setShowDeleteConfirmation(false);
    
                toast.error(data?.message);
              }
            })
            .catch((err) => {
              setShowDeleteConfirmation(false);
    
              console.log(err, "rtrttt");
              toast.error(err?.message);
            });
        } catch (error) {
          console.log(error, "errorooo");
          toast.error(data?.message);
        }
      };
      useEffect(() => {
        fetchWaterBottle();
      }, []);
    return(
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="/images/bottled_water.png" alt="" />
                    <h5 className="mx-2">Bottled Water</h5>
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
                            <img src="/images/bottled_water_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Water Consumption</h4>
                                <h5>Bottled Water</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Drinking/Non Drinking Water</label>
                                <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeWater(e)}
                      value={water}
                    >
                      {waterArr?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>

                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Water Bottle Capacity (Liters)</label>
                            <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                      required
                    />{" "}                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Water Bottle Quantity</label>
                                <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                    />{" "}                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                            <label htmlFor="">No. of Trips</label>
                            <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={trips}
                      onChange={(e) => setTrips(e.target.value)}
                      required
                    />{" "}                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Fuel Used by Trucks (Liters)</label>

                            <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangFuel(e)}
                      value={fuel}
                    >
                      {fuelArr?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Supporting Document (If Any)</label>
                            <input type="file" className="form-control" placeholder="" />
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
                            <img src="/images/bottled_water_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Water Consumption</h4>
                                <h5>Bottled Water</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Drinking/Non Drinking Water</label>
                                <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeWater(e)}
                      value={water}
                    >
                      {waterArr?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>

                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Water Bottle Capacity (Liters)</label>
                            <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                      required
                    />{" "}                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Water Bottle Quantity</label>
                                <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                    />{" "}                            </div>

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                            <label htmlFor="">No. of Trips</label>
                            <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={trips}
                      onChange={(e) => setTrips(e.target.value)}
                      required
                    />{" "}                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Fuel Used by Trucks (Liters)</label>

                            <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangFuel(e)}
                      value={fuel}
                    >
                      {fuelArr?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Supporting Document (If Any)</label>
                            <input type="file" className="form-control" placeholder="" />
                            </div>

                        </div>

                       </div>


                    <div className="my-4 d-flex justify-content-between">
                    <div>
                    <button type="btn" className="btn btn-outline-secondary" onClick={handleClose}> Close </button>
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
                <ToastContainer/>

                </>
        </section>
    )
}
export default BottledWaterTable;