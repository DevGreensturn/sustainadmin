import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { ADMINAPI } from "../../../apiWrapper";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import storage from "../../../comman/localstorage";
import Dropdown from "react-bootstrap/Dropdown";
import { validateEmail,isValid } from "../../../comman/helper";
import Link from "next/link";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useRouter();
  const [apiErrors, setApiErrors] = useState({ message: "", response: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlelogOuClose = () => setShowLogout(false);
  const handleLogOutShow = () => setShowLogout(true);

  const handleLogin1 = async () => {
    // Simulate login validation
    if (email === "admin@example.com" && password === "password") {
      // Save user information in local storage
      localStorage.setItem("user", JSON.stringify({ email }));
      alert("Login successful!");
      handleClose();
    } else {
      alert("Invalid email or password");
    }
  };
  const validateAll = () => {
    let err1 = {};
    err1.email = validateEmail(email);
    return err1;
  };


  const handleLogin = async (e) => {
    console.log(e.target,"HHHH",email,">>>",password);
    let vsl = validateEmail(email);
    console.log(vsl,"KKKKKKKK");
    e.preventDefault();
    try {
      let payload = {
          "email": email ,//"admin.insight@yopmail.com",
          "loginType":"SUPERADMIN",
          "password":password , //"Admin@123"
      }
      let err = validateAll();
console.log(err,"llllll",isValid(err));
      if (isValid(err)) {
        await ADMINAPI({
          url: `http://3.108.58.161:3001/api/v1/users/login`,
          method: "POST",
          body: { ...payload },
        }).then((data) => {
          let userData = data.data; 
          if (userData.status) {   
            console.log(userData, "respnse data",data?.message);
            toast.success(data?.message);
            localStorage.clear();
            storage().set("token", userData.token);
            storage().set("roleId", userData.roleId);
            storage().set("userData", JSON.stringify(userData));
            handleClose();
     
            setTimeout(() => {
              navigate.push("/dashboard", { scroll: false });
            }, 100);
          } else {
            toast.error(data?.message);
          }
        });
      }else{
        setApiErrors({ message: err });
      }
    } catch (error) {
      console.log(error, "errorooo");
      setApiErrors({ message: error });
      toast.error(error);
    }
  }; 
  let userDataDummy = (storage().get("userData"));
  let userData = {}
  if(userDataDummy){
    userData = JSON.parse(userDataDummy)
  }
let nameValue = userData.userName ? userData.userName  : "Name Admin";
  console.log(userData,"TTTTTTToo");
let token = storage().get("token")

const handleLogOut = (e) => {
  localStorage.clear();

  handleLogOutShow();
  navigate.push("/")
};

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="headerSection">
            <div className="d-flex align-items-center my-3">
              <Link href="/"><div><img src="/images/companyLogo.svg" alt="" /></div></Link>
              <div className="d-flex align-items-center mx-5" style={{cursor:"pointer"}}>
                <img src="/images/tripplehiphen.svg" alt="" />
                <input
                  type="text"
                  className="search-bar form-control"
                  placeholder="Search"
                  style={{ margin: "0px 10px", padding: "10px 150px 10px 10px", borderRadius: "25px", border: "1px solid lightGrey" }}
                />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              
              <div className="d-flex align-items-center">
                <div className="position-relative">
                  <img src="../images/notificationicon.svg" alt="" />
                  <div className="notification-number">
                    <span className="">6</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mx-3">
                  <img src="./flag.png" width={40} height={40} alt="Language" />
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="mx-1">
                    <span>English</span> <img src="./dropdown.png" alt="dropdown" width={10} height={10} style={{ marginLeft: "5px" }} />
                  </div>
                </div>
                {
       token ?(<>
                <li style={{listStyleType:"none"}} >
                          <Dropdown className="userLogin">
                            <Dropdown.Toggle
                              variant=""
                              id="dropdown-basic"
                              style={{ textTransform: "uppercase" }}
                            >
                                <Link href="/AdminRole"> {nameValue}</Link> 
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="userLoginsection">
                            {/* <Dropdown.Item onClick={handleLogOut}>
                                <img
                                  src="/Images/sign out.svg"
                                  alt=""
                                  className="mx-2"
                                />{" "}
                                Sign Out
                              </Dropdown.Item> */}
                             
                            </Dropdown.Menu>
                          </Dropdown>
                        </li>
       </>):(
        <>
         <div className="my-3">
                      <button
                        type="button"
                        className="btn btn-success customeLogin"
                        style={{ width: "100%" }}
                        onClick={handleShow}
                      >
                        Login <img src="/images/arrow-right.png" alt="" />
                      </button>
                    </div>
                    </>)
                }
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose} backdrop="static" centered >
          <Modal.Header closeButton style={{ border: "0" }}>
          </Modal.Header>
          <Modal.Body className="loginSection">
            <div>
              <div>
                <h1>Login</h1>
                <h6 className="mt-3 loginSection_EnterEmail">Enter Your Email & Password</h6>
              </div>
              <div className="my-3">
                <div className="text-field w100p">
                  <input
                    className="text-base w100p"
                    type="email"
                    required
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span>E-Mail *</span>
                  {console.log(apiErrors,"llll")}
                </div>
                {apiErrors.message && apiErrors.message.email && (
                    <span
                      className="text-danger mb-2 d-block"
                      style={{ fontSize: "14px" }}
                    >
                      {apiErrors.message.email}
                    </span>
                  )}
                <div className="text-field w100p">
                  <div className="position-relative">
                  <input
                    className="text-base w100p"
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div className="togglePasswordVisibility" onClick={togglePasswordVisibility}>
                    <div>
                          {showPassword ? (<img src="/Images/showPassword.png" alt="" className="img-fluid"/>) : (<img src="/Images/hidePassword.png" alt="" className="img-fluid"/>)}
                        </div>
                  </div>
                  </div>
                  <span>Password *</span>
                </div>


                <div className="d-flex justify-content-between my-3">
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
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
                      <button
                        type="button"
                        className="btn btn-success"
                        style={{ width: "100%" }}
                        onClick={handleLogin}
                      >
                        Login &#x2192;
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-md-12">
                    <div className="text-center">
                      <span className="loginWith_Section">or login with</span>
                    </div>
                    <div className="d-flex justify-content-evenly mt-3">
                      <div className="loginWith_button"><img src="/images/icons8-microsoft-365.svg" alt="" className="img-fluid"/></div>
                      <div className="loginWith_button"><img src="/images/icons8-google.svg" alt="" className="img-fluid"/></div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div style={{cursor:"pointer"}}>Don{"'"}t Have an Account?</div>
                  <div>
                    <button type="button" className="btn btn-outline-success">Create Account</button>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={showLogout} onHide={handlelogOuClose} backdrop="static" centered>
          <Modal.Header closeButton style={{ border: "0" }}>
          </Modal.Header>
          <Modal.Body className="loginSection">
            <div>
              <div className="my-3">
                <div className="row my-3">
                  <div className="col-md-12">
                    <h1>Are you sure want to logout </h1>
                    <div className="d-flex justify-content-evenly mt-3">
                      <button type="button" className="btn btn-outline-primary p-1 mx-3" onClick={handleLogOut}> Yes</button>
                      <button type="button" className="btn btn-outline-primary p-1" onClick={handlelogOuClose}> No</button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </header>
    </>
  );
};

export default Header;