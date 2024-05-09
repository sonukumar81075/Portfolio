import React from "react";
import BlogCard from "./helper/BlogCard";

const Blog = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="text-center">
        <p className="heading_mini">My Blog</p>
        <h1 className="heading_primary">
          My Latest <span className="text-yellow-300">Blog</span> and news
        </h1>
      </div>
      <div className="w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[2rem]">
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
        >
          <BlogCard
            title="Fullstack Developer Roadmap"
            comment="4"
            date="24 January 2024"
            image="/images/blog1.png"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-dleay="200"
        >
          <BlogCard
            title="Time Management In Tech Job"
            comment="6"
            date="22 January 2024"
            image="/images/blog2.png"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-dleay="400"
        >
          <BlogCard
            title="Starting With React js"
            comment="8"
            date="26 January 2024"
            image="/images/blog3.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
