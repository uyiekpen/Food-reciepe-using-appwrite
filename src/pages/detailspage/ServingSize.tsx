import React from "react";
import { MdFoodBank } from "react-icons/md";

interface ServingSizeProps {
  serving: string;
}

const ServingSize: React.FC<ServingSizeProps> = ({ serving }) => {
  return (
    <div className="recipe-cooking-time">
      <div>
        <span>
          <MdFoodBank color="#32B768 " size={30} />
        </span>
        <h3 className="text-lg font-semibold capitalize">Serving</h3>
      </div>
      <p className="text-sm text-gray-600">{serving}</p>
    </div>
  );
};

export default ServingSize;
