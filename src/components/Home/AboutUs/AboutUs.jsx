import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutUS from '../../../assets/aboutUS.jpg'
const AboutUs = () => {
  return (
    <div>
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={4}>
              <img
                style={{ backgroundColor: "#FFD95A" }}
                className="w-100 border p-4"
                src={aboutUS}
                alt=""
              />
            </Col>
            <Col md={8}>
              <h2 className="text-warning fs-1 mb-3">About Us</h2>

              <span className="fs-5">
                <p>
                  Recipe Guru website, we are passionate about bringing the
                  delicious We believe that food is about more than just
                  sustenance – it's about culture, tradition, and community.
                  That's why we strive to not only provide delicious recipes,
                  but also to share the stories and history behind each dish. We
                  want to give our visitors a deeper understanding and
                  appreciation of Indian food and its place in the world.
                </p>
                <p>
                  Our website features a wide variety of Indian recipes, from
                  classic dishes like butter chicken and biryani to lesser-known
                  regional specialties. We also provide step-by-step
                  instructions, photos, and videos to help you recreate these
                  dishes in your own kitchen. Whether you're a seasoned home
                  cook or just starting out, our recipes are designed to be
                  accessible and easy to follow.
                </p>
                <p>
                  Additionally, we offer resources to help you learn more about
                  Indian cuisine and cooking techniques. Our blog features
                  articles on everything from spice blends to regional
                  ingredients, and we also offer cooking classes and virtual
                  events for those who want to take their skills to the next
                  level. Our goal is to be a one-stop-shop for all things Indian
                  food, and to help people discover the joy and richness of this
                  amazing cuisine.
                </p>
              </span>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;