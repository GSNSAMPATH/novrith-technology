'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


type Logo = {
  logo: string;
};

export default function TrustedSection() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [logos, setLogos] = useState<Logo[]>([]);

  useEffect(() => {
    fetch("/api/trusted")
      .then((res) => res.json())
      .then(setLogos);
  }, []);
    
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y });
  };
      
  return (
    <section className="bg-[#e5e5e5] md:py-20 py-12 px-6 w-full px-6 xl:px-28 justify-center items-center"
    onMouseMove={handleMouseMove}>
        
      <div className="mx-auto  text-center">
        {/* Heading */}
        {/* Animated Gradient Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-zendots tracking-wide text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-tight mb-4 md:mb-6"
          style={{
            backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #CA7DD5 20%, #15191F 50%, #948F9C 70%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            transition: "background 0.2s ease",
          }}
        >
          Trusted by Visionaries, Loved by<br />
          Businesses.
        </motion.h1>


        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] mb-6 md:mb-12">
          We Create Intelligent, Design-Driven Digital Solutions From
          Software To AI Systems. That Power Businesses, Simplify Lives,
          And Shape Tomorrow.
        </p>
        {/* Logos Only */}
        <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.12 },
          },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-6 xl:gap-12">
          {logos.map((item, index) => (
            <motion.div
              key={index}
              variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
              
            }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`h-[60px] xl:h-[84px] w-full 2xl:w-[413px] ${index === 0 ? "bg-black" : "bg-white"}  rounded-md shadow-sm flex items-center justify-center`}
            >
              <Image
                src={item.logo}
                alt="Trusted brand"
                width={413}
                height={84}
                className=" object-contain rounded-md "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
