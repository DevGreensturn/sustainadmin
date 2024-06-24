import React, { useState, useEffect } from "react";
import { ADMINAPI } from "../../../../apiWrapper";
import DataTable from "react-data-table-component";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
const Utilityprovidertable = () => {
  // State for modals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const navigate = useRouter();
  const [energyTypeVal, setEnergyType] = useState("");
  const [metorNo, setMetorNo] = useState(""); //accountNumber
  const [accountNumber, setAccountNumber] = useState(""); //accountNumber
  const [serviceProvider, setServiceProvider] = useState(""); //accountNumber
  const [meterReading, setMeterReading] = useState(""); //accountNumber
  const [readingDate, setReadingDate] = useState(""); //accountNumber
  const [consumption, setConsumption] = useState(""); //accountNumber
  const [energyUnit, setEnergUnit] = useState("");
  const [energyId, setEnergId] = useState("");


  let energyTypeArr = ["Electricity", "Heating", "Cooling", "Steam"];
  let energyUnitArr = ["Kwh", "Joule", "Wh"];
  function formatDate(readingDate) {
    const date = new Date(readingDate);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options);

    return formattedDate;
  }

  // Example usage:
  // Output: "23 March 2024"
  const handleShowEdit = (row) => {
    console.log(row,"LLLL");
    setEnergyType(row.energyType);
    setMetorNo(row.meterNo);
    setAccountNumber(row.accountNo)
    setServiceProvider(row.serviceProvider)
    setMeterReading(row.meterReading)
    setReadingDate(formatDate(row.readingDate))
    setConsumption(row.consumption)
    setEnergUnit(row.unit)
    setEnergId(row._id)
    setShowEdit(true)
  }

  const handleShowDelete = (row) => {
    console.log(row,"LLLL");
    setEnergId(row._id)
    setShowDelete(true)
  }
  const handleChangeEnergy = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setEnergyType(selectedValue);
  };
  const handleChangeEnergyUnit = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setEnergUnit(selectedValue);
  };
  // Columns for DataTable
  const handleDateChange = (date) => {
    setReadingDate(date);
  };

  const columns = [
    {
      name: <b>Energy Type</b>,
      selector: (row) => row.energyType,
      wrap: true,
    },
    {
      name: <b className="text-center">Meter No. </b>,
      selector: (row) => row.meterNo,
      wrap: true,
    },
    {
      name: <b className="text-center">Account No.</b>,
      selector: (row) => row.accountNo,
      wrap: true,
    },
    {
      name: <b>Service Provider</b>,
      selector: (row) => row.serviceProvider,
      wrap: true,
    },
    {
      name: <b>Reading Date</b>,
      selector: (row) =>
        row.readingDate ? formatDate(row.readingDate) : row.readingDate,
      wrap: true,
    },
    {
      name: <b>Meter Reading</b>,
      selector: (row) => row.meterReading,
      wrap: true,
    },
    {
      name: <b>Consumption</b>,
      selector: (row) => row.consumption,
      wrap: true,
    },
    {
      name: <b>Unit</b>,
      selector: (row) => row.unit,
      wrap: true,
    },
    {
      name: <b>Supporting Document</b>,
      selector: (row) => row.supportingDocument,
      wrap: true,
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

  // Example rows for DataTable
  const [rows, setRows] = useState([]);

  // Function to handle save operation
  const handleSaveChanges = async () => {
    const payload = {
      // Construct payload based on your form data
      energyType: energyTypeVal, //'Electricity',
      meterNo: metorNo, //"00003",meterNo
      accountNo: accountNumber, // "1234567890",
      serviceProvider: serviceProvider, //"DEWA",
      readingDate: readingDate, // "15 March 2024",
      meterReading: meterReading, // "1400",
      consumption: consumption, //"1400",
      unit: energyUnit, //"Joule",
      supportingDocument: "2 attachments",
    };
    try {
      await ADMINAPI({
        url: "${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/energy",
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
          //   toast.error(err?.message);
        });
    } catch (error) {
      console.log(error, "errorooo");
    }
  };
  const fetchTable = async () => {
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/energy`,
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
  // Function to handle delete operation
  const handleEditChanges = async () => {
    const payload = {
      // Construct payload based on your form data
      energyType: energyTypeVal, //'Electricity',
      meterNo: metorNo, //"00003",meterNo
      accountNo: accountNumber, // "1234567890",
      serviceProvider: serviceProvider, //"DEWA",
      readingDate: readingDate, // "15 March 2024",
      meterReading: meterReading, // "1400",
      consumption: consumption, //"1400",
      unit: energyUnit, //"Joule",
      supportingDocument: "2 attachments",
    };
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/energy/${energyId}`,
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
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/energy/${energyId}`,
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
            minHeight: '72px', // override the row height
        }
    }
}

  return (
    <section>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src="/images/utilityProvider.png" alt="" />
          <h5 className="mx-2">Utility Provider Energy</h5>
        </div>
        <div>
          <button
            type="button"
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

      {/* Add Record Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        backdrop="static"
        centered
      >
        <Modal.Header closeButton style={{ border: "0" }}></Modal.Header>
        <Modal.Body>
          {/* Your form for adding new record */}
          <div className="row mt-3">
            <div className="col-md-4">
              <label htmlFor="">Energy Type</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => handleChangeEnergy(e)}
                value={energyTypeVal}
              >
                {energyTypeArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
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
          </div>

          <div className="row mt-3">
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
              <label htmlFor="">Unite Type</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => handleChangeEnergyUnit(e)}
                value={energyUnit}
              >
                {energyUnitArr?.map((category, indexCat) => (
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

            {/* Add other input fields as per your form */}
          </div>
          {/* Buttons for add modal */}
          <div className="my-4 d-flex justify-content-between">
            <div>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleClose}
              >
                {" "}
                Close{" "}
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={handleSaveChanges}
              >
                {" "}
                Save Changes{" "}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Edit Modal */}
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
          {/* Your form for adding new record */}
          <div className="row mt-3">
            <div className="col-md-4">
              <label htmlFor="">Energy Type</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => handleChangeEnergy(e)}
                value={energyTypeVal}
              >
                {energyTypeArr?.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
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
          </div>

          <div className="row mt-3">
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
              <label htmlFor="">Unite Type</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => handleChangeEnergyUnit(e)}
                value={energyUnit}
              >
                {energyUnitArr?.map((category, indexCat) => (
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

            {/* Add other input fields as per your form */}
          </div>
          {/* Buttons for add modal */}
          <div className="my-4 d-flex justify-content-between">
            <div>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleClose}
              >
                {" "}
                Close{" "}
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={handleEditChanges}
              >
                {" "}
                Save Changes{" "}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Delete Modal */}
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
          <div className="text-center">
            <h5>Are you sure you want to delete this record?</h5>
          </div>
          {/* Buttons for delete modal */}
          <div className="mt-4 d-flex justify-content-between">
            <div>
              <button
                type="button"
                className="btn btn-outline-secondary rounded-pill"
                onClick={handleCloseDelete}
              >
                {" "}
                Close{" "}
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-outline-success rounded-pill"
                onClick={handleDeleteConfirm}

              >
                {" "}
                Yes{" "}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};
export default Utilityprovidertable;
