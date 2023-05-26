import React from "react";
import Button from "../Components/ui/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="homepage w-screen h-[500px]">
        <div className="w-full h-full relative">
          <video
            className="w-full h-full object-cover absolute"
            autoPlay
            loop
            muted
          >
            <source
              src="https://res.cloudinary.com/ditvzgm4e/video/upload/v1685134979/pexels-vanessa-loring-5866124-3840x2160-25fps_jd6bai.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 flex justify-center items-center flex-col bg-opacity-50">
            <h1 className="text-4xl font-bold text-white mb-4">
              Discover Amazing Recipes
            </h1>
            <p className="text-lg text-white mb-8">
              Join our community and explore a world of flavors
            </p>
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="/signup">Sign Up</a>{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center items-center p-8">
        <div className="search-bar flex ">
          <input
            type="text"
            placeholder="Search for recipes"
            className="appearance-none block w-full px-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded">
            Search
          </button>
        </div>
        <div className="featured-recipes flex w-full flex-col justify-center items-center mt-8 ">
          <h2 className="text-2xl font-bold mb-6">Featured Recipes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Display featured recipe cards */}
            <div className="recipe-card bg-white p-6 rounded shadow">
              <img
                src="recipe-image.jpg"
                alt="Recipe"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Delicious Pasta</h3>
              <p className="text-sm text-gray-600">
                A mouthwatering pasta recipe that will leave you craving for
                more
              </p>
            </div>
            <div className="recipe-card bg-white p-6 rounded shadow">
              <img
                src="recipe-image.jpg"
                alt="Recipe"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Delicious Pasta</h3>
              <p className="text-sm text-gray-600">
                A mouthwatering pasta recipe that will leave you craving for
                more
              </p>
            </div>
            <div className="recipe-card bg-white p-6 rounded shadow">
              <img
                src="recipe-image.jpg"
                alt="Recipe"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Delicious Pasta</h3>
              <p className="text-sm text-gray-600">
                A mouthwatering pasta recipe that will leave you craving for
                more
              </p>
            </div>{" "}
          </div>
        </div>
        <div className="popular-categories flex w-full flex-col justify-center items-center mt-8 ">
          <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Display popular categories */}
            <div className="category bg-white p-6 rounded shadow">
              <img
                src="category-icon.jpg"
                alt="Category"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Appetizers</h3>
              <p className="text-sm text-gray-600">
                Explore a variety of appetizers to kick-start your meals
              </p>
            </div>
            <div className="category bg-white p-6 rounded shadow">
              <img
                src="category-icon.jpg"
                alt="Category"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Appetizers</h3>
              <p className="text-sm text-gray-600">
                Explore a variety of appetizers to kick-start your meals
              </p>
            </div>
            <div className="category bg-white p-6 rounded shadow">
              <img
                src="category-icon.jpg"
                alt="Category"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Appetizers</h3>
              <p className="text-sm text-gray-600">
                Explore a variety of appetizers to kick-start your meals
              </p>
            </div>{" "}
            <div className="category bg-white p-6 rounded shadow">
              <img
                src="category-icon.jpg"
                alt="Category"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">Appetizers</h3>
              <p className="text-sm text-gray-600">
                Explore a variety of appetizers to kick-start your meals
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
