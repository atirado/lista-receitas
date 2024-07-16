import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const removeRecipe = (index) => {
    setRecipes(recipes.filter((_, i) => i !== index));
  };

  const editRecipe = (index, newRecipe) => {
    const updatedRecipes = recipes.map((recipe, i) => (i === index ? newRecipe : recipe));
    setRecipes(updatedRecipes);
  };

  return (
    <div className="app">
      <h1>Lista de Receitas Culinárias</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} removeRecipe={removeRecipe} editRecipe={editRecipe} />
    </div>
  );
};

export default App;
