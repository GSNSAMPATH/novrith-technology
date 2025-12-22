"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedImage from "./AnimatedWireBlob";

export default function Newerend() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y });
  };

  return (
    <section
      className="text-white flex items-center overflow-hidden relative px-6 lg:px-28 py-14"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="w-full mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-10 gap-12 items-center">

          {/* LEFT: Text */}
          <div className="md:col-span-7 z-10 order-1 w-full">
            <div className="w-full">

              {/* Heading */}
              <motion.h1
                className="font-zendots tracking-wider leading-[100%] text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-tight mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                style={{
                  backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #f5f4f8ff 80%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  transition: "background 0.2s ease",
                }}
              >
                Technology that Never Ends — Just Evolves
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-[#888888] font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] leading-relaxed mb-6 md:mb-10"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.15 },
                  },
                }}
              >
                {[
                  "Founded in Sri Lanka, Novrith Technology represents the fusion of innovation, design, and forward-thinking engineering. We believe in one core idea — the future is not tomorrow; it starts today.",
                  "Our team of software engineers, designers, and digital strategists",
                  "Collaborate to create technology that grows with your vision. We don’t just deliver projects — we build long-term digital ecosystems.",
                ].map((text, i) => (
                  <motion.span
                    key={i}
                    className={`block ${i === 1 ? "mt-4 md:mt-6" : ""}`}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    {i === 1 ? (
                      <span className="text-green-400 mt-12">{text}</span>
                    ) : (
                      text
                    )}
                  </motion.span>
                ))}
              </motion.p>
            </div>
          </div>

          {/* RIGHT: Image */}
          <motion.div
            className="md:col-span-3 flex justify-center md:justify-end items-center absolute inset-0 top-15 w-full md:static order-2 h-[300px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <AnimatedImage />
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
