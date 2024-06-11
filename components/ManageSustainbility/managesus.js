import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS
import Youtubelink from "./youtubelink";

const ManageSustainbility =()=>{

    useEffect(() => {
        AOS.init({
          // Global settings
        });
      }, []); 

    return(
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="riskCompliance">
                    <div className="my-5 text-center">
                    <h2>From Risk & Compliance to Value & Impact</h2>
                </div>
                </div>
                </div>

                <div className="col-md-4">
                <div data-aos="fade-up-left" className="boxShadow">
                <div className="card justify-content-center" style={{border:"0"}}>
                    <img className="my-5 d-flex justify-content-center" src="Images/membership.png" alt="Card image cap" style={{ margin:"0 auto"}}/>
                    <div className="card-body text-center membership_orgnisation">
                        <h5 className="mt-0">Membership <br/>Organisations</h5>
                        <p className="my-3">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    </div>
                    </div>

                </div>
                <div className="col-md-4">
                <div data-aos="fade-up" className="boxShadow">
                <div className="card" style={{border:"0"}}>
                    <img className="my-5 d-flex justify-content-center" src="Images/nationaAssociation.png" alt="Card image cap" style={{maxWidth:"100px", margin:"0 auto"}}/>
                    <div className="card-body text-center membership_orgnisation">
                        <h5 className="mt-0">National <br/>Associations</h5>
                        <p className="my-3">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                <div data-aos="fade-up-right" className="boxShadow">
                <div className="card" style={{border:"0"}}>
                    <img className="my-5 d-flex justify-content-center" src="Images/clubAssociation.png" alt="Card image cap" style={{maxWidth:"100px", margin:"0 auto"}} />
                    <div className="card-body text-center membership_orgnisation">
                        <h5 className="mt-0">Clubs And <br/>Groups</h5>
                        <p className="my-3">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default ManageSustainbility;