import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import { LoginPage } from "../login/LoginPage";
import { DataContext } from "../../context/Dataprovoider";
import { Profile } from "../profile/Profile";

export const CustomButtons = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const { account } = useContext(DataContext);
  const handleClickOpen = () => {
    console.log("helo");
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const Wrapper = styled(Box)`
    display: flex;
    margin: 0 0 0 auto;
    & > button,
    & > p,
    & > div {
      margin-right: 40px;
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
  const LoadingButton = styled(Button)`
    color: #2874f0;
    background: white;
    text-align: center;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 630;
    // height: 20px;
  `;

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} />
      ) : (
        <LoadingButton onClick={() => handleClickOpen()}>LOGIN</LoadingButton>
      )}

      <Typography>Become a seller</Typography>
      <Typography>More</Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
      <LoginPage open={open} handleClose={handleClose} />
    </Wrapper>
  );
};
