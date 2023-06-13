import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { databases } from "../../Api/api";
import RecipeImage from "./Image";
import ReciepeCategory from "./ReciepeCategory";
import ServingSize from "./ServingSize";
import DietaryPreferences from "./dietaryPreferences";
import RecipeIngredients from "./ingredients";
import RecipeInstructions from "./instructions";
import RecipeCookingTime from "./time";
import RecipeReviews from "./reciepeReview";
import PageLayout from "../../Components/pageLayout";
import Footer from "../../Components/Footer";
import { v4 as uuidV4 } from "uuid";
import RecipeCommentForm from "./Form";
import { toast } from "react-hot-toast";
import { Query } from "appwrite";

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

const reviews = [
  {
    rating: 4,
    comment: "Great recipe! I loved the flavors.",
    name: "John Doe",
  },
  {
    rating: 5,
    comment: "Amazing dish! Will definitely make it again.",
    name: "Jane Smith",
  },
  // Add more review objects as needed
];

const RecipeDetailsPage: React.FC = () => {
  // const navigate = useNavigate();
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

          // console.log(response); // Log the response object to check its structure

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
            toast.success("recipe successfully added logged");
          } else {
            setError("Invalid recipe data");
          }
        }
      } catch (error) {
        setError("Error fetching recipe details");
        toast.error("fill the right details");
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <RecipeImage
                  imageUrl={recipe.image}
                  altText={recipe.recipeTitle}
                />
                {/* <button onClick={fetchData}>Like</button> */}
              </div>
              <div className="bg-white rounded-lg p-4 grid grid-cols-2 gap-2 md:grid-cols-2">
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
            <div>{/* <RecipeCommentForm onSubmit={fetchData} /> */}</div>

            <RecipeReviews reviews={reviews} />
          </>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default RecipeDetailsPage;
