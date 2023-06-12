import React, { useEffect, useState } from "react";
import Button from "../Components/ui/Button";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { databases } from "../Api/api";
import { Query } from "appwrite";

interface Recipe {
  $id: string;
  image: string;
  recipeTitle: string;
  // Add more properties as per your data structure
}

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const fetchRecipes = async () => {
    try {
      const response = await databases.listDocuments(
        "646cb6c47bc7998e9c74",
        "646f1e990583375ff5d2"
      );
      setData(response.documents.slice(0, 3));
    } catch (error) {
      console.error("Error fetching recipe data:", error);
    }
  };

  const searchRecipes = async () => {
    try {
      const response = await databases.listDocuments(
        "646cb6c47bc7998e9c74",
        "646f1e990583375ff5d2",
        [Query.search("recipeTitle", searchTerm)]
      );
      setSearchResults(response.documents);

      console.log(setSearchResults(response.documents));
    } catch (error) {
      console.error("Error searching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      searchRecipes();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

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
            onChange={handleSearch}
            placeholder="Search for recipes"
            className="appearance-none block w-full px-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded"
            onClick={searchRecipes}
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {searchResults.map((item) => (
            <div
              className="recipe-card bg-white p-6 rounded shadow"
              key={item.$id}
            >
              <Link to={`/detail/${item.$id}`}>
                <div className="aspect-w-2 aspect-h-3 cursor-pointer">
                  <img
                    src={item.image}
                    alt="Recipe"
                    className="object-cover w-full h-full rounded-lg max-h-40"
                  />
                </div>
              </Link>
              <h3 className="text-lg font-semibold mb-2">{item.recipeTitle}</h3>
            </div>
          ))}
        </div>

        <div className="featured-recipes flex w-full flex-col justify-center items-center mt-8 ">
          <h2 className="text-2xl font-bold mb-6">Featured Recipes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data?.map((item) => (
              <div
                className="recipe-card bg-white p-6 rounded shadow"
                key={item.$id}
              >
                <Link to={`/detail/${item.$id}`}>
                  <div className="aspect-w-2 aspect-h-3 cursor-pointer">
                    <img
                      src={item.image}
                      alt="Recipe"
                      className="object-cover w-full h-full rounded-lg max-h-40"
                    />
                  </div>
                </Link>
                <h3 className="text-lg font-semibold mb-2">
                  {item.recipeTitle}
                </h3>
              </div>
            ))}
            {/* Display featured recipe cards */}
          </div>
        </div>
        {/* <div className="popular-categories flex w-full flex-col justify-center items-center mt-8 ">
          <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Display popular categories */}
        {/* <div className="category bg-white p-6 rounded shadow">
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
        </div> */}
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
}
