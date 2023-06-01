import React from "react";

interface RecipeInstructionsProps {
  instructions: string[];
}

const RecipeInstructions: React.FC<RecipeInstructionsProps> = ({ instructions }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-reciepeGreen">Instructions</h2>
      <ol className="list-decimal ml-6">
        {instructions.map((instruction, index) => (
          <li key={index} className="mb-2">{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeInstructions;
