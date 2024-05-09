import React from "react";
import PriceCard from "./helper/PriceCard";

const Price = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="text-center ">
        <p className="heading_mini capitalize">populer services</p>
        <h1 className="heading_primary capitalize">
          best <span className="capitalize text-yellow-300">pricing </span> for
          your project{" "}
        </h1>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]">
        <PriceCard plane = "Basic" price="10$" save="25%" bg="bg-red-900" />
        <PriceCard plane = "Populer" price="20$" save="35%" bg="bg-green-900" />
        <PriceCard plane = "Primiun" price="25$" save="40%" bg="bg-blue-900" />
      </div>
    </div>
  );
};

export default Price;
