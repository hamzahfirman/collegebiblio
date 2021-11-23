import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";

import "./home-template.css";
import LoginAzure from "./home-login-azure";
import LogoutAzure from "./home-logout-azure";
import logo from '../images/college-biblio-logo.png';

const NavButtons = () => {
  let history = useHistory()

  const handleClickHome = () => { 
    history.push("/");
  }
  const handleClickAbout = () => { 
    history.push("/sellbook");
  }
  const handleClickSignIn = () => { 
    history.push("/signin");
  }
  
  return (
    <div>
      <Button color="inherit" onClick={handleClickHome}>HOME</Button>
      <Button color="inherit" onClick={handleClickAbout}>SELL BOOK</Button>
    </div>
  );
};
export default function HomeTemplate(props) {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div>
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <Toolbar className="homeNavbar">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="CollegeBiblio-logo" height='37px' />
          </Typography>
          <NavButtons />
          { isAuthenticated ? <span><LogoutAzure /></span> : <LoginAzure /> }
        </Toolbar>
      </AppBar>
    </Box>
    {props.children}
    </div>
  );
}
