import React from "react";
import SkillsCard from "./helper/SkillsCard";

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black ">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3">
          <p className="heading_mini">My Skills</p>
          <h1 className="heading_primary">
            Let's Explor Populer <span className="text-yellow-300">Skills</span>{" "}
            & Experience
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nihil
            in ullam totam provident voluptatem, magnam quae corporis cupiditate
            dolore, consectetur molestiae beatae pariatur ex sit. Repellendus
            animi minus quaerat.
          </p>
          <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-3xl before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 ">
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
        <div className="col-span-4 ">
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
              <SkillsCard
                title="React"
                image="/images/react.png"
                percent="90%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-dleay="200"
            >
              <SkillsCard title="CSS" image="/images/css.png" percent="97%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-dleay="400"
            >
              <SkillsCard
                title="JavaScript"
                image="/images/javascript.png"
                percent="77%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-dleay="600"
            >
              <SkillsCard
                title="TypeScript"
                image="/images/type.png"
                percent="67%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-dleay="800"
            >
              <SkillsCard title="HTML" image="/images/html.png" percent="67%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-dleay="1000"
            >
              <SkillsCard
                title="Node Js"
                image="/images/node.png"
                percent="77%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-dleay="1200"
            >
              <SkillsCard
                title="MongoDB"
                image="/images/mongo.png"
                percent="65%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-dleay="1400"
            >
              <SkillsCard
                title="Next js"
                image="/images/next.png"
                percent="85%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
