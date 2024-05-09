import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function About() {
  return (
    <div className="mt-[-4rem] bg-black pb-[3rem] text-white">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div className="">
          <p className="heading_mini">About Me</p>
          <h1 className="heading_primary text-[45px]">
            professional <span className="text-yellow-400">website</span> for
            youe bussiness
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            labore provident eos beatae quos nemo sunt impedit maxime cumque
            dolor, accusantium, eveniet tempora omnis, itaque aspernatur iste
            incidunt illo enim?
          </p>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-end space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white capitalize">
                Frontend Developement
              </p>
            </div>
          </div>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-end space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white capitalize">
                backend Developement
              </p>
            </div>
          </div>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-end space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white capitalize">
                web Developement
              </p>
            </div>
          </div>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-end space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white capitalize">
                mern Developement
              </p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem] ">
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              className="p-6 text-center bg-yellow-500 "
            >
              <p className="text-[50px] text-black font-bold">1</p>
              <p className="text-[20px] text-black font-600">
                Years Experience
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[50px] text-black font-bold">200+</p>
              <p className="text-[20px] text-black font-600">Heppy Client</p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[50px] text-black font-bold">300+</p>
              <p className="text-[20px] text-black font-600">Project Done</p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
              className="p-6 text-center bg-yellow-500"
            >
              <p className="text-[50px] text-black font-bold">3+</p>
              <p className="text-[20px] text-black font-600">Award win</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
