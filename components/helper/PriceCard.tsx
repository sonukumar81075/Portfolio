import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  plane: string;
  price: string;
  bg: string;
  save: string;
}
const PriceCard = ({ bg, save, plane, price }: Props) => {
  return (
    <div className="text-center rounded-lg bg-gray-900">
      <div className={`p-6 rounded-t-lg ${bg}`}>
        <h1 className="text-white text-[30px]">{plane}</h1>
        <p className="text-[16px] text-[#d7d7d7] ">
          try out {plane} plane save{" "}
          <span className="text-yellow-300">{save}</span>
        </p>
        <div className="flex justify-center items-end mt-[1rem] space-x-1">
          <h1 className="text-[40px] font-bold text-yellow-400">{price}</h1>
          <p className="text-white">/Houe</p>
        </div>
      </div>
      <div className="p-6 ">
        <div className="flex items-center space-x-3">
          <CheckIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <p className="text-[17px] text-white opacity-80">Next js Website</p>
        </div>
        <div className="flex items-center space-x-3 mt-[1rem] mb-[1rem]">
          <CheckIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <p className="text-[17px] text-white opacity-80">React js Website</p>
        </div>
        <div className="flex items-center space-x-3">
          <CheckIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <p className="text-[17px] text-white opacity-80">Fullstack Website</p>
        </div>
        <div className="flex items-center space-x-3 mt-[1rem] mb-[1rem]">
          <CheckIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <p className="text-[17px] text-white opacity-80">
            Mern Stack Website
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <CheckIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <p className="text-[17px] text-white opacity-80">
            Authontication Website
          </p>
        </div>
      </div>
      <button className="mt-[1.5rem] px-8 py-4 bg-blue-600 text-white block w-[100%] hover:bg-blue-800 transition-all duration-300">
        Get Started
      </button>
    </div>
  );
};

export default PriceCard;
