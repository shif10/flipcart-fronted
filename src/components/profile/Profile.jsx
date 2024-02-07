import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { DataContext } from "../../context/Dataprovoider";
export const Profile = ({ account }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setAccount } = useContext(DataContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAccount("");
  };
  return (
    <Box>
      <Typography onClick={handleClick} style={{ marginTop: 2 }}>
        {account}
      </Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        sx={{ mt: 0.4 }}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={handleClose}>
          <LogoutIcon />
          <Typography sx={{ marginLeft: 2 }}>Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
