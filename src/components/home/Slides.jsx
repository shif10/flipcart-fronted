import styled from "@emotion/styled";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
export const Slides = ({ product, title }) => {
  console.log("first", product);
  const Component = styled(Box)`
    margin-top: 10px;
    background: white;
  `;
  const Deal = styled(Box)`
    padding: 15px 10px;
    display: flex;
  `;
  const Timer = styled(Box)`
    display: flex;
    margin-left: 10;
    align-items: center;
    color: #7f7f7f;
  `;
  const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    margin-right: 25px;
    line-height: 32px;
  `;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
  `;
  console.log("prr", product);
  const renderer = ({ hours, minutes, seconds, completed }) => {
    return (
      <Box variant={"span"}>
        {hours}:{minutes}:{seconds}
      </Box>
    );
  };
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  console.log(product, "productsssss");
  return (
    product && (
      <Component>
        <Deal>
          <DealText>{title}</DealText>
          <Timer>
            <img src={timerURL} alt="timer" width={24}></img>
            <Countdown
              date={Date.now() + 14 * 60 * 60 * 1000}
              renderer={renderer}
            ></Countdown>
          </Timer>
          <Button
            sx={{
              marginLeft: "auto",
              background: "#2874f0",
              borderRadius: "2px",
              fontSize: 13,
            }}
            variant="contained"
          >
            View all
          </Button>
        </Deal>
        <Divider />

        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          keyBoardControl={true}
          infinite={true}
          // autoPlay={true}
          autoPlaySpeed={1000}
          transitionDuration={500}
          alt="banner"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-20-px"
          containerClass="carousel-container"
          sx={{ marginTop: 3 }}
        >
          {product?.map((product) => (
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Box textAlign={"center"} sx={{ padding: "25px 15px" }}>
                <img
                  src={product?.url}
                  alt="a"
                  style={{ width: "auto", height: "150px" }}
                ></img>
                <Text style={{ fontWeight: 600, color: "#212121" }}>
                  {product?.title?.shortTitle}
                </Text>
                <Text style={{ color: "green" }}>{product.discount}</Text>
                <Text style={{ color: "#212121", opacity: 0.6 }}>
                  {product.tagline}
                </Text>
              </Box>
            </Link>
          ))}
        </Carousel>
      </Component>
    )
  );
};
