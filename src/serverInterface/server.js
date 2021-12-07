import { useState } from "react";
import axios from "axios";
import { graphConfig } from "../authConfig";

// const API = "https://collegebiblioapi.herokuapp.com"
const API = "http://localhost:3001";

/* A list of functions for fetching data from the database */
export const pushANewUser = (data) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(API + "/api/users/signup", options)
    .then((response) => response)
    .catch((error) => console.log(error));
};
//  axios.post(
//     API + '/api/users/signup',
//    data
// ) }

export async function UploadImage(data) {
  let formData = new FormData();

  for (var [key, value] of Object.entries(data)) {
    if (key.includes("photo")) {
      let filename = value.split("\\")[2];
      formData.append(key, filename);
    }
  }
  console.log(formData);
  for (var key of formData.entries()) {
    console.log(key);
  }
  //   const options = {
  //     method: "POST",
  //     headers: { "content-type": "multipart/form-data" },
  //     body: formData
  //   };

  //   return await fetch(API + "/api/books/image", options)
  //     .then((response) => response.json())
  //     .catch((error) => console.log(error));

  axios
    .post(API + "/api/books/image", formData, {
      headers: { "content-type": "multipart/form-data" },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export const addBook = (data) => {
  axios.post(API + "/api/books/new", data).then((response) => response.data);
};

/* MS Graph API  */
/**
 * Attaches a given access token to a Microsoft Graph API call. Returns information about the user
 */
export async function callMsGraph(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(graphConfig.graphMeEndpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
