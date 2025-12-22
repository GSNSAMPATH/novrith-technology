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
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    icon: <FaLaptopCode className="text-3xl text-green-400" />,
    title: "WEB DEVELOPMENT",
    desc: "Modern, Secure, And High-Performing Websites Using Next.Js.",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-green-400" />,
    title: "MOBILE APP DEVELOPMENT",
    desc: "Native And Cross-Platform Apps Built With Flutter And React Native.",
  },
  {
    icon: <FaBrain className="text-3xl text-green-400" />,
    title: "AI & MACHINE LEARNING",
    desc: "Intelligent Models And Predictive Systems Powered By Python And Tensorflow.",
  },
  {
    icon: <FaNetworkWired className="text-3xl text-green-400" />,
    title: "IOT & SMART SYSTEMS",
    desc: "Real-Time Connected Systems Using ESP32, Arduino, And Cloud Dashboard.",
  },
  {
    icon: <FaPaintBrush className="text-3xl text-green-400" />,
    title: "BRANDING & DESIGN",
    desc: "Visual Storytelling Through Logos, UI/UX Design, And Brand Identity.",
  },
  {
    icon: <FaBullhorn className="text-3xl text-green-400" />,
    title: "DIGITAL MARKETING",
    desc: "Data-Driven Marketing And SEO To Help Your Brand Grow Online.",
  },
];

export default function ServicesSection() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y });
  };

  return (
    <section
      className="bg-[#15191f] text-white py-32 px-6 lg:px-28 text-center mt-16 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-zendots tracking-wider md:text-[40px] font-bold mb-6"
        style={{
          backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #f5f4f8ff 80%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          transition: "background 0.2s ease",
        }}
      >
        From Code to Creativity — We Build What Matters
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-[#888888] font-inter-medium max-w-3xl mx-auto mb-10"
      >
        Whether It's A Smart Web App, A Cross-Platform Mobile Experience, Or An
        AI-Powered IoT Solution — Our Expertise Ensures Your Product Is Reliable,
        Scalable, And Extraordinary.
      </motion.p>

      {/* Services grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
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
            className="service-card2 cursor-pointer p-[0.7px]"
          >
            <div className="service-card p-6 text-left">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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
          href="/contact"
          className="inline-flex mt-16 btn-green p-4 px-6 w-[250px] justify-center"
        >
          SEE FULL SERVICE RANGE
        </Link>
      </motion.div>
    </section>
  );
}
