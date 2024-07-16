import React, { useState } from 'react';

const RecipeItem = ({ recipe, index, removeRecipe, editRecipe }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(recipe.title);
  const [newDescription, setNewDescription] = useState(recipe.description);

  const handleEdit = () => {
    editRecipe(index, { title: newTitle, description: newDescription });
    setIsEditing(false);
  };

  return (
    <div className="recipe-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Salvar</button>
        </>
      ) : (
        <>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => removeRecipe(index)}>Remover</button>
        </>
      )}
    </div>
  );
};

export default RecipeItem;
