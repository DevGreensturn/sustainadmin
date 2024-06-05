// "use client";
// import { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { SetConfigDetails, SetcountryCode, SetloaderData } from "@/app/store/reducer";
// import Login from "../../page-containers/Login/index";

// const LoginRoot = () => {
//   // const dispatch = useDispatch();
//   // const { loginConfig } = useSelector((state) => state?.Config);

//   // async function fetchConfig() {
//   //   dispatch(SetloaderData(true));
//   //   try {
//   //     const getConfigDetails = await ADMINAPI({
//   //       url: `${apiURl.config}`,
//   //       method: "GET",
//   //     });
//   //     dispatch(SetConfigDetails(getConfigDetails));
//   //   } catch (err) {
//   //     return {};
//   //   } finally {
//   //     dispatch(SetloaderData(false));
//   //   }
//   // }

//   // const fetchCountryCode = async () => {
//   //   dispatch(SetloaderData(true));
//   //   try {
//   //     await ADMINAPI({
//   //       url: `${apiURl.countryCode}`,
//   //       method: "GET",
//   //     }).then((data) => {
//   //       dispatch(SetcountryCode(data?.data));
//   //     });
//   //   } catch (error) {
//   //     throw error;
//   //   } finally {
//   //     dispatch(SetloaderData(false));
//   //   }
//   // };

//   // useEffect(() => {
//   //   if (Object.keys(loginConfig)?.length === 0) {
//   //     Promise.all([fetchCountryCode(),fetchConfig()]);
//   //     dispatch(SetloaderData(true));
//   //   } else {
//   //     dispatch(SetloaderData(false));
//   //   }
//   // }, [loginConfig]);

//   // 
//   return (
//     <>
//       <>    
//         <Login />
//       </>
//     </>
//   );
// };

// export default LoginRoot;
// Import authentication library
const jwt = require('jsonwebtoken');

// Your existing code
"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetConfigDetails, SetcountryCode, SetloaderData } from "@/app/store/reducer";
import Login from "../../page-containers/Login/index";

// Authentication function
const authenticateUser = (token) => {
  try {
    // Verify token
    const decoded = jwt.verify(token, 'your_secret_key');

    // If verification succeeds, return decoded user data
    return decoded;
  } catch (error) {
    // If verification fails, return null or throw an error
    console.error('Authentication failed:', error.message);
    return null;
  }
};

const LoginRoot = () => {
  const dispatch = useDispatch();
  const { loginConfig } = useSelector((state) => state?.Config);

  // Your existing code for fetching data...

  useEffect(() => {
    // Your existing useEffect code...

    // Example authentication usage:
    const token = localStorage.getItem('authToken');
    if (token) {
      const userData = authenticateUser(token);
      if (userData) {
        // Dispatch action or set user data in Redux store
        // Example:
        // dispatch(SetUserData(userData));
      } else {
        // Handle authentication failure (e.g., redirect to login page)
        // Example:
        // history.push('/login');
      }
    }
  }, [loginConfig]);

  return (
    <>
      <>
        <Login />
      </>
    </>
  );
};

export default LoginRoot;
