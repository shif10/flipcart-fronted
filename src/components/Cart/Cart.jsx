import { useContext, useEffect, useState } from "react";

import { Box, Typography, Button, Grid, styled } from "@mui/material";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

import { post } from "../../utils/paytm";
import { payUsingPaytm } from "../../service/api";
import LoginDialog from "../Login/LoginDialog";
import { LoginContext } from "../../context/ContextProvider";

const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;

const Cart = () => {
  const [storedCartItems, setstoredCartItems] = useState(
    localStorage.getItem("cart")
  );
  const { account, setAccount } = useContext(LoginContext);
  // const cartDetails = useSelector(state => state.cart);
  // const { cartItems } = cartDetails;
  const [login, setLogin] = useState(null);
  const loginToken = localStorage.getItem("flipCartUserToken");
  const { id } = useParams();

  useEffect(() => {
    setstoredCartItems(localStorage.getItem("cart"));
  }, []);
  const [cartItems, setCartItems] = useState(
    storedCartItems && JSON.parse(storedCartItems)
  );
  console.log(storedCartItems, "stored");
  //   useEffect(() => {
  //     if (cartItems && id !== cartItems.id) dispatch(addToCart(id));
  //   }, [dispatch, cartItems, id]);

  const removeItemFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    setAccount("");
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const buyNow = async () => {
    if (login) {
    } else {
      setLogin(true);
    }
  };

  return (
    <>
      {cartItems?.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Header>
            {cartItems?.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}
            <BottomWrapper>
              <StyledButton onClick={() => buyNow()} variant="contained">
                Place Order
              </StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
      <LoginDialog open={login} setOpen={setLogin}></LoginDialog>
    </>
  );
};

export default Cart;
