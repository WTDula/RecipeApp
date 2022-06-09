import React, { useState } from 'react';
import Axios from 'axios';
import Recipe from './components/Recipe';
import YOUR_APP_KEY from './secret';




function App() {
  const [ query, setQuery] = useState('');
  const [ recipes, setRecipes ] = useState([]);


  const RECIPE_API = `https://api.edamam.com/search?q=${query}&app_id=2ac6576e&app_key=${YOUR_APP_KEY}&health=alcohol-free`;
  
  async function getRecipes(){
    var result = await Axios.get(RECIPE_API);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  
  return (
    <div className="recipe-container">
          <h1>Food Recipes</h1>
          <form className="search-form" onSubmit={onSubmit}>
            <input 
            type="text"
            className="search-input"
            placeholder="Search Ingredient"
            value={query}
            onChange={(e) => setQuery(e.target.value)}  
            />
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
