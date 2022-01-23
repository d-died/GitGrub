import React, { useState } from "react"

const Recipe = () => {
    
    const [ recipe, setRecipe ] = useState([])
    
    return(
        <div className='recipe'>
            {/* <div className='recipe-image'>
                <img
                    src={ hit.recipe.image } //imight have to change "hit" out for recipe 
                    alt={ hit.recipe.label } //see audobon for a ref assignment
                />
            </div>
            <div className="recipe-name">
                <p>{ hit.recipe.label }</p>
            </div>
            <div>
                <p>{ hit.recipe.healthLabels }</p>
            </div>
            <div className="recipe-diet">
                <p>{ hit.recipe.dietLabels }</p>
            </div>
            <div className="recipe-time">
                <p>{ hit.recipe.totalTime }</p>
            </div>
            <div>
                <p>{ hit.recipe.yield }</p>
            </div>
            <div>
                <p>{ hit.recipe.ingredients }</p>
            </div> */}
        </div>
    )
}

export default Recipe