import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import React from "react";
import { logoURL, subURL } from "../constant";
import { Search } from "./Search";
import { CustomButtons } from "./CustomButtons";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const ImageBox = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;
const SubHeading = styled(Typography)`
  font-size: 12px;
  font-style: italic;
`;
const PlusImage = styled("img")`
  width: 10px;
  height: 10px;
  margin-left: 4px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <ImageBox>
          <img src={logoURL} alt="logo" style={{ width: 75 }}></img>
          <Box sx={{ display: "flex" }}>
            <SubHeading>
              Explore &nbsp;
              <Box component={"span"} sx={{ color: "#FFE500" }}>
                plus
              </Box>
              <PlusImage src={subURL} alt="sublogo"></PlusImage>
            </SubHeading>
          </Box>
        </ImageBox>
        <Search />
        <Box sx={{ marginLeft: 7 }}>
          <CustomButtons />
        </Box>
      </Toolbar>
    </StyledHeader>
  );
};
