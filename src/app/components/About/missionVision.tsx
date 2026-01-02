"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const missionVision = [
    {
        title: "Our Mission",
        content: "At Novrith Technology, our mission is to engineer a smarter, more connected world by  creating intelligent, scalable, and sustainable digital ecosystems that empower businesses and  elevate human experiences.  We believe that technology should do more than solve problems — it should inspire progress,  simplify life, and build lasting impact.  Through the seamless integration of creativity, logic, and intelligence, we develop solutions  that adapt and evolve as the world changes.  From startups taking their first step into digital transformation to enterprises seeking next-level  innovation, we stand as their strategic technology partner, ensuring every product we build  contributes to a more efficient, data-driven, and sustainable future.",
        content2: "Our mission is to transform innovation into purpose by building technology that grows with  you, not past you."
      },
    {
        title: "Our VISION",
        content: "Recognized as a technology powerhouse known for merging design, intelligence, and purpose into every solution we deliver. We envision a future where technology is not just advanced — but accessible, ethical, and meaningful. A future where every innovation carries a human touch and every idea has the power to make life better.",
        content2: "“At Novrith, the future isn’t something we wait for  it’s something we design, today.”"
    }
]
export default function MissionVisionSection() {
    const [pos, setPos] = useState({ x: 50, y: 50 });
      const [active, setActive] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setPos({ x, y });
    };

    const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const width = sliderRef.current.offsetWidth;
    setActive(Math.round(scrollLeft / width));
  };


  return (
    <section className="w-full py-12 md:py-20 px-6 lg:px-28">
      <div className="hidden  mx-auto md:grid grid-cols-1 md:grid-cols-2 gap-8">
        {missionVision.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="service-card4 cursor-pointer p-[2.3px]"
          >
            <div className="service-card3 p-6 md:p-12 h-full"
              onMouseMove={handleMouseMove}>
                      <h1
                        className="font-zendots tracking-wide text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-tight mb-4 md:mb-6"
                        style={{
                          backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #e9fffd 80%)`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          color: "transparent",
                          transition: "background 0.2s ease",
                        }}
                      >
                {item.title}
              </h1>

              <p className="text-[#888888] font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] max-w-2xl mx-auto leading-relaxed ">
                {item.content}
              </p>
               <p className="text-[#888888] font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] max-w-[200px] md:max-w-xl leading-relaxed ">
                {item.content2}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
       {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden mt-4">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide"
        >
          {missionVision.map((item, i) => (
            <div
              key={i}
              className="service-card4 min-w-[90%] snap-center p-[2px]"
            >
              <div className="service-card3 p-6 h-full">
                <h1
                        className="font-zendots tracking-wide text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-tight mb-4 md:mb-6"
                        style={{
                          backgroundImage: `radial-gradient(at ${pos.x}% ${pos.y}%, #81f1b5 0%, #e9fffd 80%)`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          color: "transparent",
                          transition: "background 0.2s ease",
                        }}
                      >
                  {item.title}
                </h1>

                <p className="text-[#888888] font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] max-w-2xl mx-auto leading-relaxed line-clamp-18">
                  {item.content}
                </p>

                <p className="text-[#888888] font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] max-w-[200px] md:max-w-xl leading-relaxed">
                  {item.content2}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-2">
          {missionVision.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300
                ${active === i ? "w-6 bg-green-400" : "w-3 bg-gray-600"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
