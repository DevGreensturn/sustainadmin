import styles from "./Card.module.scss";

const Card = ({ children, width, height, color }) => {
  return (
    <div className={styles.cardWrapper}
      style={{
//         width: { width },
//         height: { height },
//         border: `2px solid ${color}`,
        background:"white",
 margin:"20px 0px",
  padding:"20px",
// display:"flex",
// alignItems:"center",
// justifyContent:"center",
 borderRadius:"10px",

      }}
     
    >
      {children}
    </div>
  );
};

export default Card;
