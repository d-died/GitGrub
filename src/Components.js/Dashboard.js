import React from "react"
import { Link } from 'react-router-dom'

const Dashboard = () => {

    return(
        <div>
            <nav className="bar">
                    <h2 className="gitgrub">
                        <Link to='/'>
                            GitGrub
                        </Link>
                    </h2>
            </nav>
        </div>
    )
}


export default Dashboard