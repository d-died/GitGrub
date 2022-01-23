import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import RecipeSearch from "./RecipeSearch"

const RecipeResults = ({ hit }) => {
//need to pass { recipes } down as a prop
  console.log(hit.recipe.dietLabels)
//need to add the card as a link eventually
    return(
        <div className="container"> 
            <div className='card'>
                <div className='card-image'>
                    <img
                        src={ hit.recipe.image } //i got these 2 names from the object
                        alt={ hit.recipe.label } //so we shouldn't have to change anything
                    />
                </div>
                <div className="card-name">
                    <p>{ hit.recipe.label }</p>
                </div>
                <div className="card-diet">
                    <p>{ hit.recipe.dietLabels }</p>
                </div>
                <div className="card-time">
                    <p>{ hit.recipe.totalTime }</p>
                </div>
            </div>            
        </div>
    )
}


export default RecipeResults