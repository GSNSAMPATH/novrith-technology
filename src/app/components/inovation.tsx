"use client";
import Image from "next/image";
import AnimatedImage from "./AnimatedWireBlob";
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

    const logos2 = [
      { img: "/Vector.png", title: "Logo 1" },
      { img: "/Vector (1).png", title: "Logo 2" },
      { img: "/Group.png", title: "Logo 3" },

    ];

    const logos = [
      { img: "/Vector (2).png", title: "Logo 1" },
      { img: "/Vector (3).png", title: "Logo 2" },
      { img: "/Vector (4).png", title: "Logo 3" },

    ];

     // Duplicate 2× so animation loops smoothly
      const allLogos = [...logos, ...logos,];
      const allLogos2 = [...logos2, ...logos2,];


  return (
    <section
    onMouseMove={handleMouseMove}
     className="w-full text-white py-20 px-6 lg:px-28">
      <motion.div
       className="flex w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* LEFT SIDE IMAGE */}
        <div
        className="flex flex-col w-full"
        >
        <motion.div 
         className="w-full h-full flex flex-row justify-center items-center "
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
          <Image
            src="/hero-blob.gif" // place your logo file in /public/logo.png
            alt="Novrith Logo"
            width={440}
            height={370}
            className="object-contain h-full"
          />
        </motion.div>

          <div className="flex flex-col mt-10 justify-end">

          <motion.h1
          className="font-zendots tracking-wide text-3xl md:text-5xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #e9fffd 80%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            transition: "background 0.2s ease",
          }}
        >
           Powered by Innovation<br />
          Engineered for the Future.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-[#888888] font-inter-medium leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          >
          We create intelligent, design-driven digital solutions that bridge the gap from software
          to AI systems that power businesses, simplify lives, and shape
          tomorrow.
        </motion.p>        
        </div>

        </div>



        {/* RIGHT SIDE CONTENT */}
        <div className="w-2/5 flex h-[700px]">
          <div className="flex flex-row gap-10">
            {/* COLUMN 1 - scroll up */}
            <div className="relative overflow-hidden">
              <div className="vertical-marquee-up flex flex-col gap-10">
                {allLogos.map((logo, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center p-6 bg-[#121212] rounded-xl w-[220px] h-[220px]"
                  >
                    <Image
                      src={logo.img}
                      alt={logo.title}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* COLUMN 2 - scroll down */}
            <div className="relative overflow-hidden">
              <div className="vertical-marquee-down flex flex-col gap-10">
                {allLogos2.map((logo2, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center p-10 bg-[#121212] rounded-xl w-[220px] h-[220px]"
                  >
                    <Image
                      src={logo2.img}
                      alt={logo2.title}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
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

