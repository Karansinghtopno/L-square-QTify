import React from "react";
import RightNav from "../../../assets/right_carousel.png";
import classes from "./CarouselRightNav.module.css";
import { useSwiper } from "swiper/react";
const CarouselRightNav = () => {
  const swiper = useSwiper();

  return (
    <div className={classes.container} onClick={() => swiper.slideNext()}>
      <img src={RightNav} alt="right_nav" />
    </div>
  );
};

export default CarouselRightNav;
