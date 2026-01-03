"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PoweredByInnovation() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y });
  };

  const logos = [
    { img: "/Vector (2).png", title: "Logo 1" },
    { img: "/Vector (3).png", title: "Logo 2" },
    { img: "/Vector (4).png", title: "Logo 3" },
  ];

  const logos2 = [
    { img: "/Vector.png", title: "Logo 1" },
    { img: "/Vector (1).png", title: "Logo 2" },
    { img: "/Group.png", title: "Logo 3" },
  ];

  const allLogos = [...logos, ...logos, ...logos];
  const allLogos2 = [...logos2, ...logos2, ...logos2];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="w-full text-white py-1 md:py-20 px-6 lg:px-28"
    >
      <motion.div
        className="flex flex-col lg:flex-row w-full gap-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* LEFT CONTENT */}
        <div className="w-full flex flex-col">
          {/* Blob (desktop only) */}
          <motion.div
            className="hidden md:flex justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image
              src="/hero-blob.gif"
              alt="Blob"
              width={440}
              height={370}
              className="object-contain"
            />
          </motion.div>

          {/* Text */}
          <div className="mt-10">
            <motion.h1
              className="font-zendots tracking-wide text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-tight mb-6"
              style={{
                backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #e9fffd 80%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Powered by Innovation <br />
              Engineered for the Future.
            </motion.h1>

            <motion.p className="text-[#888] leading-relaxed max-w-xl font-inter-medium text-[14px] md:text-[16px] lg:text-[20px]">
              We use cutting-edge frameworks and cloud-native systems to ensure your products perform  seamlessly, scale infinitely, and evolve with your needs.
            </motion.p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-3/5 relative h-[300px] sm:h-[380px]  lg:h-[800px] xl:h-[700px]">
          <div className="flex lg:flex-row flex-col  gap-4 lg:gap-10 h-full">
            {/* Column 1 */}
            <div className="relative overflow-hidden w-full">
              <div className="marquee-col-1 flex flex-row lg:flex-col gap-4 lg:gap-10">
                {allLogos.map((logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex border border-gray-600/30 items-center justify-center
                    bg-[#121212] rounded-xl
                    w-[90px] h-[90px]
                    sm:w-[140px] sm:h-[140px]
                    lg:w-[180px] lg:h-[180px]
                    xl:w-full xl:h-[260px]"
                  >
                    <Image 
                    src={logo.img} 
                    alt={logo.title} 
                    width={90} 
                    height={90}
                    className="w-10 md:w-20 lg:w-30 xl:w-40" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="relative overflow-hidden w-full">
              <div className="marquee-col-2 flex flex-row lg:flex-col gap-4 lg:gap-10">
                {allLogos2.map((logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex border border-gray-600/30  items-center justify-center
                    bg-[#121212] rounded-xl
                    w-[90px] h-[90px]
                    sm:w-[140px] sm:h-[140px]
                    lg:w-[180px] lg:h-[180px]
                    xl:w-full xl:h-[260px]"
                  >
                    <Image 
                    src={logo.img} 
                    alt={logo.title} 
                    width={90} 
                    height={90} 
                    className="w-10 md:w-20 lg:w-30 xl:w-40"/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
