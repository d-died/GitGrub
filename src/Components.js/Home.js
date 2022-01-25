import React from 'react'
import Dashboard from './Dashboard'
import RecipeSearch from './RecipeSearch'

const Home = () => {
    return(
      <div>
            
        <div className="gallery">
          {/* <iframe className="gif" src="https://giphy.com/embed/LVBH3rg1BUROw" width= "90%" height="192"></iframe> */}
          {/* <iframe className="gif" src="https://giphy.com/embed/VTzex4RfsJA76" width= "90%" height="284" allowFullScreen></iframe> */}
          {/* <iframe className="gif" src="https://giphy.com/embed/hJAhtnP3PFoIM" width="273" height= "90%" allowFullScreen></iframe> */}
          <iframe src="https://giphy.com/embed/l0IyoEU7iKgmUjlao" width="480" height="270" allowFullScreen></iframe>
          <iframe src="https://giphy.com/embed/3oz8xB06mHyoGE7ZoQ" width="480" height="260" allowFullScreen></iframe>
        </div>
      </div>
    )
}

export default Home