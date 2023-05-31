import React from "react";
interface dietaryPreferencesProps {
  dietaryPreferences: string[];
}

const DietaryPreferences: React.FC<dietaryPreferencesProps> = ({
  dietaryPreferences,
}) => {
  return (
    <div>
      <div className="recipe-cooking-time">
        <h3 className="text-lg font-semibold mb-2">dietary preferences</h3>
        <p className="text-sm text-gray-600">{dietaryPreferences}</p>
      </div>
    </div>
  );
};

export default DietaryPreferences;
