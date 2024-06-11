import React, {useState} from "react";

const SignUPpage = ()=>{
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[password, setPassword] = useState('');
  const[showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    return(
        <>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        >
        <Modal.Header closeButton style={{border:"0"}}>
        </Modal.Header>
        <Modal.Body className="loginSection">
          <div>
          <div>
            <h1>Login</h1>
            <h6 className="mt-3 loginSection_EnterEmail">Enter Your Email & Password</h6>
          </div>

          <div className="my-3">
          <div className="text-field w100p">
            <input className="text-base w100p" type="email" required placeholder=" " />
            <span>E-Mail *</span>
          </div>

          <div class="text-field w100p">
            <div className="position-relative--">
            <input className="text-base w100p" type={showPassword ? 'text' : 'password'}  onChange={(e) => setPassword(e.target.value)} name="password"/>
            <div className="togglePasswordVisibility">
            <div onClick={togglePasswordVisibility} style={{maxWidth:"30px"}}>
              {showPassword ? <img src="../Images/showPassword.png" alt="" /> : <img src="../Images/hidePassword.png" alt="" />}
            </div>
            </div>
          </div>

            <span>Password *</span>
          </div>

          <div className="d-flex justify-content-between my-3">
            <div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>  
            </div>
            <div>
            <h6>Forgot Password</h6>  
            </div>
          </div>
          <div className="row">
            <div className="col-md-12"> 
          <div className="my-3">
            <button type="btn" className="btn btn-success customeLogin" style={{width:"100%"}}>Login <img src="../Images/arrow-right.png" alt=""/></button>
          </div>
            </div>
            </div>

            <div className="row my-3">
            <div className="col-md-12"> 
          <div className="text-center">
            <span className="loginWith_Section">or login with</span>
          </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <div className="loginWith_button">
                <img src="../Images/icons8-microsoft-365.svg" alt="" />
                </div>
              </div>
              <div className="col-md-6 text-end">
              <div className="loginWith_button">
                <img src="../Images/icons8-google.svg" alt="" />
              </div>
              </div>
            </div>
          {/* <div className="d-flex justify-content-between mt-3">
          <button type="btn" className="btn btn-outline-primary p-1 mx-3"><img src="../Images/icons8-microsoft-365.svg" alt="" /></button>
            <button type="btn" className="btn btn-outline-primary p-1"><img src="../Images/icons8-google.svg" alt="" /></button>
          </div> */}

            </div>
            </div>

            <div className="d-flex justify-content-between mt-4 align-items-baseline">
            <div className="dont_have-account">
               <span>Don't have an Account? </span>
            </div>
            <div>
              <button type="btn" className="btn btn-outline-success">Create Account </button>
            </div>
          </div>

            </div>
          </div>
          </Modal.Body>
        {/* <Modal.Footer style={{border:"0"}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
           <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> 
        </Modal.Footer> */}
      </Modal>
        </>
    )
}
export default SignUPpage;
