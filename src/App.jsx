import { useEffect, useState } from "react";
import Card from "./components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import DetailCard from "./components/DetailCard";
import AllRecipes from "./components/AllRecipes";
import RecipeTag from "./components/RecipeTag";
import RecipeTypes from "./components/RecipeTypes";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/all-recipes" element={<AllRecipes/>}/>
          <Route path="/detail-card/:id" element={<DetailCard/>}/>
          <Route path="/recipe-tag" element={<RecipeTag/>}/>
          <Route path="/recipe-types" element={<RecipeTypes/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
