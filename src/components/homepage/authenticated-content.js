import React, { useState, useEffect } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";

import "./Home.css";
import { findAUser } from "../../serverInterface/server";
import HomeTemplate from "./home-template";
import { loginRequest } from "../../authConfig";
import { callMsGraph } from "../../serverInterface/server";
import SignUp from "../forms/SignUp";

const AuthenticatedContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].username;
  const user_email = accounts[0].username;

  function RequestProfileData() {
    const request = {
        ...loginRequest,
        account: accounts[0]
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance.acquireTokenSilent(request).then((response) => {
        callMsGraph(response.accessToken).then(response => setGraphData(response));
    }).catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        });
    });
}

  return (
      <>
      {user_email.includes(".edu")?
            <SignUp username={name}/>
             :
             <h5><center>Please sign in with your school email</center></h5>}
    
      </>
  );
};

export default AuthenticatedContent; 



