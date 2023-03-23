import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classes from "./Carousel.module.css";


import Card from "../Card/Card";

import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNav from "./CarouselRightNavigation/CarouselRightNav";

const Carousel = ({ data }) => {
  return (
    <div className={classes.container}>
      <Swiper
      // style={{width:"100%", border:"1px solid red", margin:"0px"}}
        spaceBetween={25}
        slidesPerView={"auto"}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((album) => {
          return (
            <SwiperSlide key={album.id}>
              <Card
                key={album.id}
                img={album.image}
                follows={Math.round(album.follows / 1000)}
                title={album.title}
              />
            </SwiperSlide>
          );
        })}
        <CarouselRightNav/>
        <CarouselLeftNavigation />
      </Swiper>
    </div>
  );
};

export default Carousel;
