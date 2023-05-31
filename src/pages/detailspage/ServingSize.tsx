import React from "react";

interface ServingSizeProps {
  serving: string;
}

const ServingSize: React.FC<ServingSizeProps> = ({ serving }) => {
  return (
    <div className="recipe-cooking-time">
      <h3 className="text-lg font-semibold mb-2">Serving:</h3>
      <p className="text-sm text-gray-600">{serving}</p>
    </div>
  );
};

export default ServingSize;
