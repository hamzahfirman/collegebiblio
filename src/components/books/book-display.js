import React, { useState, useEffect } from "react";
import { Grid, Box, Paper } from "@mui/material";
import axios from "axios";
import SearchBar from "material-ui-search-bar";
import { useHistory } from "react-router-dom";

// import "./Home.css";
import BookCard from "./book-card";
import BookNotFound from "./selling/selling-not-found";

export default function BookDisplay(props) {
  let history = useHistory();
  const [books, setBooks] = useState(false);
  const [booksData, setBooksData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const API = "http://localhost:3001";

  useEffect(() => {
    axios.get(API + "/api/books").then((response) => {
      setBooksData(response.data);
      setBooks(true);
    });
  }, []);


function searchBook(value){

  axios.post(API + "/api/books/search", {search: value}).then((response) => {
    setBooksData(response.data);
  });
}

  function showBooks(data) {
    return (
      <center>
      <Grid container rowSpacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(data).map((book, index) => (
          <Grid item xs={4} sm={4} md={4} md={4} key={index}>
            <item>
              <BookCard
                title={book.textbook_title}
                user={book.seller_name}
                author={book.textbook_author}
                class={book.course_name}
                photoFront={book.textbook_image}
                price={book.textbook_price}
              />
            </item>
          </Grid>
        ))}
      </Grid>
    </center>
    )
  }

  if (books){

    
    return (
      <>
      <center>
      <br/>
        <SearchBar
        className="search-bar-ui"
        value={searchValue}
        onChange={(newValue) => setSearchValue(newValue)}
        onRequestSearch={() => searchBook(searchValue)}
        onCancelSearch={() => {
          history.push('/')
          setSearchValue('');
        
      
        }}
        placeholder="Author, Title, or Course name"
      />
    </center>
      <br/>
      <br/>
      {/* {window.location.reload()} */}
      {booksData.data.length != 0? showBooks(booksData.data): <BookNotFound />}
      </>
    )
   
    
  }  
  return (
    <div>
      <center>
        <h1>Loading ... </h1>
      </center>
    </div>
  );
}
