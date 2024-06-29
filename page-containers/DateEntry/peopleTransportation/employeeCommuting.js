import React, { useState, useEffect } from "react";

import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Modal, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { ADMINAPI } from "../../../apiWrapper";
const EmployeeCommuting = ({ projectPack, projectId }) => {
           

    const router = useRouter();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
   

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = (row) =>{
        setEmployeeId(row._id)
        setShowDelete(true);
    } 
    const [rows, setRows] = useState()

    const [numberOfEmployees, setNumberOfEmployees] = useState("");
    const [numberOfVehicles, setNumberOfVehicles] = useState("");
    const [averageDistanceTravelledForVehicle, setAverageDistanceTravelledForVehicle] = useState("");
    const [employeeId, setEmployeeId] = useState("");

    const handleEdit = (row) => {
        setNumberOfEmployees(row.numberOfEmployees);
        setNumberOfVehicles(row.numberOfVehicles);
        setAverageDistanceTravelledForVehiclee(row.averageDistanceTraveledForVehicle);
        setEmployeeId(row._id)
        setShowEdit(true)
    }

    const handleAddRecord = async () => {
        const payload = {
            projectId: projectId,
            packageId: projectPack,
            averageDistanceTravelledForVehicle: averageDistanceTravelledForVehicle,
            numberOfVehicles: numberOfVehicles,
            numberOfEmployees: numberOfEmployees

        };
        console.log("payload", payload)

        try {
            await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/employee-commuting`,
                method: "POST",
                body: { ...payload },
            })
                .then((data) => {
                    if (data.status === true) {

                        setShow(false);
                        setTimeout(() => {
                            router.push("/addMonthlyData", { scroll: false });

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
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/employee-commuting`,
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
    useEffect(() => {
        fetchTable();
    }, []);

    const handleEditChanges = async () => {
        const payload = {
            projectId: projectId,
            packageId: projectPack,
            averageDistanceTravelledForVehicle: averageDistanceTravelledForVehicle,
            numberOfVehicles: numberOfVehicles,
            numberOfEmployees: numberOfEmployees
        };

        try {
            await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/employee-commuting/${employeeId}`,
                method: "put",
                body: { ...payload },
            })
                .then((data) => {
                    if (data.status === true) {
                        setShowEdit(false);
                        setTimeout(() => {
                            router.push("/addMonthlyData", { scroll: false });
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

    const handleDeleteConfirm = async() =>{
        try {
     
            await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/data-entry/employee-commuting/${employeeId}`,
                method: "PATCH",
                 
                 }).then((data) => {
                    if (data.status === true) {
                        setShowDelete(false)
                        handleCloseDelete();
                        fetchTable()
                      setTimeout(() => {
                        router.push("/addMonthlyData", { scroll: false });
                      }, 100);
                    } else {
                        console.log(data?.message,"rtrttt");
                        setShowDelete(false)
        
                      toast.error(data?.message);
                    }
                 }).catch(err =>{
                    setShowDelete(false)
    
            console.log(err,"rtrttt");
            // toast.error(err?.message);
                 })
               
             } catch (error) {
               console.log(error, "errorooo");
            //    toast.error(data?.message);
    
     
             }
    }



    const columns = [

        {
            name: <b>Number of Employees</b>,
            selector: (row) => row.numberOfEmployees,
            wrap: "true",
            sortable: true,
        },
        {
            name: <b className="text-center">Number of Vehicles </b>,
            selector: (row) => row.numberOfVehicles,
            wrap: "true",
            sortable: true,
        },
        {
            name: <b className="text-center">Average Distance Traveled for Vehicle </b>,
            selector: (row) => row.averageDistanceTravelledForVehicle,
            wrap: "true",
            sortable: true,
        },

        {
            name: <b>Action</b>,
            selector: (row) => row.Action,
            cell: row => (
                <div className="d-flex align-items-center">
                    <FaRegEdit
                        style={{ color: "secondary", fontSize: "20px", cursor: 'pointer' }}
                        onClick={() => handleEdit(row)}
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



    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', 
            }
        }
    }

    return (
        <section>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img src="/images/EmployeeCommuting.png" alt="" />
                    <h5 className="mx-2">Employee Commuting</h5>
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
                    <Modal.Header closeButton style={{ border: "0" }}></Modal.Header>
                    <Modal.Body>
                        <>
                            <div>
                                <div className="d-flex align-items-center">
                                    <img src="/images/PeopleTransportation.png" alt="" className="img-fluid" />
                                    <div className="mx-2">
                                        <h4>PeopleTransportation</h4>
                                        <h5>Employee Commuting</h5>
                                    </div>

                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <label htmlFor="">Number Of Employess</label>
                                        <input type="text" className="form-control" placeholder=""
                                            value={numberOfEmployees} onChange={(e) => setNumberOfEmployees(e.target.value)} />


                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">Number of Vehicles </label>
                                        <input type="text" className="form-control" placeholder=""
                                            value={numberOfVehicles} onChange={(e) => setNumberOfVehicles(e.target.value)} />

                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">Average Distance Traveled for Vehicle</label>
                                        <input type="text" className="form-control" placeholder=""
                                            value={averageDistanceTravelledForVehicle} onChange={(e) => setAverageDistanceTravelledForVehicle(e.target.value)} />

                                    </div>

                                </div>

                            </div>

                         
                            <div className="my-4 d-flex justify-content-between">
                                <div>
                                    <button type="btn" className="btn btn-outline-secondary" onClick={handleClose}> Close </button>
                                </div>
                                <div>
                                    <button type="btn" className="btn btn-outline-success" onClick={handleAddRecord}> Save Changes </button>
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
                                    <img src="/images/PeopleTransportation.png" alt="" className="img-fluid" />
                                    <div className="mx-2">
                                        <h4>PeopleTransportation</h4>
                                        <h5>Employee Commuting</h5>
                                    </div>

                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <label htmlFor="">Number Of Employees</label>
                                        <input type="text" className="form-control" placeholder="" 
                                        value={numberOfEmployees} onChange={(e)=>setNumberOfEmployees(e.target.value)}/>


                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">Number of Vehicles</label>
                                        <input type="text" className="form-control" placeholder=""
                                        value={numberOfVehicles} onChange={(e)=>setNumberOfVehicles(e.target.value)}/>
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="">Average Distance Traveled for Vehicle </label>
                                        <input type="text" className="form-control" placeholder="" 
                                        value={averageDistanceTravelledForVehicle} onChange={(e)=>setAverageDistanceTravelledForVehicle(e.target.value)}/>
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
                                    <button type="btn" className="btn btn-outline-secondary rounded-pill" onClick={handleCloseDelete} style={{ width: "10rem" }}> Close </button>
                                </div>
                                <div>
                                    <button type="btn" className="btn btn-outline-success rounded-pill" onClick={handleDeleteConfirm} style={{ width: "10rem" }}>Yes </button>
                                </div>
                            </div>
                        </>
                    </Modal.Body>
                </Modal>

            </>
        </section>
    )
}
export default EmployeeCommuting;