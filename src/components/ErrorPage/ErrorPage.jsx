import React from 'react';
import error from '../../assets/error.jpg'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <Container>
        <h1 className='text-center text-black '><Link to="/">Back  Home</Link></h1>
        <img src={error} alt="" />
      </Container>
    </div>
  );
};

export default ErrorPage;