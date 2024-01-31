import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";

export const CustomButtons = () => {
  const Wrapper = styled(Box)`
    display: flex;
    margin: 0 0 0 auto;
    & > button,
    & > p,
    & > div {
      margin-right: 30px;
      font-size: 16px;
      align-items: center;
    }
    & > p {
      margin-top: 3.5px;
    }
  `;
  const Container = styled(Box)`
    display: flex;
  `;
  const LoadingButton = styled(Box)`
    color: #2874f0;
    background: white;
    text-align: center;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 26px;
  `;

  return (
    <Wrapper>
      <LoadingButton>LOGIN</LoadingButton>
      <Typography>Become a seller</Typography>
      <Typography>More</Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  );
};
