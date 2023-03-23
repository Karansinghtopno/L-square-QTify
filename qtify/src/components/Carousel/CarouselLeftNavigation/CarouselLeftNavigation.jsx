import React from "react";
import LeftNavIcon from "../../../assets/left_carousel.png";
import classes from "./CarouselLeftNavigation.module.css";
import { useSwiper } from "swiper/react";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className={classes.container} onClick={() => swiper.slidePrev()}>
      <img src={LeftNavIcon} alt="leftNav" />
    </div>
  );
};

export default CarouselLeftNavigation;
