import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';

import bannerOne from '../../assets/banner_01.jpg'
import bannerTwo from '../../assets/banner_02.jpg'
import bannerThree from '../../assets/banner_03.jpg'

import { useLoaderData } from "react-router-dom";
import Services from "./Services/Services";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  
  const details = useLoaderData()
  console.log(details);

  return (
    <div>
      <Carousel fade className="mb-5">
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
      <Container>
        <div className="text-center mb-5">
          <h1>Our Special  Chef</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ullam!</p>
        </div>
        <div className="row row-cols-1 my-md-4 row-cols-md-3 ">
          {details.map((detail, id) => (
            <div className=" mb-4   ">
              <div>
                <img
                  className="img-thumbnail w-75 h-75"
                  src={detail.chef_picture_url}
                  alt=""
                />
                <div className="">
                  <h2> Name : {detail.chef_name}</h2>
                  <p> Experience : {detail.years_of_experience}</p>
                  <p>Recipes : {detail.number_of_recipes}</p>
                  <p> Likes :{detail.likes}</p>
                </div>
                <Button variant="outline-warning text-dark">Warning</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Services></Services>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;