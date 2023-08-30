import React, { useState, useEffect } from 'react';
import './App.css'
const API_HEADERS = {
  'X-RapidAPI-Key': 'f86da47d75msh170dcd5dfe1d9ebp1ac105jsnefc400899afd',
  'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com',
};

const App = () => {
  const [recipeIndex, setRecipeIndex] = useState(1);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://the-vegan-recipes-db.p.rapidapi.com/${recipeIndex}`,
          { method: 'GET', headers: API_HEADERS }
        );
        const jsonData = await response.json();
        setRecipes(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [recipeIndex]);

  const handleNextClick = () => {
    setRecipeIndex(recipeIndex + 1);
  };
  const handlePrevClick = () => {
    setRecipeIndex(recipeIndex - 1);
  };
  if (recipeIndex === 0) {
    alert("no data found")
  }

  return (
    <>
      <h1><span>Recipe Name </span>:  {recipes.title}</h1>
      <div className="container">
        <div className="box">
          <img src={recipes.image} alt="" />
        </div>
        <div className="text">
          <p><label htmlFor="name">  Difficulty:</label>  {recipes.difficulty}</p>
          <p><label htmlFor="name">  Portion: </label> {recipes.portion}</p>
          <p><label htmlFor="name">  Time-Required: </label> {recipes.time}</p>
          <p><label htmlFor="name">  Ingredients: </label> {recipes.ingredients}</p>
          <p><label htmlFor="name">  Description: </label> {recipes.description}</p>
        </div>
      </div>
      <div className="btn">

      <button className='nav' onClick={handlePrevClick}>Prev</button>
      <button className='nav' onClick={handleNextClick}>NEXT</button>
      </div>

    </>
  );
};

export default App;
