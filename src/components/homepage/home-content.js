import React, { useState } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";

import "./Home.css";
import { findAUser } from "../../serverInterface/server";
import HomeTemplate from "./home-template";
import { loginRequest } from "../../authConfig";
import ProfileContent from "./profile-content";
import { callMsGraph } from "../../serverInterface/server";


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



