import React from 'react';

const Recipe = ({recipe}) => {
    return  (
        <div className="recipe">
            <img className="recipe-img" src={recipe["recipe"]["image"]} alt=""/>
            <p className="recipe-name">{recipe["recipe"]["label"]}</p>
        </div>
        )
}


export default Recipe;