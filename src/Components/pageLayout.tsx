import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function PageLayout() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (event: any) => {
    event.preventDefault();
    setToggle(!toggle);
  };

  return (
    <header className="flex justify-between items-center px-8 bg-reciepeGreen text-white w-full h-20 z-10 font-poppins">
      <div>FoodRecipes..</div>
      <label className="relative md:block hidden md:min-w-[400px]">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <BiSearchAlt2 />
        </span>
        <input
          className="placeholder-italic placeholder-text-slate-400 block bg-secondary w-full h-12 border-none rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search..."
          type="text"
          name="search"
        />
      </label>
      <nav className="hidden md:block ">
        <ul className="flex items-center justify-evenly min-w-[600px]  ">
          <li>
            <a href="/create">Create Reciepes</a>
          </li>
          <li>
            <a href="">View my Reciepes</a>
          </li>
          <li>
            <a href="" className="flex">
              <RxAvatar />
            </a>
            <span>osazie</span>
          </li>
        </ul>
      </nav>
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
      {toggle && (
        <nav
          className={`md:hidden absolute top-20 left-0 right-0 bg-white text-reciepeGreen p-8 py-6 bg-ranoWhite min-w-[340px] md:min-w-[500px] w-max block duration-1000 ${
            toggle
              ? "animate-in slide-in-from-right translate-x-0 right-[5px] md:right-[50px]"
              : "animate-out slide-out-to-right translate-x-[150%] right-[-150px]"
          }`}
        >
          <ul className="">
            <li>
              <a href="/create" className="font-bold text-ranoRed">
                Create Recipes
              </a>
            </li>
            <li>
              <a href="">View My Recipes</a>
            </li>
            <li>
              <a href="">
                <RxAvatar />
              </a>
              <span>osazie</span>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
