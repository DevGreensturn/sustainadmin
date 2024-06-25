import React, { useState,useEffect } from "react";
import DataTable from "react-data-table-component";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from "react-bootstrap";
import { ADMINAPI } from "../../../../apiWrapper";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BuildingMaterialTable = (projectId) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useRouter();
  const [rows, setRows] = useState([]);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  const [material, setMaterial] = useState("");
  const [materialSource, setMaterialSource] = useState("");
  const [materialClass, setMaterialClass] = useState("");
  const [supplier, setSupplier] = useState("");
  const [road, setRoad] = useState("");
  const [trips, setTrips] = useState("");
  const [fuel, setFuel] = useState("");
  const [weight, setWeight] = useState("");
  const [materialId, setMaterialId] = useState("");
  const [materialPer, setMaterialPer] = useState("");
  const [procuredMaterial, setProcuredMaterial] = useState("");
  const [quantificationMethod, setQuantificationMethod] = useState("");
  const [reclaimedMaterial, setReclaimedMaterial] = useState("");
  const [materialCost, setMaterialCost] = useState("");
  const [supplierRow, setSupplierRow] = useState([]);






 
  const columns = [
    {
      name: <b>Material Type</b>,
      selector: (row) => row.materialType,
      wrap: "true",
    },
    {
      name: (
        <b className="text-center">
          Material <br />
          Source{" "}
        </b>
      ),
      selector: (row) => row.materialSource,
      wrap: "true",
    },
    {
      name: (
        <b className="text-center">
          Material <br />
          Classification
        </b>
      ),
      selector: (row) => row.materialClassification,
      wrap: "true",
    },
    {
      name: (
        <b className="text-center">
          Supplier /<br /> subcontractor
        </b>
      ),
      selector: (row) => row?.supplierSubcontractor?.name,
      wrap: "true",
    },
    {
      name: (
        <div className="text-center">
          <b>Road Distance</b>
          <br />
          (km)(b/w airport/port or factory/ warehouse and the project)
        </div>
      ),
      selector: (row) => row.roadDistance,
      wrap: "true",
    },

    {
      name: <b className="text-center">No. Of Trips</b>,
      selector: (row) => row.noOfTrips,
      wrap: "true",
    },
    {
      name: (
        <div>
          <b>Fuel Used By</b>
          <br /> Trucks(litres)(one full trip, from source)
        </div>
      ),
      selector: (row) => row.fuelUsed,
      wrap: "true",
    },
    {
      name: <b className="text-center">Weight as per the BOQ(Tonnes)</b>,
      selector: (row) => row.weightPerBOQ,
      wrap: "true",
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
      },
  ];

  const row = [
    {
      MaterialType: "Rebar",
      MaterialSource: "Abu Dhabi",
      MaterialClassification: "Non Renewable Material",
      Suppliersubcontractor: "Supplier North",
      RoadDistance: "1344",
      NoOfTrips: "1",
      FuelUsedBy: "20",
      Weightasper: "1344",
      Action: (
        <div className="d-flex align-items-center">
          <FaRegEdit
            style={{ color: "secondary", fontSize: "20px" }}
            onClick={handleShowEdit}
          />{" "}
          <MdDeleteForever
            icon={faTimes}
            className="mx-2"
            style={{ color: "red", fontSize: "20px" }}
            onClick={handleShowDelete}
          />{" "}
        </div>
      ),
    },

    {
      MaterialType: "Asphalt",
      MaterialSource: "Abu Dhabi",
      MaterialClassification: "Non Renewable Material",
      Suppliersubcontractor: "Supplier Camellias",
      RoadDistance: "1452",
      NoOfTrips: "1",
      FuelUsedBy: "30",
      Weightasper: "1452",
      Action: (
        <div className="d-flex align-items-center">
          <FaRegEdit style={{ color: "secondary", fontSize: "20px" }} />{" "}
          <MdDeleteForever
            icon={faTimes}
            className="mx-2"
            style={{ color: "red", fontSize: "20px" }}
          />{" "}
        </div>
      ),
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
  };
  const handleFetchSupplier = async () => {
    try {
     console.log(projectId.projectId,"LLLL");
   await ADMINAPI({
         url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3001/api/v1/suppliers?projectId=${projectId.projectId.projectId}`,
         method: "GET",
        
        }).then((data) => {
          let userData = data.response;
          setSupplierRow(userData)
        console.log(userData,"ooooooo");
        });
      
    } catch (error) {
      console.log(error, "errorooo");

    }
  };
  let sourceArr = [
    "Internal",
    "External",
    "Abu Dhabi",
    "Dubai",
    "Other Emirate",
    "GCC",
    "Internationally",
  ];
  let fuelArr = ["1344", "1452"];
  let materialArr = ["Rebar", "Asphalt"];
  let materialClassification= [
      "Renewable",
      "Non-Renewable"
    ];
   let quantificationMethodVal=  [
      "Estimated",
      "Measured"
    ]
  const handleChangeMaterial = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setMaterial(selectedValue);
  };
  const handleChangeMaterialSource = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setMaterialSource(selectedValue);
  };//handleChangeMaterialSource
  const handleChangeMaterialClass = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setMaterialClass(selectedValue);
  };//handleChangeMaterialSource
  const handleChangeMaterialSupplier = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setSupplier(selectedValue);
  };
  const handleChangeClassfied = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setQuantificationMethod(selectedValue);
  };//handleChangeMaterialSource
  const handleChangFuel = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setFuel(selectedValue);
  };
  const handleSaveChanges = async () => {
    const payload = {
       
            "packageId": "60c72b2f9b1d4c44f8fa2b7b",  // example ObjectId
            "projectId": "60c72b319b1d4c44f8fa2b7c",  // example ObjectId
            "reportId": "60c72b339b1d4c44f8fa2b7d",  // example ObjectId
            "emissionInputID": 123,
            "materialType":material ,// "Rebar",
            "materialSource": materialSource,//"Internal",
            "materialClassification": materialClass ,//"Renewable",
            "supplierSubcontractor": supplier,
            "roadDistance": road,//50.5,
            "noOfTrips":trips,// 10,
            "fuelUsed":fuel,// 200,
            "weightPerBOQ":weight,// 1500,
            "percentageOfTotalMaterialProcurementIsRecycled": materialPer,//20,
            "procuredMaterial":1000, //procuredMaterial,//1000,
            "materialCost": materialCost,//50000,
            "supportingDocument": "",
            "quantificationMethod":quantificationMethod,// "Measured",
            "percentageReclaimedMaterial":reclaimedMaterial// 15
       
          
     
    };

    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/building-materials`,
        method: "POST",
        body: { ...payload },
      })
        .then((data) => {
          if (data.status === true) {
            setShow(false);
            toast.success(data?.message);
            fetchBuildingMaterial();
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
  const fetchBuildingMaterial = async () => {
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/building-materials`,
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
    setSupplier(row?.supplierSubcontractor?._id);
      setMaterial(row.materialType);
      setMaterialSource(row.materialSource);
      setMaterialId(row._id);
      setMaterialClass(row.materialClassification);
      setRoad(row.roadDistance);
      setTrips(row.noOfTrips);
      setFuel(row.fuelUsed);
      setWeight(row.weightPerBOQ);
      setMaterialPer(row.percentageOfTotalMaterialProcurementIsRecycled);
      setShowEdit(true);
      setQuantificationMethod(row.quantificationMethod);
      setMaterialCost(row.materialCost);
    // For example, you might open a modal with a form to edit the row's details
  };
  const handleEditChanges = async () => {
    const payload = {
      
        "packageId": "60c72b2f9b1d4c44f8fa2b7b",  // example ObjectId
        "projectId": "60c72b319b1d4c44f8fa2b7c",  // example ObjectId
        "reportId": "60c72b339b1d4c44f8fa2b7d",  // example ObjectId
        "emissionInputID": 123,
        "materialType":material ,// "Rebar",
        "materialSource": materialSource,//"Internal",
        "materialClassification": materialClass ,//"Renewable",
        "supplierSubcontractor": supplier,
        "roadDistance": road,//50.5,
        "noOfTrips":trips,// 10,
        "fuelUsed":fuel,// 200,
        "weightPerBOQ":weight,// 1500,
        "percentageOfTotalMaterialProcurementIsRecycled": materialPer,//20,
        "procuredMaterial":1000, //procuredMaterial,//1000,
        "materialCost": materialCost,//50000,
        "supportingDocument": "",
        "quantificationMethod":quantificationMethod,// "Measured",
        "percentageReclaimedMaterial":reclaimedMaterial// 15
   
       
      };
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/building-materials/${materialId}`,
        method: "put",
        body: { ...payload },
      })
        .then((data) => {
          if (data.status === true) {
            setShow(false);
            handleCloseEdit();
          toast.success(data?.message);
            fetchBuildingMaterial();
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
    setMaterialId(row._id);
    setShowDelete(true);
  };
  const handleDeleteConfirm = async () => {
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/building-materials/${materialId}`,
        method: "PATCH",
      })
        .then((data) => {
          if (data.status === true) {
            setShowDelete(false);
            handleCloseDelete();
            fetchBuildingMaterial();
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
    fetchBuildingMaterial();
    handleFetchSupplier();
  }, [projectId.projectId]);
  
  return (
    <section>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src="/images/BuildingMaterials.png" alt="" />
          <h5 className="mx-2">Building Materials</h5>
        </div>
        <div>
          <button
            type="btn"
            className="btn btn-outline-success"
            onClick={handleShow}
          >
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
          <Modal.Header closeButton style={{ border: "0" }}></Modal.Header>
          <Modal.Body>
            <>
              <div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/BuildingMaterials_Modal.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="mx-2">
                    <h4>Building Materials</h4>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="">Material Type</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeMaterial(e)}
                      value={material}
                    >
                      {materialArr?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="">Material Source</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeMaterialSource(e)}
                      value={materialSource}
                    >
                      {sourceArr?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="">Material Classification</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeMaterialClass(e)}
                      value={quantificationMethod}
                    >
                      {materialClassification?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="">Supplier / subcontractor</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeMaterialSupplier(e)}
                      value={supplier}
                    >
                      {supplierRow?.map((category, indexCat) => (
                        <option key={indexCat} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="">Weight as per the BOQ(Tonnes)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                    />{" "}  
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="">Quantification Method</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeClassfied(e)}
                      value={quantificationMethod}
                    >
                      {quantificationMethodVal?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row mt-3 ">
                  <div className="col-md-4">
                    <label htmlFor="">Material Cost(AED)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={materialCost}
                      onChange={(e) => setMaterialCost(e.target.value)}
                      required
                    />{" "}  
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="">
                      Percentage of total material procurement that is
                      recycled(%)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={materialPer}
                      onChange={(e) => setMaterialPer(e.target.value)}
                      required
                    />{" "}   
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="">Supporting Document (If Any)</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Upload Documents"
                    />
                  </div>
                </div>

                <div className="row mt-3 ">
                  <div className="col-md-4">
                    <label htmlFor="">No. of Trips</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={trips}
                      onChange={(e) => setTrips(e.target.value)}
                      required
                    />{" "}  
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="">Road Distance</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={road}
                      onChange={(e) => setRoad(e.target.value)}
                      required
                    />{" "}       
                  </div>

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
                </div>
              </div>

              <div className="my-4 d-flex justify-content-between">
                <div>
                  <button
                    type="btn"
                    className="btn btn-outline-secondary"
                    onClick={handleClose}
                  >
                    {" "}
                    Close{" "}
                  </button>
                </div>
                <div>
                  <button
                    type="btn"
                    className="btn btn-outline-success"
                    onClick={handleSaveChanges}
                  >
                    {" "}
                    Save Changes{" "}
                  </button>
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
          <Modal.Header closeButton style={{ border: "0" }}>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/BuildingMaterials_Modal.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="mx-2">
                    <h4>Building Materials</h4>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="">Material Type</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeMaterial(e)}
                      value={material}
                    >
                      {materialArr?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="">Material Source</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeMaterialSource(e)}
                      value={materialSource}
                    >
                      {sourceArr?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="">Material Classification</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeMaterialClass(e)}
                      value={quantificationMethod}
                    >
                      {materialClassification?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="">Supplier / subcontractor</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeMaterialSupplier(e)}
                      value={supplier}
                    >
                      {supplierRow?.map((category, indexCat) => (
                        <option key={indexCat} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="">Weight as per the BOQ(Tonnes)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                    />{" "}  
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="">Quantification Method</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeClassfied(e)}
                      value={quantificationMethod}
                    >
                      {quantificationMethodVal?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row mt-3 ">
                  <div className="col-md-4">
                    <label htmlFor="">Material Cost(AED)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={materialCost}
                      onChange={(e) => setMaterialCost(e.target.value)}
                      required
                    />{" "}  
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="">
                      Percentage of total material procurement that is
                      recycled(%)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={materialPer}
                      onChange={(e) => setMaterialPer(e.target.value)}
                      required
                    />{" "}   
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="">Supporting Document (If Any)</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Upload Documents"
                    />
                  </div>
                </div>

                <div className="row mt-3 ">
                  <div className="col-md-4">
                    <label htmlFor="">No. of Trips</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={trips}
                      onChange={(e) => setTrips(e.target.value)}
                      required
                    />{" "}  
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="">Road Distance</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={road}
                      onChange={(e) => setRoad(e.target.value)}
                      required
                    />{" "}       
                  </div>

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
                </div>
              </div>

              <div className="my-4 d-flex justify-content-between">
                <div>
                  <button
                    type="btn"
                    className="btn btn-outline-secondary"
                    onClick={handleClose}
                  >
                    {" "}
                    Close{" "}
                  </button>
                </div>
                <div>
                  <button
                    type="btn"
                    className="btn btn-outline-success"
                    onClick={handleEditChanges}
                  >
                    {" "}
                    Save Changes{" "}
                  </button>
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
          <Modal.Header closeButton style={{ border: "0" }}>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <div className=" text-center">
                <h5>Are you sure want to delete this record.</h5>
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <div>
                  <button
                    type="btn"
                    className="btn btn-outline-secondary rounded-pill"
                    onClick={handleCloseDelete}
                    style={{ width: "10rem" }}
                  >
                    {" "}
                    Close{" "}
                  </button>
                </div>
                <div>
                  <button
                    type="btn"
                    className="btn btn-outline-success rounded-pill"
                    onClick={handleDeleteConfirm}
                    style={{ width: "10rem" }}
                  >
                    Yes{" "}
                  </button>
                </div>
              </div>
            </>
          </Modal.Body>
        </Modal>
      </>
    </section>
  );
};
export default BuildingMaterialTable;
