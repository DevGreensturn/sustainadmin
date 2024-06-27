import Card from "@/components/Card.js";
import { useEffect, useState } from "react";
import ProjectListTable from "./projectList";
import { Modal, Button, Form , Row, Col} from 'react-bootstrap';
import { ADMINAPI } from "../../apiWrapper/";
import { useRouter } from "next/navigation";
import styles from './projectList/styles.module.css'



const SuppliersList = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [row ,setRow] = useState([]);
  const [pakageData, setPakageData] = useState([]);
  const [projectPack, setProjectPack] = useState('');
  const [projectPackNew, setProjectPackNew] = useState('');

  const [error, setError] = useState({});


  const navigate = useRouter();
  const handleChangeProject = (e) =>{
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setProjectPack(selectedValue);
  }

  const handleChangePackageNew = (e) =>{
    e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue, "Selected Value");
    setProjectPackNew(selectedValue);
  }
  const handleFetchProject = async () => {
    try {
     
   await ADMINAPI({
         url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/projects?id=3&page=1`,
         method: "GET",
        
        }).then((data) => {
          let userData = data.response;
          setRow(userData)
        console.log(userData,"oooooooPPPP");
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

  const [formData, setFormData] = useState({
    supplierId: '',
    supplierName: '',
    supplierAddress: '',
    type: '',
    loginType: 'SUPPLIER',
    status: 'ACTIVE',
  });

  const isSpecialChar =(char)=> {
    return /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(char);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target)
    switch (name) {
      case "supplierId":
        if (isNaN(value) || isSpecialChar(value) ) {
          console.log(name)
          let error1= {...error,[name]:"SupplierId should only be a number"}
          setError(error1);
        } else {
          setError('');
          
        }
        break;
        case "supplierName":
          if ((!isNaN(value) && parseInt(value) ) || isSpecialChar(value) ) {
            let error2= {...error,[name]:"SupplierName should only be a string"}
            setError(error2);
          } else {
            let err= {...error}
            err[name]= ""
            setError(err);
            
          }
          break;
          case "supplierAddress":
            if (!/^[a-zA-Z0-9]+$/.test(value) || isSpecialChar(value)) {
              let error3= {...error,[name]:"SupplierAddress should only be alphanumerics"}
              setError(error3);
            }  else {
              let err= {...error}
              err[name]= ""
              setError(err);
              
            }
        break;
        case "type":
          if (!/^[a-zA-Z0-9]+$/.test(value) || isSpecialChar(value)) {
            let error4= {...error,[name]:"Type should only be alphanumerics"}
            setError(error4);
          } else {
            let err= {...error}
            err[name]= ""
            setError(err);
            
          }
      break;



      };
    setFormData({
      ...formData,
      [name]: value
    });
    console.log("error>>>>>>>>>>>>>>>>>>>",error)
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    switch ("") {
      case formData.supplierId:
        let error1= {...error,supplierId:"SupplierId is required"}
        setError(error1);
        break;
      case  formData.supplierName:
        let error2= {...error,supplierName:"Supplier Name  is required"}
        setError(error2);
      break;
      case formData.supplierAddress:
        let error3= {...error,supplierAddress:"SupplierAddress is required"}
        setError(error3);
      break;
      case formData.type:
        let error4= {...error,type:"Type  is required"}
        setError(error4);
      break;
      default:
        let payload ={
          "supplierId": formData.supplierId,//1,
          "name": formData.supplierName ,//"Acme Corporation",
          "address": formData.supplierAddress,//"123 Elm Street",
          "type":formData.type,// "Manufacturer",
          "packageId": formData.selectFieldPackage,//"665486deed3a1b1774f9ae63",
          "projectId": formData.selectFieldProject,//"6655751e60d4032ac67d8b2b",
          "loginType": formData.loginType,//"SUPPLIER",
          "status": formData.status,//"ACTIVE"
        }
          
            try {
                
              await ADMINAPI({
                url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3001/api/v1/suppliers`,
                method: "POST",
                body: { ...payload },
              }).then((data) => {
                setShowPopup(false);
        
                if (data.status == true) {
                  setTimeout(() => {
                    navigate.push("/suppliersList", { scroll: false });
                  }, 100);
                } else {
                  setShowPopup(false);
                  toast.error(data?.message);
                }
              });
            } catch (error) {
              
              console.log(error,"TTTTTT");
            }
    }
    
    console.log(formData);
    
  };

  // const data = [
  //   {
  //     id: 1,
  //     name: "Supplier A",
  //     address: "123 Main St",
  //     date: "2024-04-29",
  //     type: "Type A",
  //     status: "Completed",
  //   },
  //   {
  //     id: 2,
  //     name: "Supplier B",
  //     address: "456 Elm St",
  //     date: "2024-04-30",
  //     type: "Type B",
  //     status: "Processing",
  //   },
  //   {
  //     id: 3,
  //     name: "Supplier C",
  //     address: "789 Oak St",
  //     date: "2024-05-01",
  //     type: "Type C",
  //     status: "Rejected",
  //   },
  //   {
  //     id: 4,
  //     name: "Supplier P",
  //     address: "789 Oak St",
  //     date: "2024-05-01",
  //     type: "Type C",
  //     status: "Completed",
  //   },
  //   {
  //     id: 5,
  //     name: "Supplier Y",
  //     address: "789 Oak St",
  //     date: "2024-05-01",
  //     type: "Type C",
  //     status: "Completed",
  //   },
  //   {
  //     id: 6,
  //     name: "Supplier C",
  //     address: "789 Oak St",
  //     date: "2024-05-01",
  //     type: "Type C",
  //     status: "Completed",
  //   },
  //   {
  //     id: 7,
  //     name: "Supplier F",
  //     address: "789 Oak St",
  //     date: "2024-05-01",
  //     type: "Type C",
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     name: "Supplier A",
  //     address: "123 Main St",
  //     date: "2024-04-29",
  //     type: "Type A",
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     name: "Supplier A",
  //     address: "123 Main St",
  //     date: "2024-04-29",
  //     type: "Type A",
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     name: "Supplier A",
  //     address: "123 Main St",
  //     date: "2024-04-29",
  //     type: "Type A",
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     name: "Supplier A",
  //     address: "123 Main St",
  //     date: "2024-04-29",
  //     type: "Type A",
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     name: "Supplier A",
  //     address: "123 Main St",
  //     date: "2024-04-29",
  //     type: "Type A",
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     name: "Supplier A",
  //     address: "123 Main St",
  //     date: "2024-04-29",
  //     type: "Type A",
  //     status: "Completed",
  //   },
  // ];

  useEffect(() => {
    handleFetchProject();
    fetchPackageList();
      }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
    <section>
      <div className="p-4">
        <div className="row">
          <div className="row my-3">
            <div className="col-md-4">
              <h3>Select Project</h3>
           
            <select
        className="form-select" 
        aria-label="Default select example"
        onChange={(e) => handleChangeProject(e)}
        name="category"
        id="category"
        value={projectPack} 
      >
        <option value="">Project </option>
        {row?.map((category, indexCat) => (
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
        onChange={(e) => handleChangePackageNew(e)}
        name="category"
        id="category"
        value={projectPackNew} 
      >
        <option value="">Project Package</option>
        {pakageData?.map((category, indexCat) => (
          <option key={indexCat} value={category?._id}>
            {category?.name}
          </option>
        ))}
      </select>
            </div>
          </div>
        </div>
        
        <div className="row my-3">
          <div className="col-md-12">
            <div className="d-flex align-items-center justify-content-between">
              <div>
              <h2>Supplier & Subcontractor List</h2>
              </div>
              <div className="d-flex">
                <button type="btn" className="btn btn-outline-success mx-3">Filters</button>
                <button type="btn" className="btn btn-outline-success" onClick={openModel}>Add New</button>
              </div>
            </div>

            </div>
        </div>

        <div className="row my-3">
          <div className="col-md-12">
            <div>
              <ProjectListTable projectId={projectPack} packageId ={projectPackNew} />
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
  
>
  <Modal.Header className="pb-0" closeButton style={{border:"0"}}></Modal.Header>
  <Modal.Body className="pt-0">
    <h6 className="text-center">Add New Supplier</h6>
    <Form onSubmit={handleSubmit} className="mt-4 p-4">
      <Form.Group>
        <Row>
          <Col md={6}>
            <label>Project*</label>
            <Form.Control
              as="select"
              name="selectFieldProject"
              value={formData.selectFieldProject}
              onChange={handleChange}
              className="mb-2"
             
            >
              <option value="">Project</option>
              {row?.map((category, indexCat) => (
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
              name="selectFieldPackage"
              value={formData.selectFieldPackage}
              onChange={handleChange}
              className="mb-2"
            >
              <option value="">Package</option>
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
            

            />
           {error && error.supplierId && <span className={styles["error-message"]}>{error.supplierId}</span>}
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
             

            />
            {error && error.supplierName && <span className={styles["error-message"]}>{error.supplierName}</span>}
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
              

            />
           {error && error.supplierAddress && <span className={styles["error-message"]}>{error.supplierAddress}</span>}
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
        

            />
            {error && error.type && <span className={styles["error-message"]}>{error.type}</span>}
            
          </Col>
        </Row>
      </Form.Group>
      <Button type="submit" variant="primary" className="w-100 mt-2">Submit</Button>
    </Form>
  </Modal.Body>
</Modal>

    </>
  );
};

export default SuppliersList;

