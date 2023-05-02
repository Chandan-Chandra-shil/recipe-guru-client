import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';

import bannerOne from '../../assets/banner_01.jpg'
import bannerTwo from '../../assets/banner_02.jpg'
import bannerThree from '../../assets/banner_03.jpg'
import ChefCard from './ChefCard/ChefCard';
import { useLoaderData } from "react-router-dom";

const Home = () => {
  /* const [chefDetails, setChefDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefDetail")
      .then((res) => res.json())
      .then((data) => setChefDetails(data))
      .catch((error) => console.log(error.message));
  }, []);
  */
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
      <Row xs={1} md={2} className="g-4">
        {details.map((detail, id) => (
          <Col>
            <Card>
              <Card.Img variant="top" className="img-fluid" src={detail.chef_picture_url} />
              <Card.Body>
                <Card.Title>{detail.chef_name}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;