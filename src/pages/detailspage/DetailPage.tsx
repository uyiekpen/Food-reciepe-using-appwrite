import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { databases } from "../../Api/api";

interface Recipe {
  id: string;
  title: string;
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
          // Add a conditional check to ensure id is defined
          const response = await databases.getDocument(
            "646cb6c47bc7998e9c74",
            "646f1e990583375ff5d2",
            id
          );
          setRecipe(response.documents);
          console.log(response.documents);
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);
  console.log(recipe);
  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!recipe) {
    return <div>Loading...</div>; // You can display a loading indicator while the data is being fetched
  }

  return (
    <div className="container mx-auto p-3">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      {/* Display the rest of the recipe details */}
    </div>
  );
};

export default RecipeDetailsPage;
