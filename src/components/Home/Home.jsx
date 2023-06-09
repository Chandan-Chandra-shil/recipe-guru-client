import React from "react";
import { Carousel, Container } from "react-bootstrap";

import bannerOne from "../../assets/banner_01.jpg";
import bannerTwo from "../../assets/banner_02.jpg";
import bannerThree from "../../assets/banner_03.jpg";

import { Link, useLoaderData } from "react-router-dom";

import AboutUs from "./AboutUs/AboutUs";
import PopularRecipe from "./PopularRecipe/PopularRecipe";

const Home = () => {
  const details = useLoaderData();

  return (
    <div>
      <Carousel fade className="mb-5">
        <Carousel.Item>
          <img className="d-block w-100" src={bannerOne} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerTwo} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerThree} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Container>
        <div className="text-center mb-5">
          <h1 className="text-warning fs-1 mb-3 border-1">Our Special Chefs</h1>
          <p className="fs-5">
            Chefs are culinary professionals trained in all aspects of food
            preparation.Their main responsibilities include planning menus,
            <br></br>
            overseeing the kitchen staff, and ensuring that the food meets
            high-quality standards
          </p>
        </div>

        <div className="row mb-5">
          {details ? (
            details.map((detail) => (
              <div key={detail.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card">
                  <img
                    src={detail.chef_picture_url}
                    alt=""
                    style={{ height: "200px" }}
                    className="rounded"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{detail.chef_name}</h5>
                    <p className=" fs-5 text-muted">
                      <span>
                        Years of Experience : {detail.number_of_recipes}
                      </span>
                      <br />
                      <span>Likes : {detail.likes}</span>
                      <br />
                      <span> Recipes : {detail.number_of_recipes}</span>
                    </p>
                    <Link to={`/chefRecipes/${detail.id}`}>
                      <button className=" text-dark fw-semibold btn btn-warning">
                        View Recipes
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Container>
      <PopularRecipe></PopularRecipe>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
