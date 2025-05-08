"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLashaVisible, setIsLashaVisible] = useState(true);
  const [textKey, setTextKey] = useState(0);

  const name = "L'G";
  const subtitle = "Full-Stack Developer..";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const burgerVariants = {
    open: { rotate: 45 },
    closed: { rotate: 0 },
  };
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLashaVisible((prev) => !prev);
      setTextKey((prev) => prev + 1); // Increase the key to re-mount the component
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-full bg-[#111111] dark:bg-gray-700">
      <div className="container mx-auto md:px-0 px-4 max-w-[1440px] w-full bg-[#111111] dark:bg-white rounded-xl overflow-hidden">
        <nav className="bg-[#111111] dark:bg-white shadow-lg w-full z-50 mt-[20px]">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <motion.div
                  className="flex flex-wrap"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  key={textKey}
                >
                  {(isLashaVisible ? name : subtitle)
                    .split("")
                    .map((char, index) => (
                      <motion.span
                        key={index}
                        variants={letter}
                        className={`px-1 rounded ${
                          isLashaVisible
                            ? "text-white text-[22px] font-mono"
                            : "text-white text-[22px] font-mono"
                        }`}
                      >
                        {char}
                      </motion.span>
                    ))}
                </motion.div>
              </div>

              <div className="hidden md:flex space-x-8 text-white dark:text-gray-700 text-[20px] font-mono">
                {[
                  { label: "ABOUT", href: "about" },
                  { label: "PROJECT", href: "projects" },
                  { label: "CONTACT", href: "contact" },
                ].map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleScrollToSection(item.href)}
                    className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-400 dark:after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Burger Icon */}
              <motion.div
                className="md:hidden flex items-center z-[9999] relative cursor-pointer"
                variants={burgerVariants}
                animate={isMobileMenuOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white dark:text-gray-700 text-[20px] font-mono focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              className="absolute inset-0 bg-[#111111] dark:bg-white bg-opacity-50 z-50"
              onClick={() => setMobileMenuOpen(false)}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div
                className="fixed inset-y-0 left-0 bg-[#111111] dark:bg-white w-64 p-6 transform transition-transform"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white cursor-pointer dark:text-red-600 hover:text-red-600 focus:outline-none mb-4"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <nav className="space-y-4 text-gray-400 dark:text-gray-700 cursor-pointer">
                  {[
                    { label: "ABOUT", href: "#about" },
                    { label: "PROJECT", href: "#testimonials" },
                    { label: "CONTACT", href: "#clients" },
                  ].map((item) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="relative block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-400 dark:after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </nav>
      </div>
    </div>
  );
}
