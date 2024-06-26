"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./projectContainer.module.scss";
import { useRouter } from "next/navigation";
import { validateEmail, isValid } from "../../comman/helper";
import storage from "../../comman/localstorage";
import { ADMINAPI } from "../../apiWrapper";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useRouter();
  const [apiErrors, setApiErrors] = useState({ message: "", response: "" });

  const validateAll = () => {
    let err = {};
    err.email = validateEmail(email);
    return err;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let err = validateAll();
    if (isValid(err)) {
      try {
        let payload = {
          email: email,
          loginType: "SUPERADMIN",
          password: password,
        };

        const response = await ADMINAPI({
          url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3001/api/v1/users/login`,
          method: "POST",
          body: { ...payload },
        });

        let userData = response.data;
        if (userData.status) {
          toast.success(response.message);
          localStorage.clear();
          storage().set("token", userData.token);
          storage().set("roleId", userData.roleId);
          storage().set("userData", JSON.stringify(userData));

          setTimeout(() => {
            navigate.push("/dashboard", { scroll: false });
          }, 100);
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        toast.error(error.message || "An error occurred");
      }
    } else {
      setApiErrors({ message: err });
    }
  };

  const userDataDummy = storage().get("userData");
  const userData = userDataDummy ? JSON.parse(userDataDummy) : {};
  const nameValue = userData.userName || "Name Admin";
  const token = storage().get("token");

  const handleLogOut = () => {
    localStorage.clear();
    navigate.push("/");
  };

  return (
    <section className={styles.adminLogin}>
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className={styles.adminLoginBox} style={{maxWidth:"500px", margin:"0 auto"}}>
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-md-12">
                  <div className="p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div><img src="./images/sustainLogoDark1.png" alt="" style={{maxWidth:"250px"}}/></div>
                    <div className="justify-content-right">
                    {/* <h2 style={{textAlign:"right"}}>Login</h2> */}
                    {/* <h6>Enter Your Email & Password</h6> */}
                    </div>
                    </div>
                    <hr className="hr" style={{opacity:".1"}}/>
                    <div>
                    <h2 style={{textAlign:"center"}}>Login </h2>
                    </div>
                    
                    <form onSubmit={handleLogin}>
                      <div className="form-group mb-0">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      {apiErrors.message && apiErrors.message.email && (
                        <span className="text-danger mb-2 d-block" style={{ fontSize: "14px" }}>
                          {apiErrors.message.email}
                        </span>
                      )}
                      <div className="form-group mt-lg-4 mt-3 position-relative mb-1">
                        <label>Password</label>
                        <div className="position-relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          name="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="togglePasswordVisibility">
                          <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}>
                          {showPassword ?  <img src='/images/showPassword.png' alt='' style={{maxWidth:"30px"}}/> :  <img src='/images/hidePassword.png' alt='' style={{maxWidth:"30px"}}/>}
                          </span>
                        </div>
                        </div>

                      </div>
                      {apiErrors.password && (
                        <span className="text-danger" style={{ fontSize: "14px" }}>
                          {apiErrors.password}
                        </span>
                      )}
                      <div className="form-group forget-password text-end mt-3 forgot">
                        <div className="d-flex align-items-center justify-content-between">
                        
                        <div className="mb-3">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label mx-2 mt-1" for="exampleCheck1" style={{cursor:"pointer", color:"#999BA1"}}> Remember Password</label>
                        </div>
                        
                        <div>
                        <Link href="/admin/forget" className="inline-block">
                          Forgot Password?
                        </Link>
                        </div>
                        </div>
                      </div>
                      <div className="form-group mt-lg-4 mt-0">
                        <button type="submit" className="btn btn-success btn-block">
                          Login &#x2192;
                        </button>
                      </div>

                      {/* Login With */}
                      <div className="row my-4">
                  <div className="col-md-12">
                    <div className="text-center">
                      <span className="loginWith_Section">or login with</span>
                    </div>
                    <div className="d-flex justify-content-evenly mt-4">
                      <div className="loginWith_button"><img src="/images/icons8-microsoft-365.svg" alt="" className="img-fluid"/></div>
                      <div className="loginWith_button"><img src="/images/icons8-google.svg" alt="" className="img-fluid"/></div>
                    </div>
                  </div>
                </div>
                      {/* Login With */}


                      <div className="d-flex justify-content-between mt-4 align-items-center">
                  <div style={{cursor:"pointer", color:"#999BA1"}}>Don{"'"}t have an Account?</div>
                  
                 <div>
                  <Link href="/signup"><button type="button" className="btn btn-outline-success">Create Account</button></Link>
                  </div> 
                </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
