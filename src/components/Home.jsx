import React, { useEffect, useState } from "react";
import Card from "./Card";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${search}`
      );
      const result = await response.json();
      setRecipes(result.recipes);
      console.log("search result ", result.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const result = await response.json();
        setRecipes(result.recipes);
        console.log(result.recipes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

 
  return (
    <>
      
      <div className="m-4 flex justify-center">
        <form onSubmit={handleSubmit} className="">
          <input
            placeholder="Search Recipes by Name..."
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            className="h-12 mx-2 rounded-md outline-none p-2 text-slate-800 focus:ring focus:ring-green-700"
          />
          <button type="submit" className="bg-gray-600 h-12 rounded-md p-2 active:bg-slate-50 duration-700" >
            search
          </button>
        </form>
      </div>

      <h1 className="text-4xl font-semibold text-gray-400 text-center">Recipes</h1>
      

      <Card recipes={recipes}  />
      
    </>
  );
}

export default Home;
