import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Button } from "react-bootstrap";

import BookCarousel from './book-carousel';
import "./book-card.css";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function BookCard(props) {

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
            <Button variant="primary" href="https://web.groupme.com/signin">Contact Seller</Button>
            </Card.Body>
        </Card>
      </div>
  )};