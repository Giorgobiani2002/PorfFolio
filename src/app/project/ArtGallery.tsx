import React from "react";
import { MacbookScroll } from "../components/ui/macbook-scroll";

export default function ArtGallery() {
  return (
    <div className="overflow-hidden   dark:bg-[#0B0B0F] bg-white w-full">
      <div className="px-4 sm:px-8 md:px-0">
        <a target="_blank" rel="noopener noreferrer">
          <MacbookScroll
            title={
              <span className="text-4xl font-mono text-black dark:text-white">
                Art Gallery
              </span>
            }
            badge={<Badge className="h-10 w-10 transform -rotate-12" />}
            src="/artgalery (3).png"
            showGradient={false}
          />
        </a>
      </div>
    </div>
  );
}

const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    ></svg>
  );
};
