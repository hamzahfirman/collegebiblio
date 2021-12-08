import * as React from "react";

import "./selling-isbn.css";
import UploadImages from "../../forms/upload-images";
import SendNewBook from "../../forms/send-book";

class BookFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      isbn,
      isbn13,
      edition,
      binding,
      authors,
      date_published,
      image,
      publisher,
    } = this.props.book;
    return (
      <div className="book-data">
        <div className="book-data">
          <h2>Book Details</h2>
          <div id="selling-book-image">
            <img src={image} height="187px" />
          </div>
          <p className="book-details">
            <h5>{title}</h5>
            ISBN-13: {isbn13} <br />
            ISBN-10: {isbn} <br />
            Authors: {authors} <br />
            Edition: {edition} <br />
            Binding: {binding} <br />
            Publisher: {publisher} <br />
            Published: {date_published} <br />
          </p>
        </div>
        <center>
          {" "}
          <SendNewBook bookInfo={this.props.book} />
        </center>
      </div>
    );
  }
}

export default BookFound;
