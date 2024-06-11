"use client"

import React from "react";
import NumberCounter from "./NumberCounter";

const LocalBusiness =()=>{
    return(
        <>
        <section className="localBusiness">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="localBusiness">
                            <div className="">
                                <h2>Helping a local business reinvent itself</h2>
                                <p>We reached here with our hard work and dedication</p>
                            </div>
                            <div className="">
                                <div className="localBusiness-member">
                                <div className="localBusiness-counter">
                                    <img src="./images/members.png" alt="" />
                                    
                                    
                                    <div className="mx-3">
                                    <h6>2,245,341</h6>
                                    {/* <h6> <NumberCounter targetNumber={10000} duration={300000}/></h6> */}
                                    <p>Members</p>
                                    </div>
                                </div>
                                <div className="localBusiness-counter">
                                    <img src="./images/club.png" alt="" />
                                    <div className="mx-3">
                                    <h6>2,245,341</h6>
                                    <p>Members</p>
                                    </div>
                                </div>
                                </div>

                                <div className="localBusiness-member">
                                <div className="localBusiness-counter">
                                    <img src="./images/eventBooking.png" alt="" />
                                    <div className="mx-3">
                                    <h6>2,245,341</h6>
                                    <p>Members</p>
                                    </div>
                                </div>
                                <div className="localBusiness-counter">
                                    <img src="./images/payments.png" alt="" />
                                    <div className="mx-3">
                                    <h6>2,245,341</h6>
                                    <p>Members</p>
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
export default LocalBusiness;