import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classes from "./Carousel.module.css";

import Card from "../Card/Card";

import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNav from "./CarouselRightNavigation/CarouselRightNav";

const Carousel = ({ data, type }) => {
  return (
    <div className={classes.container}>
      <Swiper spaceBetween={25} slidesPerView={"auto"}>
        {data.map((album) => {
          return (
            <SwiperSlide key={album.id}>
              <Card key={album.id} data={album} type={type} />
            </SwiperSlide>
          );
        })}
        <CarouselRightNav />
        <CarouselLeftNavigation />
      </Swiper>
    </div>
  );
};

export default Carousel;
