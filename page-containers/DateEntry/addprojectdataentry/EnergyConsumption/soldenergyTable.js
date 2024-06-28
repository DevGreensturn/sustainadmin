import React, {useState,useEffect} from "react";
import { ADMINAPI } from "../../../../apiWrapper";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";

const SoldenergyTable =({projectId, projectPack})=>{
    const [show, setShow] = useState(false);
    const handleClose =()=> setShow(false);
    const handleShow =()=>{
        setShow(true);
        setReadingDate("");
        setSoldEnergy("");
        setEnergyType("");
        setUnit("");
    }
    const navigate = useRouter();

    const [soldEnergy,setSoldEnergy] = useState("");
    const [energyType,setEnergyType] = useState("");
    const [unit,setUnit] = useState("");
    const [readingDate,setReadingDate] = useState("");


    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit =()=> setShowEdit(false);
    const handleShowEdit =(row)=>{
        setSoldEnergy(row.soldEnergy);
        setEnergyType(row.energyType);
        setReadingDate(row.readingDate);
        setUnit(row.unit);
        setSoldEnergyId(row._id);
        setShowEdit(true);
    }
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete =()=> setShowDelete(false);
    const handleShowDelete =(row)=>{
        setSoldEnergyId(row._id);
        setShowDelete(true);
    }

    const handleChangeEnergy = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setEnergyType(selectedValue);
      };
    
      const handleChangeUnit = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        console.log(selectedValue, "Selected Value");
        setUnit(selectedValue);
      };

      const handleDateChange = (date) => {
        setReadingDate(date);
      };

    const [rows, setRows] = useState([]);
    const [soldEnergyId, setSoldEnergyId] = useState([]);


    let energyArr = ['Electricity', 'Heating', 'Cooling', 'Steam']
    ;
    let unitArr =  ['Kwh', 'Joule', 'Wh'];

    function formatDate(readingDate) {
        const date = new Date(readingDate);
        const options = { day: "numeric", month: "long", year: "numeric" };
        const formattedDate = date.toLocaleDateString("en-GB", options);
    
        return formattedDate;
      }

    const columns = [
    	
        {
            name: <b>Energy Type</b>,
            selector: (row) => row.energyType,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>Reading Date</b>,
            selector: (row) =>
              row.readingDate ? formatDate(row.readingDate) : row.readingDate,
            wrap: true,
            sortable: true,
          },
        {
            name: <b className="text-center">Sold Energy</b>,
            selector: (row) => row.soldEnergy,
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
            name: <b>Supporting Document</b>,
            selector: (row) => row.supportingdocument,
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
            wrap: true,
            width: "180px",
            sortable: true,
        },
      ];
    
    // const rows = [
    //     {
    //         energyType: "Electricity",
    //         readingDate: "20 March 2024",
    //         soldenergy: "1,500",
    //         unite:"Joule",
    //         supportingdocument:"1 Attachment",
    //         Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
    //     },

    //      {
    //         energyType: "Cooling",
    //         readingDate: "25 March 2024",
    //         soldenergy: "2,000",
    //         unite:"kWh",
    //         supportingdocument:"1 Attachment",

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
          energyType:energyType,
          soldEnergy:soldEnergy,
          unit:unit,
          readingDate:readingDate,
          supportingDocument: "2 attachments"
        };
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/sold`,
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
            url:`${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/sold`,
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

      const handleEditChanges = async () => {
        const payload = {
          // Construct payload based on your form data
          projectId:projectId,
          packageId:projectPack,
          energyType:energyType,
          soldEnergy:soldEnergy,
          unit:unit,
          readingDate:readingDate,
          supportingDocument: "2 attachments"
        };
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/sold/${soldEnergyId}`,
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
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/sold/${soldEnergyId}`,
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
            toast.error(err?.message);
                 })
               
             } catch (error) {
               console.log(error, "errorooo");
               toast.error(data?.message);
    
     
             }
      };
      useEffect(() => {
        fetchTable();
      }, []);
    
    return (
       
        <section>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <img src="/images/soldEnergy.png" alt="" />
                    <h5 className="mx-2">Sold Energy</h5>
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
                            <img src="/images/soldEnergy_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Energy Consumption</h4>
                                <h5>Sold Energy</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="">Energy Type</label>
                                <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeEnergy(e)}
                value={energyType}
              >
                {energyArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>

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

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Sold Energy</label>
                                <input type="text" className="form-control" placeholder="" value={soldEnergy}
                onChange={(e) => setSoldEnergy(e.target.value)}
                required/>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unit</label>
                                <select className="form-select" aria-label="Default select example"onChange={(e) => handleChangeUnit(e)}
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
                            <label htmlFor="">Supporting Document (if Any)</label>
                                <input type="file" className="form-control" />
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
                                <h5>Sold Energy</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="">Energy Type</label>
                                <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeEnergy(e)}
                value={energyType}
              >
                {energyArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
                                </select>
                            </div>

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

                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Sold Energy</label>
                                <input type="text" className="form-control" placeholder="" value={soldEnergy}
                onChange={(e) => setSoldEnergy(e.target.value)}
                required/>
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Unit</label>
                                <select className="form-select" aria-label="Default select example"onChange={(e) => handleChangeUnit(e)}
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
                            <label htmlFor="">Supporting Document (if Any)</label>
                                <input type="file" className="form-control" />
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
export default SoldenergyTable;