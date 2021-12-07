import React, { useState, useEffect } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Grid, Box, Paper } from "@mui/material";

// import "./Home.css";
import { FindAUser } from "../../serverInterface/server";
import { loginRequest } from "../../authConfig";
import { callMsGraph } from "../../serverInterface/server";
import SignUp from "../forms/SignUp";
import BookCard from "./book-card";
import BooksData from "./book-data";

export default function BookDisplay(props) {
  console.log(props.location);
  return (
    <center>
      <Grid container rowSpacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(BooksData).map((book, index) => (
          <Grid item xs={4} sm={4} md={4} md={4} key={index}>
            <item>
              <BookCard
                title={book.title}
                user={book.user}
                author={book.author}
                class={book.class}
                photoFront={book.photoFront}
                photoInside={book.photoInside}
                photoBack={book.photoBack}
              />
            </item>
          </Grid>
        ))}
      </Grid>
    </center>
  );
}
