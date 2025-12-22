"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function TestimonialsSection() {

      const [pos, setPos] = useState({ x: 50, y: 50 });
    
      const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPos({ x, y });
      };

  const testimonials = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      name: "John Doe",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      name: "John Doe",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      name: "John Doe",
    },
  ];

  return (
    <section className="bg-[#15191f] py-24 lg:px-28"
             onMouseMove={handleMouseMove}>
      <div className="mx-auto">

        {/* Heading */}
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
          What Our Clients Say.
          
        </h1>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="service-card2 cursor-pointer p-[0.7px]"
            >
              <div className="service-card p-6 text-left">
                <h2 className="text-3xl font-bold mb-4">“</h2>
                <p className="mb-4 text-gray-300">{item.description}</p>
                <p className="font-bold text-white">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
