import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

import SignleRecipe from "../SignleRecipe/SignleRecipe";

const ChefRecipes = () => {
  const data = useLoaderData();

  const {
    chef_name,
    chef_picture_url,
    recipes,
    short,
    likes,
    number_of_recipes,
    years_of_experience,
    bio,
  } = data;
  console.log(".........chefRecipe page", data);

  return (
    <div>
      <div className=" text-center">
        <img
          className="w-full img-thumbnail"
          style={{ height: "550px", width: "100%" }}
          src={chef_picture_url}
          alt=""
        />
        <p className="text-warning fw-bold fs-4 border-bottom">{short}</p>
      </div>
      <Container>
        <div className="mb-5">
          <p>
            <span className="fw-semibold text-text-muted">Name : </span>
            {chef_name}
          </p>
          <p>
            <span className="fw-semibold text-text-muted">Description :</span>
            {bio}
          </p>
          <p>
            <span className="fw-semibold text-text-muted">Experience : </span>
            {years_of_experience} years
          </p>
          <p>
            <span className="fw-semibold text-text-muted">Recipes : </span>
            {number_of_recipes}
          </p>
          <p>
            <span className="fw-semibold text-text-muted">Likes : </span>
            {likes}
          </p>
        </div>
        <div
          className="mb-5  border p-5"
          style={{ backgroundColor: "#FFD95A" }}
        >
          <div className="card-group">
            {recipes.map((recipe, idx) => (
              <SignleRecipe key={idx} recipe={recipe}></SignleRecipe>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChefRecipes;
