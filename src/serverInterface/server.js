import axios from 'axios';

const API = "https://collegebiblioapi.herokuapp.com"
// const API = "http://localhost:3000";

/* A list of functions for fetching data from the database */
export const pushANewUser = (data) => {
    
    axios.post( 
    API + '/api/users/signup', 
   data
) }

