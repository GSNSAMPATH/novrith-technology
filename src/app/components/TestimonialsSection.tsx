"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
  _id: string;
  name: string;
  description: string;
};

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [pos, setPos] = useState({ x: 50, y: 50 });
    
      const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPos({ x, y });
      };

  const sliderRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollX = sliderRef.current.scrollLeft;
    const width = sliderRef.current.offsetWidth;
    setActive(Math.round(scrollX / width));
  };


  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then(setTestimonials);
  }, []);

  return (
    <section className="bg-[#15191f] py-12 md:py-20 px-6 xl:px-28"
             onMouseMove={handleMouseMove}>
      <div className="mx-auto">

        {/* Heading */}
        <h1
          className="font-zendots tracking-wide text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-tight mb-6 md:mb-12"
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
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="service-card2 cursor-pointer p-[1.7px]"
            >
              <div className="service-card p-6 text-left">
                <h2 className="text-3xl font-bold">“</h2>
                <p className="mb-4 text-gray-300 font-inter-medium text-[12px] md:text-[14px] lg:text-[16px]">{item.description}</p>
                <p className="font-bold text-white">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="md:hidden">
          {/* Slider */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="
              flex gap-4 overflow-x-auto snap-x snap-mandatory
              pb-6 scrollbar-hide
            "
          >
            {testimonials.map((item, i) => (
              <div key={i} className="min-w-[85%] snap-center">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ stiffness: 300 }}
                  className="service-card2 p-[1.7px]"
                >
                  <div className="service-card p-6 text-left">
                    <h2 className="text-3xl font-bold ">“</h2>
                    <p className="mb-4 text-gray-300 text-sm leading-relaxed line-clamp-4">
                      {item.description}
                    </p>
                    <p className="font-bold text-white">{item.name}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-2 mb-10">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`
                  h-1.5 rounded-full transition-all duration-300
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
