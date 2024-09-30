import React, { useEffect, useState } from "react";
import Card from "./Card";

function RecipeTag() {
  const [recipes, setRecipes] = useState([]);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const [moreTags,setMoreTags] = useState(true);

  useEffect(() => {
    const getTags = async () => {
      const resposne = await fetch(`https://dummyjson.com/recipes/tags`);
      const result = await resposne.json();
      setTags(result);
      console.log("tags result ", result);
    };
    getTags();
  }, []);

  const handleTag = async (index) => {
    // setTag(tags[index]);
    const currentTag = tags[index];
    const response = await fetch(
      `https://dummyjson.com/recipes/tag/${currentTag}`
    );
    const result = await response.json();
    setRecipes(result.recipes);

    console.log("result value ", result.recipes);
    console.log("tag value ", currentTag);
  };
  return (
    <>
      <h1 className="text-center text-xl bg-gray-700 py-4 my-4 ">Get Recipes by tags</h1>
      <div className={`${moreTags ? "line-clamp-2" : ""}`}>
        {tags.map((tag, index) => (
          <button
            onClick={() => handleTag(index)}
            className="m-2 bg-green-400 rounded-md p-2"
            key={index}
          >
            {tag}
          </button>
        ))}
      </div>
      <button className="text-blue-400 hover:underline mx-2 my-3 active:underline "
      onClick={()=>{setMoreTags(!moreTags)}}>
      {moreTags ? ('More tags..'):('Less tags..')}</button>

      <h1 className="text-4xl text-center ">Recipes</h1>
      <Card recipes={recipes} />
    </>
  );
}

export default RecipeTag;
