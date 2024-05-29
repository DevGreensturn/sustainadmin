import Layout from "@/components/Layout"
import Header from "@/components/Layout/Header"
import DataEntryContainer from "@/page-containers/DateEntry"

const DataEntryPage=({childern})=> {
  return (
    <>
   <Header/>
   <Layout><DataEntryContainer/></Layout>
    </>
  )
}
export async function getServerSideProps(context) {

  return {
    props: {
     
    },
  }
}

export default DataEntryPage