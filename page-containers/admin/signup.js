// import React, { useState, useEffect } from 'react';
// import styles from './SignupForm.module.css';
// import { ADMINAPI } from "../../apiWrapper";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SignupForm = () => {
//     const [formData, setFormData] = useState({
//         userName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         countryCode: '+91',
//         role: '',
//         country: ''
//     });
//     const [roles, setRoles] = useState([]);
//     const [countries, setCountries] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchRoles = async () => {
//         try {
//             const response = await ADMINAPI({
//                 url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3001/api/v1/roles`,
//                 method: "GET",
//             });
//             if (response.status) {
//                 const data = await response;
//                 if (data.response && data.response.length > 0) {
//                     setRoles(data.response);
//                     setFormData(prevState => ({
//                         ...prevState,
//                         role: data.response[0].roleName
//                     }));
//                 } else {
//                     setRoles([]);
//                     setFormData(prevState => ({
//                         ...prevState,
//                         role: ''
//                     }));
//                 }
//             } else {
//                 setError(`Failed to fetch roles: ${response.status}`);
//             }
//         } catch (error) {
//             setError(`Error fetching roles: ${error.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const fetchCountries = async () => {
//         try {
//             const response = await ADMINAPI({
//                 url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3001/api/v1/countries`,
//                 method: "GET",
//             });
//             if (response.status) {
//                 const data = await response.data;
//                 if (data && data.length > 0) {
//                     setCountries(data);
//                     setFormData(prevState => ({
//                         ...prevState,
//                         country: data[0].info.longName
//                     }));
//                 } else {
//                     setCountries([]);
//                     setFormData(prevState => ({
//                         ...prevState,
//                         country: ''
//                     }));
//                 }
//             } else {
//                 setError(`Failed to fetch countries: ${response.status}`);
//             }
//         } catch (error) {
//             setError(`Error fetching countries: ${error.message}`);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchRoles();
//         fetchCountries();
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         let updatedValue = value;
//         switch (name) {
//             case 'userName':
//                 if (value.length > 25) {
//                     setError("User Name must be less than 25 characters");
//                 } else {
//                     setError(null);
//                 }
//                 updatedValue = value.slice(0, 25);
//                 break;
//             case 'email':
//                 if (value.length > 50) {
//                     setError("Email must be 50 characters or less");
//                 } else {
//                     setError(null);
//                 }
//                 updatedValue = value.slice(0, 50);
//                 break;
//             case 'password':
//                 const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
//                 if (passwordRegex.test(value) || value === '') {
//                     updatedValue = value.slice(0, 50);
//                 }
//                 break;
//             default:
//                 break;
//         }
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: updatedValue
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Validation checks
//         if (formData.userName.length < 1 || formData.userName.length > 25) {
//             setError("User Name must be between 1 and 25 characters");
//             return;
//         }
//         if (!formData.email.includes('@') || formData.email.length > 50) {
//             setError("Please enter a valid Email (up to 50 characters)");
//             return;
//         }
//         const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
//         if (!passwordRegex.test(formData.password)) {
//             setError("Password must be at least 8 characters long, include one capital letter, and one special symbol (!@#$%^&*)");
//             return;
//         }

//         const signupData = {
//             userName: formData.userName,
//             email: formData.email,
//             packageID: 1,
//             password: formData.password,
//             loginType: formData.role,
//             country_id: formData.country
//         };

//         try {
//             const response = await ADMINAPI({
//                 url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3001/api/v1/users`,
//                 method: "POST",
//                 body: signupData,
//             });

//             if (!response.status) {
//                 throw new Error(`HTTP error! Status: ${response.status} - ${response.message}`);
//             }
//             toast.success(response.message);

//             setFormData({
//                 userName: '',
//                 email: '',
//                 password: '',
//                 confirmPassword: '',
//                 countryCode: '+91',
//                 role: roles.length > 0 ? roles[0].roleName : '',
//                 country: countries.length > 0 ? countries[0].info.longName : ''
//             });
//             setError(null);
//             window.location.href = "/login";
//         } catch (error) {
//             console.error('Error signing up:', error.message);
//             setError(`Failed to sign up: ${error.message}`);
//         }
//     };
//     return (
//         <section>
//             <ToastContainer />
//             <div className="container">
//                 <div className="row justify-content-center" style={{ marginTop: "200px" }}>
//                     <div className="col-md-12 col-lg-9 col-xl-8 my-5">
//                         <div className={styles.signupForm}>
//                             <h1>Sign Up</h1>
//                             <div className='mt-4'>
//                                 <form onSubmit={handleSubmit}>
//                                     <div className='row'>
//                                         <div className='col-md-6'>
//                                             <div className={styles.formGroup}>
//                                                 <label htmlFor="userName">User Name</label>
//                                                 <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} required />
//                                             </div>
//                                         </div>
//                                         <div className='col-md-6'>
//                                             <div className={styles.formGroup}>
//                                                 <label htmlFor="email">Email</label>
//                                                 <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//                                             </div>
//                                         </div>
//                                         <div className='col-md-6'>
//                                             <div className={styles.formGroup}>
//                                                 <label htmlFor="password">Password</label>
//                                                 <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

//                                             </div>
//                                         </div>
//                                         <div className='col-md-6'>
//                                             <div className={styles.formGroup}>
//                                                 <label htmlFor="confirmPassword">Confirm Password</label>
//                                                 <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
//                                             </div>
//                                         </div>
//                                         <div className='col-md-6'>
//                                             <div className={styles.formGroup}>
//                                                 <label htmlFor="role">Role </label>
//                                                 <select id="role" name="role" value={formData.role} onChange={handleChange} required>
//                                                     <option value="">Select Role</option>
//                                                     {roles.length > 0 && roles.map(role => (
//                                                         <option key={role._id} value={role.roleName}>{role.roleName}</option>
//                                                     ))}
//                                                 </select>
//                                             </div>
//                                         </div>
//                                         <div className='col-md-6'>
//                                             <div className={styles.formGroup}>
//                                                 <label htmlFor="country">Country</label>
//                                                 <select id="country" name="country" value={formData.country} onChange={handleChange} required>
//                                                     <option value="">Select Country</option>
//                                                     {countries.map(country => (
//                                                         <option key={country._id} value={country._id}>{country.info.longName}</option>
//                                                     ))}
//                                                 </select>
//                                             </div>
//                                         </div> <button type="btn" className='btn btn-success' >Register &#x2192;</button> </div>
//                                 </form>
//                             </div>
//                             {loading && <p>Loading roles and countries...</p>}
//                             {error && <p className={styles.errorMsg}>{error}</p>}
//                             <div className={`mt-5 ${styles.loginContainer}`}>
//                                 <div className='d-flex align-items-center justify-content-between'>
//                                     <p style={{ opacity: ".5" }}>Already have an account?</p>
//                                     <a href="/login" className='btn btn-outline-success mx-3'>Login</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default SignupForm;
import React, { useState, useEffect } from "react";
import styles from "./SignupForm.module.css";
import { ADMINAPI } from "../../apiWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    countryCode: "+91",
    role: '',
    country: '',
  });
  const [roles, setRoles] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countryInputVisible, setCountryInputVisible] = useState(true); // State to manage input visibility

  const fetchRoles = async () => {
    try {
      const response = await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3001/api/v1/roles`,
        method: "GET",
      });
      if (response.status) {
        const data = await response;
        if (data.response && data.response.length > 0) {
          setRoles(data.response);
          setFormData((prevState) => ({
            ...prevState,
            role: data.response[0].roleName,
          }));
        } else {
          setRoles([]);
          setFormData((prevState) => ({
            ...prevState,
            role: "",
          }));
        }
      } else {
        setError(`Failed to fetch roles: ${response.status}`);
      }
    } catch (error) {
      setError(`Error fetching roles: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3001/api/v1/countries`,
        method: "GET",
      });
      if (response.status) {
        const data = await response.data;
        if (data && data.length > 0) {
          setCountries(data);
          setFilteredCountries(data); // Initialize filteredCountries with all countries
          setFormData((prevState) => ({
            ...prevState,
            country: "", // Set country to empty initially
          }));
        } else {
          setCountries([]);
          setFilteredCountries([]);
          setFormData((prevState) => ({
            ...prevState,
            country: "",
          }));
        }
      } else {
        setError(`Failed to fetch countries: ${response.status}`);
      }
    } catch (error) {
      setError(`Error fetching countries: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
    fetchCountries();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let updatedValue = value;
    console.log("value", e.target,"KKKKKK",name,"<<<<<",value);
    switch (name) {
      case "userName":
        if (value.length > 25) {
          setError("User Name must be less than 25 characters");
        } else {
          setError(null);
        }
        updatedValue = value.slice(0, 25);
        break;
      case "email":
        if (value.length > 50) {
          setError("Email must be 50 characters or less");
        } else {
          setError(null);
        }
        updatedValue = value.slice(0, 50);
        break;
      case "password":
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        if (passwordRegex.test(value) || value === "") {
          updatedValue = value.slice(0, 50);
        }
        break;
      case "country": // Handle filtering countries based on input
        setFormData((prevState) => ({
          ...prevState,
          country: value,
        }));
        filterCountries(value);
        const selectedCountry = filteredCountries.find(
          (country) => country.info.longName === value
        );
        if (selectedCountry) {
          handleCountrySelect(selectedCountry._id, value);
        } else {
          setFormData((prevState) => ({
            ...prevState,
            countryId: "",
          }));
        }
        break;
      default:
        break;
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  const filterCountries = (inputValue) => {
    const filtered = countries.filter((country) =>
      country.info.longName.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleCountrySelect = (selectedCountryId, countryName) => {
    console.log("hii", selectedCountryId);
    setFormData((prevState) => ({
      ...prevState,
      countryId: selectedCountryId,
      country: countryName,
    }));
    setCountryInputVisible(false);
    setFilteredCountries([]);
  };

  const toggleCountryInput = () => {
    setCountryInputVisible(true);
    setFilteredCountries(countries);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation checks
    console.log("formdata", formData);
    if (formData.userName.length < 1 || formData.userName.length > 25) {
      setError("User Name must be between 1 and 25 characters");
      return;
    }
    if (!formData.email.includes("@") || formData.email.length > 50) {
      setError("Please enter a valid Email (up to 50 characters)");
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must be at least 8 characters long, include one capital letter, and one special symbol (!@#$%^&*)"
      );
      return;
    }

    const signupData = {
      userName: formData.userName,
      email: formData.email,
      packageID: 1,
      password: formData.password,
      loginType: formData.role,
      country_id: formData.countryId,
    };

    try {
      const response = await ADMINAPI({
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_URL}:3001/api/v1/users`,
        method: "POST",
        body: signupData,
      });

      if (!response.status) {
        throw new Error(
          `HTTP error! Status: ${response.status} - ${response.message}`
        );
      }
      toast.success(response.message);

      setFormData({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        countryCode: "+91",
        role: roles.length > 0 ? roles[0].roleName : "",
        country: countries.length > 0 ? countries[0].info.longName : "",
      });
      setError(null);
      window.location.href = "/login";
    } catch (error) {
      console.error("Error signing up:", error.message);
      setError(`Failed to sign up: ${error.message}`);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section>
      <ToastContainer />
      <div className="container">
        <div
          className="row justify-content-center my-3"
          style={{ marginTop: "0px" }}
        >
          <div className="col-md-12">
            <div
              className={styles.signupForm}
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              {/* <h2>Sign Up</h2> */}
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <img
                    src="./images/sustainLogoDark1.png"
                    alt=""
                    style={{ maxWidth: "250px" }}
                  />
                </div>
                <div className="justify-content-right">
                  {/* <h2 style={{textAlign:"right"}}>Login</h2> */}
                  {/* <h6>Enter Your Email & Password</h6> */}
                </div>
              </div>
              <hr className="hr" style={{ opacity: ".1" }} />
              <div>
                <h2 style={{ textAlign: "center" }}>Sign Up</h2>
              </div>

              <div className="mt-4">
                {console.log(formData,"LLL",JSON.stringify(formData))}
                <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="row">
                    <div className="col-md-12">
                      <div className={styles.formGroup}>
                        <label htmlFor="userName">User Name</label>
                        <input
                          type="text"
                          id="userName"
                          name="userName"
                          value={formData.userName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                         
                          id="password"
                          autoComplete="new-password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          className="form-control"
                          type={showPassword ? "text" : "password"}

                        />
                      </div>

                      <div className={`position-relative ${styles.formGroup}`}>
                        <label htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                        <input
                          // type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          autoComplete="new-password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          className="form-control"
                          type={showPassword ? "text" : "password"}
                        />

                        <div
                          className="togglePasswordVisibilitys"
                          onClick={togglePasswordVisibility}
                        >
                          <div>
                            {showPassword ? (
                              <img
                                src="/images/showPassword.png"
                                alt=""
                                className="img-fluid"
                              />
                            ) : (
                              <img
                                src="/images/hidePassword.png"
                                alt=""
                                className="img-fluid"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className={styles.formGroup}>
                        <label htmlFor="role">Role </label>
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          required
                          className="form-select"
                        >
                          <option value="">Select Role</option>
                          {roles.length > 0 &&
                            roles.map((role) => (
                              <option key={role._id} value={role.roleName}>
                                {role.roleName}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor="country">Country</label>

                        {countryInputVisible ? (
                          <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            list="countries"
                            autoComplete="off"
                            // className={styles.countryInput}
                            className="form-control"
                            placeholder="Search or select country..."
                          />
                        ) : (
                          <div
                            className={styles.selectContainer}
                            onClick={toggleCountryInput}
                          >
                            <span>
                              {formData.country
                                ? formData.country
                                : "Select country"}
                            </span>
                            <i className="fa fa-chevron-down"></i>
                          </div>
                        )}
                        <datalist id="countries">
                          {filteredCountries.map((country) => {
                            return (
                              <option
                                key={country._id}
                                value={country.info.longName}
                                onChange={() =>
                                  handleCountrySelect(country._id)
                                }
                              >
                                {country.info.longName}{" "}
                              </option>
                            );
                          })}
                        </datalist>
                      </div>
                    </div>

                    <button
                      type="btn"
                      className="btn btn-success"
                      style={{ padding: "10px 10px" }}
                    >
                      Register &#x2192;
                    </button>
                  </div>
                </form>
              </div>

              {loading && <p>Loading roles and countries...</p>}
              {error && <p className={styles.errorMsg}>{error}</p>}
              <div className={`mt-5 ${styles.loginContainer}`}>
                <div className="d-flex align-items-center justify-content-between">
                  <p style={{ opacity: ".5" }}>Already have an account?</p>
                  <a href="/login" className="btn btn-outline-success mx-3">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignupForm;
