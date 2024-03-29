import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import sliderimage from "../image/slider2.jpg";


const Homepage = () => {
    return (
        <div>
  
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 h-30"
                  src={sliderimage}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 h-30"
             src={sliderimage}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
      
    );
}

export default Homepage;

