import Card from "@/components/Card.js";
import React from "react";
import styles from "./projectContainer.module.scss";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";


const ProjectsContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    salary: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission of form data, e.g., save to database
    console.log("Form submitted with data:", formData);
    // Reset form fields after submission
    setFormData({ name: "", email: "", phone: "", salary: "" });
    // Hide the form
    setShowForm(false);
  };

  const data = [
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
    {
      id: 2,
      name: "Supplier B",
      address: "456 Elm St",
      date: "2024-04-30",
      type: "Type B",
      status: "Processing",
    },
    {
      id: 3,
      name: "Supplier C",
      address: "789 Oak St",
      date: "2024-05-01",
      type: "Type C",
      status: "Rejected",
    },
    {
      id: 4,
      name: "Supplier P",
      address: "789 Oak St",
      date: "2024-05-01",
      type: "Type C",
      status: "Completed",
    },
    {
      id: 5,
      name: "Supplier Y",
      address: "789 Oak St",
      date: "2024-05-01",
      type: "Type C",
      status: "Completed",
    },
    {
      id: 6,
      name: "Supplier C",
      address: "789 Oak St",
      date: "2024-05-01",
      type: "Type C",
      status: "Completed",
    },
    {
      id: 7,
      name: "Supplier F",
      address: "789 Oak St",
      date: "2024-05-01",
      type: "Type C",
      status: "Completed",
    },
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
    {
      id: 1,
      name: "Supplier A",
      address: "123 Main St",
      date: "2024-04-29",
      type: "Type A",
      status: "Completed",
    },
  ];

  return (
    <>
      <div className={styles.projectContainer}>
        <p>Project Lists</p>
        <div>
         <span className={styles.deleteIcon}><MdDeleteForever icon={faTimes} /></span>
          <span className={styles.editIcon}><FaRegEdit /></span>
          <span className={styles.filter}><RiFilter2Fill /> Filters</span>
          {/* <span className={styles.addNew} onClick={() => handleShow(true)}>Add New</span> */}
          <Link
                            href="/addProject"
                            className={styles.addNew}                           >
                           {"Add New"}
                          </Link>
        </div>
        
      </div>
      <div className={styles.tableWrapper}>
        {/* <Card width="" height=""> */}
          <div>
            <table>
              <thead>
                <tr
                  style={{ borderBottom: "1px solid #D3D3D3", color: "black" }}
                >
                  <th>Project Reference No.</th>
                  <th>Project Package</th>
                  <th>Package Typology</th>
                  <th>Package Current Progress</th>
                  <th>Cumulative Manhour</th>
                  <th>Plot Area(m2)</th>
                  <th>GFA(m2)</th>
                  <th>Road Length(km)</th>
                  <th>Infrastructure(Ha)</th>
                  <th>Subscription Category</th>
                  <th>Subscription Tier</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((supplier) => (
                  <tr
                    key={supplier.id}
                    style={{ borderBottom: "1px solid #D3D3D3" }}
                  >
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.id}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.name}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.address}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.date}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.type}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.status}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.status}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.status}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.status}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.status}
                    </td>
                    <td style={{ height: "50px", padding: "0px 60px" }}>
                      {supplier.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        {/* </Card> */}
      </div>
      

    </>
  );
};

export default ProjectsContainer;
