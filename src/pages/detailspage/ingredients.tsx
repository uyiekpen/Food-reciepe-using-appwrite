import React from "react";

interface RecipeIngredientsProps {
  ingredients: string[];
}

const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({ ingredients }) => {
  return (
    <div className="recipe-ingredients">
      <h3 className="text-lg font-semibold mb-2 text-reciepeGreen">Ingredients</h3>
      <ul className="list-disc ml-6">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="text-md text-gray-600">{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
