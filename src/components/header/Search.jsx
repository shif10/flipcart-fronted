import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const InputContainer = styled(Box)`
  background: white;
  width: 30%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputBox = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  fontsize: unset;
`;
const SearchIconWrapper = styled(Box)`
  color: blue;
  display: flex;
`;
export const Search = () => {
  return (
    <InputContainer>
      <InputBox placeholder=" search for products,brands and more "></InputBox>
      <SearchIconWrapper>
        <SearchIcon sx={{ padding: "5px" }} />
      </SearchIconWrapper>
    </InputContainer>
  );
};
