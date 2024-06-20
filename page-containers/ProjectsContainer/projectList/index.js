
import React from "react";
import DataTable from "react-data-table-component";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState,useEffect } from "react";
import { ADMINAPI } from "../../../apiWrapper";
import {Loader} from "../../../comman/loader";
import { Modal, Button, Form , Row, Col} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";


const ProjectListTable =()=>{
    const [row ,setRow] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
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
        projectId :'',
        projectPackageName: ''
      });
      const [pakageData, setPakageData] = useState([]);
      const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
      const [projectId,setProjectId] = useState("")


      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, "KKKK",value);
        setFormData({
          ...formData,
          [name]: value
        });
      };
    const handleClose = () => {
        setShowPopup(false);
      };
      const openModel =  (val) => {
        console.log(val);
        setShowPopup(true)
      };

    const handleFetchProject = async () => {
        setIsLoader(true)
        try {
         
       await ADMINAPI({
             url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/projects?id=3&page=1`,
             method: "GET",
            
            }).then((data) => {
              let userData = data.response;
              setRow(userData)
              setIsLoader(false)
            console.log(userData,"ooooooo");
            });
          
        } catch (error) {
          console.log(error, "errorooo");
          setIsLoader(false)

        }
      };
    
    const columns = [
    	{
            name: <b>Project Reference Number</b>,
            selector: (row) => row.referenceNo,
        },
        {
            name: <b>Project</b>,
            selector: (row) => row.projectName,
            wrap:"true"
        },
        {
            name: <b>Project Package</b>,
            selector: (row) => row.projectPackageId?.name,
            wrap:"true"
        },
        {
            name: <b>Main Contractor</b>,
            selector: (row) => row.mainContractor,
            wrap:"true"
        },
        {
            name: <b>Package Typology</b>,
            selector: (row) => row.topology,
            wrap:"true"
        },
        {
            name: <b>Package Current Progress</b>,
            selector: (row) => (row.packageCurrentProgress?row.packageCurrentProgress+" "+"%":row.packageCurrentProgress),
            wrap:"true"
        },

        {
            name: <b>Cumulative Manhour</b>,
            selector: (row) => row.cumulativeManhour,
            wrap:"true"
        },
        {
            name: <b>Plot Area (m2)</b>,
            selector: (row) => row.plotArea,
            wrap:"true"
        },
        {
            name: <b>GFA (m2)</b>,
            selector: (row) => row.gfa,
            wrap:"true"
        },
        {
            name: <b>Road Length (km)</b>,
            selector: (row) => row.roadLength,
            wrap:"true"
        },
        {
            name: <b>Infrastructure (Ha)</b>,
            selector: (row) => row.infrastructure,
            wrap:"true"
        },
        {
            name: <b>Subscription Category</b>,
            selector: (row) => row.SubscriptionCategory,
            wrap:"true"
        },
        {
            name: <b>Subscription Tier</b>,
            selector: (row) => row.subscriptionTier,
            wrap:"true"
        },
        {
            name: <b>Action</b>,
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
    
    const handleEdit = async (row) => {
        // Logic to handle editing the row
      
        console.log('Edit row:', row);
        await fetchPackageList();

        setFormData({
          ...formData,
          referenceNo: row?.referenceNo,
          projectName: row?.projectName,
          projectPackageId: row?.projectPackageId?._id,
          mainContractor: row?.mainContractor,
          topology: row?.topology,
          packageCurrentProgress: row?.packageCurrentProgress,
          cumulativeManhour: row?.cumulativeManhour,
          plotArea: row?.plotArea,
          gfa: row?.gfa,
          roadLength: row?.roadLength,
          infrastructure: row?.infrastructure,
          SubscriptionCategory: row?.SubscriptionCategory,
          subscriptionTier: row?.subscriptionTier,
          SustainabilityRating: row?.SustainabilityRating,
          projectId :row?._id,
          projectPackageName :row?.projectPackageId?.name,
        });
        console.log("vvvvvv");
        setShowPopup(true)
        // For example, you might open a modal with a form to edit the row's details
    };

    const handleDelete = async(row) => {
        // Logic to handle deleting the row
        console.log('Delete row:', row);
        setProjectId(row._id)
        setShowDeleteConfirmation(true)

        
        // For example, you might show a confirmation dialog before deleting
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData,"LLLLLL123");
        let payload = formData
        console.log(payload,"LLLLL");
        try {
          await ADMINAPI({
            url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/projects/${payload.projectId}`,
            method: "put",
            body: { ...payload },
          }).then((data) => {
            console.log(data,"KKKKKKKKKKKK");
            if (data.status === true) {
                setShowPopup(false)
                handleFetchProject();
              setTimeout(() => {
                navigate.push("/projects", { scroll: false });
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
        let tiers = ["Building Tiers",
            " 20,000 sqm",
            " 20,000 to 50,000 sqm",
             "more than 50,000 sqm"];
         
           let subscriptionCatagorgryValue = ["Building","Road","Infrastructure"];
           let roadTier = ["8 km","8 to 20 km","more than 20 km"];
           let infrastructureValue = ["100 Ha","100 to 250 Ha","more than 250 Ha"]
         
           const handleShowDeleteConfirmation = () => {
            setShowDeleteConfirmation(true);
          };
          const handleDeleteConfirm = async() => {
            
            try {
         
                await ADMINAPI({
                      url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/projects/${projectId}`,
                      method: "PATCH",
                     
                     }).then((data) => {
                        if (data.status === true) {
                            setShowDeleteConfirmation(false)
                            handleFetchProject();
                          setTimeout(() => {
                            navigate.push("/projects", { scroll: false });
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
                   setIsLoader(false)
         
                 }
          };
   
    useEffect(() => {
        handleFetchProject();
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
  show={showPopup}
  className=""
  onHide={handleClose}
  centered
  backdrop="static"
  size="xl"
>
  <Modal.Header className="pb-0" closeButton></Modal.Header>
  <Modal.Body className="pt-0">
    <h6 className="text-center">Edit Project </h6>
    {console.log(pakageData,"YYY")}
    <Form onSubmit={handleSubmit} className="mt-2 p-2">
      <Form.Group>
        <Row>
        <Col md={4}>
            <label>Project Name</label>
            <Form.Control
              type="text"
              name="projectName"
              placeholder="Supplier Id"
              value={formData.projectName}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
          <Col md={4}>
            <label>Project Reference No*</label>
            <Form.Control
              type="text"
              name="referenceNo"
              placeholder="Project Reference No"
              value={formData.referenceNo}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
          <Col md={4}>
            <label>Project Package*</label>
            
            <Form.Control
              as="select"
              name="projectPackageId"
              value={formData.projectPackageName}
              onChange={handleChange}
              className="mb-2"
              required
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
          <Col md={4}>
            <label>Package Current Progress*</label>
            <Form.Control
              type="text"
              name="packageCurrentProgress"
              placeholder="Package Current Progress"
              value={formData.packageCurrentProgress}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
          <Col md={4}>
            <label>Cumulative Man hour*</label>
            <Form.Control
              type="text"
              name="cumulativeManhour"
              placeholder="Cumulative Man hour"
              value={formData.cumulativeManhour}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
          <Col md={4}>
            <label>Plot Area(m2)*</label>
            <Form.Control
              type="text"
              name="plotArea"
              placeholder="Plot Area(m2)"
              value={formData.plotArea}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <label>GFA(m2)*</label>
            <Form.Control
              type="text"
              name="gfa"
              placeholder="GFA(m2)"
              value={formData.gfa}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
          <Col md={4}>
            <label>Road Length(km)*</label>
            <Form.Control
              as="select"
              name="roadLength"
              value={formData.roadLength}
              onChange={handleChange}
              className="mb-2"
              required
            >
                {roadTier.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
            </Form.Control>
          </Col>
          <Col md={4}>
            <label>Infrastructure(Ha)*</label>
            <Form.Control
              as="select"
              name="infrastructure"
              value={formData.infrastructure}
              onChange={handleChange}
              className="mb-2"
              required
            >
                {infrastructureValue.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <label>Subscription Category*</label>
            <Form.Control
              as="select"
              name="SubscriptionCategory"
              value={formData.SubscriptionCategory}
              onChange={handleChange}
              className="mb-2"
              required
            >
                {subscriptionCatagorgryValue.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
            </Form.Control>
          </Col>
          <Col md={4}>
            <label>Subscription Tier*</label>
            <Form.Control
              as="select"
              name="subscriptionTier"
              value={formData.subscriptionTier}
              onChange={handleChange}
              className="mb-2"
              required
            >
                {tiers.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
            </Form.Control>
          </Col>
          <Col md={4}>
            <label>Sustainability Rating*</label>
            <Form.Control
              type="text"
              name="SustainabilityRating"
              placeholder="Sustainability Rating"
              value={formData.SustainabilityRating}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <label>Main Contractor*</label>
            <Form.Control
              type="text"
              name="mainContractor"
              placeholder="Main Contractor"
              value={formData.mainContractor}
              onChange={handleChange}
              className="mb-2"
              required

            />
          </Col>
          <Col md={4}>
            <label>Package Typology*</label>
            <Form.Control
              type="text"
              name="topology"
              placeholder="Package Typology"
              value={formData.topology}
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
        </>
    )
}
export default ProjectListTable;





