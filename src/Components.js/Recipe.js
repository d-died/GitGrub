import React, { useState } from "react"
import { useParams, useLocation } from 'react-router-dom'

const Recipe = () => {
    let { label } = useParams()
    const location = useLocation()
    const recipe = location.state

    console.log(location)
    console.log(location.state)
    console.log(recipe)

    
    // const [ listing, setListing ] = useState(null)
    // const url = { recipe.links.}

    return(
        <div className='recipe'>
            <div className='recipe-image'>
                <img
                    src={ recipe.recipe.image } //imight have to change "hit" out for recipe 
                    alt={ recipe.recipe.label } //see audobon for a ref assignment
                />
            </div>
            <div className="recipe-name">
                <p>{ recipe.recipe.label }</p>
            </div>
            <div>
                <p>{ recipe.recipe.healthLabels }</p>
            </div>
            <div className="recipe-diet">
                <p>{ recipe.recipe.dietLabels }</p>
            </div>
            <div className="recipe-time">
                <p>{ recipe.recipe.totalTime }</p>
            </div>
            <div>
                <p>{ recipe.recipe.yield }</p>
            </div>
            <div>
                <p>{ recipe.ingredients }</p>
            </div>
        </div>
    )
}

export default Recipe