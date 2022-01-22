import React from "react"
import { Link } from 'react-router-dom'

const Dashboard = () => {

    return(
        <div>
            <nav className="bar">
                <Link to="/">
                    <h2 className="gitgrub">GitGrub</h2>
                </Link>
            </nav>
        </div>
    )
}


export default Dashboard