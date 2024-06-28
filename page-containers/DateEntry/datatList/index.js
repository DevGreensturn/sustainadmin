
import React from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { useState,useEffect } from "react";
import { ADMINAPI } from "../../../apiWrapper";
import { Modal, Button, Form , Row, Col} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DataEntryTable =()=>{
    const [row ,setRow] = useState([]);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [pakageData, setPakageData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [dataEntryId, setDataEntryId] = useState("");
    const navigate = useRouter();
    const [projectReportMonth, setProjectReportMonth] = useState("");


    const [formData, setFormData] = useState({
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, "KKKK",value);
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const fetchPackageList = async () => {

        try {
               
          await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/packages`,
                method: "GET",
               
               }).then((data) => {
                 let userData = data.response;
                 setPakageData(userData)
               console.log(userData,"oooooooHHHHHH");
               });
             
           } catch (error) {
             console.log(error, "errorooo");
      
           }
        };
    const handleEdit = async (row) => {
        // Logic to handle editing the row
      
        console.log('Edit row:', row);
        if(row.reportStatus != "Draft"){
toast.warn(`After ${row.reportStatus} You Can't Edit Report.`)
return
        }else{
          setFormData({
          ...formData,
          cumulativeManhour: row?.cumulativeManhour,
          packageCurrentProgress: row?.overallPackagesProgress,
          packagesProgressThisMonth :row?.packagesProgressThisMonth,
          projectPackageId: row?.projectPackageId?.name,
          projectId :row?._id,
        });
        setProjectReportMonth(row?.reportingMonthYear)
          setShowPopup(true)

        }

        // await fetchPackageList();

        // setFormData({
        //   ...formData,
        //   referenceNo: row?.referenceNo,
        //   projectName: row?.projectName,
        //   projectPackageId: row?.projectPackageId?.name,
        //   mainContractor: row?.mainContractor,
        //   topology: row?.topology,
        //   packageCurrentProgress: row?.packageCurrentProgress,
        //   cumulativeManhour: row?.cumulativeManhour,
        //   plotArea: row?.plotArea,
        //   gfa: row?.gfa,
        //   roadLength: row?.roadLength,
        //   infrastructure: row?.infrastructure,
        //   SubscriptionCategory: row?.SubscriptionCategory,
        //   subscriptionTier: row?.subscriptionTier,
        //   SustainabilityRating: row?.SustainabilityRating,
        //   projectId :row?._id
        // });
        console.log("vvvvvv");
        setShowPopup(true)
        // For example, you might open a modal with a form to edit the row's details
    };
    const handleDelete = async(row) => {
        // Logic to handle deleting the row
        console.log('Delete row:', row);
         setDataEntryId(row._id)
        if(row.reportStatus != "Draft"){
          toast.warn(`After ${row.reportStatus} You Can't Delete Report.`)
          return
                  }else{
                    setShowDeleteConfirmation(true)

                  }


        
        // For example, you might show a confirmation dialog before deleting
    };
    const handleClose = () => {
        setShowPopup(false);
      };
    const handleDeleteConfirm = async() => {
            
        try {
     
            await ADMINAPI({
                  url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/monthly-reports/${dataEntryId}`,
                  method: "PATCH",
                 
                 }).then((data) => {
                    if (data.status === true) {
                        setShowDeleteConfirmation(false)
                        handleMonthlyReports();
                      setTimeout(() => {
                        navigate.push("/dataEntry", { scroll: false });
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
    const handleMonthlyReports = async () => {
        try {
         
       await ADMINAPI({
             url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/monthly-reports`,
             method: "GET",
            
            }).then((data) => {
              let userData = data.response;
              setRow(userData)
            console.log(userData,"monthly report");
            });
          
        } catch (error) {
          console.log(error, "new errr")

        }
      };
      function formatDate(readingDate) {
        const date = new Date(readingDate);
        const options = { month: "long", year: "numeric" };
        const formattedDate = date.toLocaleDateString("en-GB", options);
    
        return formattedDate;
      }
    const columns = [
    	
        {
            name: <b>Reporting Month</b>,
            selector: (row) => (row?.reportingMonthYear?formatDate(row?.reportingMonthYear):row?.reportingMonthYear),
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Packages Progress <br />This Month </b>,
            selector: (row) => row?.packagesProgressThisMonth,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b className="text-center">Manhour During <br />This Month</b>,
            selector: (row) => (row?.cumulativeManhour ? row?.cumulativeManhour+" "+"Manhour":row?.cumulativeManhour),
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>Reported By</b>,
            selector: (row) => (row?.reportedBy?.firstName ? row?.reportedBy?.firstName+" "+row?.reportedBy?.lastName:row?.reportedBy),
            wrap:"true",
            sortable: true,
        },
        
        {
            name: <b>Report Status</b>,
            selector: (row) => (
                <div>
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                        {row?.reportStatus}
                    </button>
                </div>
            ),
            wrap:"true",
            sortable: true,
        },

        {
            name: <b>Actions</b>,
            cell: row => (
                <div className="d-flex align-items-center">
                    <FaRegEdit 
                        style={{ color: "secondary", fontSize: "20px", cursor: 'pointer' }} 
                        onClick={() => handleEdit(row)} 
                    />
                    <MdDeleteForever 
                        className="mx-2" 
                        style={{ color: "red", fontSize: "20px", cursor: 'pointer' }} 
                        onClick={() => handleDelete(row)} 
                    />
                </div>
            ),
            wrap: true,
            width: "180px",
            sortable: true,
        },
    ];
    
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
   
    const handleEditData = async (e) => {
      e.preventDefault();
      console.log(formData,"LLLLLL123");
      let payload = formData
      console.log(payload,"LLLLL");
      try {
        await ADMINAPI({
          url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/monthly-reports/${payload.projectId}`,
          method: "put",
          body: { ...payload },
        }).then((data) => {
          console.log(data,"KKKKKKKKKKKK");
          if (data.status === true) {
              setShowPopup(false)
              handleMonthlyReports();
            setTimeout(() => {
              navigate.push("/dataEntry", { scroll: false });
            }, 100);
          } else {
              console.log(data?.message,"rtrttt");
              setShowPopup(false)

            toast.error(data?.message);
          }
        }).catch(err => {
          setShowPopup(false)

          console.log(err,"rtrttt");
          toast.error(err?.message);
        });
      } catch (error) {
          console.log(error,"KKKKK");
        toast.error(error?.message);
      }
    };
      useEffect(() => {
      handleFetchProjectOnly();
        fetchPackageList();
      }, []);
    
      const handleDateChange = (date) => {
        setProjectReportMonth(date);
      };
    useEffect(() => {
        handleMonthlyReports();
      }, []);

      const customStyles ={
        rows:{
            style:{
                minHeight: '72px', // override the row height
            }
        }
    }
    
    return(
        <>
        <section>
        <div className="">
            <div className="row">
                <div className="col-md-12">
                    <div>
                    <DataTable 
                    columns={columns} 
                    data={row} 
                    fixedHeader
                    pagination
                    striped
                    customStyles={customStyles}
                />
                    </div>
                </div>
            </div>
        </div>
        </section>
        
        <Modal
        show={showDeleteConfirmation}
        onHide={() => setShowDeleteConfirmation(false)}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteConfirmation(false)}>
            No
          </Button>
          <Button variant="primary" onClick={handleDeleteConfirm}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
  show={showPopup}
  className=""
  onHide={handleClose}
  centered
  backdrop="static"
  size="xl"
>
  <Modal.Header className="pb-0" closeButton></Modal.Header>
  <Modal.Body className="pt-0">
    <h6 className="text-center">Edit Monthly-Report </h6>
    {console.log(row,"YYY",formData)}
    <Form  className="mt-2 p-2">
      <Form.Group>
        <Row>
        {/* <Col md={6}>
        <label>Project*</label>
            <Form.Control
              as="select"
              name="projectId"
              value={formData.projectIdNew}
              onChange={handleChange}
              className="mb-2"
              required
            >
              {projectData?.map((category, indexCat) => (
                <option key={indexCat} value={category?._id}>
                  {category?.projectName}
                </option>
              ))}
            </Form.Control>
          </Col> */}
          <Col md={6}>
          <label>Package</label>
            <Form.Control
              as="select"
              name="packageId"
              value={formData.packageId}
              onChange={handleChange}
              className="mb-2"
            >
              {pakageData?.map((category, indexCat) => (
                <option key={indexCat} value={category?._id}>
                  {category?.name}
                </option>
              ))}
              </Form.Control>
          </Col>
          <Col md={6}>
          <label>Reporting Month</label>
            <DatePicker
                selected={projectReportMonth}
                onChange={handleDateChange}
                dateFormat="dd MMMM yyyy"
                className="form-control"
                placeholderText="Select a date"
                required
              />
          </Col>
         
        </Row>
        <Row>
          <Col md={6}>
          <label>Packages Progress this Month</label>
            <Form.Control
              type="text"
              name="packagesProgressThisMonth"
              placeholder="Supplier Name"
              value={formData.packagesProgressThisMonth}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
          <Col md={6}>
          <label>Manhour During this Month</label>
            <Form.Control
              type="text"
              name="cumulativeManhour"
              placeholder="Supplier Name"
              value={formData.cumulativeManhour}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
          
        </Row>
       
      </Form.Group>
      <Button type="submit" variant="primary" className="w-100 mt-2" onClick={handleEditData}>Submit</Button>
    </Form>
  </Modal.Body>
</Modal>
<ToastContainer />

        </>
    )
}
export default DataEntryTable;