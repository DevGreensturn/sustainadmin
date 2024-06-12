import React from "react";

const OurCustomer =()=>{
    return(
        <>
        <section className="ourCustomer">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div >
                       <div className="text-center my-5 our_customer">
                        <h2>Our Customers</h2>
                        <p>Over 1200 enterprises - from the largest global brands to regional leaders and mid-size companies - rely on EcoVadis to assess and manage sustainability practices within their supply chain.</p>
                        </div> 


                        <div className="my-5">
                            <div className="row">
                            <div className="col-md-4">
                            <div className="card ceo_box" style={{border:"0", height:"20rem"}}>
                                <img className="my-3" src="./images/Oval.png" alt="Card image cap" style={{maxWidth:"100px", padding:"10px"}}/>
                                <div className="card-body mt-3 ceo_words">
                                    <p>{'"'}You made it so simple. My new site is so much faster and easier to work with than my old site.{'"'}</p>
                                    <h5 className="my-3">Isabella Chavez</h5>
                                </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                            <div className="card ceo_box" style={{border:"0", height:"20rem"}}>
                                <img className="my-3" src="./images/curtis.png" alt="Card image cap" style={{maxWidth:"100px", padding:"10px"}}/>
                                <div className="card-body mt-3 ceo_words">
                                    <p>{'"'}Simply the best. Better than all the rest. I{"'"}d recommend this product to beginners and advanced users.{'"'}</p>
                                    <h5 className="my-3">Curtis Rhodes</h5>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className="card ceo_box" style={{border:"0", height:"20rem"}}>
                                <img className="my-3" src="./images/lucas.png" alt="Card image cap" style={{maxWidth:"100px", padding:"10px"}}/>
                                <div className="card-body mt-3 ceo_words">
                                    <p>{'"'}Must have book for all, who want to be Product Designer or Interaction Designer.{'"'}</p>
                                    <h5 className="my-3">Lucas Mann</h5>
                                </div>
                                </div>
                            </div>

                            <div className="mt-5">
                                <div className="imagesSlide">
                                    <img src="./images/Logo1.png" alt="" />
                                    <img src="./images/Logo2.png" alt="" />
                                    <img src="./images/Logo3.png" alt="" />
                                    <img src="./images/Logo4.png" alt="" />
                                    <img src="./images/Logo5.png" alt="" />
                                    <img src="./images/Logo6.png" alt="" />
                                    <img src="./images/Logo7.png" alt="" />
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
export default OurCustomer;