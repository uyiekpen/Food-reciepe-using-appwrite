import React from "react";
import { BiTime } from "react-icons/bi";

interface RecipeCookingTimeProps {
  cookingTime: string;
}

const RecipeCookingTime: React.FC<RecipeCookingTimeProps> = ({
  cookingTime,
}) => {
  return (
    <div className="recipe-cooking-time">
      <div className="grid">
        <span>
          <BiTime color="#32B768 " size={30} />
        </span>
        <h3 className="text-lg font-semibold capitalize">Cooking Time</h3>
      </div>
      <p className="text-sm text-gray-600">{cookingTime}mins</p>
    </div>
  );
};

export default RecipeCookingTime;
