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
  link: string;
  slug: string;
  order: number;
};

export default function CaseStudies() {
      const [data, setData] = useState<CaseStudy[]>([]);

  useEffect(() => {
    fetch("/api/case-studies")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <section className="py-20 space-y-10 px-6 xl:px-28">
      {data.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01  }}
          transition={{stiffness: 200 }}
          className="service-card2 cursor-pointer p-[2.7px]"
        >
          <div className="service-card">
            <div className="flex flex-row md:grid md:grid-cols-2 gap-4 md:gap-10 p-4 md:p-10 items-center">

              {/* Image */}
              <div className="relative w-[200px] md:w-full h-[120px] md:h-[220px] lg:h-[280px] xl:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className=" space-y-1 md:space-y-4 text-left w-full">
                <h4 className="text-gray-400 font-inter-medium text-[14px] md:text-[16px] lg:text-[20px] tracking-widest">
                  {item.title}
                </h4>

                <h3 className="text-white font-inter-medium text-[14px] md:text-[16px] lg:text-[20px]">
                  {item.client}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 md:line-clamp-10  font-inter-medium text-[12px] md:text-[14px] lg:text-[16px]">
                  {item.description}
                </p>

                <a href={item.link} className="mt-auto btn-green p-2 md:p-4 px-2 w-[150px] lg:w-[250px] text-center font-bold font-inter text-[12px] md:text-[16px] md:justify-center">
                  VIEW CASE STUDY
                  <ArrowUpRight className="hidden md:inline-block ml-2" />
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
