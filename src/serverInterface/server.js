import axios from 'axios';

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

