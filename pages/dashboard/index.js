import Layout from "@/components/Layout"
import Header from "@/components/Layout/Header"
// import SuppliersListContainer from "@/page-containers/SuppliersListContainer"

const Dashboard=({childern})=> {
  return (
    <>
   <Header/>
   <Layout>
    <div >
      <h1 >"No data available."</h1>
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