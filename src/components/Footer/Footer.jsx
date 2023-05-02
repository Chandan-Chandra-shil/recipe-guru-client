import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white py-3">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h5>About Us</h5>
              <p>
                Food Recipe is a website that provides a collection of delicious
                recipes from all over the world.
              </p>
            </Col>
            <Col xs={12} md={3}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/recipes">Recipes</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={3}>
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>123 Main Street</li>
                <li>Anytown, USA 12345</li>
                <li>
                  <a href="mailto:info@foodrecipe.com">info@foodrecipe.com</a>
                </li>
                <li>
                  <a href="tel:+1234567890">(123) 456-7890</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} className="text-center">
              <p className="mb-0">&copy; 2023 Food Recipe</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;