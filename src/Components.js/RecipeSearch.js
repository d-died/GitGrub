import React from 'react'
import { Link } from 'react-router-dom'


const RecipeSearch = ({ handleChange, handleSubmit, searchString}) => {

    return (
        <form className='form' onSubmit={ handleSubmit }>
            <input 
            className='form'
            placeholder='Search recipes...'
            type='text'
            name='searchString'
            required
            onChange={ handleChange }
            value={ searchString }
            />
            <button className='form' type='submit'>YUMMM</button>
        </form>
        
    )

}

export default RecipeSearch

