import React, { useState } from "react";
import chefImg from "../../assets/chef.jpg";
import foodImg from "../../assets/food1.jpg";
import { FaStar } from "react-icons/fa";
import Ingridients from "./Ingridients";
import {  toast } from 'react-toastify';
import Footer from "../Footer/Footer";


function SingleRecipe({ recipe }) {
  const [disabled, setDisabled] = useState(false);
  console.log(recipe);
  const { cooking_method, ingredients, rating, recipe_name } = recipe;

  const handleTost = () => {
    setDisabled(true);
    return toast("Favorite Recipe added");
  };

  return (
    <>
    <div className="card w-96 glass">
      <figure>
        <img src={foodImg} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p>{cooking_method}</p>
        <p className="flex items-center gap-2">
          {" "}
          <FaStar /> {rating}{" "}
        </p>
        <>
        <h1 className="font-bold text-2xl">Ingredients: </h1>
          {ingredients.map((ingi) => (
            <Ingridients ingi={ingi} />
          ))}
        </>
        <div className="card-actions justify-end">
          <button
            onClick={handleTost}
            className={`btn bg-orange-500 ${disabled ? "btn-disabled" : ""}`}
          >
           Add to favorite
          </button>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default SingleRecipe;
