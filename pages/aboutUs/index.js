

import AboutUs from "@/components/AboutUs/index"
import LayoutWebsite from "@/components/Layout"

const AboutUsPages=(props)=> {
  return (
    <LayoutWebsite>
     <AboutUs />
    </LayoutWebsite>
  )
}
export async function getServerSideProps(context) {
  
  
  return {
    props: {
     
    },
  }
}

export default AboutUsPages