"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Header() {
  const lines = [
    { text: "Hi, my name is", className: "text-[16px]" },
    { text: "LASHA GIORGOBIANI", className: "text-[60px]" },
    { text: "Full-Stack developer from Georgia", className: "text-[16px]" },
  ];

  const [visibleLineIndex, setVisibleLineIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    if (visibleLineIndex < lines.length) {
      const timeout = setTimeout(() => {
        setVisibleLineIndex((prev) => prev + 1);
      }, 1800); // Timing between each line animation
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setVisibleLineIndex(0);
        setCycleKey((prev) => prev + 1);
      }, 7000);
      return () => clearTimeout(resetTimeout);
    }
  }, [visibleLineIndex]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        ease: "easeOut",
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  const animateLine = (text: string, className?: string, index?: number) => (
    <motion.div
      className={`flex flex-wrap ${className} whitespace-pre`}
      variants={container}
      initial="hidden"
      animate="visible"
      key={`${cycleKey}-${index}`}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          className="px-[1.5px] text-white font-mono"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );

  const router = useRouter();

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-screen bg-[#111111] dark:bg-gray-700 h-[1170px] md:h-[800px] ">
      <div className="max-w-[1440px] flex flex-col-reverse md:flex-row md:justify-between m-auto items-center px-8 ">
        <div className="space-y-4 mt-[20px] md:mt-[0px] ">
          <AnimatePresence mode="wait">
            {lines
              .slice(0, visibleLineIndex)
              .map((line, i) => animateLine(line.text, line.className, i))}
          </AnimatePresence>

          {visibleLineIndex >= lines.length && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{}}
              onClick={() => handleScrollToSection("contact")}
              className="w-[210px] relative z-[1000] cursor-pointer h-[60px] border-[1px] border-gray-500 mt-[60px] text-[16px] leading-[28px] text-white font-mono"
            >
              GET IN TOUCH
            </motion.button>
          )}
        </div>

        <Image
          src="/myphoto.jpg"
          width={500}
          height={500}
          alt="self"
          className="rounded-lg md:mt-[20px]  "
        />
      </div>
    </div>
  );
}
