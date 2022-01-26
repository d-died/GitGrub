import React from "react"
import { Link } from 'react-router-dom'
import RecipeSearch from "./RecipeSearch"
import headerPic from '../img/cooking-header.jpg'

const Dashboard = ({ handleChange, handleSubmit, searchString }) => {

    return(
        <div className="dashboard">
            <nav 
            className="bar" 
            style= {{ backgroundImage: `url(${ headerPic })`}}>
                    <h2 className="gitgrub">
                        <Link to='/' className="link">
                            GitGrub
                        </Link>
                    </h2>
            </nav>
            <RecipeSearch
                className='search'
                handleChange={ handleChange }
                handleSubmit={ handleSubmit }
                searchString={ searchString } 
            />
        </div>
    )
}


export default Dashboard