"use client";

import { ArrowUpRight, User, Mail, Phone, MessageSquare } from "lucide-react";
import AnimatedImage from "../AnimatedWireBlob";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
        const [pos, setPos] = useState({ x: 50, y: 50 });
      
        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
          const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - left) / width) * 100;
          const y = ((e.clientY - top) / height) * 100;
          setPos({ x, y });
        };

  return (
    <section className="py-24 px-6 lg:px-28">
      <div className="grid md:grid-cols-2 gap-6 mx-auto">

        {/* LEFT PANEL */}
        <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0 },
        }} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="service-card6 p-[2.7px] order-2 md:order-1"
        >
          <div className="service-card5 flex flex-col justify-between h-full text-white p-6 lg:p-10">
            
            <div>
              <Image
                src="/Novrith_DM-02.png"
                alt="Glowing shape"
                width={400}
                height={400}
                className="select-none pointer-events-none h-[30px] w-[100px] md:h-[60px] md:w-[200px]"
              /> 
              <div>   
            <AnimatedImage />
              </div>

              <div className="space-y-4 text-sm text-gray-300 mb-8">
              <a href="#" className="flex items-center gap-2"><FaFacebookF className="p-2 h-8 w-8 rounded-full bg-white/30 hover:bg-green-400 hover:text-black" />Facebook</a>
              <a href="#" className="flex items-center gap-2"><FaXTwitter className="p-2 h-8 w-8 rounded-full bg-white/30 hover:bg-green-400 hover:text-black"/>Twitter</a>
              <a href="#" className="flex items-center gap-2"><FaLinkedinIn className="p-2 h-8 w-8 rounded-full bg-white/30 hover:bg-green-400 hover:text-black"/>Linkedin</a>
              <a href="#" className="flex items-center gap-2"><FaInstagram className="p-2 h-8 w-8 rounded-full bg-white/30 hover:bg-green-400 hover:text-black"/>Instagram</a>
            </div>
            </div>



          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0 },
        }} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="service-card4 p-[2.7px] order-1 md:order-2">
          <div className="service-card3 flex flex-col justify-between h-full p-6 lg:p-10 text-white"
          onMouseMove={handleMouseMove}>
            
        <motion.h1
          className="font-zendots tracking-wide text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-tight mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #e9fffd 80%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            transition: "background 0.2s ease",
          }}
        >
              Send us a message
            </motion.h1>
          <motion.p
          className="text-[#888888] font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] max-w-5xl mx-auto leading-relaxed mb-6 md:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
              Drop a message — you never know where one connection could lead.
            </motion.p>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input className="input-style" placeholder="First name" />
                <input className="input-style" placeholder="Last name" />
              </div>

              <input className="input-style" placeholder="Email address" />
              <input className="input-style" placeholder="Phone number" />
              <input className="input-style" placeholder="Subject" />

              <textarea
                rows={4}
                className="input-style resize-none"
                placeholder="Type your message here"
              />

              <button className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-md font-semibold transition">
                SEND A MESSAGE
                <ArrowUpRight size={18} />
              </button>
            </form>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

