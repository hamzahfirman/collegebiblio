import React from "react";
import Button from "@mui/material/Button";
import { Redirect } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

import { findAUser } from "../../serverInterface/server";


const handleOnClickLoginButton = (instance) => {
  instance.loginRedirect(loginRequest).catch(e => {
    console.error(e);
  });
}

const LoginAzure = () => { 
  const { instance } = useMsal();
    return (
        <Button color="inherit" onClick={() => handleOnClickLoginButton(instance)}>SIGN IN</Button>
    );
    }

export default LoginAzure;

