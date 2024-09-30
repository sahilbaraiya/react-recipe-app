import React, { useState } from 'react'
import Card from './Card';

function RecipeTypes() {
    const [recipes, setRecipes] = useState([]);
    const [types, setTypes] = useState("");

    const handleType = async (e) => {
        e.preventDefault();
        const response = await fetch(
          `https://dummyjson.com/recipes/meal-type/${types}`
        );
        const result = await response.json();
        setRecipes(result.recipes);
        console.log("type result is", result);
      };


    return (
    <>
        <h1 className="text-center text-xl bg-gray-800 my-4">
        get Recipes by meal types
      </h1>
      <form onSubmit={handleType} className="flex justify-center m-4">
        <input
          placeholder="Enter meal type like snack or lunch etc..."
          type="text"
          onChange={(e) => {
            setTypes(e.target.value);
          }}
          value={types}
          className="h-10 mx-2 rounded-md outline-none p-2"
        />
        <button type="submit" className="bg-gray-600 h-10 rounded-md p-2">
          Get Recipe
        </button>
      </form>


      <h1 className="text-4xl text-center">Recipes</h1>
      <Card recipes={recipes} />
    </>
  )
}

export default RecipeTypes