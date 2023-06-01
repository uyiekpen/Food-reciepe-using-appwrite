import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-reciepeGreen py-4 ">
        <div className="container mx-auto px-4 ">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-900">
                Create Recipes
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-900">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="container mx-auto px-4">
            <p className="text-center text-white text-sm">
              &copy; 2023 Your Website. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
