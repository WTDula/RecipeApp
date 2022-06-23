import React from 'react';

const Recipe = ({recipe}) => {

    const showIngredientsList = (theList) => {
        return theList.map(el => <li>{el}</li>)
    }

    return  (
        <div className="recipe">
            <img className="recipe-img" src={recipe.recipe.image} alt=""/>
            <p className="recipe-name">{recipe.recipe.label}</p>
            <div className='recipe-ingredients'>
                <h2>Ingredients</h2>
                    <ul>
                        {showIngredientsList(recipe.recipe.ingredientLines)}
                    </ul>
            </div>
        </div>
        )
}


export default Recipe;