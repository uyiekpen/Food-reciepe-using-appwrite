import React, { useState, useEffect } from "react";
import OtherPagesNav from "../Components/pageLayout";
import { databases, storage } from "../Api/api";
import RecipeCard from "../Components/ui/RecipeCard";

interface Recipe {
  id: number;
  title: string;
  image: string;
  description: string;
}
const ExploreMore: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const mapData = () => {
    const promise = databases.listDocuments(
      "646cb6c47bc7998e9c74",
      "646f1e990583375ff5d2"
    );

    promise.then(
      function (response) {
        setData(response?.documents);
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  };

  const getImageURL = (fileId: string, fileAlias: string) => {
    const imageURL = storage.getFileView(fileId, fileAlias);
    return imageURL;
  };

  useEffect(() => {
    mapData();
  }, []);

  return (
    <>
      <OtherPagesNav />
      <div className="container mx-auto p-3">
        <h1 className="text-2xl font-bold mb-4">Browse Recipes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((item) => (
              <RecipeCard key={item.id}  recipe={item}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreMore;
