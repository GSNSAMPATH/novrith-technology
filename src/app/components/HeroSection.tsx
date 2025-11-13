"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y });
  };

  return (
    <section
      className=" text-white flex items-center overflow-hidden relativepx-6 lg:px-24 mt-20"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Text Section */}
          <div className="lg:col-span-6 z-10 order-2 lg:order-1">
            <div className="max-w-2xl">
              {/* Animated Gradient Text */}
              <h1
                className="font-zendots tracking-wider leading-[100%] md:text-[40px] font-bold leading-tight"
                style={{
                  backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #f5f4f8ff 80%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  transition: "background 0.2s ease",
                }}
              >
                <span className="block">WE DESIGN THE</span>
                <span className="block">FUTURE</span>
                <span className="block">YOU EXPERIENCE IT</span>
              </h1>

              {/* Description */}
              <p className="font-inter-medium mt-[24px] text-gray-300">
                We create intelligent, design-driven digital solutions —<br />
                from software to AI systems — that power<br />
                businesses, simplify lives, and shape tomorrow.
              </p>

              {/* Buttons */}
              <div className="mt-[120px] flex flex-wrap gap-4">
                {/* START PROJECT */}
                <a
                  href="#start"
                  className="inline-flex items-center gap-3 bg-[#00B259] w-[300px] hover:bg-green-600 transition-colors text-white pr-10 px-8 py-3 font-semibold relative after:content-[''] after:absolute after:right-0 after:top-0 after:w-6 after:h-full after:bg-black [clip-path:polygon(0_0,100%_0,calc(99%_-_35px)_100%,0%_100%)]"
                >
                  START YOUR PROJECT
                  <FaArrowRight className="relative rotate-310" />
                </a>

                {/* WATCH OUR STORY */}
                <div className="relative inline-block group">
                  <button className="inline-flex items-center gap-3 bg-[#00B259] hover:bg-green-600 transition-colors text-black px-12  w-[300px] py-5 font-semibold relative after:content-[''] after:absolute after:right-0 after:top-0 after:w-6 after:h-full after:bg-black [clip-path:polygon(0_0,100%_0,calc(95%_-_22px)_100%,0_100%)]">
                    <span
                      className="absolute inset-[2px] bg-[#030421] z-0
                      [clip-path:polygon(0_0,calc(100%_-_1px)_0,100%_50%,calc(100%_-_18px)_100%,0_100%)] w-[calc(100%-27px)] h-[calc(100%-5px)] transition-colors duration-300 group-hover:bg-[#00B259]"
                    ></span>
                    <span className="relative z-10 text-[#00a896] group-hover:text-white transition-colors duration-300">
                      WATCH OUR STORY
                      
                    </span>
                    <FaArrowRight className="relative rotate-310 text-[#00a896]" />
                    
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Animated Transparent GIF */}
          <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2">
            <img
              src="/hero-blob.gif"
              alt="Animated Wire Blob"
              className="w-[280%] h-auto select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
