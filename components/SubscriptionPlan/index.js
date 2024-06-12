import React from "react";

const SubscriptionPlan =()=>{
    return(
        <>
            <section className="SubscriptionPlan">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mt-5">
                                <div>
                                    <h2>Subscription Plan</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                                </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-4">
                            <div className="susbcriptionPlan_starter">
                            <div className="card" style={{border:"0"}}>
                            <div className="card-body px-5 mt-3">
                                <h5 className="card-title">Starter</h5>
                                <div className="my-4"><span className="dollar_icon">$</span><span className="price_starter">19</span><span className="price_monthly">/ months</span></div>
                                <p><span className="billed_monthly">billed monthly</span></p>
                                
                                <div>
                                    <ul className="list_pricing">
                                        <li><img src="../Images/tik_success.png" alt="" className=""/> <span className="mx-3">Commercial License </span></li>
                                        <li><img src="../Images/tik_success.png" alt=""/> <span className="mx-3">100+ HTML UI Elements</span></li>
                                        <li><img src="../Images/tik_success.png" alt=""/> <span className="mx-3">01 Domain Support</span></li>
                                        <li><img src="../Images/corss_secondary.png" alt=""/> <span className="mx-3">6 Month Premium Support</span></li>
                                        <li><img src="../Images/corss_secondary.png" alt=""/> <span className="mx-3">Lifetime Updates</span></li>
                                    </ul>
                                    <div className="start_free_trial my-3">
                                        <button type="btn" className="btn btn-outline-success">Start free Trail <img src="../Images/tail-right.png" alt="" style={{marginLeft:"45px"}}/></button>
                                    </div>
                                    <div className="no_credit_required mt-3">
                                        <p>No credit card required</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                        <div className="susbcriptionPlan_starter">
                            <div className="card" style={{border:"0"}}>
                            <div className="card-body px-5 mt-3">
                                <h5 className="card-title">Standard</h5>
                                <div className="my-4"><span className="dollar_icon">$</span><span className="price_starter">49</span><span className="price_monthly">/ months</span></div>
                                <p><span className="billed_monthly">billed monthly</span></p>
                                
                                <div>
                                    <ul className="list_pricing">
                                        <li><img src="../Images/tik_success.png" alt="" className=""/> <span className="mx-3">Commercial License </span></li>
                                        <li><img src="../Images/tik_success.png" alt=""/> <span className="mx-3">100+ HTML UI Elements</span></li>
                                        <li><img src="../Images/tik_success.png" alt=""/> <span className="mx-3">01 Domain Support</span></li>
                                        <li><img src="../Images/tik_success.png" alt=""/> <span className="mx-3">6 Month Premium Support</span></li>
                                        <li><img src="../Images/corss_secondary.png" alt=""/> <span className="mx-3">Lifetime Updates</span></li>
                                    </ul>
                                    <div className="start_free_trial my-3">
                                        <button type="btn" className="btn btn-outline-success">Start free Trail <img src="../Images/tail-right.png" alt="" style={{marginLeft:"45px"}}/></button>
                                    </div>
                                    <div className="no_credit_required mt-3">
                                        <p>No credit card required</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="susbcriptionPlan_starter">
                            <div className="card" style={{border:"0"}}>
                            <div className="card-body px-5 mt-4">
                                <h5 className="card-title">Premium</h5>
                                <div className="my-4"><span className="dollar_icon">$</span><span className="price_starter">99</span><span className="price_monthly">/ months</span></div>
                                <p><span className="billed_monthly">billed monthly</span></p>
                                
                                <div>
                                    <ul className="list_pricing">
                                        <li><img src="../Images/tik_success.png" alt="" className=""/> <span className="mx-3">Commercial License </span></li>
                                        <li><img src="../Images/tik_success.png" alt=""/> <span className="mx-3">100+ HTML UI Elements</span></li>
                                        <li><img src="../Images/tik_success.png" alt=""/> <span className="mx-3">01 Domain Support</span></li>
                                        <li><img src="../Images/tik_success.png" alt=""/> <span className="mx-3">6 Month Premium Support</span></li>
                                        <li><img src="../Images/tik_success.png" alt=""/> <span className="mx-3">Lifetime Updates</span></li>
                                    </ul>
                                    <div className="start_free_trial my-3">
                                        <button type="btn" className="btn btn-outline-success">Start free Trail <img src="../Images/tail-right.png" alt="" style={{marginLeft:"45px"}}/></button>
                                    </div>
                                    <div className="no_credit_required mt-3">
                                        <p>No credit card required</p>
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
export default SubscriptionPlan;