import React from 'react'
import { Link } from 'react-router-dom'


const RecipeSearch = ({ handleChange, handleSubmit, searchString}) => {

    return (
        <form onSubmit={ handleSubmit }>
            <input placeholder='Search recipes...'
            type='text'
            name='searchString'
            required
            onChange={ handleChange }
            value={ searchString }
            />
            <button type='submit'>YUMMM</button>
        </form>
        
        // <Link to='/reciperesults'/> //this will eventually be a link via the submit button
    )

}

export default RecipeSearch

