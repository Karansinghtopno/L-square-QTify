import React from "react";
import classes from "./Card.module.css";

const Card = ({ img, follows, title }) => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        {/* image */}
        <img src={img} alt="cardImage" />
        {/* followers */}
        <p>{`${follows}K follows`}</p>
      </div>
      <div className={classes.bottom}>{title}</div>
    </div>
  );
};

export default Card;
