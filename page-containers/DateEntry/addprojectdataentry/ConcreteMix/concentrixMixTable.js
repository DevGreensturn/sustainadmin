import React, {useState} from "react";
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
    const handleShow =()=>setShow(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit =()=> setShowEdit(false);
    const handleShowEdit =()=>setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete =()=> setShowDelete(false);
    const handleShowDelete =()=> setShowDelete(true);


    const [concreteMixesNo, setConcreteMix] = useState("");
    const [silicaFumeContent, setSilicaFumeContent] = useState("");
  const [ type, setType] = useState(""); 
  const [volume, setVolume] = useState(""); 
  const [ proportionOfTotalUsed, setProportionOfTotalUsed] = useState(""); 
  const [ strength, setstrength] = useState(""); 
  const [ cementContent,  setCementContent] = useState(""); 
  const [ slagContent,   setSlagContent] = useState(""); 
  const [flyAshContent, setFlyAshContent] = useState("");
  const [naturalPozzolan, setNaturalPozzolan] = useState("");
  const [ limestoneContent,  setLimestoneContent] = useState("");
  const [embodiedGHG, setEmbodiedGHG] = useState("");
  const[numberOfTrips,setNumberOfTrips]=useState("");
 const[ fuelUsed, setFuelUsed] =useState("");

 let typeArr=["precast", "cast-in-situ"];

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
            wrap:"true"
        },
        {
            name: <b className="text-center">Type </b>,
            selector: (row) => row.type,
            wrap:"true"
        },
        {
            name: <b className="text-center">Volume</b>,
            selector: (row) => row.volume,
            wrap:"true"
        },
        {
            name: <b className="text-center">Proportion<br/> of Total used(%)</b>,
            selector: (row) => row.Proportion,
            wrap:"true"
        },
        {
            name: <b className="text-center">28 Days<br /> strength(N/mm2) </b>,
            selector: (row) => row.strength,
            wrap:"true"
        },

        {
            name: <b className="text-center">Cement Content <br/>(kg/m3)</b>,
            selector: (row) => row.cementContent,
            wrap:"true"
        },
        {
            name: <b className="text-center">Slag Content<br/>(Kg/m3)</b>,
            selector: (row) => row.SlagContent,
            wrap:"true"
        },
        {
            name: <b className="text-center">Fly Ash Content <br />(Kg/m3)</b>,
            selector: (row) => row.FlyAshContent,
            wrap:"true"
        },

        {
            name: <b className="text-center">Silica Fume<br /> Content(kg/m3)</b>,
            selector: (row) => row.silicaFumeContent,
            wrap:"true"
        },

        {
            name: <b className="text-center">Slag Content<br/>(Kg/m3)</b>,
            selector: (row) => row.SlagContent,
            wrap:"true"
        },

        {
            name: <b className="text-center">Fly Ash Content<br/>(Kg/m3)</b>,
            selector: (row) => row.FlyAsh,
            wrap:"true"
        },



        {
            name: <b>Action</b>,
            selector: (row) => row.Action,
            wrap:"true",
           
        },
    ];
    
    const rows = [
        {
            ConcreteMixNo: "0001",
            type: "Precast",
            volume: "1344",
            Proportion: "1344",
            strength: "1344",
            CementContent: "1344",
            SlagContent:"1344",
            FlyAshContent:"1344",
            SilicaFume:"1344",
            NaturalPozzolan:"1344",
            LimestoneContent:"1344",
            EmbodiedGHG:"1344",
            numberOfTrips:"1344",
            fuelUsed:"1344",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}} onClick={handleShowEdit}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}} onClick={handleShowDelete}/> </div>
        },

         {
            ConcreteMixNo: "0001",
            type: "Precast",
            volume: "1344",
            Proportion: "1344",
            strength: "1344",
            CementContent: "1344",
            SlagContent:"1344",
            FlyAshContent:"1344",
            SilicaFume:"1344",
            NaturalPozzolan:"1344",
            LimestoneContent:"1344",
            EmbodiedGHG:"1344",
            numberOfTrips:"1344",
            fuelUsed:"1344",

            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
    ];
    const handleSaveChanges = async () => {
        const payload = {
         
         concreteMixesNo:concreteMixesNo,
          type: type, 
         volume: volume, 
         proportionOfTotalUsed: proportionOfTotalUsed, 
         days28strength: strength, 
          cementContent: cementContent, 
          slagContent: slagContent, 
          flyAshContent: flyAshContent, 
          silicaFumeContent:silicaFumeContent,
          naturePozzolanContent:naturalPozzolan,
          limestoneContent: limestoneContent,
          embodiedGHG: embodiedGHG,
          noOfTrips: numberOfTrips,
          fuelUsedPerTruck: fuelUsed,
          safeDelete: false,
          emissionInputID:123
        };
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
            url:"http://35.154.130.173:3002/api/v1/data-entry/concrete/",
            method: "GET",
          }).then((data) => {
            let userData = data.response;
            setRows(userData);
            console.log(userData, "tttttt");
          });
        } catch (error) {
          console.log(error, "ttttttt");
        }
      };


     

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
                                    <option selected>Precast</option>
                                    <option value="1">cast-in-sit</option>
                                    
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
                            <input type="text" className="form-control" placeholder="1344"
                             value={strength}
                             onChange={(e) => setstrength(e.target.value)}
                             required
                            />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Cement Content (kg/m3)</label>
                                <input type="text" className="form-control" placeholder="Add Text" 
                                value={cementContent}
                                 onChange={(e) => setCementContent(e.target.value)}
                                 required />
                            </div>
                        </div>
 
                        <div className="row mt-3 ">
                            
                            <div className="col-md-4">
                                <label htmlFor="">Slag Content (Kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1322" 
                                    value={slagContent}
                                    onChange={(e) => setSlagContent(e.target.value)}
                                    required 
                                />
                            </div>
                            
                            <div className="col-md-4">
                                <label htmlFor="">Fly Ash Content (Kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1344" 
                                value={flyAshContent}
                                onChange={(e) => setFlyAshContent(e.target.value)}
                                required 
                                />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Silica Fume Content (Kg/m3)</label>
                                <input type="file" className="form-control" placeholder="1322"
                                value={silicaFumeContent}
                                onChange={(e) => setSilicaFumeContent(e.target.value)}
                                required 
                                />
                            </div>
                        </div>

                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">Natural Pozzolan Content(kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1322" 
                                value={naturalPozzolan}
                                onChange={(e) => setNaturalPozzolan(e.target.value)}
                                required 
                                />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Limestone Content (kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1344" 
                                value={limestoneContent}
                                onChange={(e) => setLimestoneContent(e.target.value)}
                                required 
                                />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Embodied GHG (CO2e/m3)</label>
                                <input type="file" className="form-control" placeholder="1322"
                                 value={embodiedGHG}
                                 onChange={(e) => setEmbodiedGHG(e.target.value)}
                                 required 
                                />
                            </div>
                        </div>

                        
                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="1322" 
                                value={numberOfTrips}
                                onChange={(e) => setNumberOfTrips(e.target.value)}
                                required 
                                />
                            </div>
                            <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">fuelUsedPerTruck</label>
                                <input type="text" className="form-control" placeholder="1322" 
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
                                <input type="text" className="form-control" placeholder="0001" />

                               
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Precast</option>
                                    <option value="1">cast-in-sit</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Volume</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>


                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label htmlFor="">Proportion of Total Used (%)</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                            <label htmlFor="">28 Days strength (N/mm2)</label>
                            <input type="text" className="form-control" placeholder="1344" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="">Cement Content (kg/m3)</label>
                                <input type="text" className="form-control" placeholder="Add Text" />
                            </div>
                        </div>
 
                        <div className="row mt-3 ">
                            
                            <div className="col-md-4">
                                <label htmlFor="">Slag Content (Kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fly Ash Content (Kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Silica Fume Content (Kg/m3)</label>
                                <input type="file" className="form-control" placeholder="1322" />
                            </div>
                        </div>

                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">Natural Pozzolan Content(kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Limestone Content (kg/m3)</label>
                                <input type="text" className="form-control" placeholder="1344" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Embodied GHG (CO2e/m3)</label>
                                <input type="file" className="form-control" placeholder="1322" />
                            </div>
                        </div>
                        <div className="row mt-3 ">
                            <div className="col-md-4">
                                <label htmlFor="">No. of Trips</label>
                                <input type="text" className="form-control" placeholder="1322" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="">Fuel Used by Trucks (Liters)</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Precast</option>
                                    <option value="1">cast-in-sit</option>
                                </select>
                            </div>

                        </div>
                       </div>

                    <div className="my-4 d-flex justify-content-between">
                    <div>
                    <button type="btn" className="btn btn-outline-secondary" onClick={handleCloseEdit}> Close </button>
                    </div>
                    <div>
                    <button type="btn" className="btn btn-outline-success" onClick={handleCloseEdit}> Save Changes </button>
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
                    <button type="btn" className="btn btn-outline-success rounded-pill" onClick={handleCloseDelete} style={{width:"10rem"}}>Yes </button>
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