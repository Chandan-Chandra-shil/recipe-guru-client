import React from 'react';
import { Button, Card, Carousel, Container } from 'react-bootstrap';

import bannerOne from '../../assets/banner_01.jpg'
import bannerTwo from '../../assets/banner_02.jpg'
import bannerThree from '../../assets/banner_03.jpg'

const Home = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerOne} alt="First slide" />
        <Carousel.Caption>
          <h3 className="text-dark">First slide label</h3>
          <p className="text-dark">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerTwo} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="text-dark">First slide label</h3>
          <p className="text-dark">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerThree} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="text-dark">First slide label</h3>
          <p className="text-dark">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;