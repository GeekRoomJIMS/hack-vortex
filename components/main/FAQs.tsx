"use client";

import { faqData } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="w-full mb-4">
      <motion.div
        onClick={onClick}
        className="cursor-pointer p-4 bg-slate-500/50 rounded-lg shadow-lg"
        whileHover={{ scale: 1.02 }}
      >
        <motion.h2
          className="text-lg font-semibold"
          animate={{ color: isOpen ? "#06b6d4" : "#ddd" }}
          transition={{ duration: 0.3 }}
        >
          {question}
        </motion.h2>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-slate-700/40 rounded-lg">
              <p className="text-slate-400 text-sm">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="flex flex-col items-center justify-center pb-20 z-[999] px-2"
      id="faq"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Frequently Asked Questions
      </h1>
      <div className="w-full max-w-4xl">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
