import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {

 /* const [details,setDetails] = useState('') */
  const data = useLoaderData()
  const {
    chef_name,
    chef_picture_url,
    recipes,
    ingredients,
    cookingMethod,
    rating,
    number_of_recipes,
    years_of_experience,
    bio,
  } = data;
  console.log(".........chefRecipe page",data)

  return (
    <div>
      <div className=" text-center">
        <img
          className="w-full img-thumbnail"
          style={{ height: "300px", width: "100%" }}
          src={chef_picture_url}
          alt=""
        />
        <p className="text-warning fw-bold fs-4">{chef_name}</p>
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
        </div>
        <div
          className="mb-5  border p-5"
          style={{ backgroundColor: "#FFD95A" }}
        >
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <p>
                  <small className="fw-semibold"> Recipe Name : </small>
                  <span className="fw-bold --bs-warning fs-5">
                    {recipes[0].recipeName}
                  </span>
                </p>
                <p>
                  <small className="fw-semibold">Ingredients : </small>
                </p>
                <li className="card-text">{recipes[0].ingredients[0]}</li>
                <li className="card-text">{recipes[0].ingredients[1]}</li>
                <li className="card-text">{recipes[0].ingredients[2]}</li>
                <li className="card-text">{recipes[0].ingredients[3]}</li>
                <li className="card-text">{recipes[0].ingredients[4]}</li>
                <br />
                <p className="card-text">
                  Cooking Method : <br /> {recipes[0].cookingMethod}
                </p>
              </div>
              <div className="mx-auto">
                <button className="btn btn-warning px-5 mb-2">Favorite</button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{recipes[1].recipeName}</h5>
                <p>
                  <small className="fw-semibold">Ingredients : </small>
                </p>
                <li className="card-text">{recipes[0].ingredients[0]}</li>
                <li className="card-text">{recipes[0].ingredients[1]}</li>
                <li className="card-text">{recipes[0].ingredients[2]}</li>
                <li className="card-text">{recipes[0].ingredients[3]}</li>
                <li className="card-text">{recipes[0].ingredients[4]}</li>
                <br />
                <p className="card-text">
                  Cooking Method : <br /> {recipes[0].cookingMethod}
                </p>
              </div>
              <div className="mx-auto">
                <button className="btn btn-warning px-5 mb-2">Favorite</button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{recipes[2].recipeName}</h5>
                <p>
                  <small className="fw-semibold">Ingredients : </small>
                </p>
                <li className="card-text">{recipes[0].ingredients[0]}</li>
                <li className="card-text">{recipes[0].ingredients[1]}</li>
                <li className="card-text">{recipes[0].ingredients[2]}</li>
                <li className="card-text">{recipes[0].ingredients[3]}</li>
                <li className="card-text">{recipes[0].ingredients[4]}</li>
                <br />
                <p className="card-text">
                  Cooking Method : <br /> {recipes[0].cookingMethod}
                </p>
              </div>
              <div className="mx-auto">
                <button className="btn btn-warning px-5 mb-2">Favorite</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChefRecipes;