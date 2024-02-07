import { Box, Grid } from "@mui/material";
import React from "react";
import { imageURL } from "../../constants/data";

export const Midsection = () => {
  return (
    <Grid xs={12} container sx={{ marginTop: "10px" }}>
      {imageURL?.map((image) => {
        return (
          <Grid item xs={12} md={4}>
            <img src={image} width={"100%"} height={"300vh"}></img>;
          </Grid>
        );
      })}
    </Grid>
  );
};
