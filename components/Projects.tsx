import { PROJECTS } from "@/constants.ts";
import React from "react";
import { Container3D } from "@/components/Container3D";

const Projects = () => {
  return (
    <div className="py-20">
      <h2 className="heading">
        A selection of <span className="text-purple"> projects</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-8 sm:gap-24">
        {PROJECTS.map((project) => {
          return (
            <div
              key={project.id}
              className="flex items-center justify-center
                h-[28rem] 
                sm:min-h-[34rem]
                lg:min-h-[32.5rem]
                w-[80vw]
                sm:w-[570px]
              "
            >
              <Container3D {...project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
