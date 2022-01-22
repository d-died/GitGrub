import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components.js/Dashboard';
import Recipe from './Components.js/Recipe';
import RecipeResults from './Components.js/RecipeResults';

function App() {
  return (
        <div className="App">
          <Dashboard />
          <Routes>
            <Route path='/reciperesults' element={ <RecipeResults /> } />
            <Route path='/recipe' element={ <Recipe /> } />
          </Routes>
        </div>
    
  );
}

export default App;
