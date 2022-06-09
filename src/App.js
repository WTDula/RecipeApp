import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Recipe from './components/Recipe';
import YOUR_APP_KEY from './secret';


function App() {
  const [ query, setQuery] = useState('');
  const [ recipes, setRecipes ] = useState([]);


  const RECIPE_API = `https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=b242d324&app_key=${YOUR_APP_KEY}`;
  
  async function getRecipes(){
    console.log("recipe url: ", RECIPE_API)
    let result = await Axios.get(RECIPE_API);
    console.log("recipes: ", recipes)
    setRecipes(result.data.hits);
    console.log("result.data.hits: ", result.data.hits);
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
          <h1>Food Recipes</h1>
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
