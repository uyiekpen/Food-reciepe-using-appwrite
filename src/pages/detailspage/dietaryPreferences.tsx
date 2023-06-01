import React from "react";
import { MdRoomPreferences } from "react-icons/md";
interface dietaryPreferencesProps {
  dietaryPreferences: string[];
}

const DietaryPreferences: React.FC<dietaryPreferencesProps> = ({
  dietaryPreferences,
}) => {
  return (
    <div>
      <div className="recipe-cooking-time">
        <span>
          <MdRoomPreferences color="#32B768 " size={30} />
        </span>
        <h3 className="text-lg font-semibold capitalize">preferences</h3>
        <p className="text-sm text-gray-600 flex w-auto flex-col">
          {dietaryPreferences}
        </p>
      </div>
    </div>
  );
};

export default DietaryPreferences;
