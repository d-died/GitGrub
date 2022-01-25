import React, { useState } from "react"
import { useParams, useLocation } from 'react-router-dom'

const Recipe = () => {
    let { label } = useParams()
    const location = useLocation()
    const recipe = location.state
    const healthLabels = recipe.recipe.healthLabels
    const cooktime = recipe.recipe.totalTime
    const ingredients = recipe.recipe.ingredientLines

    console.log(recipe)

    
    // const [ listing, setListing ] = useState(null)
    // const url = { recipe.links.}

    return(
        <div className='recipe'>
            <div className='recipe-image'>
                <img
                    src={ recipe.recipe.image }  
                    alt={ recipe.recipe.label } 
                />
            </div>
            <div className="recipe-name">
                <p>{ recipe.recipe.label }</p>
            </div>
            <div className="recipe-link">
                <a href={ recipe.recipe.url }>View Full Recipe Here </a>
            </div>
            <ul>
                {healthLabels.map(label => {
                   return <li>{ label }</li>
                })}
            </ul>
            <div className="recipe-diet">
                <p>{ recipe.recipe.dietLabels }</p>
            </div>
            <div className="recipe-time">
                {cooktime === 0 ? '' : `Prep Time: ${ cooktime } minutes` }
            </div>
            <div>
                <p>Servings: { recipe.recipe.yield }</p>
            </div>
            <ul>
                {ingredients.map(ingredient => {
                    return <li>{ ingredient }</li>
                })}
            </ul>
        </div>
    )
}

export default Recipe