import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";

import "./home-navbar.css";
import Content from "./home-content";
import LoginAzure from "./home-login-azure";

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
    </div>
  );
};
export default function HomeTemplate() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div>
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <Toolbar className="homeNavbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            College Biblio
          </Typography>
          <NavButtons />
          { isAuthenticated ? <span>Signed In</span> : <LoginAzure /> }
        </Toolbar>
      </AppBar>
    </Box>
    <h5><center>Welcome to the College Biblio</center></h5>
    </div>
  );
}
