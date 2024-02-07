import React from "react";
import Carousel from "react-multi-carousel";
import { bannerData } from "../constant";
import styled from "@emotion/styled";
import "react-multi-carousel/lib/styles.css";
export const Banner = () => {
  const BannerStyle = styled("img")({
    width: "100%",
    height: 280,
  });

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        keyBoardControl={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        transitionDuration={500}
        alt="banner"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {bannerData.map((banner) => {
          return <BannerStyle src={banner.url}></BannerStyle>;
        })}
      </Carousel>
    </>
  );
};
