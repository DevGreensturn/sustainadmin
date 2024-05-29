import Layout from "@/components/Layout"
import Header from "@/components/Layout/Header"
import SuppliersListContainer from "@/page-containers/SuppliersListContainer"

const SuppliersList=({childern})=> {
  return (
    <>
   <Header/>
   <Layout> <SuppliersListContainer /></Layout>
    </>
  )
}
export async function getServerSideProps(context) {

  return {
    props: {
     
    },
  }
}

export default SuppliersList