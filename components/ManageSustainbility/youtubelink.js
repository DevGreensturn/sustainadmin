import React from "react";

const Youtubelink =()=>{
    return(
        <>
         <div className="video-responsive my-5">
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/watch?v=wmoy27EZ8y0`}
                    title="YouTube video player"
                    allowFullScreen
                ></iframe>
                </div>
        </>
    )
}
export default Youtubelink;