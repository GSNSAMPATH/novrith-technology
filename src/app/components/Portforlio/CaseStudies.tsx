"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

type CaseStudy = {
  _id: string;
  title: string;
  client: string;
  description: string;
  image: string;
};

export default function CaseStudies() {
      const [data, setData] = useState<CaseStudy[]>([]);

  useEffect(() => {
    fetch("/api/case-studies")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <section className="py-20 space-y-10 px-4 lg:px-20">
      {data.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ scale: 1.01 }}
          className="service-card2 cursor-pointer p-[2.7px]"
        >
          <div className="service-card">
            <div className="c grid md:grid-cols-2 gap-10 p-6 md:p-10 items-center">

              {/* Image */}
              <div className="relative w-full h-[220px] md:h-[260px] rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 text-left">
                <h4 className="text-gray-400 text-sm tracking-widest">
                  {item.title}
                </h4>

                <h3 className="text-white font-semibold text-lg md:text-xl">
                  {item.client}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                <button className="case-btn">
                  VIEW CASE STUDY
                  <ArrowUpRight size={18} />
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
