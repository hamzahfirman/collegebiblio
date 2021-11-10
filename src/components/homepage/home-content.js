import React, { useState } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";

import "./Home.css";
import { findAUser } from "../../serverInterface/server";
import HomeTemplate from "./home-template";
import { loginRequest } from "../../authConfig";
import { ProfileData } from "../ProfileData";
import { callMsGraph } from "../../serverInterface/server";


function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

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
          <h5 className="card-title">Welcome {name}</h5>
          {graphData ? 
               <ProfileData graphData={graphData} />
              :
              <Button  color="inherit" onClick={RequestProfileData}>Request Profile Information</Button>
          }
      </>
  );
};

export default function Content() { 
    return (
      <>
      <HomeTemplate>
        <AuthenticatedTemplate>
          <ProfileContent />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
        <h5><center>You are not signed in! Please sign in.</center></h5>
        </UnauthenticatedTemplate>
      </HomeTemplate>
      </>
    );
  }



