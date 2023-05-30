import React from 'react'
import "./card.css";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

function SingleChefsCard({singleChef}) {
    
    const {years_of_experience, chef_name, likes, num_recipes, chef_picture, id  } = singleChef
  return (
    <div className="card hover:font-bold">
          <div className="face  face1 w-full h-96 " style={{backgroundImage:`url(${chef_picture})`}} >
            <div className="content ">
              {/* <LazyLoad width={500} height={300} threshold={1} > 
              <img className="w-full"
                src={chef_picture}
                alt="Design" 
              />
              </LazyLoad> */}
              <h3 className="text-orange-500 ">{chef_name}</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content ">
              <p>
                <span className="font-bold">Years of experience:</span>
                <span>{years_of_experience} yr </span>
              </p>
              <p>
                <span className="font-bold">Numbers of recipes:</span>
                <span> {num_recipes} </span>
              </p>

              <p>
                <span className="font-bold">Likes:</span>
                <span> {likes} </span>
              </p>
              <Link to={`/chefDetails/${id}`}>View Details</Link>
              {/* <a href="#"></a> */}
            </div>
          </div>
        </div>
  )
}

export default SingleChefsCard