import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from "react-bootstrap";
import { ADMINAPI } from "../../../../apiWrapper";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WaterTankerTable = () => {
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
  const [waterType, setWaterType] = useState("");
  const [water, setWater] = useState("");
  const [consumption, setConsumption] = useState("");
  const [waterUnit, setWaterUnit] = useState("");
  const [tankCapacity, setCapacity] = useState("");
  const [trips, setTrips] = useState("");
  const [fuel, setFuel] = useState("");
  const [waterId, setWaterId] = useState("");

  const columns = [
    {
      name: <b>Water Type</b>,
      selector: (row) => row.waterType,
      wrap: "true",
    },
    {
      name: (
        <b className="text-center">
          Drinking <br />
          Non Drinking Water
        </b>
      ),
      selector: (row) => row.drinkingNonDrinkingWater,
      wrap: "true",
    },
    {
      name: (
        <b className="text-center">
          Water Consumption
          <br />
          Amount
        </b>
      ),
      selector: (row) => row.waterConsumption,
      wrap: "true",
    },
    {
      name: <b>Unit</b>,
      selector: (row) => row.unit,
      wrap: "true",
    },

    {
      name: (
        <b>
          Tanker Capacity <br />
          (US Gallons)
        </b>
      ),
      selector: (row) => row.tankerCapacity,
      wrap: "true",
    },

    {
      name: <b>No. of Trips</b>,
      selector: (row) => row.noOfTrips,
      wrap: "true",
    },

    {
      name: (
        <div style={{ textAlign: "center" }}>
          <b>Fuel Used</b> <br />
          <span>by Trucks(litres)(one full trip, from source)</span>
        </div>
      ),
      selector: (row) => row.fuelUsedByTruck,
      wrap: "true",
    },

    {
      name: (
        <b style={{ textAlign: "center" }}>
          Supporting <br />
          Document
        </b>
      ),
      selector: (row) => row.supporting,
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
      WaterType: "Third Party Water",
      Drinking: "Non Drinking Water",
      WaterConsumption: "1344",
      unit: "US Gallon",
      TankerCapacity: "1344",
      nooftrips: "1344",
      FuelUsed: "1344",
      supporting: "1 Attachment",
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
      WaterType: "Third Party Water",
      Drinking: "Non Drinking Water",
      WaterConsumption: "1344",
      unit: "Liter",
      TankerCapacity: "1452",
      nooftrips: "1452",
      FuelUsed: "1452",
      supporting: "1 Attachment",
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

  let waterTypeVal = [
    "Surface Water",
    "Ground Water",
    "Sea Water",
    "Produced Water",
    "Third-Party Water",
  ];
  let waterArr = ["Drinking Water", "Non-Drinking Water"];
  let waterUnitArr = ["US Gallon", "Litre", "Cubic Meter"];
  let fuelArr = ["1344", "1452"];

  const handleChangeWater = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setWater(selectedValue);
  };
  const handleChangeWaterType = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setWaterType(selectedValue);
  };

  const handleChangeWaterUnit = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setWaterUnit(selectedValue);
  };
  const handleChangFuel = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setFuel(selectedValue);
  };
  const fetchWaterTanker = async () => {
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/water-tanker`,
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
  const handleSaveChanges = async () => {
    const payload = {
      packageId: "60d5ec49f7d5ab001c8d5dbf",
      projectId: "60d5ec49f7d5ab001c8d5dc0",
      reportId: "60d5ec49f7d5ab001c8d5dc1",
      emissionInputId: 123,
      waterType: waterType, //"Surface Water",
      drinkingNonDrinkingWater: water, // "Drinking Water",
      waterConsumption: consumption, // 5000,
      unit: waterUnit, // "Litre",
      tankerCapacity: tankCapacity, //1000,
      noOfTrips: trips, // 5,
      fuelUsedByTruck: fuel, // 150,
      supportingDocument: "document-url",
      safeDelete: false,
    };
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/water-tanker`,
        method: "POST",
        body: { ...payload },
      })
        .then((data) => {
          if (data.status === true) {
            setShow(false);
            toast.success(data?.message);
            fetchWaterTanker();
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
  const handleDelete = (row) => {
    console.log(row, "LLLL");
    setWaterId(row._id);
    setShowDelete(true);
  };
  const handleEdit = async (row) => {
    // Logic to handle editing the row

    console.log("Edit row:uuuuuu", row);
    setWaterType(row.waterType), // accountNo: accountNumber, // "1234567890",
      setWater(row.drinkingNonDrinkingWater), // serviceProvider: serviceProvider, //"DEWA",
      setConsumption(row.waterConsumption), // readingDate: readingDate, // "15 March 2024",
      setWaterUnit(row.Unit), // meterReading: meterReading, // "1400",
      setCapacity(row.tankerCapacity), // consumption: consumption, //"1400",
      setTrips(row.noOfTrips), // unit: waterUnit, //"Joule",
      setFuel(row.fuelUsedByTruck),
      setWaterId(row._id);
    setShowEdit(true);
    // For example, you might open a modal with a form to edit the row's details
  };
  const handleEditChanges = async () => {
    const payload = {
      // Construct payload based on your form data
      waterType: waterType, //"Surface Water",
      drinkingNonDrinkingWater: water, // "Drinking Water",
      waterConsumption: consumption, // 5000,
      unit: waterUnit, // "Litre",
      tankerCapacity: tankCapacity, //1000,
      noOfTrips: trips, // 5,
      fuelUsedByTruck: fuel, // 150,
      supportingDocument: "document-url",
      safeDelete: false,
    };
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/water-tanker/${waterId}`,
        method: "put",
        body: { ...payload },
      })
        .then((data) => {
          if (data.status === true) {
            setShow(false);
            handleCloseEdit();
            toast.success(data?.message);
            fetchWaterTanker();
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
  const handleDeleteConfirm = async () => {
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/water-tanker/${waterId}`,
        method: "PATCH",
      })
        .then((data) => {
          if (data.status === true) {
            setShowDelete(false);
            handleCloseDelete();
            toast.success(data?.message);
            fetchWaterTanker();
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
    fetchWaterTanker();
  }, []);
  return (
    <section>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src="/images/WaterTanker.png" alt="" />
          <h5 className="mx-2">Water Tanker</h5>
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
                    src="/images/waterTanker_Modal.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="mx-2">
                    <h4>Water Consumption</h4>
                    <h5>Water Tanker</h5>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="">Water Type</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeWaterType(e)}
                      value={waterType}
                    >
                      {waterTypeVal?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
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

                  <div className="col-md-4">
                    <label htmlFor="">Water Consumption</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={consumption}
                      onChange={(e) => setConsumption(e.target.value)}
                      required
                    />{" "}
                  </div>
                </div>

                <div className="row mt-3">
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
                    <label htmlFor="">Tanker Capacity (US Gallons)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={tankCapacity}
                      onChange={(e) => setCapacity(e.target.value)}
                      required
                    />{" "}
                  </div>
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
                </div>

                <div className="row mt-3">
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
                    <label htmlFor="">Support Document (If Any)</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Upload document"
                    />
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
                    src="/images/waterTanker_Modal.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="mx-2">
                    <h4>Water Consumption</h4>
                    <h5>Water Tanker</h5>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="">Water Type</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => handleChangeWaterType(e)}
                      value={waterType}
                    >
                      {waterTypeVal?.map((category, indexCat) => (
                        <option key={indexCat} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
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

                  <div className="col-md-4">
                    <label htmlFor="">Water Consumption</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={consumption}
                      onChange={(e) => setConsumption(e.target.value)}
                      required
                    />{" "}
                  </div>
                </div>

                <div className="row mt-3">
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
                    <label htmlFor="">Tanker Capacity (US Gallons)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" "
                      value={tankCapacity}
                      onChange={(e) => setCapacity(e.target.value)}
                      required
                    />{" "}
                  </div>
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
                </div>

                <div className="row mt-3">
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
                    <label htmlFor="">Support Document (If Any)</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Upload document"
                    />
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
        <ToastContainer />
      </>
    </section>
  );
};
export default WaterTankerTable;
