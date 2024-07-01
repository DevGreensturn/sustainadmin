
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
import styles from '../../AddProject/style.module.css'


const ProjectListTable =()=>{
    const [row ,setRow] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useRouter();
    const [error, setError] = useState({})
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


      const isSpecialChar =(char)=> {
        return /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(char);
      }

      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, "KKKK",value,pakageData);
        // if(name==="projectPackageId"){
        //   let selectedPackage= pakageData.find((ele)=> {
        //     ele._id===value
        //   })

        // }
        setFormData({
        ...formData,
        [name]: value
      });
      console.log("form data????????????",formData)
        switch (name) {
          case "projectName":
            if ((!isNaN(value) && parseInt(value) ) || isSpecialChar(value) ) {
              let error1= {...error,projectName:"Project Name should be characters."}
              console.log("error1111111111")
              setError(error1);
              // setProjectName(value);
            } else {
              setError('');
              // setProjectName(value);
            }
            break;
            case "referenceNo":
            if (isNaN(value) || isSpecialChar(value) ) {
              let error1= {...error,referenceNo:"Project Reference No should be number."}
              setError(error1);
              // setProjectName(value);
            } else {
              setError('');
              // setProjectName(value);
            }
            break;
            case "projectPackageId":
            e.preventDefault();
            const selection1 = e.target.value;
            console.log(selection1, "Selected Value");
            if(selection1!==""){
              let err = {...error}
              err.projectPackageId=""
              setError(err)
            }
          break;
          case "packageCurrentProgress":
          if (isNaN(value) || isSpecialChar(value)) {
            let error1= {...error,packageCurrentProgress:"Package Current Progress* should be number."}
            console.log("error3333333")
            setError(error1);
            // setPackageProgress(value);
          } else {
            setError('');
            // setPackageProgress(value);
          }
          break;
          case "cumulativeManhour":
          if (isNaN(value) || isSpecialChar(value)) {
            let error1= {...error,cumulativeManhour:"Cumulative Man hour* should be number."}
            setError(error1);
            // setCumulative(value);
          } else {
            setError('');
            // setCumulative(value);
          }
          break;
          case "plotArea":
          if (isNaN(value) || isSpecialChar(value)) {
            let error1= {...error,plotArea:"Plot Area(m2)* should be number."}
            setError(error1);
            // setPlot(value);
          } else {
            setError('');
            // setPlot(value);
          }
          break;
          case "gfa":
          if (isNaN(value) || isSpecialChar(value)) {
            let error1= {...error,gfa:"GFA(m2)* should be number."}
            setError(error1);
            // setGfa(value);
          } else {
            setError('');
            // setGfa(value);
          }
          break;
          case "roadLength":
            e.preventDefault();
            const selected = e.target.value;
            console.log(selected, "Selected Value");
            if(selected!==""){
              let err = {...error}
              err.roadLength=""
              setError(err)
            }
          break;
          case "infrastructure":
            e.preventDefault();
            const selectedValue = e.target.value;
            console.log(selectedValue, "Selected Value");
            if(selectedValue!==""){
              let err = {...error}
              err.infrastructure=""
              setError(err)
            }
          break;
          case "SubscriptionCatagory":
            e.preventDefault();
            const select = e.target.value;
            console.log(select, "Selected Value");
            if(select!==""){
              let err = {...error}
              err.SubscriptionCatagory=""
              setError(err)
            }
          case "subscriptionTier":
            e.preventDefault();
            const selection = e.target.value;
            console.log(selection, "Selected Value");
            if(selection!==""){
              let err = {...error}
              err.subscriptionTier=""
              setError(err)
            }
          break;
          case "SustainabilityRating":
          if (isNaN(value) || isSpecialChar(value)) {
            let error1= {...error,SustainabilityRating:"Sustainability Rating* should be number."}
            setError(error1);
            // setSubscriptionRating(value);
          } else {
            setError('');
            // setSubscriptionRating(value);
          }
          break;
          case "mainContractor":
          if ((!isNaN(value) && parseInt(value) ) || isSpecialChar(value) ) {
            let error1= {...error,mainContractor:"Main Contractor* should be characters."}
            setError(error1);
            // setContacator(value);
          } else {
            setError('');
            // setContacator(value);
          }
          break;
          case "topology":
          if ((!isNaN(value) && parseInt(value) ) || isSpecialChar(value) ) {
            let error1= {...error,topology:"Package Typology* should be characters."}
            setError(error1);
            // setPackageTopo(value);
          } else {
            setError('');
            // setPackageTopo(value);
          }
          break;  
            default:
              break;
        
      }
      
      console.log("error",error )
      
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
             width:"150px",
             sortable: true,
        },
        {
            name: <b>Project</b>,
            selector: (row) => row.projectName,
            width:"150px",
            sortable: true,
        },
        {
            name: <b>Project Package</b>,
            selector: (row) => row.projectPackageId?.name,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>Main Contractor</b>,
            selector: (row) => row.mainContractor,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>Package Typology</b>,
            selector: (row) => row.topology,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>Package Current Progress</b>,
            selector: (row) => (row.packageCurrentProgress?row.packageCurrentProgress+" "+"%":row.packageCurrentProgress),
            wrap:"true",
            width:"150px",
            sortable: true,
        },

        {
            name: <b>Cumulative Manhour</b>,
            selector: (row) => row.cumulativeManhour,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>Plot Area (m2)</b>,
            selector: (row) => row.plotArea,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>GFA (m2)</b>,
            selector: (row) => row.gfa,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>Road Length (km)</b>,
            selector: (row) => row.roadLength,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>Infrastructure (Ha)</b>,
            selector: (row) => row.infrastructure,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>Subscription Category</b>,
            selector: (row) => row.SubscriptionCategory,
            wrap:"true",
            sortable: true,
        },
        {
            name: <b>Subscription Tier</b>,
            selector: (row) => row.subscriptionTier,
            wrap:"true",
            sortable: true,
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
            sortable: true,
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
        switch(""){
          case formData.projectName:
            let error1= {...error,projectName:"Project name is required"}
            setError(error1);
            break;
            case formData.referenceNo:
              let error2= {...error,referenceNo:"Project reference is required"}
              setError(error2);
              break;
            case formData.projectPackageId:
              let error3= {...error,projectPackageId:"Please select a project package"}
              setError(error3);
              break;
            case formData.packageCurrentProgress:
              let error4= {...error,packageCurrentProgress:"Package Current Progress is required*"}
              setError(error4);
              break;     
            case formData.cumulativeManhour:
              let error5= {...error,cumulativeManhour:"Cumulative Manhour is required*"}
              setError(error5);
              break;     
            case formData.plotArea:
              let error6= {...error,plotArea:"plotArea is required*"}
              setError(error6);
              break;     
            case formData.gfa:
              let error7= {...error,gfa:"GFA is required*"}
              setError(error7);
              break;     
            case formData.roadLength:
              let error8= {...error, roadLength:"Road Length(km) is required*"}
              setError(error8);
              break;     
            case formData.infrastructure:
              let error9= {...error, infrastructure:"Infrastructure is required*"}
              setError(error9);
              break;     
            case formData.SubscriptionCategory:
              console.log("fghjk");
              let error10= {...error, SubscriptionCatagory:"Subscription Category is required*"}
              console.log("fghjk",error10);
              setError(error10);
              break;     
            case formData.subscriptionTier:
              console.log("fghjk");
              let error11= {...error, subscriptionTier:"Subscription Tier is required*"}
              console.log("fghjk",error11);
              setError(error11);
              break;     
            case formData.SustainabilityRating:
              console.log("fghjk");
              let error12= {...error, SustainabilityRating:"Sustainability Rating is required*"}
              console.log("fghjk",error12);
              setError(error12);
              break;     
            case formData.mainContractor:
              console.log("fghjk");
              let error13= {...error, mainContractor:"Main Contractor is required*"}
              console.log("fghjk",error13);
              setError(error13);
              break;     
            case formData.topology:
              console.log("fghjk");
              let error14= {...error, topology:"Package Typology is required*"}
              console.log("fghjk",error14);
              setError(error14);
              break;     
          default:
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

              // toast.error(data?.message);
            }
          }).catch(err => {
            setShowPopup(false)

            console.log(err,"rtrttt");
            // toast.error(err?.message);
          });
        } catch (error) {
            console.log(error,"KKKKK");
          // toast.error(error?.message);
        }
      };
        }





      //   let payload = formData
      //   console.log(payload,"LLLLL");
      //   try {
      //     await ADMINAPI({
      //       url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/projects/${payload.projectId}`,
      //       method: "put",
      //       body: { ...payload },
      //     }).then((data) => {
      //       console.log(data,"KKKKKKKKKKKK");
      //       if (data.status === true) {
      //           setShowPopup(false)
      //           handleFetchProject();
      //         setTimeout(() => {
      //           navigate.push("/projects", { scroll: false });
      //         }, 100);
      //       } else {
      //           console.log(data?.message,"rtrttt");
      //           setShowPopup(false)

      //         toast.error(data?.message);
      //       }
      //     }).catch(err => {
      //       setShowPopup(false)

      //       console.log(err,"rtrttt");
      //       toast.error(err?.message);
      //     });
      //   } catch (error) {
      //       console.log(error,"KKKKK");
      //     toast.error(error?.message);
      //   }
      // };
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
           let roadTier = ["8 km", "8-20 km", "more than 20 km"];
           let infrastructureValue = ["100 Ha", "100-250 Ha", "more than 250 Ha"]
         
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
            
                          // toast.error(data?.message);
                        }
                     }).catch(err =>{
                        setShowDeleteConfirmation(false)
    
                console.log(err,"rtrttt");
                // toast.error(err?.message);
                     })
                   
                 } catch (error) {
                   console.log(error, "errorooo");
                   setIsLoader(false)
         
                 }
          };
   
    useEffect(() => {
        handleFetchProject();
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
                    scroll
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
  <Modal.Header className="my-3" closeButton style={{border:"0"}}>
    <Modal.Title>Edit Project</Modal.Title>
  </Modal.Header>
  <Modal.Body className="pt-0">
    {/* <h6 className="text-center">Edit Project </h6> */}
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
            />
     {error && error.projectName && <p className={styles.errorMessage}>{error.projectName}</p>}
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
              />
              {error && error.referenceNo && <p className={styles.errorMessage}>{error.referenceNo}</p>}
          </Col>
          <Col md={4}>
            <label>Project Package*</label>
            
            <Form.Control
              as="select"
              name="projectPackageId"
              value={formData.projectPackageId}
              onChange={handleChange}
              className="mb-2"
            >
              <option value="">Please select Project Package</option>
              {pakageData?.map((category, indexCat) => (
                <option key={indexCat} value={category?._id}>
                  {category?.name}
                </option>
              ))}
            </Form.Control>
            {error && error.projectPackageId && <p className={styles.errorMessage}>{error.projectPackageId}</p>}
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
            />
          {error && error.packageCurrentProgress && <p className={styles.errorMessage}>{error.packageCurrentProgress}</p>}

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
            />
              {error && error.cumulativeManhour && <p className={styles.errorMessage}>{error.cumulativeManhour}</p>}      

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
            />
                  {error && error.plotArea && <p className={styles.errorMessage}>{error.plotArea}</p>}

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
             />
                     {error && error.gfa && <p className={styles.errorMessage}>{error.gfa}</p>}

          </Col>
          <Col md={4}>
            <label>Road Length(km)*</label>
            <Form.Control
              as="select"
              name="roadLength"
              value={formData.roadLength}
              onChange={handleChange}
              className="mb-2"
            >
              <option value={""}>Please select Road Length(km)</option>
                {roadTier.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
            </Form.Control>
            {error && error.roadLength && <p className={styles.errorMessage}>{error.roadLength}</p>}

          </Col>
          <Col md={4}>
            <label>Infrastructure(Ha)*</label>
            <Form.Control
              as="select"
              name="infrastructure"
              value={formData.infrastructure}
              onChange={handleChange}
              className="mb-2"
            >
              <option value="">Please select Infrastructure(Ha)</option>
                {infrastructureValue.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
            </Form.Control>
            {error && error.infrastructure && <p className={styles.errorMessage}>{error.infrastructure}</p>}

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
            >
              <option value="">Please select Subscription Category </option>
                {subscriptionCatagorgryValue.map((category, indexCat) => (
                  <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
            </Form.Control>
            {error && error.SubscriptionCategory && <p className={styles.errorMessage}>{error.SubscriptionCategory}</p>}

          </Col>
          <Col md={4}>
            <label>Subscription Tier*</label>
            <Form.Control
              as="select"
              name="subscriptionTier"
              value={formData.subscriptionTier}
              onChange={handleChange}
              className="mb-2"
              >
        <option value="">Please selectSubscription Tier*</option>
                {tiers.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
            </Form.Control>
            {error && error.subscriptionTier && <p className={styles.errorMessage}>{error.subscriptionTier}</p>}

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
               />
                       {error && error.SustainabilityRating && <p className={styles.errorMessage}>{error.SustainabilityRating}</p>}

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
            />
                    {error && error.mainContractor && <p className={styles.errorMessage}>{error.mainContractor}</p>}

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
            />
          {error && error.topology && <p className={styles.errorMessage}>{error.topology}</p>}
          </Col>

        </Row>
      </Form.Group>
      <hr/>
      <div className="text-end">
      <button type="submit" className="btn btn-success mt-3 text-end">Submit</button>
      </div>
      {/* <Button type="submit" variant="primary" className="w-100 mt-2">Submit</Button> */}
    </Form>
  </Modal.Body>
</Modal>
<Modal
        show={showDeleteConfirmation}
        onHide={() => setShowDeleteConfirmation(false)}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton style={{border:"0"}}>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete?</p>
        </Modal.Body>

        <Modal.Footer style={{border:"0"}} className="text-end">
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





