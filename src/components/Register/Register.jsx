import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
  const { createUser } = useContext(AuthContext);

    const [registerError,setRegisterError] = useState("")
    const [success,setSuccess] = useState("")


  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess()
    setRegisterError()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
        
    if (password.length < 6) {
      setRegisterError("password should be at least 6 characters (");
    }
    console.log(name, password, email, photo);
    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        console.log(registerUser);
        setSuccess('Your Account create a successfully')
        form.reset()
        setRegisterError()
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message)
      });
  };

  return (
    <Container className="mt-5 container mx-auto w-50 border rounded shadow  p-5 mb-5">
      <h2 className="fw-semibold">Please Register </h2>
      <Form onSubmit={handleRegister} className=" ps-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
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
            required
          />
          <Form.Text className="">
            <p className="text-warning"> {success}</p>
            <p className="text-danger fs-5">{registerError}</p>
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
