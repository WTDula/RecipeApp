import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Recipe from './components/Recipe';
import YOUR_APP_KEY from './secret';
import axios from 'axios';


function App() {
  const [ query, setQuery] = useState('');
  const [ recipes, setRecipes ] = useState([]);


  const RECIPE_API = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=b242d324&app_key=${YOUR_APP_KEY}`;
  
  async function getRecipes(){
    console.log("recipe url: ", RECIPE_API)
    let result = await axios.get(RECIPE_API);
    
    setRecipes(result.data.hits);
    console.log("recipes: ", recipes)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  // useEffect(() => {
  //   getRecipes()
  // }, [])
  
  return (
    <div className="recipe-container">
      <h1>Inclusive Recipes</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input 
        type="text"
        className="search-input"
        placeholder="Search Ingredient"
        value={query}
        onChange={(e) => setQuery(e.target.value)}/>
        <input 
          className="submit-btn" 
          type="submit" 
          value="Search" />  
      </form>
      <div className="recipes-grid">
        {recipes.map((recipe) => {
          return <Recipe recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;
