import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, removeRecipe, editRecipe }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeItem
          key={index}
          index={index}
          recipe={recipe}
          removeRecipe={removeRecipe}
          editRecipe={editRecipe}
        />
      ))}
    </div>
  );
};

export default RecipeList;
