
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

const DataEntryTable =()=>{
    const [row ,setRow] = useState([]);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [pakageData, setPakageData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [dataEntryId, setDataEntryId] = useState("");
    const navigate = useRouter();


    const [formData, setFormData] = useState({
        referenceNo: '',
        projectName: '',
        projectPackageId: '',
        mainContractor: '',
        topology: '',
        packageCurrentProgress: '',
        cumulativeManhour: '',
        plotArea: '',
        gfa: '',
        roadLength: '',
        infrastructure: '',
        SubscriptionCategory: '',
        subscriptionTier: '',
        SustainabilityRating: '',
        projectId :''
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
                url: `http://3.108.58.161:3002/api/v1/packages`,
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
                  url: `http://3.108.58.161:3002/api/v1/monthly-reports/${dataEntryId}`,
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
             url: `http://3.108.58.161:3002/api/v1/monthly-reports`,
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
    const columns = [
    	
        {
            name: <b>Reporting Month</b>,
            selector: (row) => row?.reportingMonthYear,
            wrap:"true"
        },
        {
            name: <b className="text-center">Packages Progress <br />This Month </b>,
            selector: (row) => row?.packagesProgressThisMonth,
            wrap:"true"
        },
        {
            name: <b className="text-center">Manhour During <br />This Month</b>,
            selector: (row) => (row?.cumulativeManhour ? row?.cumulativeManhour+" "+"Manhour":row?.cumulativeManhour),
            wrap:"true"
        },
        {
            name: <b>Reported By</b>,
            selector: (row) => (row?.reportedBy?.firstName ? row?.reportedBy?.firstName+" "+row?.reportedBy?.lastName:row?.reportedBy),
            wrap:"true"
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
            wrap:"true"
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
            width: "180px"
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
           url: `http://3.108.58.161:3002/api/v1/projects?id=3&page=1`,
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
   
      
      useEffect(() => {
      handleFetchProjectOnly();
        fetchPackageList();
      }, []);
    
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData,"LLLLLL123");
        let payload = formData
        console.log(payload,"LLLLL");
        try {
          await ADMINAPI({
            url: `http://3.108.58.161:3002/api/v1/projects/${payload.projectId}`,
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
        handleMonthlyReports();
      }, []);
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
    <Form onSubmit={handleSubmit} className="mt-2 p-2">
      <Form.Group>
        <Row>
        <Col md={6}>
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
          </Col>
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
        
        </Row>
        <Row>
          <Col md={6}>
          <label>Supplier Id</label>
            <Form.Control
              type="text"
              name="supplierId"
              placeholder="Supplier Id"
              value={formData.supplierId}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
          <Col md={6}>
          <label>Supplier Name</label>
            <Form.Control
              type="text"
              name="supplierName"
              placeholder="Supplier Name"
              value={formData.supplierName}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          <label>Supplier Address</label>
            <Form.Control
              type="text"
              name="supplierAddress"
              placeholder="Supplier Address"
              value={formData.supplierAddress}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
          <Col md={6}>
          <label>Type</label>
            <Form.Control
              type="text"
              name="type"
              placeholder="Type"
              value={formData.type}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
         
        </Row>
      
      </Form.Group>
      <Button type="submit" variant="primary" className="w-100 mt-2">Submit</Button>
    </Form>
  </Modal.Body>
</Modal>
<ToastContainer />

        </>
    )
}
export default DataEntryTable;