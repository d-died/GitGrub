import React from "react"
import { Link } from 'react-router-dom'
import RecipeSearch from "./RecipeSearch"
import headerPic from '../img/cooking-header.jpg'

const Dashboard = ({ handleChange, handleSubmit, searchString }) => {

    return(
        <div >
            <nav 
            className="bar" 
            style= {{ 
                backgroundImage: `url(${ headerPic })`,
                backgroundRepeat: 2
            }}>
                    <h2 className="gitgrub">
                        <Link to='/'>
                            GitGrub
                        </Link>
                    </h2>
                    <RecipeSearch
                        handleChange={ handleChange }
                        handleSubmit={ handleSubmit }
                        searchString={ searchString } 
                    />
            </nav>
        </div>
    )
}


export default Dashboard