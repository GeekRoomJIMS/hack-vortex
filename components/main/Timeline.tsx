"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { timeline_data } from "@/constants";

const TimelineItem = ({
  date,
  title,
  descr,
}: {
  date: string;
  title: string;
  descr: string;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className="timeline-item"
    >
      <div className="date">{date}</div>
      <div className="title">{title}</div>
      <div className="descr">{descr}</div>
    </motion.li>
  );
};

const Timeline = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-20"
      id="timeline"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Hackathon Timeline
      </h1>
      <ul className="timeline-container">
        {timeline_data.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            descr={item.descr}
          />
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
