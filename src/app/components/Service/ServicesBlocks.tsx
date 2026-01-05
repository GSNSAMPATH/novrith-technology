"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Laptop, Smartphone, Settings, Brain } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "WEB SOLUTIONS",
    desc: "We Build Scalable, Secure, And Stunning Web Solutions Using The World’s Most Powerful Frameworks.",
    icon: Laptop,
    image:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1767341741/Frame_7_2_plerqr.png",
  },
  {
    title: "MOBILE SOLUTIONS",
    desc: "Performing Android & IOS Apps Using Cross-Platform Frameworks For Faster Delivery And Unified Experience.",
    icon: Smartphone,
    image:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1767344586/Frame_7_3_z2xoaf.png",
  },
  {
    title: "ADVANCED SYSTEMS (ERP, PMS, CUSTOM)",
    desc: "We Engineer Complex Business Systems — PMS, ERP, CRM, HRM — Tailored To Your Workflow And Scalability Goals.",
    icon: Settings,
    image:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1767344719/Frame_7_4_dcye9c.png",
  },
  {
    title: "AI-BASED SYSTEMS",
    desc: "Empowering Industries Through AI, Data Analytics, And Automation. We Develop AI-Powered Solutions That Predict, Optimize, And Evolve.",
    icon: Brain,
    image:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1767344815/Frame_7_5_bmrgsg.png",
  },
];

export default function ServicesBlocks() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeIndex] = useState(0); // 👈 auto-highlight first card
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y });
  };

  // 👇 hover has priority, fallback to auto-highlight
  const isActive = (index: number) =>
    hovered !== null ? hovered === index : activeIndex === index;

  return (
    <section className="py-20 px-4 md:px-6 lg:px-28 space-y-10">
      {services.map((service, i) => (
        <motion.div
          key={i}
          onHoverStart={() => setHovered(i)}
          onHoverEnd={() => setHovered(null)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="service-card2 cursor-pointer p-[2.7px]"
        >
          <div className="service-card relative overflow-hidden flex flex-row md:grid grid-cols-2 md:gap-10 p-4 lg:p-12 items-center">

            {/* ===== GLOW (AUTO + HOVER) ===== */}
            <div
              className={`absolute inset-0 z-[1] transition-opacity duration-300
                ${
                  isActive(i)
                    ? "opacity-70 md:opacity-90"
                    : "opacity-0"
                }
                bg-[radial-gradient(circle_at_64%_53%,rgba(0,255,153,0.45)_1%,transparent_40%)]
                md:bg-[radial-gradient(circle_at_70%_45%,rgba(0,255,153,0.35)_2%,transparent_28%)]
              `}
            />

            <div
              className={`absolute inset-0 z-[1] transition-opacity duration-300
                ${
                  isActive(i)
                    ? "opacity-60 md:opacity-80"
                    : "opacity-0"
                }
                bg-[radial-gradient(circle_at_22%_53%,rgba(0,255,153,0.45)_2%,transparent_40%)]
                md:bg-[radial-gradient(circle_at_29%_45%,rgba(0,255,153,0.35)_1%,transparent_34%)]
              `}
            />

            {/* ===== IMAGE ===== */}
            <div className="relative z-10 xl:w-[600px] w-[120px] sm:w-[400px] h-[120px] md:h-[420px] xl:h-[360px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-contain"
              />
            </div>

            {/* ===== TEXT ===== */}
            <div
              className="relative z-10 text-center space-y-4 w-full md:p-12"
              onMouseMove={handleMouseMove}
            >
              <div className="inline-flex items-center justify-center p-2 md:w-20 md:h-20 rounded-xl bg-white/10 backdrop-blur">
                <service.icon
                  className={`md:h-10 md:w-10 transition-colors duration-300 ${
                    isActive(i)
                      ? "text-emerald-400"
                      : "text-gray-400"
                  }`}
                />
              </div>

              <h3
                className="font-zendots tracking-wide text-[12px] md:text-2xl transition-all duration-300"
                style={
                  isActive(i)
                    ? {
                        backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #e9fffd 80%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }
                    : { color: "#9ca3af" }
                }
              >
                {service.title}
              </h3>

              <p className="text-gray-400 text-[8px] md:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>

          </div>
        </motion.div>
      ))}
    </section>
  );
}
