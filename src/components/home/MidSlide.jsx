import { Box, Grid, Slide } from "@mui/material";
import React from "react";
import { Slides } from "./Slides";

export const MidSlide = ({ product, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Box sx={{ display: "flex" }}>
      <Grid container>
        <Grid item xs={12} md={10}>
          {" "}
          <Slides product={product} title={title} timer={timer}></Slides>
        </Grid>
        <Grid item xs={2} sx={{ display: { xs: "none", md: "block" } }}>
          {" "}
          <Box
            sx={{
              background: "white",
              padding: "5px",

              marginLeft: "10px",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            <img src={adURL} alt="add" width={217}></img>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ width: "80%" }}></Box>
    </Box>
  );
};
