import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import RecipeSearch from "./RecipeSearch"
import Recipe from "./Recipe"

const RecipeResults = ({ recipes, handleClick }) => {
    return(
        recipes.map(recipe => ( 
            <Link to={`/recipe/${recipe.recipe.label}`}
            state={{ recipe:recipe.recipe }} >
                <div className="container" >
                    <div className='card'>
                        <div className='card-image'>
                            <img
                                src={ recipe.recipe.image } //i got these 2 names from the object
                                alt={ recipe.recipe.label } //so we shouldn't have to change anything
                            />
                        </div>
                        <div className="card-name">
                            <p>{ recipe.recipe.label }</p>
                        </div>
                        <ul className="card-diet">
                                <li>{ recipe.recipe.dietLabels }</li>
                        </ul>
                        <div className="card-time">
                            <p>{ recipe.recipe.totalTime } minutes</p>
                        </div>
                    </div>
                </div>
            </Link>
                ))   
        
    )
}

export default RecipeResults