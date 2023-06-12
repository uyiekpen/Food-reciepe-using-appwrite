import React from "react";
import { FaStar } from "react-icons/fa";

interface Review {
  rating: number;
  comment: string;
  name: string;
}

interface RecipeReviewsProps {
  reviews: Review[];
}

const RecipeReviews: React.FC<RecipeReviewsProps> = ({ reviews }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          {/* <div className="flex items-center mb-2">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-gray-600">{review.rating}</span>
          </div> */}
          <p className="mb-2">{review.comment}</p>
          <p className="text-gray-500">- {review.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeReviews;
