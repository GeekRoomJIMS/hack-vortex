import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="why-us"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Why Join Us?
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/why-us/open-innovation.webp"
          title="Open Innovation"
          description="While we've some themes set in place, we also believe in allowing developers complete freedom in what they develop."
        />
        <ProjectCard
          src="/why-us/trophies.webp"
          title="1,00,000+ Prize Pool"
          description="Our still-increasing prize pool ensures deserving coders get enough cool rewards :)"
        />
        <ProjectCard
          src="/why-us/goodies.webp"
          title="Goodies and Swags"
          description="We've got you covered in the swags department as well. We have enough of those for *everyone* in the offline round."
        />
        <ProjectCard
          src="/why-us/foods.webp"
          title="Free Food & Beverages"
          description="Free food & beverages is always a good additional addon, so we're providing all that for you!"
        />
        <ProjectCard
          src="/why-us/cash.webp"
          title="10,000+ Cash Prizes"
          description="Free food & beverages is always a good additional addon, so we're providing all that for you!"
        />

        <div className="flex justify-center items-center z-[100]">
          <a
            href="https://linktr.ee/GeekRoom_Jims"
            target="_blank"
            rel="noreferrer noopener"
            className="follow-btn md:w-1/2 z-10 text-center"
          >
            <span>Follow Us</span>
            <div className="liquid"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
