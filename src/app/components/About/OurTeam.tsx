"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type TeamMember = {
  _id: string;
  role: string;
  name: string;
  description: string;
  image: string;
};

export default function Team() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const sliderRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y });
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollX = sliderRef.current.scrollLeft;
    const width = sliderRef.current.offsetWidth;
    setActive(Math.round(scrollX / width));
  };

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then(setTeam);
  }, []);

  return (
    <section
      className="bg-[#e5e5e5] py-12 md:py-20 px-6 xl:px-28 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 🔹 Header */}
      <motion.div
        className="relative z-10 mx-auto text-center w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="font-zendots tracking-wide text-[20px] md:text-[30px] lg:text-[40px] font-bold mb-4 md:mb-6"
          style={{
            backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #CA7DD5 0%, #15191F 50%, #948F9C 70%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          OUR TEAM
        </h1>

        <p className="text-[#525252] max-w-2xl mx-auto leading-relaxed font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] mb-6 md:mb-12">
          Behind Every Success Story Is A Passionate Team Of Innovators.
        </p>
      </motion.div>

      {/* ================= DESKTOP VIEW ================= */}
      <motion.div
        className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 w-full mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {team.map((member, index) => (
          <motion.div
            key={index}

            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-xl overflow-hidden p-6 flex flex-col text-white "
            style={{
              backgroundColor: "#030419",
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
              boxShadow: "inset 0 0 0 1px #444",
            }}
          >
            <span className="text-[#525252] mb-2 leading-relaxed font-inter-medium text-[10px] md:text-[12px] lg:text-[14px]">
              {member.role}
            </span>

            <h3 className="text-lg font-semibold mb-4">
              {member.name}
            </h3>

            <div className="relative w-full h-[280px] mb-4 rounded-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-[#525252] leading-relaxed font-inter-medium text-[12px] md:text-[14px] lg:text-[16]">
              {member.description}
            </p>
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
          {team.map((member, i) => (
            <div key={i} className="min-w-[85%] snap-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative rounded-xl overflow-hidden p-4 flex flex-col text-white"
                style={{
                  backgroundColor: "#030419",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
                  boxShadow: "inset 0 0 0 1px #444",
                }}
              >
                <span className="text-xs tracking-widest text-gray-400 mb-1">
                  {member.role}
                </span>

                <h3 className="text-base font-semibold mb-3">
                  {member.name}
                </h3>

                <div className="relative w-full h-[180px] sm:h-[320px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-top object-cover"
                  />
                </div>

                <p className="text-gray-400 text-sm line-clamp-3">
                  {member.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-2 mb-12">
          {team.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-green-400" : "w-3 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
