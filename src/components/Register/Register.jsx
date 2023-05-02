import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Container className="mt-5 container mx-auto w-50 border rounded shadow  p-5">
      <h2 className="fw-semibold">Please Register </h2>
      <Form className=" ps-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Your Photo url" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Button className="ms-3 px-4 mb-4" variant="primary" type="submit">
          Register
        </Button>

        <Form.Text>
          <p>
            Already have an Account? <Link to="/login">Login</Link>
          </p>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;