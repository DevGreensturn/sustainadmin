import Card from "@/components/Card.js";
import React from "react";
import styles from "./projectContainer.module.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import DataEntryTable from "./datatList";
import Link from "next/link";


function formatMonthYear(dateString) {
  const date = new Date(dateString);
  const options = { month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}
const DataEntryContainer = () => {
  const data = [
    {
      id: 1,
      name: "33%",
      address: "123 Manhour",
      date: "2024-04-29",
      type: "USER NAME",
      status: "Submitted",
    },
    {
      id: 2,
      name: "36%",
      address: "456 Manhour",
      date: "2024-04-30",
      type: "USER NAME",
      status: "Audited",
    },
    {
      id: 3,
      name: "46%",
      address: "789 Manhour",
      date: "2024-05-01",
      type: "USER NAME",
      status: "Returned",
    },
    {
      id: 4,
      name: "40%",
      address: "789 Manhour",
      date: "2024-05-01",
      type: "USER NAME",
      status: "Submitted",
    },
    {
      id: 5,
      name: "38%",
      address: "789 Manhour",
      date: "2024-05-01",
      type: "USER NAME",
      status: "Audited",
    },
    {
      id: 6,
      name: "46%",
      address: "789 Manhour",
      date: "2024-05-01",
      type: "USER NAME",
      status: "Submitted",
    },
    {
      id: 7,
      name: "50%",
      address: "789 Manhour",
      date: "2024-05-01",
      type: "USER NAME",
      status: "Audited",
    },
    {
      id: 1,
      name: "33%",
      address: "123 Manhour",
      date: "2024-04-29",
      type: "USER NAME",
      status: "Submitted",
    },
    {
      id: 1,
      name: "33%",
      address: "123 Manhour",
      date: "2024-04-29",
      type: "USER NAME",
      status: "Returned",
    },
    {
      id: 1,
      name: "33%",
      address: "123 Manhour",
      date: "2024-04-29",
      type: "USER NAME",
      status: "Submitted",
    },
    {
      id: 1,
      name: "33%",
      address: "123 Manhour",
      date: "2024-04-29",
      type: "USER NAME",
      status: "Returned",
    },
    {
      id: 1,
      name: "33%",
      address: "123 Manhour",
      date: "2024-04-29",
      type: "USER NAME",
      status: "Submitted",
    },
    {
      id: 1,
      name: "33%",
      address: "123 Manhour",
      date: "2024-04-29",
      type: "USER NAME",
      status: "Returned",
    },
  ];

  return (
    <>
     <section>
      <div className="p-4">
        <div className="row">
          <div className="col-md-12">
            <div className="my-5">
              <h3>Select Project</h3>
            <select className="form-select" aria-label="Default select example">
              <option selected>Downtown Tower - Building</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            </div>
          </div>
        </div>
        
        <div className="row my-3">
          <div className="col-md-12">
            <div className="d-flex align-items-center justify-content-between">
              <div>
              <h2>Monthly Reports </h2>
              </div>
              <div className="d-flex">
                <button type="btn" className="btn btn-outline-success mx-3">Filters</button>
                <Link href="/addMonthlyData"><button type="btn" className="btn btn-outline-success">Add Monthly Report</button></Link>
              </div>
            </div>
            </div>
        </div>

        <div className="row my-3">
          <div className="col-md-12">
            <div>
              <DataEntryTable />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* <div className={styles.projectContainer}>
        <p>Monthly Reports</p>
        <select className={styles.selectBar} id="dummySelect">
    <option value="option1">Downtown Tower - Buildings</option>
    <option value="option2">Downtown Tower - Building1</option>
    <option value="option3">Downtown Tower - Building2</option>
  </select>
        <div>
          <span className={styles.deleteIcon}><MdDeleteForever icon={faTimes} /></span>
          <span className={styles.editIcon}><FaRegEdit /></span>
          <span className={styles.filter}>Filter</span>
          <span className={styles.addNew}>Add Monthly Report</span>
        </div>
      </div>
      <div className={styles.tableWrapper}>
  <div>
    <table>
      <thead>
        <tr style={{ borderBottom: "1px solid #D3D3D3", color: "black" }}>
          <th>Reporting Month</th>
          <th>Package Progress this month</th>
          <th>Manhour during this month</th>
          <th>Reported By</th>
          <th>Report Status</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((supplier) => (
          <>
            <tr
              key={supplier.id}
              style={{ borderTop: "1px solid #D3D3D3", margin: 0 }}
            >
              <td style={{ height: "50px", padding: "0px 60px" }}>
                {formatMonthYear(supplier.date)}
              </td>
              <td style={{ height: "50px", padding: "0px 60px" }}>
                {supplier.name}
              </td>
              <td style={{ height: "50px", padding: "0px 60px" }}>
                {supplier.address}
              </td>
              <td style={{ height: "50px", padding: "0px 60px" }}>
                {supplier.type}
              </td>
              <td style={{ height: "50px", padding: "0px 60px", color: supplier.status === "Audited" ? "green" : supplier.status === "Returned" ? "red" : "black" }}>
  {supplier.status}
</td>


            </tr>
            <tr>
              <td colSpan="5" style={{ padding: 0 }}>
                <hr style={{ borderTop: "1px solid #D3D3D3", margin: 0 }} />
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  </div>
 
</div> */}

    </>
  );
};

export default DataEntryContainer;
