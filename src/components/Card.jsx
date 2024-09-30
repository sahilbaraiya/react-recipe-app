import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      
        <div  >
          <ul className="grid grid-cols-1  sm:grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 ">
            {props?.recipes?.map((recipe) => (
              <li key={recipe.id} className="mx-4 my-2  border-4 border-sky-600 hover:bg-slate-700 duration-500 rounded-lg p-2">
              <Link to={`/detail-card/${recipe.id}`}>
                <img
                  src={recipe.image}
                  className="rounded-xl object-contain w-full "
                />
                <h1 className="text-xl font-medium text-gray-300 px-2 ">{recipe.name}</h1>
                <h2 className="text-lg font-medium text-gray-300 px-2 " >Rating: {recipe.rating}⭐</h2>
                
                
              </Link>
              </li>
            ))}
          </ul>
        </div>
      
    </>
  );
}

export default Card;
