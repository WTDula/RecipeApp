import React from 'react';

const Recipe = ({recipe}) => {
    return  (
        <div>
            <div className="recipe">
                <img className="recipe-img" src={recipe.recipe.image} alt=""/>
                <p className="recipe-name">{recipe.recipe.label}</p>
            </div>
            <div className='recipe-ingredients'>
                <h2>Ingredients</h2>
                {recipe.recipe.ingredients}
            </div>
        </div>
        )
}


export default Recipe;