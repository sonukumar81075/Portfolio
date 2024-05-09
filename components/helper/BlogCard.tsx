import { CalendarIcon } from "@heroicons/react/16/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  comment: string;
  title: string;
  date: string;
}
const BlogCard = ({ title, image, date, comment }: Props) => {
  return (
    <div className="bg-gray-900 ">
      <div className="">
        <Image
          src={`${image}`}
          alt="blog"
          width={300}
          height={300}
          className="object-contain w-[100%] h-[100%]"
        />
      </div>
      <div className="p-4">
        <div className="mt-[1rem] mb-[1rem] px-3 bg-gray-800 w-fit items-center space-x-2 rounded-lg">
          <CalendarIcon className="w-[1rem] h-[1rem] text-yellow-400 " />
          <p className="text-white text-[14px] opacity-85">{date}</p>
        </div>
        <h1 className="text-[20px] opacity-85 hover:text-yellow-400 transition-all duration-300 cursor-pointer text-white font-semibold underline">
          {title}
        </h1>
        <div className="flex items-center mt-[2rem] justify-between">
          <div className="flex items-center space-x-3">
            <ChatBubbleLeftRightIcon className="w-[1.2rem] h-[1.2rem] text-yellow-400" />
            <p className="text-[15px] text-white opacity-85">
              {comment} Comments
            </p>
          </div>
          <button className="text-[15px] hover:text-yellow-500 transition-all duration-150  text-white font-semibold underline">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
