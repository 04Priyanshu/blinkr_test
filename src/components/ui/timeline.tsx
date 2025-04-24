"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useRef } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  // Calculate a fixed height based on the number of items
  const itemHeight = 150; // Reduced height per item in pixels
  const totalHeight = data.length * itemHeight;
  
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, totalHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl mx-auto text-center">
          How to avail loan within minutes
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mx-auto text-center">
          We have made the process of availing loan as simple as possible. Here&apos;s
          a timeline of the process.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto pb-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-center pt-8 md:pt-24 relative"
          >
            {/* Left side titles */}
            <div className="w-5/12 pr-20 text-right">
              <h3 className="text-xl md:text-3xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Center timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
              <div className="h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border-2 border-neutral-200 dark:border-neutral-800 shadow-lg">
                <div className="h-3 w-3 rounded-full bg-purple-500 dark:bg-purple-500" />
              </div>
            </div>

            {/* Right side content */}
            <div className="w-5/12 pl-20">
              <div className="text-neutral-700 dark:text-neutral-300">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        
        {/* Timeline line with fixed height */}
        <div
          style={{
            height: `${totalHeight}px`,
          }}
          className="absolute left-1/2 transform -translate-x-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-0"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
