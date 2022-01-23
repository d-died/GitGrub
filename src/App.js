import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './Components.js/Dashboard';
import Recipe from './Components.js/Recipe';
import RecipeResults from './Components.js/RecipeResults';
import RecipeSearch from './Components.js/RecipeSearch';

function App() {

  const [ recipes, setRecipes ] = useState([])
  const [ searchString, setSearchString ] = useState('')
    
    const edamamCreds = {
        id: process.env.REACT_APP_EDAMAM_ID,
        key: process.env.REACT_APP_EDAMAM_KEY,
        api: 'https://api.edamam.com/api/recipes/v2?type=public',
        endpoint: ''
      }
      //we will eventually use this to make the link dynamic!
    
 
    useEffect(() => {
        const url = 'https://api.edamam.com/api/recipes/v2?type=public&q=vegan&app_id=027ee8e8&app_key=46ca411c2d4ce27a801b64444133a70b&diet=high-protein'
        
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res) 
            console.log(res.hits) 
            setRecipes(res.hits) 
            
        })
        .catch(console.error)
    }, [])

    const handleClick = (recipe) => {
      recipes.map(eachRecipe => {
        if (eachRecipe === recipe) {
          return <Recipe />
        }
        console.log(recipe)
    })}

  return (
        <div className="App">
          <Dashboard />
          <Routes>
            <Route path='/' element={ <RecipeSearch />}/>
            <Route path='/reciperesults' element={ <RecipeResults recipes={ recipes } handleClick={ handleClick }/> } />
            <Route path='/recipe/:label' element={ <Recipe /> } />
          </Routes>
        </div>
    
  );
}

export default App;
