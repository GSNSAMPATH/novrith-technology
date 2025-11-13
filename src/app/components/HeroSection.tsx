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
      className="relative flex flex-col justify-center items-center text-center text-white min-h-screen overflow-hidden px-6 lg:px-28"
      onMouseMove={handleMouseMove}
    >
      {/* 🔹 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-[0.6] blur-[2px]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/PixVerse_V5_Image_Text_360P_animate_this_image.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000070] via-[#00000040] to-[#030419] z-0"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 px-6 lg:px-24 max-w-5xl mx-auto">

        {/* Animated Gradient Title */}
        <h1
          className="font-zendots tracking-wide text-3xl md:text-5xl font-bold leading-tight mb-6"
          style={{
            backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #e9fffd 80%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            transition: "background 0.2s ease",
          }}
        >
          WE DESIGN THE FUTURE<br />
          YOU EXPERIENCE IT
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 font-inter-medium max-w-2xl mx-auto leading-relaxed mb-10">
          We create intelligent, design-driven digital solutions — from software
          to AI systems — that power businesses, simplify lives, and shape
          tomorrow.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {/* Start Project Button */}
          <a
            href="#start"
            className="inline-flex items-center gap-3 bg-[#00B259] w-[300px] hover:bg-green-600 transition-colors text-white pr-10 px-8 py-3 font-semibold relative after:content-[''] after:absolute after:right-0 after:top-0 after:w-6 after:h-full after:bg-[#030421] [clip-path:polygon(0_0,100%_0,calc(99%_-_35px)_100%,0%_100%)]"
          >
            START YOUR PROJECT
            <FaArrowRight />
          </a>

          {/* Watch Story Button */}
          <button className="inline-flex items-center gap-3 bg-[#00B259] hover:bg-green-600 transition-colors text-black px-12  w-[300px] py-5 font-semibold relative after:content-[''] after:absolute after:right-0 after:top-0 after:w-6 after:h-full after:bg-[#030421] [clip-path:polygon(0_0,100%_0,calc(95%_-_22px)_100%,0_100%)]">
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
    </section>
  );
}
