import React from "react";
import Header from "../components/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="bg-">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
