import Layout from "@/components/Layout"
import Header from "@/components/Layout/Header"


import { ThreeContainers, DashPage } from '../../components/DashboardPage'; 





const Dashboard=({childern})=> {
  return (
    <>
   <Header/>
   


  
  <Layout> 
  <ThreeContainers/>

<DashPage/>

   </Layout>
    </>
  )
}


export default Dashboard
