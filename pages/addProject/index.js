import Layout from "@/components/Layout"
import Header from "@/components/Layout/Header"
 import AddProject from "@/page-containers/AddProject"


const addProject=({childern})=> {
  return (
    <>
   <Header/>
   <Layout><AddProject/></Layout>
    </>
  )
}


export default addProject