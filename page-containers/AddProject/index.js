import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [projectRef, setProjectRef] = useState('');
    const [projectPack, setProjectPack] = useState('');
    const [packageType, setPackage] = useState('');
    // const [cumulative,setCumulative] =  useState('');
    // const [cumulative,setCumulative] =  useState('');
    // const [cumulative,setCumulative] =  useState('');






  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Here you can add your logic to submit the form data to a server or API
      console.log(`First name: ${firstName}`);
      console.log(`Last name: ${lastName}`);
    };

    

  return (
    <div>
        <div style={{ textAlign: "center" }}>
    <h1>Add Project Details</h1>
</div>

        <form onSubmit={handleSubmit} className="container mt-4 form-border"style={{color : "blue" }} >
  <div className="row mb-3">
    <div className="col-sm-4" style={{ height: "80px" }}>
      <label>sdfghjk</label>
      <input
        type="text"
        className="form-control"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
    <div className="col-sm-4" style={{ height: "80px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    <div className="col-sm-4" style={{ height: "80px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-4" style={{ height: "80px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Project Reference No"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
    <div className="col-sm-4" style={{ height: "80px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Project Package"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    <div className="col-sm-4" style={{ height: "80px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Package Typology"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-4" style={{ height: "80px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Package Current Progress"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
    <div className="col-sm-4" style={{ height: "80px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Cumulative Manhour"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    <div className="col-sm-4" style={{ height: "80px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Plot Area(m2)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-4" style={{ height: "80px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="GFA(m2)"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
    <div className="col-sm-4" style={{ height: "80px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Road Length(km)"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    <div className="col-sm-4" style={{ height: "80px" }}>
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
    <div className="col-sm-4" style={{ height: "80px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Subscription Category"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
    <div className="col-sm-4" style={{ height: "80px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Subscription Tier"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    <div className="col-sm-4" style={{ height: "80px" }}>
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
