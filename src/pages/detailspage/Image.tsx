import React from "react";

interface RecipeImageProps {
  imageUrl: string;
  altText: string;
}

const RecipeImage: React.FC<RecipeImageProps> = ({ imageUrl, altText }) => {
  return (
    <div className="min-h-[300px]">
    <img src={imageUrl} alt={altText} className="w-full mb-4 rounded-lg object-contain shadow-sm" style={{ maxHeight: '300px' , maxWidth: "500px"}} />
  </div>
  
  
  );
};

export default RecipeImage;
