import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import WebFont from 'webfontloader';
import './App.css';
import Dashboard from './Components.js/Dashboard';
import Recipe from './Components.js/Recipe';
import RecipeResults from './Components.js/RecipeResults';
import RecipeSearch from './Components.js/RecipeSearch';
import Home from './Components.js/Home';

function App() {

  const [ recipes, setRecipes ] = useState([])
  const [ searchString, setSearchString ] = useState('')
    
    const edamamCreds = {
        id: process.env.REACT_APP_EDAMAM_ID,
        key: process.env.REACT_APP_EDAMAM_KEY,
        api: 'https://api.edamam.com/api/recipes/v2?type=public'
      }

    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Sedgwick Ave']
        }
      })
    })
    
 
    const getRecipes = () =>{
     
        const url = `${edamamCreds.api}&q=${searchString}&app_id=${edamamCreds.id}&app_key=${edamamCreds.key}`
        
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res) 
            console.log(res.hits) 
            setRecipes(res.hits)
            setSearchString('') 
            //navigate to recipe results here
            
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
      console.log(searchString)
      console.log(recipes)
    }

  return (
        <div className="App">
          <Dashboard handleChange={ handleChange } handleSubmit={ handleSubmit } searchString = {searchString}/>
          <Routes>
            <Route path='/' element={ <Home />}/>
            <Route path='/reciperesults' render={ <RecipeResults recipes={ recipes } /> }/>
            <Route path='/recipe/:label' element={ <Recipe /> } />
          </Routes>
        </div>
    
  );
}

export default App;
