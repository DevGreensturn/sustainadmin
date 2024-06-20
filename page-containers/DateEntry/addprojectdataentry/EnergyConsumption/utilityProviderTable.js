import React, { useState,useEffect } from "react";
import { ADMINAPI } from "../../../../apiWrapper";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Modal, Button } from 'react-bootstrap';
import { useRouter } from "next/navigation";

const Utilityprovidertable = () => {
    // State for modals
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const navigate = useRouter();

    // Columns for DataTable
    const columns = [
        {
            name: <b>Energy Type</b>,
            selector: (row) => row.energyType,
            wrap: true
        },
        {
            name: <b className="text-center">Meter No. </b>,
            selector: (row) => row.meterNumber,
            wrap: true
        },
        {
            name: <b className="text-center">Account No.</b>,
            selector: (row) => row.accountNumber,
            wrap: true
        },
        {
            name: <b>Service Provider</b>,
            selector: (row) => row.serviceProvider,
            wrap: true
        },
        {
            name: <b>Reading Date</b>,
            selector: (row) => row.readingDate,
            wrap: true
        },
        {
            name: <b>Meter Reading</b>,
            selector: (row) => row.meterReading,
            wrap: true
        },
        {
            name: <b>Consumption</b>,
            selector: (row) => row.consumption,
            wrap: true
        },
        {
            name: <b>Unit</b>,
            selector: (row) => row.unit,
            wrap: true
        },
        {
            name: <b>Supporting Document</b>,
            selector: (row) => row.supportingDocument,
            wrap: true
        },
        {
            name: <b>Action</b>,
            cell: (row) => (
                <div className="d-flex align-items-center">
                    <FaRegEdit style={{ color: "secondary", fontSize: "20px" }} onClick={handleShowEdit} />
                    <MdDeleteForever icon={faTimes} className="mx-2" style={{ color: "red", fontSize: "20px" }} onClick={() => handleShowDelete(row)} />
                </div>
            ),
            wrap: true,
            allowOverflow: true // To ensure the action buttons are fully visible
        },
    ];

    // Example rows for DataTable
    const [rows, setRows] = useState([]);

    // Function to handle save operation
    const handleSaveChanges =async () => {
       
        const payload = {
            // Construct payload based on your form data
            energyType: 'Electricity',
            meterNumber: '00003',
            accountNumber: '1234567890',
            serviceProvider: 'DEWA',
            readingDate: '15 March 2024',
            meterReading: '1400',
            consumption: '1400',
            unit: 'Joule',
            supportingDocument: '2 attachments'
        };
        try {
            await ADMINAPI({
              url: 'http://3.108.58.161:3002/api/v1/data-entry/energy',
              method: "POST",
              body: { ...payload },
            }).then((data) => {
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
            }).catch(err => {
            //   toast.error(err?.message);
            });
          } catch (error) {
            console.log(error, "errorooo");
          }     
    };
    const fetchTable = async () => {

        try {
               
          await ADMINAPI({
                url: `http://3.108.58.161:3002/api/v1/data-entry/energy`,
                method: "GET",
               
               }).then((data) => {
                 let userData = data.response;
                    setRows(userData)
               console.log(userData,"ooooooossssssss");
               });
             
           } catch (error) {
             console.log(error, "errorooo");
           }
        };      
    // Function to handle delete operation
    const handleDeleteRecord = (row) => {
        const endpoint = `http://localhost:3002/api/v1/data-entry/energy/${row.id}`; // Example API endpoint

        const options = {
            method: 'DELETE', // Adjust method as per your API requirements
            headers: {
                'Content-Type': 'application/json' // Adjust headers as per your API requirements
            }
        };

        fetch(endpoint, options)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                handleCloseDelete(); // Close modal after successful delete
                // Assuming you want to update the DataTable after deletion
                const updatedRows = rows.filter(r => r.id !== row.id); // Remove deleted record from state
                setRows(updatedRows);
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error scenarios (e.g., show error message)
            });
    };
    useEffect(() => {
        fetchTable();
      }, []);
    return (
        <section>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img src="/images/utilityProvider.png" alt="" />
                    <h5 className="mx-2">Utility Provider Energy</h5>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-success" onClick={handleShow}>
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
                            <select className="form-select" aria-label="Default select example">
                                     <option selected>Open this select menu</option>
                                     <option value="1">One</option>
                                     <option value="2">Two</option>
                                     <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                                 <label htmlFor="">Meter No.</label>
                                 <input type="text" className="form-control" placeholder="12345" />
                        </div>
                        <div className="col-md-4">
                                 <label htmlFor="">Account No.</label>
                                 <input type="text" className="form-control" placeholder="1234567890" />
                             </div>

                         </div>

                         <div className="row mt-3">
                             <div className="col-md-4">
                                 <label htmlFor="">Service Provider</label>
                                 <input type="text" className="form-control" placeholder="DAWA" />
                             </div>

                             <div className="col-md-4">
                                 <label htmlFor="">Reading Date</label>
                                 <input type="text" className="form-control" placeholder="10 March 2024" />
                             </div>

                             <div className="col-md-4">
                                 <label htmlFor="">Meter Reading</label>
                                 <input type="text" className="form-control" placeholder="1234" />
                             </div>

                         </div>

                         <div className="row my-3 ">
                             <div className="col-md-4">
                                 <label htmlFor="">Consumption</label>
                                 <input type="text" className="form-control" placeholder="123456" />
                             </div>

                             <div className="col-md-4">
                                 <label htmlFor="">Unite Type</label>
                                 <select className="form-select" aria-label="Default select example">
                                     <option selected>Joule</option>
                                     <option value="1">kWh</option>
                                     <option value="2">Two</option>
                                     <option value="3">Three</option>
                                 </select>
                             </div>

                             <div className="col-md-4">
                                 <label htmlFor="">Support Document (If Any)</label>
                                 <input type="file" className="form-control" placeholder="Upload document" />
                             </div>
                         
                        {/* Add other input fields as per your form */}
                    </div>
                    {/* Buttons for add modal */}
                    <div className="my-4 d-flex justify-content-between">
                        <div>
                            <button type="button" className="btn btn-outline-secondary" onClick={handleClose}> Close </button>
                        </div>
                        <div>
                            <button type="button" className="btn btn-outline-success" onClick={handleSaveChanges}> Save Changes </button>
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
                    {/* Your form for editing */}
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <label htmlFor="">Energy Type</label>
                            <select className="form-select" aria-label="Energy Type">
                                <option value="Electricity">Electricity</option>
                                <option value="Cooling">Cooling</option>
                            </select>
                        </div>
                        {/* Add other input fields as per your form */}
                    </div>
                    {/* Buttons for edit modal */}
                    <div className="my-4 d-flex justify-content-between">
                        <div>
                            <button type="button" className="btn btn-outline-secondary" onClick={handleCloseEdit}> Close </button>
                        </div>
                        <div>
                            <button type="button" className="btn btn-outline-success" onClick={handleCloseEdit}> Save Changes </button>
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
                            <button type="button" className="btn btn-outline-secondary rounded-pill" onClick={handleCloseDelete}> Close </button>
                        </div>
                        <div>
                            <button type="button" className="btn btn-outline-success rounded-pill" onClick={() => handleDeleteRecord(showDelete)}> Yes </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </section>
    );

};
export default Utilityprovidertable;
