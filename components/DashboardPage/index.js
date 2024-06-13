


// import React from 'react';
// import styles from './Dashboard.module.css'; 

// const ThreeContainers = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.box}>
//       <div className={styles.topRightText}>
//       <img src="../Images/trending-down.png" alt="Image" className={styles.icon} /> 
//             <p className={styles.redText}>1%</p>
//             <p>tCO2e</p>
//           </div>
//       <p className={styles.centeredText}>
//             Direct emissions from sources that are owned or controlled by the reporting entity
//           </p>
//       <p className={styles.text}>GHG Emissions 2,000 tCO2e</p>
//       <p className={styles.smallText}>Project Package</p>
   
//           <div className={styles.bottomLeftImages}>
//             <img src="../Images/yellow.png" alt="Left Image 1" className={styles.leftImage} />
//             <img src="../Images/image 17.png" alt="Left Image 2" className={styles.leftImage} />
//           </div>
        
//         <img src="../Images/image 20.png" alt="Image 1" className={styles.image20} />
//       </div>
//       <div className={styles.box}>
//         <img src="../Images/image 21.png" alt="Image 2" className={styles.image21} />
//       </div>
//       <div className={styles.box}>
//         <img src="../Images/image 22.png" alt="Image 3" className={styles.image22} />
//       </div>
//     </div>
//   );
// };

// export default ThreeContainers;



// import React from 'react';
// import styles from './Dashboard.module.css'; 

// const ThreeContainers = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.box}>
//         <div className={styles.topRightText}>
//           <img src="../Images/trending-down.png" alt="Image" className={styles.icon} /> 
//           <p className={styles.redText}>1%</p>
//           <p>tCO2e</p>
//         </div>
//         <p className={styles.centeredText}>
//           Direct emissions from sources that are owned or controlled by the reporting entity
//         </p>
//         <p className={styles.text}>GHG Emissions 2,000 tCO2e</p>
//         <p className={styles.smallText}>Project Package</p>
//         <div className={styles.bottomLeftImages}>
//           <img src="../Images/yellow.png" alt="Left Image 1" className={styles.leftImage} />
//           <img src="../Images/image 17.png" alt="Left Image 2" className={styles.leftImage} />
//         </div>
//         <img src="../Images/image 20.png" alt="Image 1" className={styles.image20} />
//       </div>
//       <div className={styles.box}>
      
//         <div className={styles.topRightText}>
//         <img src="../Images/trending-down.png" alt="Icon" className={styles.icon} /> {/* Include your icon here */}
//           <p className={styles.redText}>20%</p>
//           <p>tCO2e</p>
//         </div>
//         <p className={styles.centeredText}>
//           Indirect emissions associated with the consumption of purchased electricity, steam, heating, or cooling by the reporting entity
//         </p>
//         <img src="../Images/image 21.png" alt="Image 2" className={styles.image21} />
//         <div className={styles.bottomLeftImages}>
//           <img src="../Images/secbox1.png" alt="Left Image 1" className={styles.leftImage} />
//           <img src="../Images/secbox2.png" alt="Left Image 2" className={styles.leftImage} />
//           <img src="../Images/secbox3.png" alt="Left Image 2" className={styles.leftImage} />
//         </div>
//       </div>
//       <div className={styles.box}>
//       <div className={styles.topRightText}>
//       <img src="../Images/trending-down.png" alt="Icon" className={styles.icon} /> 
//           <p className={styles.redText}>70%</p>
//           <p>tCO2e</p>
//         </div>
//       <div className={styles.centeredText}>
//           Emissions that occur in the organization’s value chain but they are not owned or controlled by the reporting entity
//         </div>
       
//         <img src="../Images/image 22.png" alt="Image 3" className={styles.image22} />
//         <div className={styles.bottomLeftImages}>
//           <img src="../Images/thirdboximg.png" alt="Left Image 1" className={styles.leftImage} />
    
//         </div>
//       </div>
//       <div className={styles.rectangle}></div> 
//     </div>
//   );
// };

// export default ThreeContainers;


// import React from 'react';
// import styles from './Dashboard.module.css'; // Importing CSS module

// const Page = () => {
//   return (
//     <div style={{ backgroundColor: 'blue', color: 'white' }}>
//       {/* Navbar Section */}
//       <div style={{ height: '50px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         {/* Left side */}
//         <div>
//           <div style={{ fontSize: '24px' }}>Emissions by Carbon</div>
//           <div style={{ fontSize: '24px' }}>Life Cycle Stages</div>
//         </div>

//         {/* Right side */}
//         <div>
//           <div style={{fontSize:'24px'}}>Project Package GHG Emissions</div>
//           <div style={{textAlign:'right'}}>2,000 tCO2e</div>
//         </div>
//       </div>

//       {/* Middle Section */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//         {/* Container 1 */}
//         <div style={{ width: '33%', height: '400px' }}>
//           <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
//             <div style={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>Product Stage</div>
//             <div style={{ textAlign: 'center', fontSize: '22px' }}>A1</div>
//             <div style={{ textAlign: 'center', fontSize: '20px' }}>Raw Materials Supply</div>
//             <div style={{ textAlign: 'center', fontSize: '22px' }}>A2</div>
//             <div style={{ textAlign: 'center', fontSize: '20px' }}>Transport Raw Materials</div>
//             <div style={{ textAlign: 'center', fontSize: '22px' }}>A3</div>
//             <div style={{ textAlign: 'center', fontSize: '20px' }}>Manufacturing</div>
//           </div>
//         </div>

//         {/* Container 2 */}
//         <div style={{ width: '33%', height: '400px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           {/* Outer Circle */}
//           <div style={{ width: '95%', height: '95%', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', border: '3px solid white' }}>
//             {/* Inner Circle */}
//             <div style={{ width: '65%', height: '65%', borderRadius: '50%', border: '3px solid white', position: 'relative' }}>
//               {/* Image */}
//               <img src='../Images/co2img.png' alt="Image Missing" className={styles.co2png} />
//             </div>
//           </div>
//         </div>

//         {/* Container 3 */}
//         <div style={{ width: '33%', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//           <div style={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Construction Stage</div>
//           <div style={{ textAlign: 'center', fontSize: '22px' }}>A4</div>
//           <div style={{ textAlign: 'center', fontSize: '20px' }}>Transport</div>
//           <div style={{ textAlign: 'center', fontSize: '22px' }}>A5</div>
//           <div style={{ textAlign: 'center', fontSize: '20px' }}>Site Works</div>
//         </div>
//       </div>

//       {/* Image Section with green grass background */}
//       <div style={{ height: '157px', position: 'relative', display: 'flex', alignItems: 'flex-end', backgroundImage: `url('../Images/grass.png')`, backgroundSize: 'auto 100%', backgroundRepeat: 'repeat-x', bottom: 0 }}>
//       {/* First Image */}
//         <img src="../Images/tree.png" alt="Image" style={{ position: 'absolute', bottom: 0, left: 0, height: '100px', width: '100px' }} />

//         {/* Second Image */}
//         <img src="../Images/truck.png" alt="Image" style={{ position: 'absolute', bottom: 0, left: '120px', height: '100px', width: '100px' }} />

//         {/* Third Image */}
//         <img src="../Images/home.png" alt="Image" style={{ position: 'absolute', bottom: 0, left: '260px', height: '100px', width: '100px' }} />

//         {/* Fourth Image */}
//         <img src="../Images/truck2.png" alt="Image" style={{ position: 'absolute', bottom: 0, left: '400px', height: '100px', width: '100px' }} />

//         {/* Fifth Image */}
//         <img src="../Images/rightimg.png" alt="Image" style={{ position: 'absolute', bottom: 0, left: '530px', height: '100px', width: '100px' }} />
//       </div>

//     </div>
//   );
// };

// export default Page;








// // Dashboard.js


import React from 'react';
import styles from './Dashboard.module.css';





const ThreeContainers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.topRightText}>
          <img src="../Images/trending-down.png" alt="Image" className={styles.icon} /> 
          <p className={styles.redText}>1%</p>
          <p>tCO2e</p>
        </div>
        <p className={styles.centeredText}>
          Direct emissions from sources that are owned or controlled by the reporting entity
        </p>
        <p className={styles.text}>GHG Emissions 2,000 tCO2e</p>
        <p className={styles.smallText}>Project Package</p>
        <div className={styles.bottomLeftImages}>
          <img src="../Images/yellow.png" alt="Left Image 1" className={styles.leftImage} />
          <img src="../Images/image 17.png" alt="Left Image 2" className={styles.leftImage} />
        </div>
        <img src="../Images/image 20.png" alt="Image 1" className={styles.image20} />
      </div>
      <div className={styles.box}>
        <div className={styles.topRightText}>
          <img src="../Images/trending-down.png" alt="Icon" className={styles.icon} />
          <p className={styles.redText}>20%</p>
          <p>tCO2e</p>
        </div>
        <p className={styles.centeredText}>
          Indirect emissions associated with the consumption of purchased electricity, steam, heating, or cooling by the reporting entity
        </p>
        <img src="../Images/image 21.png" alt="Image 2" className={styles.image21} />
        <div className={styles.bottomLeftImages}>
          <img src="../Images/secbox1.png" alt="Left Image 1" className={styles.leftImage} />
          <img src="../Images/secbox2.png" alt="Left Image 2" className={styles.leftImage} />
          <img src="../Images/secbox3.png" alt="Left Image 2" className={styles.leftImage} />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.topRightText}>
          <img src="../Images/trending-down.png" alt="Icon" className={styles.icon} /> 
          <p className={styles.redText}>70%</p>
          <p>tCO2e</p>
        </div>
        <div className={styles.centeredText}>
          Emissions that occur in the organization’s value chain but they are not owned or controlled by the reporting entity
        </div>
        <img src="../Images/image 22.png" alt="Image 3" className={styles.image22} />
        <div className={styles.bottomLeftImages}>
          <img src="../Images/thirdboximg.png" alt="Left Image 1" className={styles.leftImage} />
        </div>
      </div>
      <div className={styles.rectangle}></div> 
    </div>
  );
};

const DashPage = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Navbar Section */}
      <div style={{ height: '50px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left side */}
        <div>
          <div style={{ fontSize: '24px' }}>Emissions by Carbon</div>
          <div style={{ fontSize: '24px' }}>Life Cycle Stages</div>
        </div>

        {/* Right side */}
        <div>
          <div style={{fontSize: '24px'}}>Project Package GHG Emissions</div>
          <div style={{textAlign: 'right'}}>2,000 tCO2e</div>
        </div>
      </div>

      {/* Middle Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {/* Container 1 */}
        <div style={{ width: '33%', height: '400px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div style={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>Product Stage</div>
            <div style={{ textAlign: 'center', fontSize: '22px' }}>A1</div>
            <div style={{ textAlign: 'center', fontSize: '20px' }}>Raw Materials Supply</div>
            <div style={{ textAlign: 'center', fontSize: '22px' }}>A2</div>
            <div style={{ textAlign: 'center', fontSize: '20px' }}>Transport Raw Materials</div>
            <div style={{ textAlign: 'center', fontSize: '22px' }}>A3</div>
            <div style={{ textAlign: 'center', fontSize: '20px' }}>Manufacturing</div>
          </div>
        </div>

        {/* Container 2 */}
        <div style={{ width: '33%', height: '400px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Outer Circle */}
          <div style={{ width: '95%', height: '95%', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', border: '3px solid white' }}>
            {/* Inner Circle */}
            <div style={{ width: '65%', height: '65%', borderRadius: '50%', border: '3px solid white', position: 'relative' }}>
              {/* Image */}
              <img src='../Images/co2img.png' alt="Image Missing" className={styles.co2png} />
            </div>
          </div>
        </div>

        {/* Container 3 */}
        <div style={{ width: '33%', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Construction Stage</div>
          <div style={{ textAlign: 'center', fontSize: '22px' }}>A4</div>
          <div style={{ textAlign: 'center', fontSize: '20px' }}>Transport</div>
          <div style={{ textAlign: 'center', fontSize: '22px' }}>A5</div>
          <div style={{ textAlign: 'center', fontSize: '20px' }}>Site Works</div>
        </div>
      </div>

      {/* Image Section with green grass background */}
      <div style={{ height: '157px', position: 'relative', display: 'flex', alignItems: 'flex-end', backgroundImage: `url('../Images/grass.png')`, backgroundSize: 'auto 100%', backgroundRepeat: 'repeat-x', bottom: 0 }}>
        <img src="../Images/tree.png" alt="Image" style={{ position: 'absolute', bottom: 0, left: 0, height: '100px', width: '100px' }} />
        {/* Second Image */}
        <img src="../Images/truck.png" alt="Image" style={{ position: 'absolute', bottom: 0, left: '120px', height: '100px', width: '100px' }} />
        {/* Third Image */}
        <img src="../Images/home.png" alt="Image" style={{ position: 'absolute', bottom: 0, left: '260px', height: '100px', width: '100px' }} />
        {/* Fourth Image */}
        <img src="../Images/truck2.png" alt="Image" style={{ position: 'absolute', bottom: 0, left: '400px', height: '100px', width: '100px' }} />
        {/* Fifth Image */}
        <img src="../Images/rightimg.png" alt="Image" style={{ position: 'absolute', bottom: 0, left: '530px', height: '100px', width: '100px' }} />
      </div>
    </div>
    
  );
};
// Additional Container
// const AdditionalContainer = () => {
//   return (
//     <div style={{ 
//       width: '1730px', 
//       height: '500px', 
//       marginTop: '20px', 
//       display: 'flex', 
//       flexDirection: 'column',
//       backgroundColor: 'wheat', // Set background color to wheat
//       borderRadius: '10px', // Round the corners
//       padding: '10px' // Add padding for gap
//     }}>
//       {/* Row with Eight Boxes */}
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <div style={{ width: '90px', height: '50px', borderRadius: '20%', backgroundColor: 'white', border: '3px solid black', textAlign: 'center', fontSize: '16px', lineHeight: '40px' }}>50%</div>
//         <div style={{ width: '90px', height: '50px', borderRadius: '20%', backgroundColor: 'white', border: '3px solid black', textAlign: 'center', fontSize: '16px', lineHeight: '40px' }}>5%</div>
//         <div style={{ width: '90px', height: '50px', borderRadius: '20%', backgroundColor: 'white', border: '3px solid black', textAlign: 'center', fontSize: '16px', lineHeight: '40px' }}>5%</div>
//         <div style={{ width: '90px', height: '50px', borderRadius: '20%', backgroundColor: 'white', border: '3px solid black', textAlign: 'center', fontSize: '16px', lineHeight: '40px' }}>5%</div>
//         <div style={{ width: '90px', height: '50px', borderRadius: '20%', backgroundColor: 'white', border: '3px solid black', textAlign: 'center', fontSize: '16px', lineHeight: '40px' }}>5%</div>
//         <div style={{ width: '90px', height: '50px', borderRadius: '20%', backgroundColor: 'white', border: '3px solid black', textAlign: 'center', fontSize: '16px', lineHeight: '40px' }}>10%</div>
//         <div style={{ width: '90px', height: '50px', borderRadius: '20%', backgroundColor: 'white', border: '3px solid black', textAlign: 'center', fontSize: '16px', lineHeight: '40px' }}>10%</div>
//         <div style={{ width: '90px', height: '50px', borderRadius: '20%', backgroundColor: 'white', border: '3px solid black', textAlign: 'center', fontSize: '16px', lineHeight: '40px' }}>10%</div>
//       </div>
//     </div>
//   );
// };

// export { ThreeContainers, DashPage, AdditionalContainer };






const AdditionalContainer = () => {
  return (
    <div style={{ 
      width: '1730px', 
      height: '500px', 
      marginTop: '20px', 
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: 'wheat',
      borderRadius: '10px',
      padding: '10px'
    }}>
      {/* Row with Eight Boxes */}
      <div style={{position: "relative"}}>
        <img src="../Images/Line34.png" alt="Image" className={ ""} style={{position:"absolute", marginTop:"25px", zIndex:"1", width:"101.5%",marginLeft:"-10px"}}/>
        <div style={{ display: 'flex', justifyContent: 'space-between' ,zIndex:"13" , position:"relative" }}>
     
          {/* First Box */}
          <div style={{ 
            width: '90px', 
            height: '50px', 
            borderRadius: '20%', 
            backgroundColor: 'white', 
            border: '3px solid black', 
            textAlign: 'center', 
            fontSize: '16px', 
            lineHeight: '40px'
          }}>50%</div>

          {/* Second Box */}
          <div style={{ 
            width: '90px', 
            height: '50px', 
            borderRadius: '20%', 
            backgroundColor: 'white', 
            border: '3px solid black', 
            textAlign: 'center', 
            fontSize: '16px', 
            lineHeight: '40px'
          }}>
           <div>5%</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '10px', margin: '5px 0', textAlign: 'left', height: "150px" }}>
              <li>Logistics</li>
            </ul>
            <img src="../Images/co2image.png" alt="Image1" style={{ width: '80px',  }} />
            <p>1,000</p>
            <p>tco2e</p>

          </div>

          {/* Third Box */}
          <div style={{ 
            width: '90px', 
            height: '50px', 
            borderRadius: '20%', 
            backgroundColor: 'white', 
            border: '3px solid black', 
            textAlign: 'center', 
            fontSize: '16px', 
            lineHeight: '40px'
          }}>
            <div>5%</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '10px', margin: '5px 0', textAlign: 'left', height: "150px"  }}>
              <li>People</li>
              <li style={{listStyle:"none"}}>Transportation</li>
              
            </ul>
            <img src="../Images/co2image.png" alt="Image1" style={{ width: '80px',  }} />
            <p>1,000</p>
             <p>tco2e</p>
          </div>
          {/* Fourth Box */}
          <div style={{ 
            width: '90px', 
            height: '50px', 
            borderRadius: '20%', 
            backgroundColor: 'white', 
            border: '3px solid black', 
            textAlign: 'center', 
            fontSize: '16px', 
            lineHeight: '40px'
          }}>
            <div>5%</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '10px', margin: '5px 0', textAlign: 'left', height: "150px" }}>
              <li>Energy by</li>
              <li style={{listStyle:"none"}}>Utility provider</li>
              
            </ul>
            <img src="../Images/co2image.png" alt="Image1" style={{ width: '80px',  }} />
            <p>1,000</p>
             <p>tco2e</p>
          </div>
          {/* Fifth Box */}
          <div style={{ 
            width: '90px', 
            height: '50px', 
            borderRadius: '20%', 
            backgroundColor: 'white', 
            border: '3px solid black', 
            textAlign: 'center', 
            fontSize: '16px', 
            lineHeight: '40px'
          }}>
             <div>5%</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '10px', margin: '5px 0', textAlign: 'left', height: "150px" }}>
              <li>Energy by Non-</li>
              <li  style={{listStyle:"none"}}>
              Renewable
              Sources</li>
            </ul>
            <img src="../Images/co2image.png" alt="Image1" style={{ width: '80px',  }} />
            <p>1,000</p>
             <p>tco2e</p>
          </div>
          {/* Sixth Box */}
          <div style={{ 
            width: '90px', 
            height: '50px', 
            borderRadius: '20%', 
            backgroundColor: 'white', 
            border: '3px solid black', 
            textAlign: 'center', 
            fontSize: '16px', 
            lineHeight: '40px'
          }}>
             <div>10%</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '10px', margin: '5px 0', textAlign: 'left', height: "150px" }}>
              <li>Energy by</li>
             <li style={{listStyle:'none'}}></li> Renewable Sources
            </ul>
            <img src="../Images/co2image.png" alt="Image1" style={{ width: '80px',  }} />
            <p>1,000</p>
             <p>tco2e</p>
          </div>
          {/* Seventh Box */}
          <div style={{ 
            width: '90px', 
            height: '50px', 
            borderRadius: '20%', 
            backgroundColor: 'white', 
            border: '3px solid black', 
            textAlign: 'center', 
            fontSize: '16px', 
            lineHeight: '40px'
          }}>
             <div>10%</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '10px', margin: '5px 0', textAlign: 'left',height: "150px" }}>
              <li>Water</li>
             <li style={{listStyle:'none'}}></li> Consumption
            </ul>
            <img src="../Images/co2image.png" alt="Image1" style={{ width: '80px',  }} />
            <p>1,000</p>
            <p>tco2e</p>
          </div>
          {/* Eighth Box */}
          <div style={{ 
            width: '90px', 
            height: '50px', 
            borderRadius: '20%', 
            backgroundColor: 'white', 
            border: '3px solid black', 
            textAlign: 'center', 
            fontSize: '16px', 
            lineHeight: '40px'
          }}>
             <div>10%</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '10px', margin: '5px 0', textAlign: 'left', height: "150px"}}>
              <li>Waste</li>
            </ul>
            <img src="../Images/co2image.png" alt="Image1" style={{ width: '80px',  }} />
            <p>1,000</p>
             <p>tco2e</p>
          </div>
        </div>
      </div>
      {/* Lines between the boxes */}
      <div  style={{
      }}>
      </div>
      {/* Text with Bullet Points */}
      <ul style={{marginLeft: '11px', marginTop: '10px', fontSize: '16px',height: "125px" }}>
        <li>Concrete Mix</li>
        <li>Building Material</li>
      </ul>
      <img src="../Images/co2image.png" alt="Image1" style={{ width: '80px',  }} />
      <p>1,000</p>
      <p>tco2e</p>
    </div>
  );
};
 export { ThreeContainers, DashPage, AdditionalContainer };



