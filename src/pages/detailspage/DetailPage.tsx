import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { databases } from "../../Api/api";

interface Recipe {
  id: string;
  recipeTitle: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: string;
  reviews: Review[];
}

interface Review {
  name: string;
  rating: number;
  comment: string;
}

const RecipeDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        if (id) {
          const response = await databases.getDocument(
            "646cb6c47bc7998e9c74",
            "646f1e990583375ff5d2",
            id
          );
          setRecipe(response.document);
        }
      } catch (error) {
        setError("Error fetching recipe details");
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);


  return (
    <div className="container mx-auto p-3">
      <h1 className="text-2xl font-bold mb-4">{recipe.recipeTitle} </h1>
      <div>
        <h2>Ingredients:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Instructions:</h2>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
      <div>
        <h2>Cooking Time:</h2>
        <p>{recipe.cookingTime}</p>
      </div>
      {/* Display additional recipe details as needed */}
    </div>
  );
};

export default RecipeDetailsPage;
