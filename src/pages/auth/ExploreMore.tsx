import React from "react";
import OtherPagesNav from "../../Components/pageLayout";
import { FcLike } from "react-icons/fc";

type Props = {};

const ExploreMore = (props: Props) => {
  return (
    <>
      <OtherPagesNav />
      <div className="mt-8 p-8">
        <section className=" gap-3x max-w-md  md:max-w-sm">
          <div className="flex flex-col xl:justify-between h-full  mx-auto p-6 border">
            <div className="">
              <img
                className="  object-contain w-auto h-auto"
                src="/images/img.jpg"
                alt="img.jpg"
              />
            </div>
            <div className="mt-8">
              <p>How to Cook Nigerian Fried Rice</p>
            </div>
            <div className="w-auto">
              <p>Method</p>
              <div>
                1.2 cups (356 g) of parboiled basmati, jasmine, or white rice{" "}
                <br />
                2. 1/2 cup (118 ml) of chicken or turkey stock <br /> 3.
                Vegetable oil <br />
                <a href="">see More...</a>
              </div>
            </div>
          </div>
          <div className="border p-4">
            <span className="">
              <FcLike />
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExploreMore;
