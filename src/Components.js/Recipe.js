/* eslint-disable */
import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const Recipe = () => {
    const { label } = useParams()
    const location = useLocation()
    const recipe = location.state
    const healthLabels = recipe.recipe.healthLabels
    const cooktime = recipe.recipe.totalTime
    const ingredients = recipe.recipe.ingredientLines


return(
  <div className='recipe grid-container' key={ recipe.recipe.label }>
      <div className='recipe-left'>
        <div className='recipe-image grid-item'>
        <img
                    src={ recipe.recipe.image }  
                    alt={ recipe.recipe.label } 
                />
        </div>
        <div className='recipe-subtitle'>
          <a className='recipe-name' href={ recipe.recipe.url }>{ recipe.recipe.label }</a>
        </div>
      </div>
      <div className='recipe-right'>
      <div className="recipe-diet grid-item">
        <div className='bold-subtitles'>Health and Diet Labels: </div>
      {healthLabels.map(label => {
                    return <div>{ label } ·</div>
                })}
      <div>{ recipe.recipe.dietLabels }</div>
    </div>
    <div className='ingredients'>
      <h3> Ingredients: </h3>
      <div className='grid-item'>
        {ingredients.map(ingredient => {
                return <div>{ ingredient }</div>
            })}
      </div>
      <div className='bold-subtitles yield'>Servings: { recipe.recipe.yield }</div>
        <div className='bold-subtitles'>{cooktime === 0 ? '' : `Prep Time: ${ cooktime } minutes` }</div>
    </div>
      </div>
    
  </div>
    )
}

export default Recipe