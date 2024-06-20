import Layout from "@/components/Layout"
import Header from "@/components/Layout/Header"
import DataEntryContainer from "@/page-containers/DateEntry"

import AdminRolesection from "@/page-containers/AdminRole"

const AdminRolePage=({childern})=> {
  return (
    <>
   <Header/>
   <Layout><AdminRolesection /></Layout>
    </>
  )
}
export async function getServerSideProps(context) {

  return {
    props: {
     
    },
  }
}

export default AdminRolePage;