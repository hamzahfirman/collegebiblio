import React, { useState } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";

import "./Home.css";
import { findAUser } from "../../serverInterface/server";
import HomeTemplate from "./home-template";
import { loginRequest } from "../../authConfig";
import AuthenticatedContent from "./authenticated-content";
import UnauthenticatedContent from "./unauthenticated-content";
import { callMsGraph } from "../../serverInterface/server";



export default function Content() { 
    return (
      <>
      <HomeTemplate>
        <AuthenticatedTemplate>
          <AuthenticatedContent />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <UnauthenticatedContent />
        </UnauthenticatedTemplate>
      </HomeTemplate>
      </>
    );
  }



