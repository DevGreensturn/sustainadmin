import React from "react";

const FooterSection =()=>{
    return(
        <>
        <section className="footersection">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="my-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="footerlogo">
                                        <img src="./images/footerLogo.png" alt="" />
                                        <div className="">
                                            <div className="copyright my-4 p-0">
                                            <p>Copyright &#x00a9; 2020 SustainInsight. <br />All rights reserved</p>
                                            </div>
                                            <div>
                                                <div className="footerlogo">
                                                    <img src="./images/insta.png" alt="" />
                                                    <img src="./images/twitter.png" alt="" />
                                                    <img src="./images/x.png" alt="" />
                                                    <img src="./images/youtube.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="footerHeading">
                                            <div>
                                                <h3>Company</h3>
                                            </div>
                                            <div className="mt-3 footerHeading-list">
                                                <ul>
                                                    <li>About us</li>
                                                    <li>Blog</li>
                                                    <li>Contact us</li>
                                                    <li>Pricing</li>
                                                    <li>Testimonial</li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                        <div className="footerHeading">
                                            <div>
                                                <h3>Support</h3>
                                            </div>
                                            <div className="mt-3 footerHeading-list">
                                                <ul>
                                                    <li>Help center</li>
                                                    <li>Terms of services</li>
                                                    <li>Legal</li>
                                                    <li>Privacy policy</li>
                                                    <li>Status</li>
                                                </ul>
                                            </div>
                                            </div>

                                        </div>
                                        
                                        <div className="col-md-4">
                                        <div className="footerHeading">
                                            <div>
                                                <h3>Support</h3>
                                            </div>
                                            <div className="mt-3 footerHeading-list">
                                                <ul>
                                                    <li>Help center</li>
                                                    <li>Terms of services</li>
                                                    <li>Legal</li>
                                                    <li>Privacy policy</li>
                                                    <li>Status</li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default FooterSection;