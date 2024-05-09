import React from "react";

const Contact = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="items-center grid grid-cols-1 md:grid-cols-2 gap-[2rem] w-[80%] mx-auto ">
        <div className="">
          <p className="heading_mini">Get in Touch</p>
          <h1 className="heading_primary">
            Lets make Your <span className="text-yellow-400"> Brand </span>
            brillliant
          </h1>
          <p className="text-[15px] text-white mt-[1rem] opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            excepturi voluptates quasi qui natus sed, nihil eveniet minima?
            Voluptate animi, molestias adipisci eaque praesentium iste beatae
            facilis tempore culpa eligendi!
          </p>
          <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-400 underline font-bold">
            +91 8107545771
          </h1>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
            <input
              type="text"
              placeholder="Name"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
            <input
              type="emsil"
              placeholder="Email"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="py-[0.7rem] mt-[1.5rem] w-full mb-[1.5rem] outline-none text-white bg-gray-800 rounded-md px-4"
          />
          <textarea
            placeholder="message"
            rows={4}
            className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 px-4 rounded-md"
          ></textarea>
          <button className="py-[0.7rem]   w-full mb-[1.5rem] outline-none text-white bg-blue-700 rounded-md px-4 hover:bg-blue-800">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
