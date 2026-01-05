"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
        <source
          src="/PixVerse_V5_Image_Text_360P_animate_this_image.mp4"
          type="video/mp4"
        />
      </video>

      {/* 🔹 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000070] via-[#00000040] to-[#030419] z-0" />

      {/* 🔹 Content */}
      <motion.div
        className="relative z-10 px-6 lg:px-24 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* 🔥 Animated Gradient Title */}
        <motion.h1
          className="font-zendots tracking-wide text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-tight mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #e9fffd 80%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            transition: "background 0.2s ease",
          }}
        >
          WE DESIGN THE FUTURE
          <br />
          YOU EXPERIENCE IT
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[#888888] font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] max-w-2xl mx-auto leading-relaxed mb-6 md:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          We create intelligent, design-driven digital solutions that bridge the
          gap from software to AI systems that power businesses, simplify lives,
          and shape tomorrow.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-10 mt-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            // whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-green p-2 md:p-4 px-6 w-[200px] md:w-[250px] font-bold font-inter text-[12px] md:text-[16px] flex items-center justify-center gap-2"
          >
            START YOUR PROJECT
          </motion.button>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            // whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-green p-0.5 md:w-[250px] "
          >
            <div className="btn-green2 p-2 md:p-4 px-6 w-[200px] md:w-[250px] font-inter text-[12px] md:text-[16px] flex items-center justify-center">
              WATCH OUR STORY
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
