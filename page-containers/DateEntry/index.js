import React from "react";
import DataEntryTable from "./datatList";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ADMINAPI } from "../../apiWrapper/";

function formatMonthYear(dateString) {
  const date = new Date(dateString);
  const options = { month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
const DataEntryContainer = () => {
  const [project, setProject] = useState("");
  const [projectList, setProjectList] = useState([]);
  const [packageValue, setPackage] = useState("");
  const [packageList, setpackageList] = useState([]);

  const handleChangeProjectName = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setProject(selectedValue);
  };

  const handleChangePackage = (e) =>{
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setPackage(selectedValue);
  } 

  const fetchProject = async () => {
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/projects?id=3&page=1`,
        method: "GET",
      }).then((data) => {
        let userData = data.response;
        setProjectList(userData);
        console.log(userData, "oooooooPPPP");
      });
    } catch (error) {
      console.log(error, "errorooo");
    }
  };

  const fetchPackageList = async () => {
    try {
      await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/packages`,
        method: "GET",
      }).then((data) => {
        let userData = data.response;
        setpackageList(userData);
        console.log(userData, "ooooooo");
      });
    } catch (error) {
      console.log(error, "errorooo");
    }
  };
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

  useEffect(() => {
    fetchProject();
    fetchPackageList();
  }, []);
  return (
    <>
      <section>
        <div className="p-4">
          <div className="row">
              <div className="col-md-4">
                <h3>Select Project</h3>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => handleChangeProjectName(e)}
                  name="category"
                  id="category"
                  value={project} // Bind the state variable to the value prop
                >
                  <option value="">Project </option>
                  {projectList?.map((category, indexCat) => (
                    <option key={indexCat} value={category?._id}>
                      {category?.projectName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <h3>Select Package</h3>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => handleChangePackage(e)}
                  name="package"
                  id="package"
                  value={packageValue} // Bind the state variable to the value prop
                >
                  <option value=""> Package</option>
                  {packageList?.map((category, indexCat) => (
                    <option key={indexCat} value={category?._id}>
                      {category?.name}
                    </option>
                  ))}
                </select>
              </div>
            
          </div>

          <div className="row my-3">
            <div className="col-md-12">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h2>Monthly Reports </h2>
                </div>
                <div className="d-flex">
                  {/* <button type="btn" className="btn btn-outline-success mx-3">
                    Filters
                  </button> */}
                  <Link href="/addMonthlyData">
                    <button type="btn" className="btn btn-outline-success">
                      Add Monthly Report
                    </button>
                  </Link>
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
