"use client";
import { FaLaptopCode, FaMobileAlt, FaBrain, FaNetworkWired, FaPaintBrush, FaBullhorn } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    icon: <FaLaptopCode className="text-3xl text-green-400" />,
    title: "WEB DEVELOPMENT",
    desc: "Modern, Secure, And High-Performing Websites Using Next.Js,",
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
    <section className="bg-[#15191f] text-white py-30 px-6 lg:px-28 text-center mt-16"
            onMouseMove={handleMouseMove}>
        <h1
            className="font-zendots tracking-wider leading-[100%] md:text-[40px] font-bold leading-tight"
            style={{
                backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #f5f4f8ff 80%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                transition: "background 0.2s ease",
            }}
        >
            <span className="block">From Code to Creativity — We Build What Matters</span>
        </h1>
      <p className="text-gray-400 max-w-3xl mx-auto mb-12 mt-4">
        Whether It's A Smart Web App, A Cross-Platform Mobile Experience, Or An AI-Powered IoT Solution — 
        Our Expertise Ensures Your Product Is Reliable, Scalable, And Extraordinary.
      </p>

      {/* Services grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, y: -4 }}
            className="bg-gray-700 border-1 border-[#15191f] text-left transition-colors text-white font-semibold relative after:content-[''] after:absolute after:right-0 after:top-0 after:w-6 after:h-full after:bg-[#15191f] after:[clip-path:polygon(0_0,100%_0,calc(100%_)_100%,10%_100%)] [clip-path:polygon(0_0,100%_0,calc(99%_-_35px)_100%,0%_100%)]"
          >
            <div className="py-6 bg-[#030419] hover:bg-[#15191f] border-gray-700 border-2 border-[#15191f] text-left transition-colors text-white pr-10 px-8 py-3 font-semibold relative after:content-[''] after:absolute after:right-0 after:top-0 after:w-6 after:h-full after:bg-gray-700 [clip-path:polygon(0_0,100%_0,calc(99%_-_35px)_100%,0%_100%)] h-full">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA button */}
      {/* Contact Button */}
      <Link
        href="/contact"
        className="hidden md:block mt-18 md:inline-flex items-center gap-3 bg-[#00B259] hover:bg-green-600 transition-colors px-10 py-4 font-semibold relative after:content-[''] after:absolute after:right-0 after:top-0 after:w-6 after:h-full after:bg-[#15191f] [clip-path:polygon(0_0,100%_0,calc(99%_-_35px)_100%,0%_100%)]"
      >
        <span className="flex mr-6 text-white">SEE FULL SERVICE RANGE</span>
     
      </Link>
    </section>
  );
}
