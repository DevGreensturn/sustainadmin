
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
import { useRouter } from "next/navigation";


const ProjectListTable =(projectId,packageId)=>{
    console.log(projectId,"YYY");
    const navigate = useRouter();
    const [row ,setRow] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [supplierId,setSupplierId] = useState("")
    const [showPopup, setShowPopup] = useState(false);
    const [pakageData, setPakageData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [formData, setFormData] = useState({
      supplierId: '',
      supplierName: '',
      supplierAddress: '',
      type: '',
      loginType: 'SUPPLIER',
      status: 'ACTIVE',
      packageEditId :''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, "KKKK",value);
      setFormData({
        ...formData,
        [name]: value
      });
    };
    const handleFetchProjectOnly = async () => {
      
      try {
       
     await ADMINAPI({
           url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/projects?id=3&page=1`,
           method: "GET",
          
          }).then((data) => {
            let userData = data.response;
            setProjectData(userData)
           
          console.log(userData,"ooooooo");
          });
        
      } catch (error) {
        console.log(error, "errorooo");
       

      }
    };
    const handleFetchProject = async () => {
        setIsLoader(true)
        try {
         
       await ADMINAPI({
             url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3001/api/v1/suppliers?projectId=${projectId.projectId}`,
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
      const fetchPackageList = async () => {

        try {
               
          await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/packages`,
                method: "GET",
               
               }).then((data) => {
                 let userData = data.response;
                 setPakageData(userData)
               console.log(userData,"ooooooo");
               });
             
           } catch (error) {
             console.log(error, "errorooo");
      
           }
        };
      const handleClose = () => {
        setShowPopup(false);
      };
      const openModel =  (val) => {
        console.log(val);
        setShowPopup(true)
      };
      
    //   {
    //     "_id": "6666c1178add944435c850da",
    //     "supplierId": 1,
    //     "name": "Acme Corporation",
    //     "address": "123 Elm Street",
    //     "type": "Manufacturer",
    //     "packageId": {
    //         "_id": "665486deed3a1b1774f9ae63",
    //         "name": "Building",
    //         "status": "ACTIVE",
    //         "createdAt": "2024-05-27T13:13:02.261Z",
    //         "updatedAt": "2024-05-27T13:13:02.261Z",
    //         "__v": 0
    //     },

    const columns = [
    	{
            name: <b>ID</b>,
            selector: (row) => row.supplierId,
        },
        {
            name: <b>Supplier Name</b>,
            selector: (row) => row.name,
            wrap:"true"
        },
        {
            name: <b>Address </b>,
            selector: (row) => row.address,
            wrap:"true"
        },
        {
            name: <b>Type</b>,
            selector: (row) => row.type,
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
            width: "180px",
            
        },
    ];
    const handleEdit = async (row) => {
        // Logic to handle editing the row
      
        console.log('Edit row:uuuuuu', row);
        await fetchPackageList();
        await  handleFetchProjectOnly();
        setFormData({
          ...formData,
          supplierId: row?.supplierId,
          supplierName: row?.name,
          supplierAddress: row?.address,
          type: row?.type,
          packageId :row?.packageId?._id,
          projectIdNew :row?.projectId?.projectName,
          projectId :row?.projectId?._id,
          loginType: 'SUPPLIER',
          status: 'ACTIVE',
          supplierIdNew :row?._id,
          packageEditName :row?.packageId?.name

        });
        console.log("vvvvvv");
        setShowPopup(true)
        // For example, you might open a modal with a form to edit the row's details
    };

    const handleDelete = async(row) => {
        // Logic to handle deleting the row
        console.log('Delete row:', row);
        setSupplierId(row._id)
        setShowDeleteConfirmation(true)

        
        // For example, you might show a confirmation dialog before deleting
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData,"LLLLLL123");
      let payload = {
       "supplierId": formData.supplierId,
     "name": formData.supplierName,//"Acme Corporation",
     "address":formData.supplierAddress,// "123 Elm Street",
     "type": formData.type,//"Manufacturer",
     "packageId":formData.packageId,// "665486deed3a1b1774f9ae63",
     "projectId":formData.projectId,// "6655751e60d4032ac67d8b2b",
     "loginType": "SUPPLIER",
     "status": "ACTIVE"

      }
      console.log(payload,"LLLLL");
      try {
        await ADMINAPI({
          url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3001/api/v1/suppliers/${formData.supplierIdNew}`,
          method: "put",
          body: { ...payload },
        }).then((data) => {
          console.log(data,"KKKKKKKKKKKK");
          if (data.status === true) {
              setShowPopup(false)
              handleFetchProject();
            setTimeout(() => {
              navigate.push("/suppliersList", { scroll: false });
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
    const rows = [
        {
            personID: "001",
            project: "AA Energy Limited",
            projectPackage: "089 Kutch Green Apt. 448",
            mainContactor: "Wood Work Subcontractor",
            
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>
        },
         {
            personID: "002",
            project: "Supplier North",
            projectPackage: "979 Immanuel Ferry Suit 526",
            mainContactor: "Steel Supplier",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
         {
            personID: "003",
            project: "Supplier ZX",
            projectPackage: "8587 Farida Ports",
            mainContactor: "MEP Subcontractor",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>     
         },
         {
            personID: "004",
            project: "Supplier CM",
            projectPackage: "768 Destiny Suits 600",
            mainContactor: "Diesel Supplier",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
        
         {
            personID: "005",
            project: "Supplier Camelias",
            projectPackage: "042 Mylene Throughway ",
            mainContactor: "Asphalt",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>    
         },
         {
            personID: "006",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>   
         },
         {
            personID: "007",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>   
         },
         {
            personID: "008",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>  
         },
         {
            personID: "009",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>  
         },
         {
            personID: "010",
            project: "Dubai Road",
            projectPackage: "Main Works",
            mainContactor: "Company G",
            Action :<div className="d-flex align-items-center"><FaRegEdit style={{color:"secondary", fontSize:"20px"}}/>  <MdDeleteForever icon={faTimes} className="mx-2" style={{color:"red", fontSize:"20px"}}/> </div>   
         },
    ];
    const handleDeleteConfirm = async() => {
        try {
            await ADMINAPI({
                  url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3001/api/v1/suppliers/${supplierId}`,
                  method: "PATCH",
                 
                 }).then((data) => {
                    if (data.status === true) {
                        setShowDeleteConfirmation(false)
                        handleFetchProject();
                      setTimeout(() => {
                        navigate.push("/suppliersList", { scroll: false });
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
      }, [projectId.projectId]);

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
    <h6 className="text-center">Edit Supplier </h6>
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
        </>
    )
}
export default ProjectListTable;