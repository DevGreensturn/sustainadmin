import React, {useEffect, useState} from "react";
import { ADMINAPI } from "../../../../apiWrapper";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';
import { useRouter } from "next/router";



const ConcentrixMixTable =()=>{
    const navigate = useRouter();
    const [show, setShow] = useState(false);
    const handleClose =()=> setShow(false);
    const handleShow =()=>{
        setConcreteMix ("");
        setType("");
        setVolume("")
        setProportionOfTotalUsed("")
        setstrength("")
        setSlagContent("")
        setFlyAshContent("")
        setsilicaFumeContent("")
        setNaturalPozzolan("")
        setLimestoneContent("")
        setembodiedGHG("")
        setNumberOfTrips("")
        setFuelUsed("")
        setConcreteId("")
        setCementContent("")
        setShow(true);
    }

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit =()=> setShowEdit(false);
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete =()=> setShowDelete(false);
    const handleShowDelete =(rows)=> {
        setConcreteId(rows._id)
        setShowDelete(true);
    }
    const [concreteMixesNo, setConcreteMix] = useState("");
    const [silicaFumeContent, setsilicaFumeContent] = useState("");
  const [ type, setType] = useState(""); 
  const [volume, setVolume] = useState("");  
  const [ proportionOfTotalUsed, setProportionOfTotalUsed] = useState(""); 
  const [ strength, setstrength] = useState(""); 
  const [ cementContent,  setCementContent] = useState(""); 
  const [ slagContent,   setSlagContent] = useState(""); 
  const [flyAshContent, setFlyAshContent] = useState("");
  const [naturalPozzolan, setNaturalPozzolan] = useState("");
  const [ limestoneContent,  setLimestoneContent] = useState("");
  const [embodiedGHG, setembodiedGHG] = useState("");
  const[noOfTrips,setNumberOfTrips]=useState("");
 const[ fuelUsed, setFuelUsed] =useState("");
 const [concreteId, setConcreteId] = useState("")
 const [rows, setRows] = useState("")

 let typeArr=["precast", "cast-in-situ"];



 const handleShowEdit = (row) => {
    console.log(row,"pp");
    setConcreteMix (row.concreteMixesNo);
    setType(row.type);
    setVolume(row.volume)
    setProportionOfTotalUsed(row.proportionOfTotalUsed)
    setstrength(row.days28Strength)
    setSlagContent(row.slagContent)
    setFlyAshContent(row.flyAshContent)
    setsilicaFumeContent(row.silicaFumeContent)
    setNaturalPozzolan(row.naturePozzolanContent)
    setLimestoneContent(row.limestoneContent)
    setembodiedGHG(row.embodiedGHG)
    setNumberOfTrips(row.noOfTrips)
    setFuelUsed(row.fuelUsedPerTruck)
    setConcreteId(row._id)
    setCementContent(row.cementContent)
    setShowEdit(true)
    console.log("gdf",concreteId)
  }

 const handleChangeType = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setType(selectedValue);
  };

    const columns = [
    	
        {
            name: <b>Concrete <br />Mixes No.</b>,
            selector: (row) => row.concreteMixesNo,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Type </b>,
            selector: (row) => row.type,
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
            name: <b className="text-center">Proportion<br/> of Total used(%)</b>,
            selector: (row) => row.proportionOfTotalUsed,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">28 Days<br /> strength(N/mm2) </b>,
            selector: (row) => row.days28Strength,
            wrap:"true",
            sortable: true,
        },

        {
            name: <b className="text-center">Cement Content <br/>(kg/m3)</b>,
            selector: (row) => row.cementContent,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Slag Content<br/>(Kg/m3)</b>,
            selector: (row) => row.
            slagContent,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Fly Ash Content <br />(Kg/m3)</b>,
            selector: (row) => row.flyAshContent,
            wrap:"true",
            sortable: true,
        },

        {
            name: <b className="text-center">Silica Fume<br /> Content(kg/m3)</b>,
            selector: (row) => row.
            silicaFumeContent,
            wrap:"true",
            sortable: true,
        },

        {
            name: <b className="text-center">NaturePozzolan Content<br/>(Kg/m3)</b>,
            selector: (row) => row.naturePozzolanContent,
            wrap:"true",
            sortable: true,
        },

        {
            name: <b className="text-center">Limestone Content<br/>(Kg/m3)</b>,
            selector: (row) => row.limestoneContent,
            wrap:"true",
            sortable: true,
        },
        {
            name:<b
            className="text-center">embodied GHG<br/>(Co2e/m3)</b>,
            selector:(row)=>row.embodiedGHG,
            wrap:"true",
            sortable: true,

        },

        {
            name:<b
            className="text-center">No.Of Trips<br/>(Co2e/m3)</b>,
            selector:(row)=>row.noOfTrips,
            wrap:"true",
            sortable: true,

        },
        {
            name:<b
            className="text-center">Fueln Used By Trucks<br/>(Co2e/m3)</b>,
            selector:(row)=>row.fuelUsedPerTruck,
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
    
    
    const handleSaveChanges = async () => {
        const payload = {
         
         concreteMixesNo:concreteMixesNo,
          type: type, 
         volume: volume, 
         proportionOfTotalUsed: proportionOfTotalUsed, 
         days28Strength: strength, 
          cementContent: cementContent, 
          slagContent: slagContent, 
          flyAshContent: flyAshContent, 
          silicaFumeContent:silicaFumeContent,
          naturePozzolanContent:naturalPozzolan,
          limestoneContent: limestoneContent,
          embodiedGHG: embodiedGHG,
          noOfTrips: noOfTrips,
          fuelUsedPerTruck: fuelUsed,
          safeDelete: false,
          emissionInputID:123
        };
        console.log("payload",payload)
        try {
          await ADMINAPI({
            url: "http://35.154.130.173:3002/api/v1/data-entry/concrete/",
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
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/concrete`,
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
         
         concreteMixesNo:concreteMixesNo,
          type: type, 
         volume: volume, 
         proportionOfTotalUsed: proportionOfTotalUsed, 
         days28Strength: strength, 
          cementContent: cementContent, 
          slagContent: slagContent, 
          flyAshContent: flyAshContent, 
          silicaFumeContent:silicaFumeContent
          ,
          naturePozzolanContent:naturalPozzolan,
          limestoneContent: limestoneContent,
          embodiedGHG: embodiedGHG,
          noOfTrips: noOfTrips,
          fuelUsedPerTruck: fuelUsed,
          safeDelete: false,
          emissionInputID:123
        };

        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/concrete/${concreteId}`,
            method: "put",
            body: { ...payload },
          })
            .then((data) => {
              if (data.status === true) {
                setShowEdit(false);
                setTimeout(() => {
                  navigate.push("/addMonthlyData", { scroll: false });
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
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/concrete/${concreteId}`,
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
                    <img src="/images/concereteMix.png" alt="" />
                    <h5 className="mx-2">Concerete Mix</h5>
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
                            <img src="/images/ConcentrixMix_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Concerete Mix</h4>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Concrete Mixes No.</label>
                                <input type="text" className="form-control" placeholder=""
                                 value={concreteMixesNo}
                                 onChange={(e) => setConcreteMix(e.target.value)}
                                 required />

                               
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Type</label>
                                <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeType(e)}
                value={type}>  {typeArr?.map((category, indexCat) => (
                    <option key={indexCat} value={category}>
                      {category}
                    </option>
                  ))}      
                    </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Volume</label>
                                <input type="text" className="form-control" placeholder="" 
                                value={volume}
                                onChange={(e) =>setVolume(e.target.value)}
                                required
                               />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Proportion of Total Used (%)</label>
                                <input type="text" className="form-control" placeholder=""
                                 value={proportionOfTotalUsed}
                                 onChange={(e) => setProportionOfTotalUsed(e.target.value)}
                                 required
                                />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">28 Days strength (N/mm2)</label>
                            <input type="text" className="form-control" placeholder=""
                             value={strength}
                             onChange={(e) => setstrength(e.target.value)}
                             required
                            />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Cement Content (kg/m3)</label>
                                <input type="text" className="form-control" placeholder="" 
                                value={cementContent}
                                 onChange={(e) => setCementContent(e.target.value)}
                                 required />
                            </div>
                        </div>
                        <div className="row mt-3 ">
                            
                            <div className="col-md-4">
                                <label htmlFor="">Slag Content (Kg/m3)</label>
                                <input type="text" className="form-control" placeholder="" 
                                    value={slagContent}
                                    onChange={(e) => setSlagContent(e.target.value)}
                                    required 
                                />
                            </div>
                            
                            <div className="col-md-4">
                                <label htmlFor="">Fly Ash Content (Kg/m3)</label>
                                <input type="text" className="form-control" placeholder="" 
                                value={flyAshContent}
                                onChange={(e) => setFlyAshContent(e.target.value)}
                                required 
                                />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Silica Fume Content (Kg/m3)</label>
                                <input type="text" className="form-control" placeholder=""
                                value={silicaFumeContent}
                                onChange={(e) => setsilicaFumeContent(e.target.value)}
                                required 
                                />
                            </div>
                        </div>

                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">Natural Pozzolan Content(kg/m3)</label>
                                <input type="text" className="form-control" placeholder="" 
                                value={naturalPozzolan}
                                onChange={(e) => setNaturalPozzolan(e.target.value)}
                                required 
                                />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Limestone Content (kg/m3)</label>
                                <input type="text" className="form-control" placeholder="" 
                                value={limestoneContent}
                                onChange={(e) => setLimestoneContent(e.target.value)}
                                required 
                                />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Embodied GHG (CO2e/m3)</label>
                                <input type="text" className="form-control" placeholder=""
                                 value={embodiedGHG}
                                 onChange={(e) => setembodiedGHG(e.target.value)}
                                 required 
                                />
                            </div>
                        </div>

                        
                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="" 
                                value={noOfTrips}
                                onChange={(e) => setNumberOfTrips(e.target.value)}
                                required 
                                />
                            </div>
                            <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">fuelUsedPerTruck</label>
                                <input type="text" className="form-control" placeholder="" 
                                value={fuelUsed}
                                onChange={(e) => setFuelUsed(e.target.value)}
                                required 
                                />
                            </div>
                            
                                {/* <select className="form-select" aria-label="Default select example">
                                     <option selected>Precast</option>
                                    <option value="1">cast-in-sit</option> 
                                     
                                </select> */}
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
                            <img src="/images/ConcentrixMix_Modal.png" alt="" className="img-fluid"/>
                            <div className="mx-2">
                                <h4>Concerete Mix</h4>
                             
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Concrete Mixes No.</label>
                                <input type="text" className="form-control" 
                                value={concreteMixesNo}
                                onChange={(e) =>setConcreteMix(e.target.value)}
                                placeholder="0001" />

                               
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Type</label>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => handleChangeType(e)}
                value={type}>  {typeArr?.map((category, indexCat) => (
                    <option key={indexCat} value={category}>
                      {category}
                    </option>
                  ))}      
                    </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Volume</label>
                                <input type="text" className="form-control"  value={volume}
                                 onChange={(e) =>setVolume(e.target.value)}
                                placeholder="1344" />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Proportion of Total Used (%)</label>
                                <input type="text" className="form-control" value={proportionOfTotalUsed}
                                 onChange={(e) =>setProportionOfTotalUsed(e.target.value)}
                                placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">28 Days strength (N/mm2)</label>
                            <input type="text" className="form-control" 
                            value={strength}
                            onChange={(e) =>setstrength(e.target.value)}
                            placeholder="1344" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Cement Content (kg/m3)</label>
                                <input type="text" className="form-control" value={cementContent} 
                                 onChange={(e) =>setCementContent(e.target.value)}
                                placeholder="Add Text" />
                            </div>
                        </div>
 
                        <div className="row mt-3 ">
                            
                            <div className="col-md-4">
                                <label htmlFor="">Slag Content (Kg/m3)</label>
                                <input type="text" className="form-control" value={slagContent} 
                                 onChange={(e) =>setSlagContent(e.target.value)}
                                placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fly Ash Content (Kg/m3)</label>
                                <input type="text" className="form-control" value={flyAshContent} 
                                 onChange={(e) =>setFlyAshContent(e.target.value)}
                                
                                placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Silica Fume Content (Kg/m3)</label>
                                <input type="text" className="form-control" value ={silicaFumeContent}
                                 onChange={(e) =>setsilicaFumeContent(e.target.value)}
                                placeholder="1322" />
                            </div>
                        </div>

                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">Natural Pozzolan Content(kg/m3)</label>
                                <input type="text" className="form-control" value={naturalPozzolan} 
                                 onChange={(e) =>setNaturalPozzolan(e.target.value)}
                                placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Limestone Content (kg/m3)</label>
                                <input type="text" className="form-control" value={limestoneContent} 
                                 onChange={(e) =>setLimestoneContent(e.target.value)}
                                placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Embodied GHG (CO2e/m3)</label>
                                <input type="text" className="form-control" value={embodiedGHG} 
                                 onChange={(e) =>setembodiedGHG(e.target.value)}
                                placeholder="1322" />
                            </div>
                        </div>
                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" value={noOfTrips} 
                                 onChange={(e) =>setNumberOfTrips(e.target.value)}
                                placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">fuelUsedPerTruck</label>
                                <input type="text" className="form-control" placeholder="" 
                                
                                value={fuelUsed}

                                onChange={(e) =>setFuelUsed(e.target.value)}
                                required 
                                />
                            </div>

                        </div>
                       </div>

                    <div className="my-4 d-flex justify-content-between">
                    <div>
                    <button type="btn" className="btn btn-outline-secondary" onClick={handleCloseEdit}> Close </button>
                    </div>
                    <div>
                    <button type="btn" className="btn btn-outline-success" onClick={ handleEditChanges}> Save Changes </button>
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
export default ConcentrixMixTable;