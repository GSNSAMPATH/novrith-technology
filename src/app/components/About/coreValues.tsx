"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export const coreValues = [
  {
    title: "Innovation",
    desc: "Always explore, experiment, and evolve.",
  },
  {
    title: "Integrity",
    desc: "Transparent, honest, and ethical in everything we do.",
  },
  {
    title: "Excellence",
    desc: "Delivering quality beyond expectations.",
  },
  {
    title: "Collaboration",
    desc: "Building technology together — with our team and our clients.",
  },
  {
    title: "Sustainability",
    desc: "Engineering with purpose and long-term impact.",
  },
];

export default function CoreValuesSection() {
      const [pos, setPos] = useState({ x: 50, y: 50 });
        const [active, setActive] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
    
      const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPos({ x, y });
      };

        const handleScroll = () => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.offsetWidth;
    setActive(Math.round(sliderRef.current.scrollLeft / width));
  };
      
  return (
    <section className="w-full py-12 md:py-20 px-6 lg:px-28 bg-[#15191F]">
      <div className="mx-auto"
       onMouseMove={handleMouseMove}>
        {/* Title */}
        <motion.h1
          className="font-zendots tracking-wide text-[20px] md:text-[30px] lg:text-[40px] text-center font-bold leading-tight mb-4 md:mb-12"
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
          OUR <span className="text-[#7EF2C8]">CORE VALUES</span>
        </motion.h1>

        {/* Cards */}
        <motion.div
         className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}>
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 250 }}
              className={`service-card2 cursor-pointer p-[1.7px]
                ${i >= 3 ? "md:col-span-1 md:translate-x-[50%]" : ""}
              `}
            >
              <div className="service-card p-6 md:p-8 h-full">
                <h3 className="text-white font-inter-medium text-[14px] md:text-[16px] lg:text-[20px]  mb-3 uppercase">
                  {value.title}
                </h3>

                <p className="text-white/75 font-inter-medium text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
         {/* ================= MOBILE VIEW ================= */}
        <div className="md:hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide"
          >
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="service-card2 min-w-[85%] snap-center p-[1.7px]"
              >
                <div className="service-card p-6 h-full">
                  <h3 className="text-white text-[16px] mb-2 uppercase">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-[13px] leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-2">
            {coreValues.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300
                  ${active === i ? "w-6 bg-green-400" : "w-3 bg-gray-600"}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
