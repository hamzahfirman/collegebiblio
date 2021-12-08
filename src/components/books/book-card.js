import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Button } from "react-bootstrap";

import BookCarousel from './book-carousel';
import "./book-card.css";



const BookCard = (props) => {

  function openGroupMe() {
    window.open("https://web.groupme.com",'sharer', 'toolbar=0,status=0,width=548,height=400');  
  }

  return (
      <div>
 <span id="book-photos"><BookCarousel photoFront={props.photoFront}/></span>
      <Card style={{ width: '25.3rem' }}>
            <Card.Body>
            <Card.Title><b>{props.title}</b><br/><br/><span>${props.price}</span></Card.Title>
            <Card.Text>
            Author: {props.author}
            </Card.Text>
            <Card.Text>
            User: {props.user}
            </Card.Text>
            <Card.Text>
            Class: {props.class}
            </Card.Text>
            <Button variant="primary" onClick={openGroupMe}>Contact Seller</Button>
            </Card.Body>
        </Card>
      </div>
  )};

export default BookCard;