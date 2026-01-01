'use client';
import { useEffect, useState } from "react";


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
    <section className="bg-[#e5e5e5] md:py-20 py-12 px-6 w-full px-6 lg:px-28 justify-center items-center"
    onMouseMove={handleMouseMove}>
        
      <div className="mx-auto px- text-center">
        {/* Heading */}
        {/* Animated Gradient Title */}
        <h1
          className="font-zendots tracking-wide text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-tight mb-6"
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
        </h1>


        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 font-inter-medium text-[14px] md:text-[16px] lg:text-[20px]">
          We Create Intelligent, Design-Driven Digital Solutions From
          Software To AI Systems. That Power Businesses, Simplify Lives,
          And Shape Tomorrow.
        </p>
        {/* Logos Only */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 xl:gap-12 mt-12">
          {logos.map((item, index) => (
            <div
              key={index}
              className="xl:h-[84px] xl:w-[413px] bg-white rounded-md shadow-sm flex items-center justify-center"
            >
              <img
                src={item.logo}
                alt="Trusted brand"
                className=" object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
