import { Box, Typography } from "@mui/material";
import React from "react";

import styled from "@emotion/styled";
import { navData } from "../constant";

export const Navbar = () => {
  const Component = styled(Box)`
    display: flex;
    margin: 55px 130px 0 130px;
    justify-content: space-between;
  `;
  const Container = styled(Box)`
    padding: 12px 8px;
  `;
  return (
    <Component>
      {navData?.map((data) => {
        return (
          <Container>
            <img src={data.url} style={{ width: 64 }}></img>
            <Typography>{data.text}</Typography>
          </Container>
        );
      })}
    </Component>
  );
};
