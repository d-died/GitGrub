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
        
    )

}

export default RecipeSearch

