import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

import "./home-navbar.css";

const NavButtons = () => {
  let history = useHistory()

  const handleClickHome = () => { 
    history.push("/");
  }
  const handleClickAbout = () => { 
    history.push("/about");
  }
  const handleClickSignIn = () => { 
    history.push("/signin");
  }
  return (
    <div>
      <Button color="inherit" onClick={handleClickHome}>HOME</Button>
      <Button color="inherit" onClick={handleClickAbout}>ABOUT</Button>
      <Button color="inherit" onClick={handleClickSignIn}>SIGN IN</Button>
    </div>
  );
};
export default function Navbar() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <Toolbar className="homeNavbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            College Biblio
          </Typography>
          <NavButtons />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
