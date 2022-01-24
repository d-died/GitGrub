import React from "react"
import { Link } from 'react-router-dom'
import RecipeSearch from "./RecipeSearch"


const Dashboard = ({ handleChange, handleSubmit, searchString }) => {

    return(
        <div>
            <nav className="bar">
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