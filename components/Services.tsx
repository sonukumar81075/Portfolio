import React from "react";
import ServicesCard from "./helper/ServicesCard";

export default function Services() {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
      <div className="text-center ">
        <p className="capitalize heading_mini">Populer Services</p>
        <h1 className="heading_primary">
          My Special <span className="text-yellow-300">Services</span> For you
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        {/* services card */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <ServicesCard title="React Website" num="01" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-dleay="200"
        >
          <ServicesCard title="Next js Website" num="02" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-dleay="400"
        >
          <ServicesCard title="Fullstack Website" num="03" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-dleay="600"
        >
          <ServicesCard title="Node js Api" num="04" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-dleay="800"
        >
          <ServicesCard title="Mern WebApp" num="05" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-dleay="1000"
        >
          <ServicesCard title="Bug Fixing" num="06" />
        </div>
      </div>
    </div>
  );
}
