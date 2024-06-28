import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ADMINAPI } from '../../apiWrapper';
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { color } from 'chart.js/helpers';
import styles from './style.module.css'


export default function AddProject() {
    // <th>Project Reference No.</th>
    // <th>Project Package</th>
    // <th>Package Typology</th>
    // <th>Package Current Progress</th>
    // <th>Cumulative Manhour</th>
    // <th>Plot Area(m2)</th>
    // <th>GFA(m2)</th>
    // <th>Road Length(km)</th>
    // <th>Infrastructure(Ha)</th>
    // <th>Subscription Category</th>
    // <th>Subscription Tier</th>
    const navigate = useRouter();
    const [pakageData, setPakageData] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [projectRef, setProjectRef] = useState('');
    const [projectPack, setProjectPack] = useState('');
    const [packageTopo, setPackageTopo] = useState('');
    const [packageProgress, setPackageProgress] = useState('');
    const [cumulative,setCumulative] =  useState('');
    const [plot,setPlot] =  useState('');
    const [gfa,setGfa] =  useState('');
    const [Road,setRoad] =  useState('');
    const [infrastructure,setInfrastructure] =  useState('');
    const [subscriptionCatagory,setSubscriptionCatagory] =  useState('');
    const [subscriptionTier,setSubscriptionTier] =  useState('');
    const [subscriptionRating,setSubscriptionRating] =  useState('');
    const [contractor,setContacator] =  useState('');
    const [projectPackId, setProjectPackId] = useState('');
    const [projectCatagory, setProjectCatagory] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState({});
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      switch ("") {
        case projectName:
          let error1= {...error,projectName:"Project name is required"}
          setError(error1);
          break;
          case projectRef:
            let error2= {...error,projectRef:"Project reference is required"}
            setError(error2);
            break;
          case projectPack:
            let error10= {...error,projectPack:"Please select project package"}
            setError(error10);
            break;
        case packageProgress:
          let error3= {...error,packageProgress:"Project current progress is required"}
          setError(error3);
        break;
        case cumulative:
          let error4= {...error,cumulative:"Cumulative Man hour is required"}
          setError(error4);
        break;
        case plot:
          let error5= {...error,plot:"Plot Area(m2) is required"}
          setError(error5);
        break;
        case gfa:
          let error6= {...error,gfa:"GFA(m2) is required"}
          setError(error6);
          break;
        case Road:
          let error11= {...error,Road:"Please select Road Length(km)"}
          setError(error11);
          break;
        case infrastructure:
          let error12= {...error,infrastructure:"Please select Infrastructure(Ha)"}
          setError(error12);
          break;
          case subscriptionCatagory:
            let error13= {...error,subscriptionCatagory:"Please select Subscription Category*"}
            setError(error13);
            break; 
        case subscriptionTier:
          let error14= {...error,subscriptionTier:"Please select Subscription Tier*"}
          setError(error14);
          break;
        case subscriptionRating:
          let error7= {...error,subscriptionRating:"Sustainability rating is required"}
          setError(error7);
          break;
        case contractor:
          let error8= {...error,contractor:"Main Contractor field is required"}
          setError(error8);
        break;
        case packageTopo:
          let error9= {...error,packageTopo:"Package topology field is required"}
          setError(error9);
        break;
        default:
          let payload = {
            "referenceNo": projectRef,
            "projectName": projectName,
            "projectPackageId": projectPack,
            "mainContractor": contractor,
            "topology": packageTopo,
            "packageCurrentProgress": packageProgress,
            "cumulativeManhour": cumulative,
            "plotArea": plot, 
            "gfa": gfa,
            "roadLength": Road,
            "infrastructure": infrastructure,
            "SubscriptionCategory": subscriptionCatagory,
            "subscriptionTier": subscriptionTier,
            "SustainabilityRating": subscriptionRating,
          };
          console.log(payload,"LLLLL");
          try {
            await ADMINAPI({
              url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3002/api/v1/projects`,
              method: "POST",
              body: { ...payload },
            }).then((data) => {
              if (data.status === true) {
                setIsSubmitting(true); 
                setTimeout(() => {
                  navigate.push("/projects", { scroll: false });
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
        
          break;
    }    
      };

    const handleChangePackage = (e) =>{
      e.preventDefault();
      const selectedValue = e.target.value;
      console.log(selectedValue, "Selected Value");
      setProjectPack(selectedValue);
      if(selectedValue!==""){
        let err = {...error}
        err.projectPack=""
        setError(err)
      }
    }

    const handleChangeCatagory = (e) =>{
      e.preventDefault();
      const selectedValue = e.target.value;
      console.log(selectedValue, "Selected Value");
      setSubscriptionCatagory(selectedValue);
      if(selectedValue!==""){
        let err = {...error}
        err.subscriptionCatagory=""
        setError(err)
      }
    }
    const handleChangeTier = (e) =>{
      e.preventDefault();
      const selectedValue = e.target.value;
      console.log(selectedValue, "Selected Value");
      setSubscriptionTier(selectedValue);
      if(selectedValue!==""){
        let err = {...error}
        err.subscriptionTier=""
        setError(err)
      }
    }
    const handleChangeRoad = (e) =>{
      e.preventDefault();
      const selectedValue = e.target.value;
      console.log(selectedValue, "Selected Value");
      setRoad(selectedValue);
      if(selectedValue!==""){
        let err = {...error}
        err.Road=""
        setError(err)
      }
    }

    const handleChangeInfrastructure = (e) =>{
      e.preventDefault();
      const selectedValue = e.target.value;
      console.log(selectedValue, "Selected Value");
      setInfrastructure(selectedValue);
      if(selectedValue!==""){
        let err = {...error}
        err.infrastructure=""
        setError(err)
      }
    }
    let categoryList = [
      {
          "_id": "665486deed3a1b1774f9ae63",
          "name": "Building",
          "status": "ACTIVE",
          "createdAt": "2024-05-27T13:13:02.261Z",
          "updatedAt": "2024-05-27T13:13:02.261Z",
          "__v": 0
      },
      {
          "_id": "665486fbed3a1b1774f9ae66",
          "name": "Main Works",
          "status": "ACTIVE",
          "createdAt": "2024-05-27T13:13:31.058Z",
          "updatedAt": "2024-05-27T13:13:31.058Z",
          "__v": 0
      }
  ]

  let tiers = ["Building Tiers",
   " 20,000 sqm",
   " 20,000 to 50,000 sqm",
    "more than 50,000 sqm"];

  let subscriptionCatagorgryValue = ["Building","Road","Infrastructure"];
  let roadTier = ["8 km", "8-20 km", "more than 20 km"];
  let infrastructureValue = ["100 Ha", "100-250 Ha", "more than 250 Ha"]

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
  
  useEffect(() => {
    fetchPackageList();
  }, []);

  

  const isSpecialChar =(char)=> {
    return /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(char);
  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    console.log(value,isNaN(value), isSpecialChar(value), parseInt(value),parseInt(value) !== NaN)
    switch (name) {
      case "projectName":
        if ((!isNaN(value) && parseInt(value) ) || isSpecialChar(value) ) {
          let error1= {...error,projectName:"Project Name should be characters."}
          setError(error1);
          setProjectName(value);
        } else {
          setError('');
          setProjectName(value);
        }
        break;
        case "projectRef":
          if (isNaN(value) || isSpecialChar(value) ) {
            let error1= {...error,projectRef:"Project reference number should be number."}
            setError(error1);
            setProjectRef(value);
          } else {
            setError('');
            setProjectRef(value);
          }
          break;
          case "packageProgress":
          if (isNaN(value) || isSpecialChar(value)) {
            let error1= {...error,packageProgress:"Package Current Progress* should be number."}
            setError(error1);
            setPackageProgress(value);
          } else {
            setError('');
            setPackageProgress(value);
          }
          break;
          case "cumulative":
          if (isNaN(value) || isSpecialChar(value)) {
            let error1= {...error,cumulative:"Cumulative Man hour* should be number."}
            setError(error1);
            setCumulative(value);
          } else {
            setError('');
            setCumulative(value);
          }
          break;
          case "plot":
          if (isNaN(value) || isSpecialChar(value)) {
            let error1= {...error,plot:"Plot Area(m2)* should be number."}
            setError(error1);
            setPlot(value);
          } else {
            setError('');
            setPlot(value);
          }
          break;
          case "gfa":
          if (isNaN(value) || isSpecialChar(value)) {
            let error1= {...error,gfa:"GFA(m2)* should be number."}
            setError(error1);
            setGfa(value);
          } else {
            setError('');
            setGfa(value);
          }
          break;
          case "subscriptionRating":
          if (isNaN(value) || isSpecialChar(value)) {
            let error1= {...error,subscriptionRating:"Sustainability Rating* should be number."}
            setError(error1);
            setSubscriptionRating(value);
          } else {
            setError('');
            setSubscriptionRating(value);
          }
          break;
          case "contractor":
          if ((!isNaN(value) && parseInt(value) ) || isSpecialChar(value) ) {
            let error1= {...error,contractor:"Main Contractor* should be characters."}
            setError(error1);
            setContacator(value);
          } else {
            setError('');
            setContacator(value);
          }
          break;
          case "packageTopo":
          if ((!isNaN(value) && parseInt(value) ) || isSpecialChar(value) ) {
            let error1= {...error,packageTopo:"Package Typology* should be characters."}
            setError(error1);
            setPackageTopo(value);
          } else {
            setError('');
            setPackageTopo(value);
          }
          break;
      default:
        break;
    }
  };


  return (
    <div >
        <div style={{ textAlign: "center" }} className='my-3'>
    <h1>Add Project Details</h1>
</div>
<ToastContainer/>
  <form onSubmit={handleSubmit} className=" mt-4 p-4" > 
  <div className="row my-3">
  <div className="col-md-4">
    <label>Project Name</label>
        <input
        type="text"
        className="form-control"
        placeholder="Project Name"
        value={projectName}
        name="projectName"
        onChange={handleChange}
      />
     {error && error.projectName && <p className={styles.errorMessage}>{error.projectName}</p>}
      
    </div>
    <div className="col-md-4">
    <label>Project Reference No*</label>
      <input
        type="text"
        className="form-control"
        placeholder="Project Reference No"
        value={projectRef}
        name='projectRef'
        onChange={handleChange}
      />
      {error && error.projectRef && <p className={styles.errorMessage}>{error.projectRef}</p>}
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
        <option value="">Please select a value</option>
        {pakageData?.map((category, indexCat) => (
          <option key={indexCat} value={category?._id}>
            {category?.name}
          </option>
        ))}
      </select>
      {error && error.projectPack && <p className={styles.errorMessage}>{error.projectPack}</p>}
    </div>
   
  </div>
  <div className="row my-3">
    <div className="col-md-4">
    <label>Package Current Progress*</label>
      <input
        type="text"
        className="form-control"
        name='packageProgress'
        placeholder="Package Current Progress"
        value={packageProgress}
        onChange={handleChange}
      />
      {error && error.packageProgress && <p className={styles.errorMessage}>{error.packageProgress}</p>}

    </div>
    <div className="col-md-4">
    <label>Cumulative Man hour*</label>
      <input
        type="text"
        className="form-control"
        placeholder="Cumulative Man hour"
        name='cumulative'
        value={cumulative}
        onChange={handleChange}
      />
        {error && error.cumulative && <p className={styles.errorMessage}>{error.cumulative}</p>}

    </div>
    <div className="col-md-4">
    <label>Plot Area(m2)*</label>
      <input
        type="text"
        className="form-control"
        placeholder="Plot Area(m2)"
        name='plot'
        value={plot}
        onChange={handleChange}
      />
      {error && error.plot && <p className={styles.errorMessage}>{error.plot}</p>}
    </div>
  </div>
  <div className="row my-3">
    <div className="col-md-4">
    <label>GFA(m2)*</label>
      <input
        type="text"
        className="form-control"
        placeholder="GFA(m2)"
        name='gfa'
        value={gfa}
        onChange={handleChange}
        />
        {error && error.gfa && <p className={styles.errorMessage}>{error.gfa}</p>}

    </div>
    <div className="col-md-4">
      <label>Road Length(km)*</label>
      <select
        className="form-control"
        onChange={handleChangeRoad}
        name="Road Length(km)"
        id="Road Length(km)"
        value={Road} // Bind the state variable to the value prop
        >
          <option value="">Please select a value</option>
        {roadTier.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
      </select>
      {error && error.Road && <p className={styles.errorMessage}>{error.Road}</p>}
    </div>
      <div className="col-md-4">
      <label>Infrastructure(Ha)*</label>
      <select
        className="form-control"
        onChange={handleChangeInfrastructure}
        name="Infrastructure(Ha)"
        id="Infrastructure(Ha)"
        value={infrastructure} // Bind the state variable to the value prop
        >
          <option value="">Please select a value</option>
        {infrastructureValue.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
      </select>
        {error && error.infrastructure && <p className={styles.errorMessage}>{error.infrastructure}</p>}
    </div>
   
  </div>
  <div className="row mb-3">
  <div className="col-md-4">
      <label>Subscription Category*</label>
      <select
        className="form-control"
        onChange={handleChangeCatagory}
        name="Subscription Category"
        id="Subscription Category"
        value={subscriptionCatagory} // Bind the state variable to the value prop
        >
          <option value="">Please select a value</option>
        {subscriptionCatagorgryValue.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
      </select>
        {error && error.subscriptionCatagory && <p className={styles.errorMessage}>{error.subscriptionCatagory}</p>}
    </div>
    <div className="col-md-4">
      <label>Subscription Tier*</label>
      <select
        className="form-control"
        onChange={handleChangeTier}
        name="Subscription Tier"
        id="Subscription Tier"
        value={subscriptionTier} // Bind the state variable to the value prop
        >
       <option value="">Please select a value</option>
        {tiers.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
      </select>
      {error && error.subscriptionTier && <p className={styles.errorMessage}>{error.subscriptionTier}</p>}
    </div>
    <div className="col-md-4">
    <label>Sustainability Rating*</label>
      <input
        type="text"
        className="form-control"
        placeholder="Sustainability Rating"
        name='subscriptionRating'
        value={subscriptionRating}
        onChange={handleChange}
        />
        {error && error.subscriptionRating && <p className={styles.errorMessage}>{error.subscriptionRating}</p>}
      
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-md-4">
      <label>Main Contractor*</label>
      <input
        type="text"
        className="form-control"
        placeholder="Main Contractor"
        name='contractor'
        value={contractor}
        onChange={handleChange}
        />
        {error && error.contractor && <p className={styles.errorMessage}>{error.contractor}</p>}
    </div>
    <div className="col-md-4">
    <label>Package Typology*</label>
      <input
        type="text"
        className="form-control"
        placeholder="Package Typology"
        name='packageTopo'
        value={packageTopo}
        onChange={handleChange}
        />
        {error && error.packageTopo && <p className={styles.errorMessage}>{error.packageTopo}</p>}
    </div>
  </div>
  <div style={{ textAlign: "center" }}>
  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
  </div>
 
</form>
    </div>

  );
}
