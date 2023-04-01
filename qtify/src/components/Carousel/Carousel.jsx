import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classes from "./Carousel.module.css";

import Card from "../Card/AlbumCard/Card";

import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNav from "./CarouselRightNavigation/CarouselRightNav";

const Carousel = ({ data, type }) => {
  return (
    <div className={classes.container}>
      <Swiper
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
                // img={album.image}
                // follows={Math.round(album.follows / 1000)}
                // title={album.title}
                data={album}
                type={type}
              />
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
