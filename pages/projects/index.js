import Layout from "@/components/Layout"
import Header from "@/components/Layout/Header"
import ProjectsContainer from "@/page-containers/ProjectsContainer"

const PojectPage=({childern})=> {
  return (
    <>
   <Header/>
   <Layout> <ProjectsContainer/></Layout>
    </>
  )
}
export async function getServerSideProps(context) {

  return {
    props: {
     
    },
  }
}

export default PojectPage