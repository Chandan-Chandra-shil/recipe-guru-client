import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { ToastContainer, toast } from "react-toastify";

const Services = () => {
  const notify = () => toast("Complete Your Order!");
  return (
    <div>
      <Container className="py-5 bg-light m-sm-auto">
        <h2 className="text-center text-warning fs-1 mb-5">Popular Recipes</h2>
        <Row xs={1} md={3} lg={4} className="gap-2 justify-content-center  ">
          <Col className=" mb-4  ">
            <Card
              className="border border-warning p-2"
              
            >
              <Card.Img
                variant="top"
                src="https://www.tasteofhome.com/wp-content/uploads/2021/01/the-hyderabadi-chicken-biryani-is-photographed-at-akshaya-168918303.jpg?resize=768,768"
              />
              <Card.Body>
                <Card.Title>Biryani</Card.Title>
                <Card.Text>price:12$</Card.Text>
                <div>
                  <Button onClick={notify} variant="warning">
                    Order Now
                  </Button>
                  <ToastContainer />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className=" mb-4 ">
            <Card
              className="border border-warning p-2"
              
            >
              <Card.Img
                variant="top"
                src="https://www.tasteofhome.com/wp-content/uploads/2023/02/GettyImages-1419665498-e1676404525553.jpg?resize=700,700"
              />
              <Card.Body>
                <Card.Title>Lamb Raan</Card.Title>
                <Card.Text>price:6$</Card.Text>
                <div>
                  <Button onClick={notify} variant="warning">
                    Order Now
                  </Button>
                  <ToastContainer />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className=" mb-4 ">
            <Card
              className="border border-warning p-2"
              
            >
              <Card.Img
                variant="top"
                src="https://www.tasteofhome.com/wp-content/uploads/2023/02/GettyImages-1195561785-e1676404786195.jpg?resize=700,700"
              />
              <Card.Body>
                <Card.Title>Chicken Jalfrezi</Card.Title>
                <Card.Text>price:6$</Card.Text>
                <div>
                  <Button onClick={notify} variant="warning">
                    Order Now
                  </Button>
                  <ToastContainer />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className=" mb-4 ">
            <Card
              className="border border-warning p-2"
              
            >
              <Card.Img
                variant="top"
                src="https://www.tasteofhome.com/wp-content/uploads/2023/02/GettyImages-1186139336-e1676412150794.jpg?resize=700,700"
              />
              <Card.Body>
                <Card.Title>Laal Maas</Card.Title>
                <Card.Text>price:6$</Card.Text>
                <div>
                  <Button onClick={notify} variant="warning">
                    Order Now
                  </Button>
                  <ToastContainer />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className=" mb-4 ">
            <Card
              className="border border-warning p-2"
              
            >
              <Card.Img
                variant="top"
                src="https://www.tasteofhome.com/wp-content/uploads/2023/02/GettyImages-1163712646-e1676412473421.jpg?resize=700,700"
              />
              <Card.Body>
                <Card.Title>Laal Maas</Card.Title>
                <Card.Text>price:10$</Card.Text>
                <div>
                  <Button onClick={notify} variant="warning">
                    Order Now
                  </Button>
                  <ToastContainer />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className=" mb-4 ">
            <Card
              className="border border-warning p-2"
              
            >
              <Card.Img
                variant="top"
                src="https://www.tasteofhome.com/wp-content/uploads/2019/08/Sheet-Pan-Tandoori-Chicken_EXPS_FT19_228530_F_0725_1-12.jpg?resize=700,700"
              />
              <Card.Body>
                <Card.Title>Tandoori Chicken</Card.Title>
                <Card.Text>price:9$</Card.Text>
                <div>
                  <Button onClick={notify} variant="warning">
                    Order Now
                  </Button>
                  <ToastContainer />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;