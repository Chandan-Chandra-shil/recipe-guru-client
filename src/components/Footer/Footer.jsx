import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white py-3">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h5>About Us</h5>
              <p>
                Recipe Guru is a website that provides a collection of delicious
                recipes from all over the world.
              </p>
              <div className='gap-2 d-flex'>
                <span>hello</span>
                <span>hello</span>
                <span>hello</span>
                <span>hello</span>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={3}>
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>123 Main Street</li>
                <li>Anytown, India 12345</li>
                <li>
                  <a href="mailto:info@foodrecipe.com">info@recipeguru.com</a>
                </li>
                <li>
                  <a href="tel:+1234567890">(123) 456-7890</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} className="text-center">
              <p className="mb-0">&copy; 2023 Recipe Guru</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;