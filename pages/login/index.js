"use client";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { SetConfigDetails, SetcountryCode, SetloaderData } from "@/app/store/reducer";
import Login from "../../page-containers/Login/index";

const LoginRoot = () => {
  // const dispatch = useDispatch();
  // const { loginConfig } = useSelector((state) => state?.Config);

  // async function fetchConfig() {
  //   dispatch(SetloaderData(true));
  //   try {
  //     const getConfigDetails = await ADMINAPI({
  //       url: `${apiURl.config}`,
  //       method: "GET",
  //     });
  //     dispatch(SetConfigDetails(getConfigDetails));
  //   } catch (err) {
  //     return {};
  //   } finally {
  //     dispatch(SetloaderData(false));
  //   }
  // }

  // const fetchCountryCode = async () => {
  //   dispatch(SetloaderData(true));
  //   try {
  //     await ADMINAPI({
  //       url: `${apiURl.countryCode}`,
  //       method: "GET",
  //     }).then((data) => {
  //       dispatch(SetcountryCode(data?.data));
  //     });
  //   } catch (error) {
  //     throw error;
  //   } finally {
  //     dispatch(SetloaderData(false));
  //   }
  // };

  // useEffect(() => {
  //   if (Object.keys(loginConfig)?.length === 0) {
  //     Promise.all([fetchCountryCode(),fetchConfig()]);
  //     dispatch(SetloaderData(true));
  //   } else {
  //     dispatch(SetloaderData(false));
  //   }
  // }, [loginConfig]);

  // 
  return (
    <>
      <>
        <Login />
      </>
    </>
  );
};

export default LoginRoot;
