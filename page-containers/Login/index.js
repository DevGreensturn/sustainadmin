"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./projectContainer.module.scss";

// import { signIn } from "next-auth/react";
// import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// import { toast } from "react-toastify";
// import { MDBSpinner } from "mdb-react-ui-kit";
// import showPasswordIcon from '/public/images/eye-slash-regular.svg'
// import hidePasswordIcon from '/public/images/eye-regular.svg';
// import { adminApiUrl } from "@/app/store/actions/api-url";
// import storage from "@/app/common/localStorage";
// import {
//   SetAuthUserData,
//   SetloaderData,
//   SetpopupReducerData,
// } from "@/app/store/reducer";
// import {
//   isValid,
//   validateEmail,
//   validateRequirePass,
// } from "@/app/components/Validation/InputValidation";
// import { SetAuthAdminData } from "@/app/store/reducer/authAdmin";
// import { ADMINAPI } from "@/app/api/route";
// import { fetchLocationList } from "@/app/api/adminService/filterService";

function Login() {
  // const session = useSession();
  // const navigate = useRouter();
  // const dispatch = useDispatch();
  // const {  Strings: { 
  //     EMAIL_TEXT,
  //     PASSWORD_TEXT,
  //     LOGIN_TEXT,
  //     ADMIN_NO_ACCOUNT_TEXT,
  //     ADMIN_SIGNUP
  //     // FORGET_PASSWORD_TEXT ='',
  //     // OR_TEXT ='',
  //     // ADMIN_GOOGLE_LOGIN_TEXT ='',
  //     // ADMIN_APPLE_LOGIN_TEXT ='',
  //     // ADMIN_FACEBOOK_LOGIN_TEXT ='',
  //   } = {}
  // } = useSelector((state) => state?.Config?.loginConfig || {});
  // const [showPassword, setShowPassword] = useState(false);
  // const [errors, setErrors] = useState({});
  // const [inpData, setInpData] = useState({
  //   email: "",
  //   password: "",
  //   platform: "cms",
  //   loginType: "BRANDADMIN" ,
  // });

  // const validateAll = useCallback(() => {
  //   let err1 = {};
  //   err1.email = validateEmail(inpData.email);
  //   err1.password = validateRequirePass(inpData.password);
  //   return err1;
  // }, [inpData]);

  // const handleSubmit = useCallback(
  //   async (e) => {
  //     e.preventDefault();
  //     try {
  //       dispatch(SetloaderData(true));
  //       let err = validateAll();
  //       if (isValid(err)) {
  //         await ADMINAPI({
  //           url: adminApiUrl.login,
  //           method: "POST",
  //           body: { ...inpData,loginType:"BRANDADMIN" },
  //         })
  //           .then(async (data) => {
  //             if (data?.status || data?.status === true) {
  //               const token = data?.token;
  //               const accessToken = data?.accessToken;
  //               const roleId = data?.response?.roleID?._id;
  //               toast.success(data?.message);
  //               if (!token) {
  //                 // setApiErrors({ message: validationMessages.unableToLogin });
  //                 return;
  //               }
  //               let isValidUser = data.response;
  //               localStorage.clear();
  //               storage().set("admintoken", token);
  //               storage().set("adminaccesstoken", accessToken);
  //               storage().set("roleId", roleId);
  //               storage().set("cred", JSON.stringify(inpData));
  //               // console.log(data.response              ,"datadatadata");
  //               dispatch(SetAuthAdminData(data?.response));
  //               dispatch(SetAuthUserData(data?.response));
  //               await fetchLocationList();
  //               dispatch(
  //                 SetpopupReducerData({
  //                   modalType: "NEWPASSWORD",
  //                   showModal: true,
  //                 })
  //               );
  //               setTimeout(() => {
  //                 if (isValidUser?.firstName && isValidUser?.contact?.mobile) {
  //                   navigate.push("/admin/dashboard/main", { scroll: false });
  //                   // console.log(isValidUser?.firstName, isValidUser?.lastName, isValidUser?.contact?.mobile, "userData is avilable");
  //                 } else {
  //                   // console.log("userData is not avilable");
  //                   navigate.push("/admin/dashboard/additional-details", {
  //                     scroll: false,
  //                   });
  //                 }
  //               }, 200);
  //             } else {
  //               toast.error(data?.message);
  //               // setApiErrors({ message: data?.message });
  //               dispatch(SetAuthAdminData({}));
  //             }
  //           })
  //           .catch((err) => {
  //             toast.error("Invaild credentials for brand admin");
  //           });
  //       } else {
  //         setErrors({ ...err });
  //         // setApiErrors({ message: error?.message });
  //         dispatch(SetloaderData(false));
  //       }
  //     } catch (error) {
  //       toast.error(error);
  //       // setApiErrors({ message: error?.message });
  //     } finally {
  //       dispatch(SetloaderData(false));
  //     }
  //   },
  //   [validateAll],
  // )

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // }
  // const handleChange = (e) => {
  //   setInpData({ ...inpData, [e.target.name]: e.target.value });
  //   handleValidate(e);
  //   // setApiErrors({ message: "" });
  //   console.log(handleValidate(e))
  //   //setPassword();  //update here need to ask
  // };

  // const handleValidate = (e) => {
  //   const errors1 = {};
  //   switch (e.target.name) {
  //     case "email":
  //       errors1.email = validateEmail(e.target.value);
  //       break;
  //     case "password":
  //       errors1.password = validateRequirePass(e.target.value);
  //       break;
  //     default:
  //       break;
  //   }
  //   setErrors(errors1);
  // };

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     handleSubmit(event);
  //   }
  // };

  // const handleProiderLogin = async (provider) => {
  //   try {
  //     await signIn(provider);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   console.log('lakshayVerrma', EMAIL_TEXT);
  // }, [EMAIL_TEXT])
  let EMAIL_TEXT = "Email"
  let PASSWORD_TEXT = "Password"
  let showPassword = "text"
  let inpData = {}
  let errors = {}

  return (
    <section className={styles.adminLogin}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-9 col-xl-8">
            <div className={styles.adminLoginBox}>
              <div className="row" style={{ marginTop: "200px" }}>
                <div className="col-md-6">
                  <div><img src="./logo.png" alt="" /></div>
                  <div className="py-5 ps-4 pe-3" style={EMAIL_TEXT ? {} : { height: '100vh' }}>
                    {!EMAIL_TEXT ?
                      <div className="text-center align-middle">
                        <MDBSpinner className="mx-2" color="secondary" >
                          <span className="visually-hidden">Loading...</span>
                        </MDBSpinner>
                      </div> : <>
                        <form
                          action=""
                          method="post"
                        // onSubmit={handleSubmit}
                        // onKeyDown={handleKeyDown}
                        >
                          <div className="form-group mb-1">
                            <label>{EMAIL_TEXT || ''}</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              // placeholder="Enter Email"
                              autoComplete={false}
                              required
                              value={inpData.email}
                            // onChange={handleChange}
                            // onBlur={handleValidate}
                            />
                          </div>
                          {errors.email ? (
                            <span
                              className="text-danger"
                              style={{ fontSize: "14px" }}
                            >
                              {errors.email}
                            </span>
                          ) : (
                            ""
                          )}
                          {/* Login Hide and Show */}
                          <div className="form-group mt-lg-4 mt-3 position-relative mb-1">
                            <label>{PASSWORD_TEXT || ''}</label>
                            <input
                              type={showPassword ? 'text' : 'password'}
                              //type="password"
                              className="form-control"
                              name="password"
                              // placeholder="Enter Password"
                              autoComplete={false}
                              required
                              // value={password}
                              //onChange={(e) => setPassword(e.target.value)}
                              value={inpData.password}
                            // onChange={handleChange}
                            // onBlur={handleValidate}
                            />

                            <div className="showPasswordLogin">
                              <span
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ cursor: "pointer" }}
                              >

                              </span>
                            </div>

                            {/* <img className="showPasswordLogin"src="../Images/dashboard.png" alt="" /> */}

                          </div>
                          {errors.password ? (
                            <span
                              className="text-danger"
                              style={{ fontSize: "14px" }}
                            >
                              {errors.password}
                            </span>
                          ) : (
                            ""
                          )}
                          <div className="form-group forget-password text-end mt-3 forgot">
                            <Link href="/admin/forget" className="inline-block">
                              {"Forgot Password?" || ''}
                            </Link>
                          </div>
                          <div className="form-group mt-lg-4 mt-3">
                            <button
                              className="btn btn-primary btn-lg btn-block"
                            // onClick={handleSubmit}
                            >
                              {"Login" || ''} {" "}
                            </button>
                          </div>
                          {/* <div className="or">
                        <span>{OR_TEXT||''}</span>
                      </div> */}
                          {/* <ul className="loginOption">
                        <li>
                          <a className="pointer" onClick={()=>handleProiderLogin('google')}>
                          
                            <img src="../../images/google.svg" alt=""  /> {ADMIN_GOOGLE_LOGIN_TEXT||''}
                          </a>
                        </li>
                        <li>
                          <a  className="pointer" onClick={()=>handleProiderLogin('apple')} >
                            <img src="../../images/apple.svg" alt="" /> 
                            {ADMIN_APPLE_LOGIN_TEXT||''}
                            
                          </a>
                        </li>
                        <li>
                          <a className="pointer" onClick={()=>handleProiderLogin('facebook')}>
                            <img src="../../images/facebook.svg" alt="" />
                            {ADMIN_FACEBOOK_LOGIN_TEXT||''} 
                            
                          </a>
                        </li>
                      </ul> */}
                          <p className="dontAccount mt-2">
                            {"Don’t have an account?" || '' + " "}
                            <Link href="/admin/signup" className="mx-2">
                              {"SignUp" || ''}
                            </Link>
                          </p>
                        </form>
                      </>}

                  </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                  <div className="footBallImg">
                    <img
                      className="img-fluid"
                      src="../images/login.jpg"
                      alt="./login.jpg"
                    />
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
