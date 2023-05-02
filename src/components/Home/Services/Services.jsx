import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


const Services = () => {
  return (
    <div>
      
       <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Indian Food Services</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://example.com/img1.jpg" />
              <Card.Body>
                <Card.Title>Delicious Recipes</Card.Title>
                <Card.Text>
                  Our chefs are experts in creating delicious Indian recipes that will satisfy your cravings for authentic flavors. From traditional curries to modern fusion dishes, we have a wide range of options that will leave you wanting more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://example.com/img2.jpg" />
              <Card.Body>
                <Card.Title>Authentic Ingredients</Card.Title>
                <Card.Text>
                  We use only the freshest and most authentic Indian ingredients to create our dishes. From aromatic spices to high-quality meats and vegetables, our ingredients are carefully selected to ensure the best taste and quality.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://example.com/img3.jpg" />
              <Card.Body>
                <Card.Title>Easy Cooking Tips</Card.Title>
                <Card.Text>
                  Want to learn how to cook delicious Indian food at home? Our chefs will teach you all the tips and tricks you need to know to create restaurant-quality dishes in your own kitchen. From basic techniques to advanced skills, we've got you covered.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </section>
    </div>
  );
};

export default Services;