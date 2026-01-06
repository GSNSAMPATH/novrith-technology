"use client";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaBrain,
  FaNetworkWired,
  FaPaintBrush,
  FaBullhorn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const services = [
  {
    icon: <FaLaptopCode className="text-3xl text-gray-300" />,
    title: "WEB DEVELOPMENT",
    desc: "Modern, Secure, And High-Performing Websites Using Next.Js.",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-gray-300" />,
    title: "MOBILE APP DEVELOPMENT",
    desc: "Native And Cross-Platform Apps Built With Flutter And React Native.",
  },
  {
    icon: <FaBrain className="text-3xl text-gray-300" />,
    title: "AI & MACHINE LEARNING",
    desc: "Intelligent Models And Predictive Systems Powered By Python And Tensorflow.",
  },
  {
    icon: <FaNetworkWired className="text-3xl text-gray-300" />,
    title: "IOT & SMART SYSTEMS",
    desc: "Real-Time Connected Systems Using ESP32, Arduino, And Cloud Dashboard.",
  },
  {
    icon: <FaPaintBrush className="text-3xl text-gray-300" />,
    title: "BRANDING & DESIGN",
    desc: "Visual Storytelling Through Logos, UI/UX Design, And Brand Identity.",
  },
  {
    icon: <FaBullhorn className="text-3xl text-gray-300" />,
    title: "DIGITAL MARKETING",
    desc: "Data-Driven Marketing And SEO To Help Your Brand Grow Online.",
  },
];

export default function ServicesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y });
  };

    const handleScroll = () => {
    if (!sliderRef.current) return;

    const scrollX = sliderRef.current.scrollLeft;
    const width = sliderRef.current.offsetWidth;
    const index = Math.round(scrollX / width);

    setActive(index);
  };

  return (
    <section
      className="bg-[#15191f] text-white py-12 md:py-32 px-6 xl:px-28 text-center mt-16 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-zendots tracking-wider text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-tight mb-4 md:mb-6"
        style={{
          backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #f5f4f8ff 80%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          transition: "background 0.2s ease",
        }}
      >
        From Code to Creativity We Build What Matters
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-[#9C9C9C] font-inter-medium max-w-3xl text-[14px] md:text-[16px] lg:text-[20px] mx-auto leading-relaxed mb-6 md:mb-12"
      >
        Whether It's A Smart Web App, A Cross-Platform Mobile Experience, Or An
        AI-Powered IoT Solution, Our Expertise Ensures Your Product Is Reliable,
        Scalable, And Extraordinary.
      </motion.p>

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
        {services.map((service: any, i: number) => (
          <div
            key={i}
            className="
              service-card2 min-w-[85%] snap-center p-[1.7px]
            "
          >
          <div className="service-card p-6 text-left h-[100%]">
            <div className="text-green-400 text-3xl mb-4">
              {service.icon}
            </div>
            <h3 className="text-sm  font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-xs text-[#9aa0a6] leading-relaxed  line-clamp-2">
              {service.desc}
            </p>
          </div>
          </div>
        ))}
      </div>

          {/* Dots */}
      <div className="flex justify-center gap-2 mt-2 mb-10">
        {services.map((_: any, i: number) => (
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

      {/* Services grid */}
      <motion.div
        className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="service-card2 cursor-pointer p-[1.7px]"
          >
            <div className="service-card p-6 text-left h-[100%]">
              <div className="mb-4 text-green-400">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 font-inter-medium text-[14px] md:text-[16px] lg:text-[20px]">{service.title}</h3>
              <p className="text-white font-inter-medium text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/services"
          className="inline-flex md:mt-16 btn-green p-2 md:p-4  w-[200px] md:w-[250px] font-bold font-inter text-[12px] md:text-[16px] flex items-center justify-center"
        >
          SEE FULL SERVICE RANGE
        </Link>
      </motion.div>
    </section>
  );
}
