import React, { useEffect } from "react";

import { Box, Slide } from "@mui/material";

import styled from "@emotion/styled";
import { Navbar } from "./Navbar";
import { Banner } from "./Banner";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Slides } from "./Slides";
import { MidSlide } from "./MidSlide";
import { Midsection } from "./Midsection";

export const Home = () => {
  const ComponentContainer = styled(Box)`
    padding: 10px 10px;
    background: #f2f2f2;
  `;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.getProducts);
  console.log("popop", products.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Box>
      <Navbar />
      <ComponentContainer>
        <Banner />
        {products?.products && (
          <>
            <MidSlide
              product={products.products.products}
              title={"deal of the day"}
              timer={true}
            ></MidSlide>
            <Midsection />
            <Slides
              product={products.products.products}
              title={"Discount for you"}
            ></Slides>
            <Slides
              product={products.products.products}
              title={"suggesting items for you"}
            ></Slides>
            <Slides
              product={products.products.products}
              title={"Top selection"}
            ></Slides>
            <Slides
              product={products.products.products}
              title="recomended items"
            ></Slides>
            <Slides
              product={products.products.products}
              title={"Top Deals On TVs & Appliances"}
            ></Slides>
            <Slides
              product={products.products.products}
              title="trending offers"
            ></Slides>
            <Slides
              product={products.products.products}
              title={"seasons top picks"}
            ></Slides>
          </>
        )}
      </ComponentContainer>
    </Box>
  );
};
