import React from "react";
import Button from "@mui/material/Button";
import { Redirect } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

import { findAUser } from "../../serverInterface/server";

const handleOnClickLogoutButton = (instance) => {
  instance.logoutRedirect(loginRequest).catch((e) => {
    console.error(e);
  });
};

const LogoutAzure = () => {
  const { instance } = useMsal();
  return (
    <Button color="inherit" onClick={() => handleOnClickLogoutButton(instance)}>
      LOG OUT
    </Button>
  );
};

export default LogoutAzure;
