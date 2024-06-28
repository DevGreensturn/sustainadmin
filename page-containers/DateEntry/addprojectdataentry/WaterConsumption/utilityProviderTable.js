import React, {useEffect, useState} from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';
import { ADMINAPI } from "../../../../apiWrapper";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Utilityprovidertable =()=>{
    const [rows, setRows] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose =()=> setShow(false);
    const handleShow =()=>setShow(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit =()=> setShowEdit(false);
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete =()=> setShowDelete(false);
    const navigate = useRouter();
    const [metorNo, setMetorNo] = useState(""); //accountNumber
    const [accountNumber, setAccountNumber] = useState(""); //accountNumber
    const [serviceProvider, setServiceProvider] = useState(""); //accountNumber
    const [readingDate, setReadingDate] = useState(""); //accountNumber
    const [meterReading, setMeterReading] = useState(""); //accountNumber
    const [consumption, setConsumption] = useState(""); //accountNumber
    const [waterUnit, setWaterUnit] = useState("");
    const [waterId, setWaterId] = useState("");
    const [water, setWater] = useState("");

  
    const handleDelete = (row) => {
        console.log(row,"LLLL");
        setWaterId(row._id)
        setShowDelete(true)
      }
    let waterUnitArr =  ["US Gallon", "Litre", "Cubic Meter"];
    let waterArr = ["Drinking Water", "Non-Drinking Water"];
    function formatDate(readingDate) {
      const date = new Date(readingDate);
      const options = { day: "numeric", month: "long", year: "numeric" };
      const formattedDate = date.toLocaleDateString("en-GB", options);
  
      return formattedDate;
    }
    const handleChangeWater = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setWater(selectedValue);
      };
      const handleChangeWaterUnit = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setWaterUnit(selectedValue);
      };
      const handleDateChange = (date) => {
        setReadingDate(date);
      };
      const handleEdit = async (row) => {
        // Logic to handle editing the row
      
        console.log('Edit row:uuuuuu', row);
        // meterNo: metorNo, //"00003",meterNo
        setMetorNo(row.meterNo),// accountNo: accountNumber, // "1234567890",
        setAccountNumber (row.accountNo),// serviceProvider: serviceProvider, //"DEWA",
        setServiceProvider(row.serviceProvider), // readingDate: readingDate, // "15 March 2024",
        setReadingDate(row.readingDate), // meterReading: meterReading, // "1400",
        setMeterReading(row.meterReading),// consumption: consumption, //"1400",
        setConsumption(row.consumption), // unit: waterUnit, //"Joule",
        setWaterUnit(row.waterUnit),// supportingDocument: "2 attachments",
        setWater(row.water),
        setWaterId(row._id)
        setShowEdit(true)
        // For example, you might open a modal with a form to edit the row's details
    };
   
    const columns = [
    	
        {
            name: <b>Meter No.</b>,
            selector: (row) => row.meterNo,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Account No.</b>,
            selector: (row) => row.accountNo,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Service Provider</b>,
            selector: (row) => row.serviceProvider,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>Reading Date</b>,
            selector: (row) => (row.readingDate?formatDate(row.readingDate):row.readingDate),
            wrap:"true",
            sortable: true,
        },
        
        {
            name: <b>Meter Reading</b>,
            selector: (row) => row.meterReading,
            wrap:"true",
            sortable: true,
        },

        {
            name: <b style={{textAlign:"center"}}>Drinking/<br /> Non Drinking Wate</b>,
            selector: (row) => row.waterType,
            wrap:"true",
            sortable: true,
        },

        {
            name: <b>Consumption</b>,
            selector: (row) => row.consumption,
            wrap:"true",
            sortable: true,
        },

        {
            name: <b>Unit </b>,
            selector: (row) => row.unit,
            wrap:"true",
            sortable: true,
        },

        {
            name: <b>Supporting <br/>Document</b>,
            selector: (row) => row.supporting,
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
                        onClick={() => handleDelete(row)} 
                    />
                </div>
            ),
            wrap: true,
            width: "180px",
            sortable: true,
        },
    ];
    
    
    //     {
    //         meterNo: "0001",
    //         accountNo: "1234567890",
    //         serviceprovider: "DEWA",
    //         readingdate:"10 March 2024",
    //         meterreading: "1344",
    //         Drinking: "Drinking Water",
    //         consumption: "200",
    //         unit:"US Gallon",
    //         supporting: "1 Attachment",
            
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleDelete}/> </div>
    //     },

    //      {
    //         meterNo: "0002",
    //         accountNo: "1234567890",
    //         serviceprovider: "DEWA",
    //         readingdate:"23 March 2024",
    //         meterreading: "1452",
    //         Drinking: "Drinking Water",
    //         consumption: "1,000",
    //         unit:"Liter",
    //         supporting: "1 Attachment",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
    //      },
    // ];

    const handleSaveChanges = async () => {
        const payload = {
          // Construct payload based on your form data
          meterNo: metorNo, //"00003",meterNo
          accountNo: accountNumber, // "1234567890",
          serviceProvider: serviceProvider, //"DEWA",
          readingDate: readingDate, // "15 March 2024",
          meterReading: meterReading, // "1400",
          consumption: consumption, //"1400",
          unit: waterUnit, //"Joule",
          supportingDocument: "2 attachments",
          "waterType": water,//"Drinking Water",
          "emissionInputId": 123456,


   
        };
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/water-provider`,
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
                handleClose()
              }
            })
            .catch((err) => {
                handleClose();

              //   toast.error(err?.message);
            });
        } catch (error) {
            handleClose()
          console.log(error, "errorooo");
        }
      };

    const fetchCosumption = async () => {
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/water-provider`,
            method: "GET",
          }).then((data) => {
            let userData = data.response;
            setRows(userData);
            console.log(userData, "comnsumtion");
          });
        } catch (error) {
          console.log(error, "errorooo");
        }
      };
      const handleEditChanges = async () => {
        const payload = {
          // Construct payload based on your form data
          meterNo: metorNo, //"00003",meterNo
          accountNo: accountNumber, // "1234567890",
          serviceProvider: serviceProvider, //"DEWA",
          readingDate: readingDate, // "15 March 2024",
          meterReading: meterReading, // "1400",
          consumption: consumption, //"1400",
          unit: waterUnit, //"Joule",
          supportingDocument: "2 attachments",
          "waterType": water,//"Drinking Water",
          "emissionInputId": 123456,
        };
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/water-provider/${waterId}`,
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
       fetchCosumption();
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
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/water-provider/${waterId}`,
                method: "PATCH",
                 
                 }).then((data) => {
                    if (data.status === true) {
                        setShowDelete(false)
                        handleCloseDelete();
                        fetchCosumption()
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
            toast.error(err?.message);
                 })
               
             } catch (error) {
               console.log(error, "errorooo");
               toast.error(data?.message);
    
     
             }
      };
      useEffect(()=>{
        fetchCosumption()
      },[]);

      const customStyles ={
        rows:{
            style:{
                minHeight: '72px', // override the row height
            }
        }
    }

    
    return(
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="/images/utilityProviderWater.png" alt="" />
                    <h5 className="mx-2">Utility Provider Water</h5>
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
                            <img src="/images/WaterComsuption_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Water Consumptionrrrrrr</h4>
                                <h5>Non Renewable Sources</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                        <div className="col-md-4">
              <label htmlFor="">Meter No.</label>
              <input
                type="text"
                className="form-control"
                placeholder=" "
                value={metorNo}
                onChange={(e) => setMetorNo(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Account No.</label>
              <input
                type="text"
                className="form-control"
                placeholder=" "
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Service Provider</label>
              <input
                type="text"
                className="form-control"
                placeholder=" "
                value={serviceProvider}
                onChange={(e) => setServiceProvider(e.target.value)}
                required
              />
            </div>

                        </div>

                        <div className="row mt-3">
                        <div className="col-md-4">
              <label htmlFor="readingDate">Reading Date</label>
              <DatePicker
                selected={readingDate}
                onChange={handleDateChange}
                dateFormat="dd MMMM yyyy"
                className="form-control"
                placeholderText="Select a date"
                required
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="">Meter Reading</label>
              <input
                type="text"
                className="form-control"
                placeholder=" "
                value={meterReading}
                onChange={(e) => setMeterReading(e.target.value)}
                required
              />
            </div>

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
                        </div>

                        
                        <div className="row my-3 ">
                            
                        <div className="col-md-4">
              <label htmlFor="">Consumption</label>
              <input
                type="text"
                className="form-control"
                placeholder=" "
                value={consumption}
                onChange={(e) => setConsumption(e.target.value)}
                required
              />{" "}
            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Unit</label>
                                <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => handleChangeWaterUnit(e)}
                value={waterUnit}
              >
                {waterUnitArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
              </select>
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
                            <img src="/images/WaterComsuption_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Water Consumptionrrrrrr</h4>
                                <h5>Non Renewable Sources</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                        <div className="col-md-4">
              <label htmlFor="">Meter No.</label>
              <input
                type="text"
                className="form-control"
                placeholder=" "
                value={metorNo}
                onChange={(e) => setMetorNo(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Account No.</label>
              <input
                type="text"
                className="form-control"
                placeholder=" "
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="">Service Provider</label>
              <input
                type="text"
                className="form-control"
                placeholder=" "
                value={serviceProvider}
                onChange={(e) => setServiceProvider(e.target.value)}
                required
              />
            </div>

                        </div>

                        <div className="row mt-3">
                        <div className="col-md-4">
              <label htmlFor="readingDate">Reading Date</label>
              <DatePicker
                selected={readingDate}
                onChange={handleDateChange}
                dateFormat="dd MMMM yyyy"
                className="form-control"
                placeholderText="Select a date"
                required
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="">Meter Reading</label>
              <input
                type="text"
                className="form-control"
                placeholder=" "
                value={meterReading}
                onChange={(e) => setMeterReading(e.target.value)}
                required
              />
            </div>

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
                        </div>

                        
                        <div className="row my-3 ">
                            
                        <div className="col-md-4">
              <label htmlFor="">Consumption</label>
              <input
                type="text"
                className="form-control"
                placeholder=" "
                value={consumption}
                onChange={(e) => setConsumption(e.target.value)}
                required
              />{" "}
            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Unit</label>
                                <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => handleChangeWaterUnit(e)}
                value={waterUnit}
              >
                {waterUnitArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
              </select>
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
export default Utilityprovidertable;