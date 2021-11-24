import * as React from 'react';

import './selling-isbn.css';
import isbnNotFoundImg from '../../images/isbn-not-found.png';


class BookNotFound extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (

      <div>
          <br/>
        <img src={isbnNotFoundImg} alt="isbn-image" height='300px' />
        <h1>Book Not Found...</h1> <br/>
        Try again! 
        </div>

    );

  }
}


export default BookNotFound;