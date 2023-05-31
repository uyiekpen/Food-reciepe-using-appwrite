import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { databases } from "../../Api/api";
import PageLayout from "../../Components/pageLayout";
import RecipeImage from "./Image";
import ReciepeCategory from "./ReciepeCategory";
import ServingSize from "./ServingSize";
import DietaryPreferences from "./dietaryPreferences";
import RecipeIngredients from "./ingredients";
import RecipeInstructions from "./instructions";
import RecipeCookingTime from "./time";

interface Recipe {
  id: string;
  recipeTitle: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: string;
  recipeCategory: string;
  reviews: Review[];
  image: string;
  dietaryPreferences: string[];
  servingSize: string;
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

          console.log(response); // Log the response object to check its structure

          // Check if response is valid
          if (
            response &&
            response.recipeTitle &&
            response.ingredients &&
            typeof response.ingredients === "string" &&
            response.instructions &&
            typeof response.instructions === "string" &&
            response.cookingTime &&
            typeof response.cookingTime === "string" &&
            response.image &&
            response.recipeCategory &&
            response.servingSize &&
            response.dietaryPreferences
          ) {
            const {
              recipeTitle,
              ingredients,
              instructions,
              cookingTime,
              recipeCategory,
              servingSize,
              dietaryPreferences,
            } = response;
            const recipeData: Recipe = {
              id,
              recipeTitle,
              ingredients: ingredients.split("\n"),
              instructions: instructions.split("\n"),
              cookingTime,
              reviews: [],
              image: response.image,
              recipeCategory,
              servingSize,
              dietaryPreferences,
            };
            setRecipe(recipeData);
          } else {
            setError("Invalid recipe data");
          }
        }
      } catch (error) {
        setError("Error fetching recipe details");
        console.log("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  return (
    <>
      <PageLayout />
      <div className="container p-3 mx-auto md:py-10 md:px-48 w-full">
        {recipe ? (
          <>
            <h1 className="text-2xl font-bold mb-4 text-left">
              {recipe.recipeTitle}
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <RecipeImage
                  imageUrl={recipe.image}
                  altText={recipe.recipeTitle}
                />
              </div>
              <div className="bg-white rounded-lg p-4 grid grid-cols-2 gap-2">
                <RecipeCookingTime cookingTime={recipe.cookingTime} />
                <ReciepeCategory category={recipe.recipeCategory} />
                <ServingSize serving={recipe.servingSize} />
                <DietaryPreferences
                  dietaryPreferences={recipe.dietaryPreferences}
                />
              </div>
            </div>
            <div className="mt-4">
              <RecipeIngredients ingredients={recipe.ingredients} />
            </div>
            <div className="mt-4">
              <RecipeInstructions instructions={recipe.instructions} />
            </div>

            {/* Display additional recipe details as needed */}
          </>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default RecipeDetailsPage;
