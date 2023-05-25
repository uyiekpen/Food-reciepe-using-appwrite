import React, { useState } from "react";
import PageLayout from "../Components/pageLayout";
import { databases, storage } from "../Api/api";
import { v4 as uuidv4 } from "uuid";

type Props = {};

const CreateReciepes = (props: Props) => {
  const [method, setMethod] = useState("");
  const [ingredient, setIngredient] = useState("");

  const [image, setImage] = useState<File | null>(null);
  const [tittle, setTittle] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImage(file || null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image || !tittle) {
      console.log("Please select an image and enter a title");
      return;
    }

    try {
      const documentId = uuidv4(); // Generate a unique ID for the document

      // Upload the file to Appwrite storage
      const fileResult = await storage.createFile(
        "646f194a7bba7e4fdbdd",
        documentId,
        image
      );
      const fileId = fileResult.$id;

      // Create a document in Appwrite database
      const response = await databases.createDocument(
        "646cb6c47bc7998e9c74",
        "646f1e990583375ff5d2",
        documentId,
        { tittle, image: fileId, method, ingredient }
        // [Permission.update(Role.any())]
      );

      console.log("Upload successful:", response);

      // Reset form fields
      setImage(null);
      setTittle("");
      setMethod("");
      setIngredient("");
    } catch (error) {
      console.error("Upload error:", error);
    }
  };
  return (
    <div>
      <PageLayout />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center text-2xl font-bold">Post Reciepes</div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              action="#"
              onSubmit={handleSubmit}
              method="POST"
            >
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image
                </label>
                <div className="mt-1">
                  <input
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="file"
                    onChange={handleFileChange}
                    // onChange={(e) => {
                    //   setImage(e.target.value);
                    // }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="Title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <div className="mt-1">
                  <input
                    id="Title"
                    name="Title"
                    type="text"
                    autoComplete="Title"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={tittle}
                    onChange={(e) => {
                      setTittle(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="Ingredients"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ingredients
                </label>
                <div className="mt-1 ">
                  <textarea
                    name="Ingredients"
                    id="Ingredients"
                    rows={5}
                    className="w-full outline-transparent border border-gray-300 appearance-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  px-3 sm:text-sm py-2"
                    placeholder="Description"
                    value={ingredient}
                    onChange={(e) => {
                      setIngredient(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>

              <div>
                <label
                  htmlFor="Method"
                  className="block text-sm font-medium text-gray-700"
                >
                  Method
                </label>
                <div className="mt-1">
                  <textarea
                    name="Method"
                    id="Method"
                    rows={5}
                    className="w-full outline-transparent border border-gray-300 appearance-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  px-3 sm:text-sm py-2"
                    placeholder="Method"
                    value={method}
                    onChange={(e) => {
                      setMethod(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-reciepeGreen hover:bg-green-500 capitalize focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  create{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CreateReciepes;
