import React, { useEffect, useState } from 'react'
import Card from './Card';

function AllRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [order, setOrder] = useState("asc");
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://dummyjson.com/recipes");
            const result = await response.json();
            setRecipes(result.recipes);
            // console.log(result.recipes);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);



      const handleSort = async () => {
        setOrder(order === "asc" ? "desc" : "asc");
        try {
          const response = await fetch(
            `https://dummyjson.com/recipes?sortBy=name&order=${order}`
          );
          const result = await response.json();
          console.log("result is ", result);
          setRecipes(result?.recipes);
          console.log(`sorted recipes to ${order}`, result.recipes);
        } catch (error) {
          console.log(error);
        }
      };

    return (
    <>
    <div className="flex justify-center my-4">
          <h1 className="text-center text-xl   rounded-sm text-white p-1">
            Sort Recipes by Name:{" "}
          </h1>
          <button
            onClick={handleSort}
            className="m-1 text-3xl bg-slate-400 rounded-md "
          >
            {order === "asc" ? "🔺" : "🔻"}
          </button>
        </div>


        <h1 className="text-4xl text-center my-2">All Recipes</h1>
        <Card recipes={recipes} />
    </>
  )
}

export default AllRecipes