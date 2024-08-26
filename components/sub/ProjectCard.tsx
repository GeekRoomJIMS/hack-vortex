import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-[30rem] flex flex-col justify-between">
      <div className="h-2/3">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="relative p-4">
        <h1 className="sm:text-lg md:text-2xl font-semibold text-white">
          {title}
        </h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
