import axios from "axios";
import React from "react";
import {
  Get_product_fail,
  Get_product_success,
} from "../../constants/productConstants";

export const getProducts = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${process.env.REACT_APP_BACKEND}products`);
    dispatch({ type: Get_product_success, payload: data });
  } catch (error) {
    dispatch({ type: Get_product_fail, payload: error });
  }
};
