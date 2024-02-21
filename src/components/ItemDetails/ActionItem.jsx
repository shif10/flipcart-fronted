import { useState } from "react";

import { Button, Box, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import LoginDialog from "../Login/LoginDialog";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const { id } = product;
  const [login, setLogin] = useState(null);
  const loginToken = localStorage.getItem("flipCartUserToken");
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cart");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  console.log(cartItems, "items");
  const buyNow = async () => {
    if (loginToken) {
      let response = await payUsingPaytm({
        amount: 500,
        email: "codeforinterview01@gmail.com",
      });
      var information = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: response,
      };
      post(information);
    } else {
      setLogin(true);
    }
  };

  const addToCart = (item) => {
    console.log("Adding to cart:", item);

    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedCartItems);
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    }

    navigate("/cart");
  };

  return (
    <>
      <LeftContainer>
        <Image src={product.detailUrl} />
        <br />
        <StyledButton
          onClick={async () => await addToCart(product)}
          style={{ marginRight: 10, background: "#ff9f00" }}
          variant="contained"
        >
          <Cart />
          Add to Cart
        </StyledButton>
        <StyledButton
          onClick={() => buyNow()}
          style={{ background: "#fb641b" }}
          variant="contained"
        >
          <Flash /> Buy Now
        </StyledButton>
      </LeftContainer>
      <LoginDialog open={login} setOpen={setLogin}></LoginDialog>
    </>
  );
};

export default ActionItem;
