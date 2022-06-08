import React from 'react';

const Recipe = ({recipe}) => {
    return  (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) //if the images in the recipe are not jpeg, jpg, gif, or png they wont be displayed
        != null && (
            <div className="recipe">
                <img className="recipe-img" src={recipe["recipe"]["image"]} alt=""/>
                <p className="recipe-name">{recipe["recipe"]["label"]}</p>
            </div>
        )
    );    
}


export default Recipe;