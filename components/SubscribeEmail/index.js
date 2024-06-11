import React from "react";

const SubscribeEmail =()=>{
    return(
        <>
        <section className="susbcribeemail">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
            <div className="susbcribeemail-text">
                <div className="">
                    <h2 className="text-white">Subscribe to our newsletter to get latest news on your inbox.</h2>
                </div>
                <div className="susbcribeemail-button">
                    <input type="email" className="form-control" placeholder="Enter your email"/>
                    <button type="btn" className="btn btn-success mx-3">Subscribe <img src="./Images/tail-right.png" alt="" style={{marginLeft:"45px"}}/></button>
                </div>
            </div>
            </div>
            </div>
            </div>
        </section>
        </>
    )
}
export default SubscribeEmail;