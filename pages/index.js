import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Dashboard from "./dashboard/index";
import Login from "./login/index";



const inter = Inter({ subsets: ["latin"] });

export default function Home({children}) {
  return (
    <>
    
    <Login/>
    </>
  );
}
