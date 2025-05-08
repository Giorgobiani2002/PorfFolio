import About from "@/app/about/About";
import { Boxes } from "@/app/components/ui/background-boxes";
import ContactUs from "@/app/contact/page";

import Header from "@/app/navbar-header/Header";
import Navbar from "@/app/navbar-header/Navbar";
import ArtGallery from "@/app/project/ArtGallery";
import Eccomerce from "@/app/project/Eccomerce";
import Project from "@/app/project/ProjectFinance";
import { SmallProject } from "@/app/project/SmallProject";
import React from "react";

export default function home() {
  return (
    <div>
      <div className=" relative   overflow-hidden ">
        <Boxes />
        <Navbar />
        <Header />
      </div>
      <About />
      {/* <Experience /> */}
      <h1 className=" text-center text-4xl md:text-[6rem] font-bold mt-1 leading-none" id="projects">
        Full-Stack Projects
      </h1>
      <div className="md:flex">
        <Project />
        <Eccomerce />
      </div>
      <div>
        <p className="text-center font-mono border-1 rounded-2xl text-lg md:text-xl font-light leading-relaxed tracking-wide text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">
          I&apos;m currently working on a project called{" "}
          <span className="font-semibold text-black dark:text-white">
            Art Gallery
          </span>{" "}
          — a platform designed to help artists showcase and sell their artwork
          online. It allows artists to create profiles, list their pieces for
          sale, and even participate in live{" "}
          <span className="italic">auctions</span>, making it easier for them to
          reach a wider audience and monetize their creativity.
        </p>

        <ArtGallery />
      </div>
      <h1 className=" text-center text-4xl md:text-[6rem] font-bold mt-1 leading-none">
        Small Projects
      </h1>
      <SmallProject />
      <ContactUs />
    </div>
  );
}
