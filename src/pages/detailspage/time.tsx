import React from "react";

interface RecipeCookingTimeProps {
  time: string;
}

const RecipeCookingTime: React.FC<RecipeCookingTimeProps> = ({ time }) => {
  return (
    <div className="recipe-cooking-time">
      <h3 className="text-lg font-semibold mb-2">Cooking Time</h3>
      <p className="text-sm text-gray-600">{time}</p>
    </div>
  );
};

export default RecipeCookingTime;
