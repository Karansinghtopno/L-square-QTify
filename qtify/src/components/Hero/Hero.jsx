import React from "react";
import classes from "./Hero.module.css";
import headphoneIcon from "../../assets/vibrating-headphone 1.png";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
            <h2>100 Thousand Songs, ad-free</h2>
            <h2>Over thousands podcast episodes</h2>
        </div>
        <div className={classes.right}>
          <img src={headphoneIcon} alt="heroSection_Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
