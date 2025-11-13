"use client"

import { useState } from "react";
import AnimatedImage from "./AnimatedWireBlob";

export default function Newerend() {

      const [pos, setPos] = useState({ x: 50, y: 50 });
    
      const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setPos({ x, y });
      };


    return (
         <section
      className="text-white flex items-center overflow-hidden relativepx-6 lg:px-24 py-14"
      onMouseMove={handleMouseMove}
    >
      <div className="w-full mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
          
          {/* LEFT: Text Section */}
          <div className="lg:col-span-6 z-10 order-1 lg:order-2 w-full">
            <div className="w-full ">
              {/* Animated Gradient Text */}
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
                <span className="block">Technology that Never Ends — Just Evolves</span>
              </h1>

              {/* Description */}
              <p className="font-inter-medium mt-[24px] text-gray-300">
                <span className="block">Founded in Sri Lanka, Novrith Technology represents the fusion of innovation, design, and  forward-thinking engineering.  We believe in one core idea — the future is not tomorrow; it starts today.  
                </span>
                <span className="block">our team of <span className="text-green-400"> software engineers, designers, and digital strategists </span></span><span className="block"> collaborate to create  technology that grows with your vision.  We don’t just deliver projects — we build long-term digital ecosystems.
                </span>
              </p>
            </div>
          </div>
        <div className="lg:col-span-4 flex justify-center items-center w-full order-2 lg:order-1 h-[300px]">
             <AnimatedImage/>
        </div>
     
          </div>    
        </div>
    </section>
    );
}