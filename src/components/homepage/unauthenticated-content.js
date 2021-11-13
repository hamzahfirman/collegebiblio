import React, { useState, useEffect } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";

import "./unauthenticated-content.css";
import { findAUser } from "../../serverInterface/server";
import HomeTemplate from "./home-template";
import { loginRequest } from "../../authConfig";
import { callMsGraph } from "../../serverInterface/server";
import SignUp from "../forms/SignUp";
import people from '../images/sign-in-people.png';


const UnauthenticatedContent = () => {


  return (
      <>    
     <div className='sign-in-content'><img id='sign-in-people'src={people} alt="sign-in-people" height='250px' />
     <div id='phrase'> A library created for students by students.</div>
    <h5 id='warning-sign-in'>It seems that you are not signed in. Please sign in!</h5>
     </div>
    
      </>
  );
}

export default UnauthenticatedContent; 