import React from "react";

interface RecipeImageProps {
  imageUrl: string;
  altText: string;
}

const RecipeImage: React.FC<RecipeImageProps> = ({ imageUrl, altText }) => {
  return (
    <div className="recipe-image">
      <img src={imageUrl} alt={altText} className="w-full mb-4 rounded-lg" />
    </div>
  );
};

export default RecipeImage;
