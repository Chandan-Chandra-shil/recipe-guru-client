import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';

import bannerOne from '../../assets/banner_01.jpg'
import bannerTwo from '../../assets/banner_02.jpg'
import bannerThree from '../../assets/banner_03.jpg'

import { Link, useLoaderData } from "react-router-dom";
import Services from "./Services/Services";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  
  const details = useLoaderData()
 
  

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
          <h1>Our Special Chefs</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            ullam!
          </p>
        </div>

        <div className="row" style={{ marginTop: "" }}>
          {details ? (
            details.map((detail) => (
              <div key={detail.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card">
                  <img
                    src={detail.chef_picture_url}
                    alt=""
                    className="card-img-top img-thumbnail"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{detail.chef_name}</h5>
                    <p className=" fs-5 text-muted">
                      <span>
                        Years of Experience : {detail.number_of_recipes}
                      </span>
                      <br />
                      <span>Likes : {detail.likes}</span>
                      <br />
                      <span> Recipes : {detail.number_of_recipes}</span>
                    </p>
                    <Link to={`/chefRecipes/${detail.id}`}>
                      <button className=" text-dark fw-semibold btn btn-warning">View Recipes</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Container>
      <Services></Services>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;