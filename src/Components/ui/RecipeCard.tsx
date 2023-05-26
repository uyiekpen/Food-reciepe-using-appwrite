import React from "react";
import { Recipe } from "../../types/ReciepeType";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={recipe.image} alt={recipe.recipeTitle} className="w-full h-32 object-cover mb-4 rounded-md" />
      <h2 className="text-lg font-bold">{recipe.recipeTitle}</h2>
      <p className="text-gray-600">{recipe.recipeCategory}</p>
    </div>
  );
};

export default RecipeCard;
