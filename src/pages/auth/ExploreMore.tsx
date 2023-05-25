import React, { useState, useEffect } from "react";
import OtherPagesNav from "../../Components/pageLayout";
import { FcLike } from "react-icons/fc";
import { databases } from "../../Api/api";

type Props = {};

const ExploreMore = (props: Props) => {
  const [data, setData] = useState<any[]>([]);

  const mapData = () => {
    const promise = databases.listDocuments(
      "646cb6c47bc7998e9c74",
      "646cb6d530a1039b7b3e"
    );

    promise.then(
      function (response) {
        setData(response?.documents);
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    mapData();
  }, []);

  return (
    <>
      <OtherPagesNav />
      <div className="mt-8 p-8">
        <section className=" gap-3x max-w-md  md:max-w-sm">
          {data?.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col xl:justify-between h-full  mx-auto p-6 border">
                <div className="">
                  <img
                    className="  object-contain w-auto h-auto"
                    src={item.image}
                    alt="img.jpg"
                  />
                </div>
                <div className="mt-8">
                  <p>{item.tittle}</p>
                </div>
                <div className="w-auto">
                  <p>{item.method}</p>
                  <div>
                    <a href="">see More...</a>
                  </div>
                </div>
              </div>
              <div className="border p-4">
                <span className="">
                  <FcLike />
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default ExploreMore;
