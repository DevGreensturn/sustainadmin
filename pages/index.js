import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Dashboard from "./dashboard/index"

const inter = Inter({ subsets: ["latin"] });

export default function Home({children}) {
  return (
    <>
    
    <Dashboard/>
    </>
  );
}


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// import App from 'next/app'
// // import './index.css'
// import { GoogleOAuthProvider } from "@react-oauth/google"

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <GoogleOAuthProvider clientId='1009282809407-sh8h2kgmot2q295a503sl5530pldnaj9.apps.googleusercontent.com'>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   </GoogleOAuthProvider>
// )