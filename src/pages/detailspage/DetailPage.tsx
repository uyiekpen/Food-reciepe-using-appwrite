import React from "react";
import { FaStar } from "react-icons/fa";
import RecipeImage from "./Image";
import RecipeIngredients from "./Image";
import RecipeInstructions from "./instructions";
import RecipeCookingTime from "./time";
import RecipeReviews from "./reciepeReview";
import SocialSharingButtons from "./Sharing";
import PageLayout from "../../Components/pageLayout";

interface Recipe {
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
  const recipe: Recipe = {
    title: "Delicious Pasta",
    ingredients: [
      "200g pasta",
      "2 cups tomato sauce",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 tsp olive oil",
      "1/2 tsp salt",
      "1/4 tsp pepper",
    ],
    instructions: [
      "Cook the pasta according to package instructions.",
      "In a large pan, heat olive oil over medium heat. Add diced onion and minced garlic. Cook until fragrant.",
      "Add tomato sauce, salt, and pepper to the pan. Stir well and let it simmer for 5 minutes.",
      "Add the cooked pasta to the sauce and toss to coat.",
      "Serve hot and enjoy!",
    ],
    cookingTime: "30 minutes",
    reviews: [
      { name: "John", rating: 4, comment: "Great recipe! Loved it." },
      {
        name: "Emily",
        rating: 5,
        comment: "Delicious pasta dish. Highly recommended!",
      },
    ],
  };

  return (
    <>
      <PageLayout />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>
        <RecipeImage imageUrl="recipe-image.jpg" altText="Delicious Pasta" />
        <div className="flex justify-between items-center my-4">
          {/* <RecipeIngredients ingredients={recipe.ingredients} /> */}
          <RecipeCookingTime time={recipe.cookingTime} />
        </div>
        <RecipeInstructions instructions={recipe.instructions} />
        <hr className="my-8" />
        <RecipeReviews reviews={recipe.reviews} />
        <hr className="my-8" />
        <SocialSharingButtons />
      </div>
    </>
  );
};

export default RecipeDetailsPage;
