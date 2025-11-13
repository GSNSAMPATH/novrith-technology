"use client";

import Image from "next/image";
import { useState } from "react";


export default function ServicesSection() {
      const [pos, setPos] = useState({ x: 50, y: 50 });
    
      const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPos({ x, y });
      };
    


  const services = [
    {
      title: "WEB DEVELOPMENT",
      description:
        "Modern, Secure, And High-Performing Websites Using Next.Js.",
      image: "/office.jpg",
      link: "#",
    },
    {
      title: "UI/UX DESIGN",
      description:
        "Creative And User-Focused Designs That Enhance Digital Experiences.",
      image: "/office.jpg",
      link: "#",
    },
    {
      title: "BRANDING",
      description:
        "Build A Strong And Memorable Identity For Your Business.",
      image: "/office.jpg",
      link: "#",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 w-full px-6 lg:px-28 justify-center items-center"
        onMouseMove={handleMouseMove}>

         {/* 🔹 Content */}
      <div className="relative z-10  mx-auto text-center w-full">

        {/* Animated Gradient Title */}
        <h1
          className="font-zendots tracking-wide text-3xl md:text-5xl font-bold leading-tight mb-6"
          style={{
            backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #CA7DD5 0%, #15191F 50%, #948F9C 70%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            transition: "background 0.2s ease",
          }}
        >
          Trusted by Visionaries, Loved by <br />
          Businesses.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 font-inter-medium max-w-2xl mx-auto leading-relaxed mb-10">
          We create intelligent, design-driven digital solutions — from software
          to AI systems — that power businesses, simplify lives, and shape
          tomorrow.
        </p>

      </div>


      <div className="grid md:grid-cols-3 gap-8 w-full mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full rounded-xl overflow-hidden p-6 flex flex-col text-white hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
            style={{
              backgroundColor: "#030419",
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
              boxShadow: "inset 0 0 0 1px #444", // simulates border following shape
            }}
          >
            {/* Image */}
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm mb-6">{service.description}</p>

            {/* Button */}
            <a
              href={service.link}
              className="absolute bottom-0 left-0 h-16 bg-[#0a0a0a] clip-path:[polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)]  flex items-center justify-center text-sm text-white green-500 hover:bg-green-600 transition-all duration-300 w-[400px]"
            >
              SEE FULL SERVICE RANGE

            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
