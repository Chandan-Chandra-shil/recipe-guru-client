import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.Config";
const Login = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  console.log(from)
  const [success, setSuccess] = useState("");
  const [logInError, setLogInError] = useState("");
  const { logIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(app);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("user logged successfully");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setLogInError(error.message);
      });
  };

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleeGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="mt-5 container mx-auto w-25 border rounded shadow  p-5 mb-5">
      <h2 className="fw-semibold">Please Login </h2>
      <Form onSubmit={handleLogin} className=" ps-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Form.Text className="text-muted">
            <p>{logInError}</p>
            <h6>{success}</h6>
          </Form.Text>
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
          <Button onClick={handleGoogle} variant="outline-primary" size="lg">
            Google
          </Button>
          <Button onClick={handleeGithub} variant="outline-secondary" size="lg">
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
