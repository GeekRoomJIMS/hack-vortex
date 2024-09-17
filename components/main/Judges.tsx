import React from "react";
import { judges } from "@/constants";
import { FaLinkedin } from "react-icons/fa";

import "./judges.css";

const Judges = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[100]"
      id="judges"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Judges
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4">
        {judges.map((judge, idx) => (
          <div key={idx}>
            <div
              className="team__item set-bg"
              style={{
                backgroundImage: `url(${judge.image})`,
              }}
            >
              <div className="team__text">
                <div className="team__title">
                  <h4>{judge.name}</h4>
                  <span>{judge.position}</span>
                </div>
                <p>{judge.description}</p>

                <div className="team__social">
                  <a
                    href={judge.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Judges;
