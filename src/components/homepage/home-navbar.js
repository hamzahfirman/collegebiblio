import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const Buttons = () => {
  return (
    <div>
      <Button color="inherit">HOME</Button>
      <Button color="inherit">ABOUT</Button>
      <Button color="inherit">SIGN IN</Button>
    </div>
  );
};
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            College Biblio
          </Typography>
          <Buttons />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
