import React, { useState, useEffect } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { experimentalStyled as styled } from '@mui/material/styles';
import { Grid, Box, Paper } from '@mui/material';

import "./Home.css";
import { findAUser } from "../../serverInterface/server";
import HomeTemplate from "./home-template";
import { loginRequest } from "../../authConfig";
import { callMsGraph } from "../../serverInterface/server";
import SignUp from "../forms/SignUp";
import  BookCard from "../books/book-card";
import BooksData from "../books/book-data";
import ProfileDisplay from "../../profile/profile-display";


const AuthenticatedContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].username;
  const user_email = accounts[0].username;
  

//   Display stored books
  const BookDisplay = () => {
    return(
        <center>
    <Grid container rowSpacing={2} columns={{ xs: 4, sm: 8, md: 12,}}>
            {Array.from(BooksData).map((book, index) => (
            <Grid item  xs={4} sm={4} md={4} md={4} key={index}>
                <item><BookCard
                title={book.title} 
                user={book.user} 
                author={book.author} 
                class={book.class}
                photoFront= {book.photoFront}
                photoInside= {book.photoInside}
                photoBack= {book.photoBack} /></item>
            </Grid>
        ))}
        </Grid>
        </center>);}  

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
            // <SignUp username={name}/>
            <BookDisplay />
            // <ProfileDisplay />

             :
             <h5><center>Please sign in with your school email</center></h5>}
    
      </>
  );
};

export default AuthenticatedContent; 



