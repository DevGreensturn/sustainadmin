import React from "react";

const LatestNews =()=>{
    return(
        <>
        <section className="latesNews">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center latest_news">
                            <h2>Latest News</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"'"}s standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-md-4">
                            <div className="latestNewSection">
                                <img src="./images/latest1.png" alt="" />
                                <div className="latestNewSection-des">
                                    <h6>Lorem Ipsum is simply dummy text of the printing & typesetting industry.</h6>
                                    <a style={{color:"#4CAF4F", fontWeight:"600"}}>Readmore <img src="../Images/tail-right.png" alt="" style={{marginLeft:"10px"}}/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="latestNewSection">
                            <img src="./images/latest2.png" alt="" />
                            <div className="latestNewSection-des">
                                <h6>Lorem Ipsum is simply dummy text of the printing & typesetting industry.</h6>
                                <a style={{color:"#4CAF4F", fontWeight:"600"}}>Readmore <img src="../Images/tail-right.png" alt="" style={{marginLeft:"10px"}}/></a>
                                </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="latestNewSection">
                            <img src="./images/latest3.png" alt="" />
                            <div className="latestNewSection-des">
                                <h6>Lorem Ipsum is simply dummy text of the printing & typesetting industry.</h6>
                                <a style={{color:"#4CAF4F", fontWeight:"600"}}>Readmore <img src="../Images/tail-right.png" alt="" style={{marginLeft:"10px"}}/></a>
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
export default LatestNews;