import Layout from "@/components/Layout"
import Header from "@/components/Layout/Header"


import { ThreeContainers, DashPage,AdditionalContainer } from '../../components/DashboardPage'; 






const Dashboard=({childern})=> {
  return (
    <>
   <Header/>
   


  
  <Layout> 
  <ThreeContainers/>

<DashPage/>
<AdditionalContainer/>

   </Layout>
    </>
  )
}


export default Dashboard
