import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function DetailCard() {
  const {id} = useParams();
  const [recipe,setRecipe] = useState({})

  useEffect(()=>{
    const getSingle=async()=>{
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const result = await response.json();
      setRecipe(result);
      console.log(result);
    } 
    getSingle();
  },[id])
  return (
    <>
      <div className="h-10 w-full bg-gray-500 font-bold flex justify-center p-2 m-2">Explanation of the recipe 
      </div>

      <div>
        <img
          src={recipe.image}
          alt='recipe image'
          className="max-h-72 max-w-80 rounded-md m-4"
        />
        <h1 className='text-2xl text-orange-700'>{recipe.name}</h1>
        <h1 className='text-xl text-orange-400'>pepare time: {recipe.prepTimeMinutes} minutes</h1>
        <h1 className='text-xl text-orange-400'>cook time: {recipe.cookTimeMinutes} minutes</h1>
        <h1 className='text-xl text-orange-400'>Rating: {recipe.rating}</h1>
        <h1 className='text-xl text-white w-full bg-slate-900'>Ingredients</h1>
        
        {
          recipe.ingredients?.map((item,index)=>(<p className='text-lg text-green-800' key={index}>{index+1}::{item}</p>))
        }
        <h1 className='text-xl text-white w-full bg-slate-900'>Instructions</h1>
        {
          recipe.instructions?.map((item,index)=>(<p className='text-lg text-green-800' key={index}>{index+1}::{item}</p>))
        }
        <h1 className='text-xl text-white w-full bg-slate-900'>Tags</h1>
        {
          recipe.tags?.map((item,index)=>(<button className=' bg-green-600 rounded-md p-2 m-2' key={index}>{item}</button>))
        }
        
      </div>

      
    </>
  )
}

export default DetailCard