import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] fixed z-10 ">
      <div className="flex min-h-[70px] justify-between items-center">
        <nav className="w-1/2 flex justify-between px-8">
          <div className=" ">FoodRecipes.</div>
          <li className="flex justify-between min-w-[500px]">
            <ul>Home</ul>
            <ul>About</ul>
            <ul>Recipes</ul>
            <ul>Contact</ul>
          </li>
        </nav>

        <nav className="w-1/2 min-h-[70px] bg-reciepeGrey items-center flex ">
          <div>Search</div>
        </nav>
        <nav className="block md:hidden">
          <div>
            <AiOutlineMenuUnfold />
          </div>
        </nav>
      </div>
    </div>
  );
}
