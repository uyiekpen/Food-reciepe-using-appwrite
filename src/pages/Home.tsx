import React from "react";
import Button from "../Components/ui/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="w-full flex items-center min-h-[600px]">
        <div className="w-1/2 px-8 flex flex-col ">
          <p className="text-6xl capitalize font-bold">
            lets start cooking with popular reciepes
          </p>
          <p className="mt-2">
            want to learn cook but confused on how to star?{" "}
          </p>
          <span className="mt-2">no need to worry again</span>
          <div className="mt-8 flex space-x-2">
            <Link to="/signup">
              <Button
                title="Get Started"
                className="bg-reciepeGreen text-white "
              />
            </Link>
            <Button
              title="Explore Menu"
              className="border-reciepeGreen border-[1px] text-reciepeGreen "
            />
          </div>
        </div>
        <div className="w-1/2 bg-reciepeGrey min-h-[600px] flex items-center justify-center ">
          <div className="min-w-[300px]">
            <img
              className="rounded-md mt-8 object-contain "
              src="/images/img.jpg"
              alt="img.png"
            />
          </div>{" "}
        </div>
      </section>
    </div>
  );
}
