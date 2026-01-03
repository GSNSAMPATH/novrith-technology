"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Whatareservice() {

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
        Powering Digital Growth Through Smart Technology
      </motion.h1>

      {/* Description */}
        <motion.p
          className="text-[#888888] font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] max-w-5xl mx-auto leading-relaxed mb-6 md:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
            From code to creativity, we deliver scalable digital solutions designed to solve real business challenges — with transparent pricing and enterprise-grade quality.
      </motion.p>
    </section>
  );
}
