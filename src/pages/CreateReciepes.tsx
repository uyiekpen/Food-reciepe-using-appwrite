import React from "react";
import PageLayout from "../Components/pageLayout";

type Props = {};

const CreateReciepes = (props: Props) => {
  return (
    <>
      <PageLayout />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center text-2xl font-bold">Post Reciepes</div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
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
                    placeholder="Description"
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
    </>
  );
};

export default CreateReciepes;
