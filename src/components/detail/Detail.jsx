import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import { Box } from "@mui/material";

export const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.getProductDetails);
  console.log(product, loading, "pos");
  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product, loading]);
  console.log(id, "id");
  return <Box>{loading && <Box></Box>}</Box>;
};
