"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function WhoWeAre() {

      const [pos, setPos] = useState({ x: 50, y: 50 });
    
      const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPos({ x, y });
      };
    

  return (
    <section
      className="relative w-full bg-[#15191F] px-6 md:px-16 lg:px-32 py-12 md:py-32 mt-17 md:mt-20 text-center"
      onMouseMove={handleMouseMove}
    >
      {/* Title */}
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
        WHO WE ARE
      </motion.h1>

      {/* Description */}
        <motion.p
          className="text-[#888888] font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] max-w-5xl mx-auto leading-relaxed mb-6 md:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
        At Novrith Technology, We Are Redefining What It Means To Be A Modern
        Digital Partner. Founded In Sri Lanka, We Specialize In AI-Driven
        Software Development, Web And Mobile App Engineering, IoT Solutions, And
        Creative Digital Design. We Don’t Just Build Technology — We Build
        Possibilities. Our Mission Is To Empower Businesses, Startups, And
        Industries Through Intelligent Innovation And User-Centered Design.
      </motion.p>

      {/* Quote */}
        <motion.p
          className="text-[#888888] font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] max-w-2xl mx-auto leading-relaxed mb-6 md:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
        “We Don’t Follow Trends — We Design The Future.”
      </motion.p>

      {/* Signature */}
        <motion.p
          className="text-[#888888] font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] max-w-2xl mx-auto leading-relaxed mb-6 md:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
        — Novrith Technology Team
      </motion.p>
    </section>
  );
}
