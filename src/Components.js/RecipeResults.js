import React from 'react'
import { Link } from 'react-router-dom'

const RecipeResults = ({ recipes }) => {
    
    return(
      <div className='results'>
        {recipes.map(recipe => ( 
          <Link to={ `/recipe/${ recipe.recipe.label }`} 
            key={ recipe.recipe.calories }
            state={ { recipe:recipe.recipe } } 
            className='link'>
            <div className="container" >
              <div className='card'>
                <div className='card-image'>
                  <img
                                src={ recipe.recipe.image }
                                alt={ recipe.recipe.label } 
                            />
                </div>
                <div className="card-name subtitle">
                  { recipe.recipe.label }
                </div>
                <div className="card-diet subtitle bold-subtitles">
                  { recipe.recipe.dietLabels }
                </div>
                <div className="card-time subtitle bold-subtitles">
                  {recipe.recipe.totalTime === 0 ? '' : `Prep Time: ${ recipe.recipe.totalTime } minutes` }
                </div>
              </div>
            </div>
          </Link>
                ))}   
      </div>
        
        
    )
}

export default RecipeResults