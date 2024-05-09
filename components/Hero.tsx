import React from "react";
import TypeWriteEffect from "./helper/TypeWriteEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[100vw] pt-[4vh] md:pt[12vh] h-[85vh] md:h-[100vh] custom_bg bg-black">
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center ">
          <div className="">
            <h1
              data-aos="fade-right"
              className="uppercase text-[#c4cfde] mb-[1.3rem] "
            >
              welcome to my world
            </h1>
            <div data-aos="fade-left" data-aos-delay="400">
              <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white">
                Hi, I'm <span className="text-yellow-300 ">Sonu </span>
              </h1>
              {/* type writeffect */}
              <TypeWriteEffect />
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="800"
              className="mt-[1.2rem] text-[15px] md:text-[15px] text-[#c4cfde] "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos aperiam dolore assumenda veniam eum quod voluptates,
              adipisci autem magni nisi excepturi illo dolores. Omnis fugiat
              repellat necessitatibus possimus facere quaerat!
            </p>
            <div className="mt-[2rem] flex items-center space-x-6">
              <button
                data-aos="zoom-in"
                data-aos-delay="1200"
                className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-3xl before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 "
              >
                <span className="relative z-10">Hire Me</span>
              </button>
              <button
                data-aos="zoom-out"
                data-aos-delay="1600"
                className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-orange-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0  before:bg-green-700 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">Download CV</span>
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="2000"
            className="hidden md:block"
          >
            <Image
              src={"/images/sonu1.jpg"}
              alt="hero"
              width={400}
              height={400}
              className="object-contain ml-24 mt-20 rounded-tl-[10rem] rounded-br-[10rem] rounded-tr-[10rem] rounded-bl-[10rem] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
