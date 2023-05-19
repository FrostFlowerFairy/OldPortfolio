import React from "react";
import portfolioPhoto from "../../assets/images/tiger.jpg";
import "./FeelingProud.css";

function FeelingProud(props) {
  // const theme = props.theme;
  return <img style={{borderRadius: '50%', width: '400px', marginLeft: '100px'}} src={portfolioPhoto} alt="portfolio-profile" />;
}

export default FeelingProud;
