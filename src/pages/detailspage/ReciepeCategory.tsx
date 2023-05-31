import React from "react";

interface RecipeCategoryProps {
  category: string;
}

const ReciepeCategory: React.FC<RecipeCategoryProps> = ({ category }) => {
  return (
    <div>
      <div className="recipe-cooking-time">
        <h3 className="text-lg font-semibold mb-2">Category:</h3>
        <p className="text-sm text-gray-600">{category}</p>
      </div>
    </div>
  );
};

export default ReciepeCategory;
