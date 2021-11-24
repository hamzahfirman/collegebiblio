import axios from 'axios';
import { graphConfig } from "../authConfig";

// const API = "https://collegebiblioapi.herokuapp.com"
const API = "http://localhost:3001";

/* A list of functions for fetching data from the database */
export const pushANewUser = (data) => {
    
    axios.post( 
    API + '/api/users/signup', 
   data
) }

export const findAUser =  (data) => {
   axios.post( 
        API + '/api/users/login', 
       data
    )   
    
}

export const addBook =  (data) => {
    axios.post( 
         API + '/api/books/new', 
        data
     )   
     
 }


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
       headers: headers
   };

   return fetch(graphConfig.graphMeEndpoint, options)
       .then(response => response.json())
       .catch(error => console.log(error));
}
