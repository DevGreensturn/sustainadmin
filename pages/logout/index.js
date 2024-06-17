import Layout from "@/components/Layout"
import Header from "@/components/Layout/Header"
import Logout  from "../../page-containers/Logout/index"
const Dashboard=({childern})=> {
  return (
    <>
   <Header/>
   <Layout>
    <div >
      <Logout/>
    </div>
   </Layout>
    </>
  )
}
// export async function getServerSideProps(context) {

//   return {
//     props: {
     
//     },
//   }
// }

export default Dashboard