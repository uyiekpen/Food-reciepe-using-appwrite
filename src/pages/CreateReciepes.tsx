import React, { useState } from "react";
import PageLayout from "../Components/pageLayout";
import { databases, storage } from "../Api/api";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchRecipesStart } from "../global/reciepeReducer";
import { toast } from "react-hot-toast";

const CreateRecipes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [servingSize, setServingSize] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [recipeCategory, setRecipeCategory] = useState("");
  const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImage(file || null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (image === null || !recipeTitle) {
      console.log("Please select an image and enter a title");
      return;
    }

    try {
      const documentId = uuidv4(); // Generate a unique ID for the document
      console.log("Generated document ID:", documentId);

      // Upload the file to Appwrite storage
      const fileResult = await storage.createFile(
        "646f194a7bba7e4fdbdd",
        documentId,
        image
      );
      const fileId = fileResult.$id;

      // Generate the URL for the image
      const imageUrl = storage.getFileDownload("646f194a7bba7e4fdbdd", fileId);
      const tagsString = tags.join(",");

      // Create a document in Appwrite database
      const response = await databases.createDocument(
        "646cb6c47bc7998e9c74",
        "646f1e990583375ff5d2",
        documentId,
        {
          recipeTitle,
          ingredients,
          instructions,
          cookingTime,
          servingSize,
          recipeCategory,
          dietaryPreferences,
          image: imageUrl,
          tags: tagsString,
        }
      );

      console.log("Upload successful:", response);
      toast.success("recipe has been uploaded successfully");
      navigate("/exploremore");

      // Reset form fields
      setRecipeTitle("");
      setIngredients("");
      setInstructions("");
      setCookingTime("");
      setServingSize("");
      setImage(null);
      setRecipeCategory("");
      setDietaryPreferences([]);
      setTags([]);
    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error("Error", error);
    }
  };

  return (
    <div>
      <PageLayout />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div>
          <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="text-center text-2xl font-bold">Post Reciepes</div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form onSubmit={handleSubmit}>
                  <div className="mt-1">
                    <label htmlFor="recipeTitle">Recipe Title:</label>
                    <input
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="text"
                      id="recipeTitle"
                      value={recipeTitle}
                      onChange={(e) => setRecipeTitle(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea
                      className="w-full outline-transparent border border-gray-300 appearance-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  px-3 sm:text-sm py-2"
                      id="ingredients"
                      value={ingredients}
                      onChange={(e) => setIngredients(e.target.value)}
                    />
                  </div>

                  <div className="mt-1">
                    <label htmlFor="instructions">Instructions:</label>
                    <textarea
                      className="w-full outline-transparent border border-gray-300 appearance-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  px-3 sm:text-sm py-2"
                      id="instructions"
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                    />
                  </div>

                  <div className="mt-1">
                    <label htmlFor="cookingTime">Cooking Time (minutes):</label>
                    <input
                      type="number"
                      id="cookingTime"
                      className="w-full outline-transparent border border-gray-300 appearance-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  px-3 sm:text-sm py-2"
                      value={cookingTime}
                      onChange={(e) => setCookingTime(e.target.value)}
                    />
                  </div>

                  <div className="mt-1">
                    <label htmlFor="servingSize">Serving Size:</label>
                    <input
                      type="number"
                      id="servingSize"
                      className="w-full outline-transparent border border-gray-300 appearance-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  px-3 sm:text-sm py-2"
                      value={servingSize}
                      onChange={(e) => setServingSize(e.target.value)}
                    />
                  </div>

                  <div className="mt-1">
                    <label htmlFor="imageVideoUpload">
                      Image/Video Upload:
                    </label>
                    <input
                      type="file"
                      className="w-full outline-transparent border border-gray-300 appearance-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  px-3 sm:text-sm py-2"
                      id="imageVideoUpload"
                      accept="image/*, video/*"
                      onChange={handleFileUpload}
                    />
                  </div>

                  <div className="mt-1">
                    <label htmlFor="recipeCategory">Recipe Category:</label>
                    <select
                      id="recipeCategory"
                      value={recipeCategory}
                      onChange={(e) => setRecipeCategory(e.target.value)}
                      className="w-full outline-transparent border border-gray-300 appearance-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  px-3 sm:text-sm py-2"
                    >
                      <option value="">Select Category</option>
                      <option value="appetizer">Appetizer</option>
                      <option value="mainCourse">Main Course</option>
                      <option value="dessert">Dessert</option>
                    </select>
                  </div>

                  <div className="mt-1">
                    <label htmlFor="dietaryPreferences">
                      Dietary Preferences:
                    </label>
                    <div>
                      <input
                        type="checkbox"
                        className="form-checkbox text-reciepeGreen h-5 w-5"
                        id="vegetarian"
                        value="vegetarian"
                        checked={dietaryPreferences.includes("vegetarian")}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          if (isChecked) {
                            setDietaryPreferences([
                              ...dietaryPreferences,
                              "vegetarian",
                            ]);
                          } else {
                            setDietaryPreferences(
                              dietaryPreferences.filter(
                                (pref) => pref !== "vegetarian"
                              )
                            );
                          }
                        }}
                      />
                      <label htmlFor="vegetarian">Vegetarian</label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="checkbox"
                        className="form-checkbox text-reciepeGreen h-5 w-5"
                        id="vegan"
                        value="vegan"
                        checked={dietaryPreferences.includes("vegan")}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          if (isChecked) {
                            setDietaryPreferences([
                              ...dietaryPreferences,
                              "vegan",
                            ]);
                          } else {
                            setDietaryPreferences(
                              dietaryPreferences.filter(
                                (pref) => pref !== "vegan"
                              )
                            );
                          }
                        }}
                      />
                      <label htmlFor="vegan">Vegan</label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="checkbox"
                        id="glutenFree"
                        className="form-checkbox text-reciepeGreen h-5 w-5"
                        value="glutenFree"
                        checked={dietaryPreferences.includes("glutenFree")}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          if (isChecked) {
                            setDietaryPreferences([
                              ...dietaryPreferences,
                              "glutenFree",
                            ]);
                          } else {
                            setDietaryPreferences(
                              dietaryPreferences.filter(
                                (pref) => pref !== "glutenFree"
                              )
                            );
                          }
                        }}
                      />
                      <label htmlFor="glutenFree">Gluten-Free</label>
                    </div>
                  </div>

                  <div className="mt-1">
                    <label htmlFor="tags">Tags:</label>
                    <input
                      type="text"
                      id="tags"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={tags}
                      onChange={(e) => setTags(e.target.value.split(","))}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-reciepeGreen hover:bg-green-500 capitalize focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => {
                      console.log("hello");
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default CreateRecipes;
