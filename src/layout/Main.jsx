import React from 'react';
import Header from '../components/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
  const navigation = useNavigate()
  return (
    <div>
      <Header></Header>
      <div>{navigation.state === "loading" && "Loading.........." }</div>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default Main;