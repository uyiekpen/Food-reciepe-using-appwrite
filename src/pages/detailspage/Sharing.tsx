import React from "react";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

const SocialSharingButtons: React.FC = () => {
  const shareOnFacebook = () => {
    // Logic to share recipe on Facebook
  };

  const shareOnTwitter = () => {
    // Logic to share recipe on Twitter
  };

  const shareOnPinterest = () => {
    // Logic to share recipe on Pinterest
  };

  return (
    <div className="social-sharing">
      <h2 className="text-2xl font-bold mb-4">Share This Recipe</h2>
      <div className="flex items-center">
        <button onClick={shareOnFacebook} className="mr-4">
          <FaFacebook size={30} />
        </button>
        <button onClick={shareOnTwitter} className="mr-4">
          <FaTwitter size={30} />
        </button>
        <button onClick={shareOnPinterest}>
          <FaPinterest size={30} />
        </button>
      </div>
    </div>
  );
};

export default SocialSharingButtons;
