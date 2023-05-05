import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

const SignleRecipe = ({ recipe }) => {
  const [disabled, setDisabled] = useState(false);
  const { recipeName, ingredients, cookingMethod, rating } = recipe;
   const handleButton = () => {
    toast(`${recipeName} Added Favorite ` );
     setDisabled(true)
   }

  return (
    <div className="card">
      <div disabled={disabled} className="card-body">
        <p>
          <small className="fw-semibold"> Recipe Name : </small>
          <br />
          <span className="fw-bold --bs-warning fs-5">{recipeName}</span>
        </p>
        <p>
          <small className="fw-semibold">Ingredients : </small>
        </p>
        <ul>
          {ingredients.map((ingredient, inx) => (
            <li key={inx}>{ingredient}</li>
          ))}
        </ul>
        <br />
        <p className="card-text">
          Cooking Method : <br /> {cookingMethod}
        </p>
        <p>Rating : {rating}</p>
      </div>
      <div className="mx-auto fw-semibold">
        <button
          onClick={ handleButton}
          disabled={disabled}
          className="btn btn-warning px-5 mb-2"
        >
          Favorite
        </button>

        <ToastContainer />
      </div>
    </div>
  );
};

export default SignleRecipe;