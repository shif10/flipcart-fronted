import React, { useEffect, useState } from "react";

import { Box, styled } from "@mui/material";

import NavBar from "./Home/NarBar";
import Banner from "./Home/Banner";
import MidSlide from "./Home/MidSlide";
import MidSection from "./Home/MidSection";
import Slide from "./Home/Slide";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../redux/actions/productActions";
import LoginDialog from "./Login/LoginDialog";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const getProducts = useSelector((state) => state.getProducts);
  const [login, setLogin] = useState(null);
  const { products, error } = getProducts;
  console.log(products, "popopopo");
  const dispatch = useDispatch();
  console.log(products, "products");
  const loginToken = localStorage.getItem("flipCartUserToken");
  useEffect(() => {
    dispatch(listProducts());
    if (loginToken?.length) {
      setLogin(true);
      console.log(login, "login");
    } else {
      console.log("first,", "lo", login);
      setLogin(false);
    }
  }, [dispatch, loginToken]);

  return (
    <>
      <NavBar />

      {products ? (
        <Component>
          <Banner />
          <MidSlide products={products} />
          <MidSection />
          <Slide
            data={products?.products}
            title="Discounts for You"
            timer={false}
            multi={true}
          />
          <Slide
            data={products}
            title="Suggested Items"
            timer={false}
            multi={true}
          />
          <Slide
            data={products}
            title="Top Selection"
            timer={false}
            multi={true}
          />
          <Slide
            data={products}
            title="Recommended Items"
            timer={false}
            multi={true}
          />
        </Component>
      ) : (
        <CircularProgress
          thickness={2}
          size={80}
          sx={{
            marginLeft: "50%",
            marginTop: "10%",
            fontSize: 20,
          }}
        />
      )}
    </>
  );
};

export default Home;
