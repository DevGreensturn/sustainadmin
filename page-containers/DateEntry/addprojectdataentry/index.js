"use client"
import React from "react";

import EnergyComsuption from "./EnergyConsumption";
import WaterConsumption from "./WaterConsumption";
import ConcereteMix from "./ConcreteMix";
import BuildingMaterial from "./BuildingMaterials";
import WasteManagement from "./WasteManagement";
import WasteDirected from "./WasteDiredted";
import WasteDiverted from "./WasteDiverted";
import PeopleTransportation from "../peopleTransportation";
import { useState, useEffect } from "react";
import { ADMINAPI } from '../../../apiWrapper';
import storage from "../../../comman/localstorage";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const AddprojectEntry = () => {
  const [projectRef, setProjectRef] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [projectReportMonth, setProjectReportMonth] = useState("");
  const [projectProgress, setProjectProgress] = useState("");
  const [projectManhour, setProjectManhour] = useState("");
  const [projectReportBy, setProjectReportBy] = useState("");
  const [projectReportById, setProjectReportById] = useState("");
  const [projectPack, setProjectPack] = useState("");
  const [projectPackData, setprojectPackData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const navigate = useRouter();


  const handleChangeProject = (e) => {
    const selectedId = e.target.value;
    setProjectName(selectedId);
    // Find the selected project from the projectData array
    const selectedProject = projectData.find(project => project._id === selectedId);

    // Update the project reference number if a project is found
    if (selectedProject) {
        setProjectId(selectedProject._id)

      setProjectRef(selectedProject.referenceNo);
    } else {
      setProjectRef("");
    }
  };


  const handleChangePackage = (e) => {
    const selectedId = e.target.value;
    setProjectPack(selectedId);

  };


  const handleFetchProjectOnly = async () => {
      
    try {
     
   await ADMINAPI({
         url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/projects?id=3&page=1`,
         method: "GET",
        
        }).then((data) => {
          let userData = data.response;
          setProjectData(userData)
         
        console.log(JSON.stringify(userData),"ooooooo");
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
             setprojectPackData(userData)
           console.log(userData,"ooooooo");
           });
         
       } catch (error) {
         console.log(error, "errorooo");
  
       }
    };
    
    useEffect(() => {
    handleFetchProjectOnly();
      fetchPackageList();
    }, []);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log();
        let payload = {
                "packageId": projectPack,//"665486deed3a1b1774f9ae63",
                "projectId": projectId,//"6655751e60d4032ac67d8b2b",
                "reportingMonthYear":projectReportMonth, //"2024-06-01",
                "packagesProgressThisMonth": projectProgress,//"50%",
                "manhourDuringThisMonth": projectManhour,//"120",
                "overallPackagesProgress": "75%",
                "cumulativeManhour": projectManhour,//"450",
                "reportedBy": "66556f5bc95e160358ac76a8",
                "reportStatus": "Submitted",
                "approvedByDeveloper":"66556f5bc95e160358ac76a8"
              };
        console.log(payload,"LLLLL");
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/monthly-reports`,
            method: "POST",
            body: { ...payload },
          }).then((data) => {
            if (data.status === true) {
              setTimeout(() => {
                navigate.push("/dataEntry", { scroll: false });
              }, 100);
            } else {
              toast.error(data?.message);
            }
          }).catch(err => {
            toast.error(err?.message);
          });
        } catch (error) {
          toast.error(error?.message);
        }
      };
  
      const handleSubmitSave = async (e) => {
        e.preventDefault();
        console.log();
        let payload = {
                "packageId": projectPack,//"665486deed3a1b1774f9ae63",
                "projectId": projectId,//"6655751e60d4032ac67d8b2b",
                "reportingMonthYear":projectReportMonth,// "2024-06-01",
                "packagesProgressThisMonth": projectProgress,//"50%",
                "manhourDuringThisMonth": projectManhour,//"120",
                "overallPackagesProgress": "75%",
                "cumulativeManhour": projectManhour,//"450",
                "reportedBy": "66556f5bc95e160358ac76a8",
                "reportStatus": "Draft",
                "approvedByDeveloper":"66556f5bc95e160358ac76a8"
              };
        console.log(payload,"LLLLL");
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/monthly-reports`,
            method: "POST",
            body: { ...payload },
          }).then((data) => {
            if (data.status === true) {
              setTimeout(() => {
                navigate.push("/dataEntry", { scroll: false });
              }, 100);
            } else {
              toast.error(data?.message);
            }
          }).catch(err => {
            toast.error(err?.message);
          });
        } catch (error) {
          toast.error(error?.message);
        }
      };
      const handleDateChange = (date) => {
        setProjectReportMonth(date);
      };
  return (
    <section>
      <div className="p-4">
        <div className="row">
          <div className="col-md-12">
            <div className="my-1">
              <h3>Project Progress</h3>
              <hr />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label>Project Reference No</label>
            <input
              type="text"
              className="form-control"
              placeholder="002"
              value={projectRef}
              disabled
            />
          </div>
          <div className="col-md-4">
            <label>Project Name</label>
            <select
              className="form-control"
              onChange={(e) => handleChangeProject(e)}
              name="category"
              id="category"
              value={projectName} // Bind the state variable to the value prop
            >
              <option value="">Project </option>
              {projectData?.map((category, indexCat) => (
          <option key={indexCat} value={category?._id}>
            {category?.projectName}
          </option>
        ))}
            </select>
          </div>
          <div className="col-md-4">
            <label>Project Package*</label>
            <select
              className="form-control"
              onChange={(e) => handleChangePackage(e)}
              name="category"
              id="category"
              value={projectPack} // Bind the state variable to the value prop
            >
              <option value="">Project Package</option>
              {projectPackData?.map((category, indexCat) => (
          <option key={indexCat} value={category?._id}>
            {category?.name}
          </option>
        ))}
            </select>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <label className="d-block">Reporting Month </label>
            <DatePicker
                selected={projectReportMonth}
                onChange={handleDateChange}
                dateFormat="dd MMMM yyyy"
                className="form-control dateInput"
                placeholderText="Select a date"
                required 
                showIcon
              />
          </div>
          <div className="col-md-4">
            <label>Packages Progress this Month</label>
            <input
              type="text"
              className="form-control"
              placeholder="Packages Progress"
              value={projectProgress}
              onChange={(e) => setProjectProgress(e.target.value)}

            />
          </div>
          <div className="col-md-4">
            <label>Manhour During this Month</label>
            <input
              type="text"
              className="form-control"
              placeholder="Manhour"
              value={projectManhour}
              onChange={(e) => setProjectManhour(e.target.value)}

            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4">
            <label>Reported By</label>
            <input
              type="text"
              className="form-control"
              placeholder="Reported By"
              value={projectReportBy}
              onChange={(e) => setProjectReportBy(e.target.value)}

            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 ">
            <div className="d-flex justify-content-end">
              <button type="btn" className="btn btn-outline-secondary mx-3">
                Cancel
              </button>
              <button type="btn" className="btn btn-outline-secondary mx-3" onClick={handleSubmitSave}>
                Save
              </button>
              <button type="btn" className="btn btn-outline-success" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            {console.log(projectPack,"LLLLLLLLLLLL90")}
            <EnergyComsuption projectId ={projectId} projectPack={projectPack}/>
            <WaterConsumption />
            <ConcereteMix />
            
            <BuildingMaterial  projectId ={projectId} projectPack={projectPack} />
            <WasteManagement projectId ={projectId} projectPack={projectPack} />
            {/* <WasteDirected projectId ={projectId} projectPack={projectPack} />
                   <WasteDiverted /> */}
            <PeopleTransportation />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AddprojectEntry;
