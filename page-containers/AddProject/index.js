import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ADMINAPI } from '../../apiWrapper';
import { useRouter } from "next/navigation";

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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [projectRef, setProjectRef] = useState('');
    const [projectPack, setProjectPack] = useState('');
    const [packageType, setPackage] = useState('');
    const [cumulative,setCumulative] =  useState('');
    const [plot,setPlot] =  useState('');
    const [Road,setRoad] =  useState('');
    const [infrastructure,setInfrastructure] =  useState('');
    const [subscriptionCatagory,setSubscriptionCatagory] =  useState('');
    const [subscriptionTier,setSubscriptionTier] =  useState('');








  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Here you can add your logic to submit the form data to a server or API
      console.log(`First name: ${firstName}`);
      console.log(`Last name: ${lastName}`);
      let payload = {
        "referenceNo": 145,
        "projectName": "New Project tesr",
        "projectPackageId": "665486fbed3a1b1774f9ae40",
        "mainContractor": "Main Contractor Inc.",
        "topology": "Urban",
        "packageCurrentPackage": "Package891",
        "manHours": "2000",
        "plotArea": "5000 sqm",
        "gfa": "4500 sqm",
        "roadLength": "2 km",
        "infrastructure": "Basic",
        "SubscriptionCategory": "Building",
        "subscriptionTier": "Gold",
        "SustainabilityRating": "High"
      }
      
      try {
        
        await ADMINAPI({
          url: `http://3.108.58.161:3002/api/v1/projects`,
          method: "POST",
          body: { ...payload },
        }).then((data) => {
         
          if (data.status == true) {
            setTimeout(() => {
              navigate.push("/projects", { scroll: false });
            }, 100);
          } else {
            toast.error(data?.message);
          }
        });
      } catch (error) {
        
        console.log(error,"TTTTTT");
      }

    };

    

  return (
    <div >
        <div style={{ textAlign: "center" }} className='my-3'>
    <h1>Add Project Details</h1>
</div>

  <form onSubmit={handleSubmit} className=" mt-4 p-4" >
  <div className="row mb-3">
    <div className="col-md-4">
      <label>First Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
    <div className="col-md-4">
    <label>Last Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    <div className="col-md-4">
    <label>Email</label>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  </div>

  <div className="row my-3">
    <div className="col-md-4">
    <label>Project Reference No</label>
      <input
        type="text"
        className="form-control"
        placeholder="Project Reference No"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>

    <div className="col-md-4">
    <label>Project Package</label>
      <input
        type="text"
        className="form-control"
        placeholder="Project Package"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    <div className="col-md-4">
    <label>Package Typology</label>
      <input
        type="text"
        className="form-control"
        placeholder="Package Typology"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  </div>
  <div className="row my-3">
    <div className="col-md-4">
    <label>Package Current Progress</label>
      <input
        type="text"
        className="form-control"
        placeholder="Package Current Progress"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
    <div className="col-md-4">
    <label>Cumulative Man hour</label>
      <input
        type="text"
        className="form-control"
        placeholder="Cumulative Man hour"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    <div className="col-md-4">
    <label>Plot Area(m2)</label>
      <input
        type="text"
        className="form-control"
        placeholder="Plot Area(m2)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  </div>
  <div className="row my-3">
    <div className="col-md-4">
    <label>GFA(m2)</label>
      <input
        type="text"
        className="form-control"
        placeholder="GFA(m2)"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
    <div className="col-md-4">
    <label>Road Length(km)</label>
      <input
        type="text"
        className="form-control"
        placeholder="Road Length(km)"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    <div className="col-md-4">
    <label>Infrastructure(Ha)</label>
      <input
        type="text"
        className="form-control"
        placeholder="Infrastructure(Ha)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-md-4">
    <label>Subscription Category</label>
      <input
        type="text"
        className="form-control"
        placeholder="Subscription Category"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
    <div className="col-md-4">
    <label>Subscription Tier</label>
      <input
        type="text"
        className="form-control"
        placeholder="Subscription Tier"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    <div className="col-md-4">
    <label>Email</label>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
