import * as React from "react";

import SearchBar from "material-ui-search-bar";
import "./selling-isbn.css";
import isbnImg from "../../images/isbn-search.png";
import BookFound from "./selling-found";
import BookNotFound from "./selling-not-found";

class IsbnResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   
    return (
      <div>
        {this.props.data.book ? (
          <BookFound book={this.props.data.book} />
        ) : (
          <BookNotFound />
        )}
      </div>
    );
  }
}

class IsbnSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isbn: "",
      bookData: [],
      found: false,
    };
  }

  getIsbn(props) {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "47062_2570a1070a0fb4ddc07a418e37714dac",
    };

    fetch("https://api2.isbndb.com/book/" + this.state.isbn, {
      headers: headers,
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({ bookData: json, found: true });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    const { isbn, found, bookData } = this.state;

    return (
      <div className="isbn-search">
        <div className="isbn-text">
          <img src={isbnImg} alt="isbn-image" height="300px" />

          <h1 id="isbn-header-1">Why search by ISBN-13?</h1>
          <h5 id="isbn-header-5">The ISB number helps us..</h5>
        </div>

        <center className="search-bar">
          <h3 id="isbn-title">ISBN-13</h3>
          <SearchBar
            className="search-bar-ui"
            value={isbn}
            onChange={(newValue) => this.setState({ isbn: newValue })}
            onRequestSearch={() => this.getIsbn(isbn)}
            placeholder="ex.9780134093413 or 978-0134093413"
          />
        </center>

        {found ? <IsbnResult data={bookData} /> : ""}
        
      </div>
    );
  }
}

export default IsbnSearch;
