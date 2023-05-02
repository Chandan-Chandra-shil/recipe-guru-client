import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container className="mt-5 container mx-auto w-25 border rounded shadow  p-5">
      <h2 className="fw-semibold">Please Login </h2>
      <Form className=" ps-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="ms-3 px-4 mb-4" variant="primary" type="submit">
          Login
        </Button>
        <div className="d-grid gap-2 mb-4">
          <Form.Text>
            <h2 className="text-center  text-secondary">
              <small>Login with</small>
            </h2>
          </Form.Text>
          <Button variant="outline-primary" size="lg">
            Google
          </Button>
          <Button variant="outline-secondary" size="lg">
            GitHub
          </Button>
        </div>
        <Form.Text>
          <p>
            Don't have an Account? <Link to="/register">Register</Link>
          </p>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;