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
    image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1767341741/Frame_7_2_plerqr.png",
  },
  {
    title: "MOBILE SOLUTIONS",
    desc: "Performing Android & IOS Apps Using Cross-Platform Frameworks For Faster Delivery And Unified Experience.",
    icon: Smartphone,
    image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1767344586/Frame_7_3_z2xoaf.png",
  },
  {
    title: "ADVANCED SYSTEMS (ERP, PMS, CUSTOM)",
    desc: "We Engineer Complex Business Systems — PMS, ERP, CRM, HRM — Tailored To Your Workflow And Scalability Goals.",
    icon: Settings,
    image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1767344719/Frame_7_4_dcye9c.png",
  },
  {
    title: "AI-BASED SYSTEMS",
    desc: "Empowering Industries Through AI, Data Analytics, And Automation. We Develop AI-Powered Solutions That Predict, Optimize, And Evolve.",
    icon: Brain,
    image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1767344815/Frame_7_5_bmrgsg.png",
  },
];

export default function ServicesBlocks() {
          const [pos, setPos] = useState({ x: 50, y: 50 });
        
          const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            setPos({ x, y });
          };


  return (
    <section className="py-20 px-4 lg:px-28 space-y-10 py-12 md:py-32 px-6 lg:px-28">

<div className="absolute top-90 md:top-130 inset-0 z-[1]  md:h-[800px]
  bg-[radial-gradient(circle_at_64%_53%,rgba(0,255,153,0.45)_1%,transparent_40%)]
  md:bg-[radial-gradient(circle_at_70%_45%,rgba(0,255,153,0.35)_2%,transparent_28%)] opacity-50 md:opacity-90 "
/>

<div className="absolute top-90 md:top-130 inset-0 z-[1] md:h-[800px]
  bg-[radial-gradient(circle_at_22%_53%,rgba(0,255,153,0.45)_2%,transparent_40%)]
  md:bg-[radial-gradient(circle_at_29%_45%,rgba(0,255,153,0.35)_1%,transparent_34%)] opacity-50 md:opacity-90 "
/>


      {services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className={`service-card2 cursor-pointer p-[2.7px]`}
        >
            
          <div className="service-card flex flex-row md:grid grid-cols-2  md:gap-10 p-4 lg:p-12  items-center">
            {/* Illustration */}
            <div className="xl:w-[600px] w-[100px] sm:w-[400px] h-[100px] md:h-[420px] xl:h-[360px]  items-center justify-left  backdrop-blur">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-contain z-2"
              />
            </div>
            

            {/* Text */}
            <div className="text-center space-y-4 w-full md:p-12 z-2 "
            onMouseMove={handleMouseMove}>
              <div className="inline-flex items-center justify-center p-2 md:w-20 md:h-20 rounded-xl bg-white/10 backdrop-blur">
                <service.icon className="text-gray-400 md:h-10 md:w-10" />
              </div>

              <h3 className="text-gray-400 font-zendots tracking-wide text-[12px]  md:text-2xl"
                        style={{
            backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #e9fffd 80%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            transition: "background 0.2s ease",
          }}>
                {service.title}
              </h3>

              <p className="text-gray-400  ml-auto text-[8px] md:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
