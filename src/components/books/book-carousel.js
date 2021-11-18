import * as React from 'react';
import { styled } from '@mui/material/styles';
// import { Carousel } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import book1 from '../images/book-sample-1.jpg';
// import book2 from '../images/book-sample-2.jpg';
// import book3 from '../images/book-sample-3.jpg';

export default function BookCarousel(props) {

  return (
        <Carousel showThumbs={false} width="350px" thumbWidth="30px" infiniteLoop={true} >
        <div>
            <img src={props.photoFront} height="400px" />
            <p className="legend">Front</p>
        </div>
        <div>
            <img src={props.photoInside} height="400px" />
            <p className="legend">Inside</p>
        </div>
        <div>
            <img src={props.photoBack} height="400px" />
            <p className="legend">Back</p>
        </div>
    </Carousel>
)};

