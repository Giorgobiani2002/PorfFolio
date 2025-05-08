import React from "react";
import { MacbookScroll } from "../components/ui/macbook-scroll";

export default function Project() {
  return (
    <div className="overflow-hidden  dark:bg-[#0B0B0F] bg-white w-full ">
      <a
        href="https://finance-orcin-tau.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MacbookScroll
          title={
            <span className="text-4xl font-mono text-black dark:text-white">
              Personal Finance App!
            </span>
          }
          badge={<Badge className="h-10 w-10 transform -rotate-12" />}
          src="/finance2.png"
          showGradient={false}
        />
      </a>
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
    >
      {/* SVG content */}
    </svg>
  );
};
