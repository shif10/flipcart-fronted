import styled from "@emotion/styled";
import {
  Box,
  Button,
  Dialog,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../../context/Dataprovoider.js";

export const LoginPage = ({ open, handleClose }) => {
  const { setAccount } = useContext(DataContext);

  const initialValue = {
    login: {
      login: "view",
    },
    signUp: {
      signUp: "view",
    },
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [account, setAccountView] = useState(initialValue);

  const Component = styled(Box)`
    height: 80vh;
  `;
  const Image = styled(Grid)`
    background: #2874f0
      url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
      center 90% no-repeat;
    padding: 45px 35px;
    color: white;
  `;
  const Wrapper = styled(Grid)`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 25px 35px;

    & > div,
    & > button,
    & > p {
      margin-top: 10px;
    }
  `;
  const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
  `;
  const CreateACcount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
  `;

  const LoginButton = styled(Button)({
    textTransform: "none",
    background: "#FB6418",
    color: "white",
    height: "48px",
    borderRadius: "2px",
    "&:hover": {
      background: "#FB6418",
      color: "white",
    },
  });
  const ErrorMessage = styled("ErrorMessage")`
    color: red;
    font-size: 14px;
  `;
  const OrOtpButton = styled(Button)({
    textTransform: "none",
    background: "#FFFF",
    color: "#2874f0",
    height: "48px",
    borderRadius: "2px",
    "&:hover": {
      background: "#FFFF",
      color: "#2874f0",
    },
  });

  const toggleSignUp = () => {
    setAccountView(initialValue.signUp);
  };
  const toggleLogin = () => {
    setAccountView(initialValue.login);
  };
  const onLogin = async (data) => {
    console.log(data, "data is");
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND}login`,
        data
      );
      console.log(res, "response is");
      if (res?.status !== 200) {
        toast.error("wrong password or email or username");
      } else {
        toast.success("login successfully");
        setAccount(data.firstName);
      }
      reset();
      setAccount(res.data?.user?.firstName);
      handleClose();
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 401) {
        toast.error("wrong password or email or username");
      } else {
        toast.error("something wrong");
      }
    }
  };
  const onSignUp = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND}signUp`,
        data
      );
      console.log(res, "response is");
      if (res.status !== 200) {
        toast.error("please use another mail");
      } else {
        toast.success("Sign up successfully");
      }
      reset();
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("please use another mail");
      } else {
        toast.error("something wrong");
      }
    }
  };

  const imageUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";
  return (
    <div>
      {account?.login ? (
        <Dialog open={open} onClose={handleClose} fullWidth>
          <form onSubmit={handleSubmit(onLogin)}>
            <ToastContainer />
            <Component>
              <Grid container display={"flex"} height={"100%"}>
                <Image item xs={5}>
                  <Typography variant="h5">Login</Typography>
                  <Typography sx={{ mt: "20px" }}>
                    Get access to your Orders, Wishlist and Recommendations
                  </Typography>
                </Image>
                <Wrapper item xs={7} bgcolor={"white"}>
                  <TextField
                    variant="standard"
                    label="Enter Email/mobile number"
                    name="email"
                    {...register("email", {
                      required: "First Name is required",
                    })}
                  ></TextField>
                  <TextField
                    variant="standard"
                    label="Enter password"
                    name="password"
                    {...register("password", {
                      required: "First Name is required",
                    })}
                  ></TextField>
                  <Text>
                    By continuing, you agree to Flipkart's terms of use and
                    privacy
                  </Text>
                  <LoginButton variant="contained" type="submit">
                    Login
                  </LoginButton>
                  <Typography textAlign={"center"}>OR</Typography>
                  <OrOtpButton variant="contained">Request Otp</OrOtpButton>
                  <CreateACcount onClick={() => toggleSignUp()}>
                    New to flipCart ? create an account
                  </CreateACcount>
                </Wrapper>
              </Grid>
            </Component>
          </form>
        </Dialog>
      ) : (
        <Dialog open={open} onClose={handleClose} fullWidth>
          <ToastContainer />
          <form onSubmit={handleSubmit(onSignUp)}>
            <Component>
              <Grid container display={"flex"} height={"100%"}>
                <Image item xs={5}>
                  <Typography variant="h5">
                    Look's like you are new Here!
                  </Typography>
                  <Typography sx={{ mt: "20px" }}>
                    Sign up with your mobile number to get started
                  </Typography>
                </Image>
                <Wrapper item xs={7} bgcolor={"white"}>
                  <TextField
                    variant="standard"
                    label="Enter First Name"
                    name="firstName"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                  />
                  {errors.firstName && (
                    <ErrorMessage>{errors?.firstName?.message}</ErrorMessage>
                  )}

                  <TextField
                    variant="standard"
                    label="Enter LastName"
                    name="lastName"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                  />
                  {errors.lastName && (
                    <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>
                  )}

                  <TextField
                    variant="standard"
                    label="Enter UserName"
                    name="userName"
                    {...register("userName", {
                      required: "User Name is required",
                    })}
                  />
                  {errors.userName && (
                    <ErrorMessage>{errors.userName?.message}</ErrorMessage>
                  )}

                  <TextField
                    name="email"
                    variant="standard"
                    label="Enter Email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                  )}

                  <TextField
                    variant="standard"
                    label="Enter Password"
                    name="password"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>
                  )}

                  <TextField
                    name="phone"
                    variant="standard"
                    label="Enter Phone"
                    {...register("phone", { required: "Phone is required" })}
                  />
                  {errors.phone && (
                    <ErrorMessage>{errors.phone.message}</ErrorMessage>
                  )}

                  <LoginButton variant="contained" type="submit">
                    Register
                  </LoginButton>

                  <CreateACcount onClick={() => toggleLogin()}>
                    Already a user ? Login
                  </CreateACcount>
                </Wrapper>
              </Grid>
            </Component>
          </form>
        </Dialog>
      )}
    </div>
  );
};
