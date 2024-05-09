import React from "react";
import ProjectCard from "./helper/ProjectCard";

export default function Project() {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900 ">
      <div className="text-center">
        <p className="heading_mini">Recent Work</p>
        <h1 className="capitalize heading_primary">
          my west <span className="text-yellow-300">projects</span>
        </h1>
      </div>
      <ProjectCard
        title="E-commerce Website"
        tech1="React"
        tech2="next js"
        tech3="Tailwindcss"
        tech4="TypreScript"
        image="/images/project1.jpg"
      />
      <ProjectCard
        title="Portfolio Website"
        tech1="React"
        tech2="next js"
        tech3="Tailwindcss"
        tech4="TypreScript"
        image="/images/project2.png"
      />
       <ProjectCard
        title="Fullstack Food Delivery Webapp"
        tech1="React"
        tech2="Next js"
        tech3="Node js"
        tech4="MongoDb"
        image="/images/project3.jpg"
      />
       <ProjectCard
        title="Travel Website"
        tech1="React"
        tech2="next js"
        tech3="Tailwindcss"
        tech4="TypreScript"
        image="/images/project4.jpg"
      />
    </div>
  );
}
