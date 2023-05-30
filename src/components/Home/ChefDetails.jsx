import React from "react";
import { useLoaderData } from "react-router-dom";
import chefImg from "../../assets/chef.jpg";
import { FaDiscourse, FaStopwatch, FaThumbsUp } from "react-icons/fa";
import SingleRecipe from "./SingleRecipe";

function ChefDetails() {
    const data = useLoaderData()
    console.log(data);
    const {chef_picture, chef_name, bio, likes, num_recipes, years_of_experience, recipes    } = data


  return (
    <>
      <div className="w-[90%] mx-auto">
      <div className="card card-side bg-base-100 shadow-xl mb-20">
        <figure>
          <img className="w-96" src={chef_picture} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef_name}</h2>
          <p>{bio}</p>
          <div className="flex justify-between">
            <p className="flex items-center gap-4" > <span><FaThumbsUp /> </span>{likes}</p>
            <p className="flex items-center gap-4" > <span><FaDiscourse /> </span>{num_recipes}</p>
            <p className="flex items-center gap-4" > <span><FaStopwatch /> </span>{years_of_experience}</p>
          </div>
          
        </div>
      </div>
      {/* 3 card for chef's ingredients */}
      <div className="flex gap-3 p-20">
        {
            recipes.map(recipe => <SingleRecipe recipe={recipe} />)
        }
      </div>
      </div>
    </>
  );
}

export default ChefDetails;
