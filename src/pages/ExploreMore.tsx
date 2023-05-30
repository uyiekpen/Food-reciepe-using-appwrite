import React, { useState, useEffect } from "react";
import OtherPagesNav from "../Components/pageLayout";
import { databases, storage } from "../Api/api";
import RecipeCard from "../Components/ui/RecipeCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ExploreMore: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const mapData = async () => {
    try {
      const response = await databases.listDocuments(
        "646cb6c47bc7998e9c74",
        "646f1e990583375ff5d2"
      );
      setData(response.documents);
    } catch (error) {
      console.error("Error fetching recipe data:", error);
    }
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
            <Link to={`/detail/${item.$id}`} key={item.$id}>
              <RecipeCard recipe={item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreMore;
