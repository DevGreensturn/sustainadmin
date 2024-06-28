
import React from 'react';
import styles from './Dashboard.module.css';

const ThreeContainers = () => {
  return (
    <>
    <section>
    <div className="row my-3 p-2">
          <div className="col-md-12">
            <div className="d-flex align-items-center justify-content-between">
              <div>
              <h3>GHG Emissions 2,000 tCO2e</h3>
              <p>Project Package</p>
              </div>
            </div>
            </div>
        </div>
        <div className='row my-3 p-2'>
          <div className='col-md-4'>
            <div>
            <div className="card" style={{border:"0", borderRadius:"20px"}}>
              <div className="card-body">
                <div className='d-flex align-items-center justify-content-between'>
                  <div>
                    <img src='/images/CARBON.svg' alt='' />
                  </div>
                  <div className='carbonEmmision'>
                    <img src='/images/trending-down.svg' alt='' />  
                    <div className='d-flex mx-2'>
                    <span style={{color:"red"}}>1%</span>
                      <p className='mx-2' style={{color:"#555770;", fontWeight:"600"}}>tCO2e</p>
                    </div>
                  </div>
                </div>

                <div className='mt-4 scope_section'>
                  <h5>Scope 1</h5>
                  <p>Direct emissions from sources that are owned or controlled by the reporting entity</p>
                </div>

                <div className='mt-5'>
                  <div className='d-flex box_bottom-img'>
                    <img src='/images/gallon.svg' alt='' />
                    <img src='/images/starMark.svg' alt='' />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className='col-md-4'>
          <div>
            <div className="card" style={{border:"0", borderRadius:"20px"}}>
              <div className="card-body">
                <div className='d-flex align-items-center justify-content-between'>
                  <div>
                    <img src='/images/carbon_dark.svg' alt='' />
                  </div>
                  <div className='carbonEmmision'>
                    <img src='/images/trending-down.svg' alt='' />  
                    <div className='d-flex mx-2'>
                    <span style={{color:"red"}}>20%</span>
                      <p className='mx-2' style={{color:"#555770;", fontWeight:"600"}}>tCO2e</p>
                    </div>
                  </div>
                </div>

                <div className='mt-4 scope_section'>
                  <h5>Scope 2</h5>
                  <p>Indirect emissions associated with the consumption of purchased electricity, steam, heating, or cooling by the reporting entity</p>
                </div>

                <div className='mt-5'>
                  <div className='d-flex box_bottom-img'>
                    <img src='/images/tap.svg' alt='' className='img-fluid'/>
                    <img src='/images/electricTower.svg' alt='' className='img-fluid'/>
                    <img src='/images/windMill.svg' alt='' className='img-fluid' />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className='col-md-4'>
          <div>
            <div className="card" style={{border:"0", borderRadius:"20px"}}>
              <div className="card-body">
                <div className='d-flex align-items-center justify-content-between'>
                  <div>
                    <img src='/images/scop3Image.svg' alt='' />
                  </div>
                  <div className='carbonEmmision'>
                    <img src='/images/trending-down.svg' alt='' />  
                    <div className='d-flex mx-2'>
                    <span style={{color:"red"}}>70%</span>
                      <p className='mx-2' style={{color:"#555770;", fontWeight:"600"}}>tCO2e</p>
                    </div>
                  </div>
                </div>

                <div className='mt-4 scope_section'>
                  <h5>Scope 3</h5>
                  <p>Emissions that occur in the organization{"'"}s value chain but they are not owned or controlled by the reporting entity</p>
                </div>

                <div className='mt-5'>
                  <div className='d-flex box_bottom-img'>
                    <img src='/images/crane.svg' alt='' className='img-fluid'/>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        
        <div className='row my-0 p-2'>
          <div className='col-md-12'>
          <div className="card" style={{border:"0px", borderRadius:"8px", background:"#061D2B"}}>
            <div className="card-body">
              <div className='emission_by-carbon-'>
              <div className='d-flex align-items-center justify-content-between'>
                <div>
                  <h5 style={{color:"#fff"}}>Emissions by Carbon <br /> Life Cycle Stages</h5>
                </div>
                <div>
                  <h6 style={{color:"#fff"}}>Project Package GHG Emissions</h6>
                  <h6 style={{color:"#80F2A9", textAlign:"right"}}>2,000 <span style={{fontWeight:"400"}}>tCO2e</span></h6>
                </div>  
              </div>
              <hr style={{color:"#fff"}} className='mb-5'/>

              <div className='d-flex justify-content-evenly mt-5 align-items-center'>
                <div className='text-center'>
                  <h5 style={{color:"#fff"}}>Product Stage</h5>
                  <div className='mt-5'>
                    <h4 style={{color:"#80F2A9", textAlign:"center"}}>A1</h4>
                    <h6 style={{color:"#fff"}}>Raw Materials Supply</h6>
                  </div>
                  <div className='mt-4'>
                    <h4 style={{color:"#80F2A9", textAlign:"center"}}>A2</h4>
                    <h6 style={{color:"#fff"}}>Transport Raw Materials</h6>
                  </div>
                  <div className='mt-4'>
                    <h4 style={{color:"#80F2A9", textAlign:"center"}}>A3</h4>
                    <h6 style={{color:"#fff"}}>Manufacturing</h6>
                  </div>
                </div>

                <div className='first-outer-circle'>
                <div className='second-outer-circle'>
                  <img src='/images/imageco2.svg' alt=''/>
                    <div className='verticalImage'>
                        <img src='/images/verticalimg.png' alt='' className='' style={{width:"100px"}}/>
                        <div className='greenDot'>
                        <img src='/images/greenDot.png' alt='' className='' style={{width:"10px"}}/>
                        </div>
                    </div>
                    <div className='verticalImageLeft'>
                        <img src='/images/verticalimgLeft.png' alt='' className='' style={{width:"100px"}}/>
                        <div className='greenDotLeft'>
                        <img src='/images/greenDot.png' alt='' className='' style={{width:"10px"}}/>
                        </div>
                    </div>
                </div>
                </div>

                <div>
                <div className='text-center'>
                  <h5 style={{color:"#fff"}}>Product Stage</h5>
                  <div className='mt-5'>
                    <h4 style={{color:"#80F2A9", textAlign:"center"}}>A4</h4>
                    <h6 style={{color:"#fff"}}>Transport</h6>
                  </div>
                  <div className='mt-4'>
                    <h4 style={{color:"#80F2A9", textAlign:"center"}}>A5</h4>
                    <h6 style={{color:"#fff"}}>Site Works</h6>
                  </div>
                </div>
                </div>
              </div>
              </div>
              </div>


              <div className='bottom_Emmission-carbon mt-5' style={{marginBottom:"-5px"}}>
                <img src='/images/treePlant.svg' alt='' className='img-fluid'/>
                <img src='/images/truck.svg' alt='' className='img-fluid' />
                <img src='/images/plant.svg' alt='' className='img-fluid'/>
                <img src='/images/mixtureMAchine.svg' alt='' className='img-fluid'/>
                <img src='/images/lifter.svg' alt='' className='img-fluid'/>
                </div>

              <div className='emission_by-carbon'>
               {/* <img src='/Images/treePlant.svg' alt='' className='img-fluid'/> */}
              </div>
                

              </div>
              </div>
              </div>

        <div className='row my-0 p-2'>
          <div className='col-md-12'>
          <div className="card" style={{border:"0px", borderRadius:"20px"}}>
            <div className="card-body">
            <div className="breakfastSchedule mt-3">
                <div className="d-flex">
                <div className="dailySchduleBox">
                  <div className='box-value-first box-value'>
                    <p>50%</p>
                  </div>

                    <div className="programedetails mt-4">
                        <h5> Concrete Mix</h5>
                    </div>

                    <div className="programedetails mt-4">
                        <div>
                          <img src='images/imageco.svg' alt='' className='img-fluid'/>
                          <div className='mt-3' style={{lineHeight:"10px"}}>
                          <h5>1,000</h5>
                          <span style={{fontWeight:"600", opacity:".5"}}>tCO2e</span>
                          </div>
                        </div>
                    </div>
                </div>
                
                <div className="dailySchduleBox">
                <div className='box-value'>
                    <p>5%</p>
                    </div>

                    <div className="programedetails mt-4">
                    <h5> Logistics</h5>
                    </div>

                    <div className="programedetails mt-4">
                        <div>
                          <img src='images/imageco.svg' alt='' className='img-fluid'/>
                          <div className='mt-3' style={{lineHeight:"10px"}}>
                          <h5>1,000</h5>
                          <span style={{fontWeight:"600", opacity:".5"}}>tCO2e</span>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="dailySchduleBox">
                <div className='box-value'>
                    <p>5%</p>
                    </div>
                    <div className="programedetails mt-4">
                    <h5> People<br />Transportation</h5>
                    </div>
                    <div className="programedetails mt-4">
                        <div>
                          <img src='images/imageco.svg' alt='' className='img-fluid'/>
                          <div className='mt-3' style={{lineHeight:"10px"}}>
                          <h5>1,000</h5>
                          <span style={{fontWeight:"600", opacity:".5"}}>tCO2e</span>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="dailySchduleBox">
                <div className='box-value'>
                    <p>5%</p>
                    </div>
                    <div className="programedetails mt-4">
                    <h5> Energy by <br />Utility provider</h5>
                    </div>
                    <div className="programedetails mt-4">
                        <div>
                          <img src='images/imageco.svg' alt='' className='img-fluid'/>
                          <div className='mt-3' style={{lineHeight:"10px"}}>
                          <h5>1,000</h5>
                          <span style={{fontWeight:"600", opacity:".5"}}>tCO2e</span>
                          </div>
                        </div>
                    </div>
                </div>
                
                <div className="dailySchduleBox">
                <div className='box-value'>
                    <p>5%</p>
                    </div>

                    <div className="programedetails mt-4">
                    <h5> Energy by <br />Non-Renewable<br /> Sources</h5>
                    </div>

                    <div className="programedetails mt-4">
                        <div>
                          <img src='images/imageco.svg' alt='' className='img-fluid'/>
                          <div className='mt-3' style={{lineHeight:"10px"}}>
                          <h5>1,000</h5>
                          <span style={{fontWeight:"600", opacity:".5"}}>tCO2e</span>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="dailySchduleBox">
                <div className='box-value'>
                      <p>5%</p>
                    </div>
                    <div className="programedetails mt-4">
                    <h5> Energy by <br />Renewable<br /> Sources</h5>
                    </div>

                    <div className="programedetails mt-4">
                        <div>
                          <img src='images/imageco.svg' alt='' className='img-fluid'/>
                          <div className='mt-3' style={{lineHeight:"10px"}}>
                          <h5>1,000</h5>
                          <span style={{fontWeight:"600", opacity:".5"}}>tCO2e</span>
                          </div>
                        </div>
                    </div>

                </div>

                <div className="dailySchduleBox">
                <div className='box-value'>
                     <p>10%</p>
                    </div>

                    <div className="programedetails mt-4">
                    <h5> Water <br />Consumption</h5>
                    </div>
                    <div className="programedetails mt-4">
                        <div>
                          <img src='images/imageco.svg' alt='' className='img-fluid'/>
                          <div className='mt-3' style={{lineHeight:"10px"}}>
                          <h5>1,000</h5>
                          <span style={{fontWeight:"600", opacity:".5"}}>tCO2e</span>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="dailySchduleBox">
                <div className='box-value'>
                  <p>10%</p>
                    </div>

                    <div className="programedetails mt-4">
                    <h5>Waste</h5>
                    </div>
                    <div className="programedetails mt-4">
                        <div>
                          <img src='images/imageco.svg' alt='' className='img-fluid'/>
                          <div className='mt-3' style={{lineHeight:"10px"}}>
                          <h5>1,000</h5>
                          <span style={{fontWeight:"600", opacity:".5"}}>tCO2e</span>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="dailySchduleBox">
                <div className='box-value-last'>
                  <p>10%</p>
                    </div>
                    <div className="programedetails mt-4">
                    <h5> Building <br />Material</h5>
                    </div>

                    <div className="programedetails mt-4">
                        <div>
                          <img src='images/imageco.svg' alt='' className='img-fluid'/>
                          <div className='mt-3' style={{lineHeight:"10px"}}>
                          <h5>1,000</h5>
                          <span style={{fontWeight:"600", opacity:".5"}}>tCO2e</span>
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
  );
};


export { ThreeContainers};



