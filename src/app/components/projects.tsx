"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Project = {
  _id: string;
  title: string;
  description: string;
  link?: string;
  image: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y });
  };

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <section
      className="bg-white py-20 px-6 lg:px-28 overflow-hidden"
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
          className="font-zendots tracking-wide text-3xl md:text-5xl font-bold mb-6"
          style={{
            backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #CA7DD5 0%, #15191F 50%, #948F9C 70%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            transition: "background 0.2s ease",
          }}
        >
          Our Latest Projects
        </h1>

        <p className="text-[#525252] max-w-2xl mx-auto leading-relaxed mb-14">
          Here are some of the latest projects we have worked on.
        </p>
      </motion.div>

      {/* 🔹 Cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 w-full mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.map((projects, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{stiffness: 200 }}
            className="relative rounded-xl overflow-hidden p-6 flex flex-col text-white"
            style={{
              backgroundColor: "#030419",
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
              boxShadow: "inset 0 0 0 1px #444",
            }}
          >
            {/* Image */}
            <motion.div
              className="relative w-full h-[240px] mb-4 rounded-lg overflow-hidden"
              // whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={projects.image}
                alt={projects.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Text */}
            <h3 className="text-lg font-semibold mb-2">
              {projects.title}
            </h3>
            <p className="text-gray-400 text-sm mb-6 line-clamp-2">
              {projects.description}
            </p>

            {/* Button */}
            <motion.a
              href={projects.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto btn-green p-4 px-2 w-[250px] text-center text-sm"
            >
              SEE FULL SERVICE RANGE
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
