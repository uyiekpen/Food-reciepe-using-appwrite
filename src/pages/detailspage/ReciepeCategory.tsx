import React from "react";
import { MdOutlineCategory } from "react-icons/md";

interface RecipeCategoryProps {
  category: string;
}

const ReciepeCategory: React.FC<RecipeCategoryProps> = ({ category }) => {
  return (
    <div>
      <div className="recipe-cooking-time">
        <div className="grid">
          <span>
            <MdOutlineCategory color="#32B768 " size={30}  />
          </span>
          <h3 className="text-lg font-semibold cpitalize">Category</h3>
        </div>
        <p className="text-sm text-gray-600">{category}</p>
      </div>
    </div>
  );
};

export default ReciepeCategory;
