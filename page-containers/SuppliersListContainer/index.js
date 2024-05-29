import Card from "@/components/Card.js";
import { useEffect, useState } from "react";

const SuppliersList = () => {
  const [users, setUsers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "10px 0px 0px 0px",
          // gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div> Select Project</div>
          <div>
            <input
              type="text"
              placeholder="Project Name"
              style={{
                padding: "15px 450px 15px 10px",
                border: "1px solid lightGrey",
                borderRadius: "8px",
                margin:"20px 0px"
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap:"400px"
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            Suppliers & Sub-Contractors List
          </p>
          <div>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "600",
                border: "1px solid green",
                padding: "10px 20px",
                borderRadius: "8px",
                color: "green",
              }}
              onClick={togglePopup}
            >
              Filter
            </span>
            <span
              style={{
                marginLeft: "10px",
                background: "green",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Add Project
            </span>
          </div>
        </div>
        <Card width="" height="auto">
          <div>
            <table >
              <thead
              >
                <tr style={{ borderBottom: "1px solid #D3D3D3", color: "green" }}>
                  <th style={{padding:"0px 60px"}}>ID</th>
                  <th style={{padding:"0px 60px"}}>Supplier Name</th>
                  <th style={{padding:"0px 60px"}}>Address</th>
                  <th style={{padding:"0px 60px"}}>Date</th>
                  <th style={{padding:"0px 60px"}}>Type</th>
                  {/* <th style={{padding:"0px 60px"}}>Status</th> */}
                </tr>
              </thead>
              <tbody>
                {data?.map((supplier) => (
                  <tr
                    key={supplier.id}
                    style={{ borderBottom: "1px solid #D3D3D3" }}
                  >
                    <td style={{ height: "50px", padding:"0px 60px" }}>{supplier.id}</td>
                    <td style={{ height: "50px", padding:"0px 60px" }}>{supplier.name}</td>
                    <td style={{ height: "50px", padding:"0px 60px" }}>{supplier.address}</td>
                    <td style={{ height: "50px", padding:"0px 60px" }}>{supplier.date}</td>
                    <td style={{ height: "50px", padding:"0px 60px" }}>{supplier.type}</td>
                    {/* <td style={{ height: "50px", padding:"0px 60px" }}>{supplier.status}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* </div> */}
          {showPopup && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                zIndex: "999",
                float: "top",
              }}
            >
              <h2>Filter Popup</h2>
              {/* Add filter options and other content here */}
              <button onClick={togglePopup}>Close</button>
            </div>
          )}
        </Card>
      </div>
    </>
  );
};

export default SuppliersList;
