import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ADMINAPI } from '../../apiWrapper';
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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












  
    const handleSubmit = async (e) => {
      e.preventDefault();
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
    };

    const handleChangePackage = (e) =>{
      e.preventDefault();
      const selectedValue = e.target.value;
      console.log(selectedValue, "Selected Value");
      setProjectPack(selectedValue);
    }

    const handleChangeCatagory = (e) =>{
      e.preventDefault();
      const selectedValue = e.target.value;
      console.log(selectedValue, "Selected Value");
      setSubscriptionCatagory(selectedValue);
    }
    const handleChangeTier = (e) =>{
      e.preventDefault();
      const selectedValue = e.target.value;
      console.log(selectedValue, "Selected Value");
      setSubscriptionTier(selectedValue);
    }
    const handleChangeRoad = (e) =>{
      e.preventDefault();
      const selectedValue = e.target.value;
      console.log(selectedValue, "Selected Value");
      setRoad(selectedValue);
    }

    const handleChangeInfrastructure = (e) =>{
      e.preventDefault();
      const selectedValue = e.target.value;
      console.log(selectedValue, "Selected Value");
      setInfrastructure(selectedValue);
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
  let roadTier = ["8 km","8 to 20 km","more than 20 km"];
  let infrastructureValue = ["100 Ha","100 to 250 Ha","more than 250 Ha"]

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
  return (
    <div >
        <div style={{ textAlign: "center" }} className='my-3'>
    <h1>Add Project Details</h1>
</div>
<ToastContainer/>
  <form onSubmit={handleSubmit} className=" mt-4 p-4" > 
  <div className="row my-3">
  <div className="col-md-4">
    <label>Project Name*</label>
      <input
        type="text"
        className="form-control"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        required
      />
    </div>
    <div className="col-md-4">
    <label>Project Reference No*</label>
      <input
        type="number"
        className="form-control"
        placeholder="Project Reference No"
        value={projectRef}
        onChange={(e) => setProjectRef(e.target.value)}
        required
      />
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
        {pakageData?.map((category, indexCat) => (
          <option key={indexCat} value={category?._id}>
            {category?.name}
          </option>
        ))}
      </select>
    </div>
   
  </div>
  <div className="row my-3">
    <div className="col-md-4">
    <label>Package Current Progress*</label>
      <input
        type="text"
        className="form-control"
        placeholder="Package Current Progress"
        value={packageProgress}
        onChange={(e) => setPackageProgress(e.target.value)}
        required
      />
    </div>
    <div className="col-md-4">
    <label>Cumulative Man hour*</label>
      <input
        type="text"
        className="form-control"
        placeholder="Cumulative Man hour"
        value={cumulative}
        onChange={(e) => setCumulative(e.target.value)}
        required
      />
    </div>
    <div className="col-md-4">
    <label>Plot Area(m2)*</label>
      <input
        type="text"
        className="form-control"
        placeholder="Plot Area(m2)"
        value={plot}
        onChange={(e) => setPlot(e.target.value)}
        required
      />
    </div>
  </div>
  <div className="row my-3">
    <div className="col-md-4">
    <label>GFA(m2)*</label>
      <input
        type="text"
        className="form-control"
        placeholder="GFA(m2)"
        value={gfa}
        onChange={(e) => setGfa(e.target.value)}
        required
      />
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
        {roadTier.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
    {/* <div className="col-md-4">
    <label>Road Length(km)</label>
      <input
        type="text"
        className="form-control"
        placeholder="Road Length(km)"
        value={Road}
        onChange={(e) => setRoad(e.target.value)}
      />
    </div> */}
      <div className="col-md-4">
      <label>Infrastructure(Ha)*</label>
      <select
        className="form-control"
        onChange={handleChangeInfrastructure}
        name="Infrastructure(Ha)"
        id="Infrastructure(Ha)"
        value={infrastructure} // Bind the state variable to the value prop
      >
        {infrastructureValue.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
    {/* <div className="col-md-4">
    <label>Infrastructure(Ha)</label>
      <input
        type="text"
        className="form-control"
        placeholder="Infrastructure(Ha)"
        value={infrastructure}
        onChange={(e) => setInfrastructure(e.target.value)}
      />
    </div> */}
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
        {subscriptionCatagorgryValue.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
    {/* <div className="col-md-4">
    <label>Subscription Category</label>
      <input
        type="text"
        className="form-control"
        placeholder="Subscription Category"
        value={subscriptionCatagory}
        onChange={(e) => setSubscriptionCatagory(e.target.value)}
      />
    </div> */}
    <div className="col-md-4">
      <label>Subscription Tier*</label>
      <select
        className="form-control"
        onChange={handleChangeTier}
        name="Subscription Tier"
        id="Subscription Tier"
        value={subscriptionTier} // Bind the state variable to the value prop
      >
       
        {tiers.map((category, indexCat) => (
          <option key={indexCat} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
    {/* <div className="col-md-4">
    <label>Subscription Tier</label>
      <input
        type="text"
        className="form-control"
        placeholder="Subscription Tier"
        value={subscriptionTier}
        onChange={(e) => setSubscriptionTier(e.target.value)}
      />
    </div> */}
    <div className="col-md-4">
    <label>Sustainability Rating*</label>
      <input
        type="text"
        className="form-control"
        placeholder="Sustainability Rating"
        value={subscriptionRating}
        onChange={(e) => setSubscriptionRating(e.target.value)}
        required
      />
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-md-4">
      <label>Main Contractor*</label>
      <input
        type="text"
        className="form-control"
        placeholder="Main Contractor"
        value={contractor}
        onChange={(e) => setContacator(e.target.value)}
        required
      />
    </div>
    <div className="col-md-4">
    <label>Package Typology*</label>
      <input
        type="text"
        className="form-control"
        placeholder="Package Typology"
        value={packageTopo}
        onChange={(e) => setPackageTopo(e.target.value)}
        required
      />
    </div>
  </div>
  <div style={{ textAlign: "center" }}>
  <button type="submit" className="btn btn-primary" >Submit</button>
  </div>
 
</form>
    </div>

  );
}
