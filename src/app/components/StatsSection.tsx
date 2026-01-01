"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 1.5,
        ease: "easeOut",
      });
    }
  }, [isInView, value, motionValue]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
}

export default function StatsSection() {
  const stats = [
    { value: 5, suffix: "+", label: "Projects Completed" },
    { value: 5, suffix: "+", label: "Countries Served" },
    { value: 1, suffix: "+", label: "Industries Transformed" },
    { value: 98, suffix: "%", label: "Client Retention Rate" },
  ];

  return (
    <section className="py-12 md:py-20 ">
      <div className="px-6 lg:px-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center text-white">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <h3 className="text-[40px] md:text-[60px] lg:text-[80px] font-extrabold">
                <AnimatedNumber value={stat.value} />
                {stat.suffix}
              </h3>

              <p className="mt-4 text-[16px] md:text-[24px] lg:text-[32px] tracking-widest uppercase text-gray-300">
                {stat.label.split(" ").map((word, i) => (
                  <span key={i}>
                    {word}
                    {i === 0 && <br />}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
