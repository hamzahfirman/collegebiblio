import * as React from 'react';

import './selling-isbn.css';
import SignIn from '../../forms/SignIn';


class BookFound extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { title, 
        isbn, 
        isbn13,
        edition,
        binding,
        authors,
        date_published,
        image,
        publisher
       } = this.props.book
    return (

      <div className="book-data">
       
        <h2>Book Details</h2>
        <p className="book-details">
        <h5>{title}</h5>
        ISBN-13: {isbn13} <br/>
        ISBN-10: {isbn} <br/>
        Authors: {authors} <br/>
        Edition: {edition} <br/>
        Binding: {binding} <br/>
        Publisher: {publisher} <br/>
        Published: {date_published} <br/>
        
        </p>
        <SignIn bookInfo={this.props.book} />
        </div>

    );

  }
}


export default BookFound;