import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RecipeSearch from './RecipeSearch'
import Recipe from './Recipe'
import App from '../App'

const RecipeResults = ({ recipes }) => {
    
    console.log(recipes)
    // const cooktime = recipes.recipe.totalTime
    // console.log(cooktime)
    
    return(
        recipes.map(recipe => ( 
          <Link to={ `/recipe/${ recipe.recipe.label }` }
            state={ { recipe:recipe.recipe } } >
            <div className="container" >
              <div className='card'>
                <div className='card-image'>
                  <img
                                src={ recipe.recipe.image }
                                alt={ recipe.recipe.label } 
                            />
                </div>
                <div className="card-name">
                  <p>{ recipe.recipe.label }</p>
                </div>
                <ul className="card-diet">
                  <li>{ recipe.recipe.dietLabels }</li>
                </ul>
                <div className="card-time">
                  {/* <p>{cooktime === 0 ? '' : `Prep Time: ${ cooktime } minutes` }</p> */}
                </div>
              </div>
            </div>
          </Link>
                ))   
        
    )
}

export default RecipeResults