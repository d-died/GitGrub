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
        api: 'https://api.edamam.com/api/recipes/v2?type=public'
      }
      //we will eventually use this to make the link dynamic!
    
 
    const getRecipes = () =>{
     
        const url = `${edamamCreds.api}&q=${searchString}&app_id=${edamamCreds.id}&app_key=${edamamCreds.key}`
        
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res) 
            console.log(res.hits) 
            setRecipes(res.hits) 
            
        })
        .catch(console.error)
      }

    const handleChange = (e) => {
      setSearchString(e.target.value)
      console.log(searchString)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      getRecipes(searchString)
    }

  return (
        <div className="App">
          <Dashboard />
          <Routes>
            <Route path='/' element={ <RecipeSearch handleChange={ handleChange } handleSubmit={ handleSubmit } searchString = {searchString}/>}/>
            <Route path='/reciperesults' element={ <RecipeResults recipes={ recipes } /> }/>
            <Route path='/recipe/:label' element={ <Recipe /> } />
          </Routes>
        </div>
    
  );
}

export default App;
