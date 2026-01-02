"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedImage() {
  return (
    <div className="flex justify-center items-center h-[400px] bg-transparent">
      <motion.div
        animate={{
          rotate: [0, 360], // full 360° rotation
          scale: [1, 1.05, 1], // gentle breathing
          filter: [
            "drop-shadow(0 0 15px #00ff88)",
            "drop-shadow(0 0 40px #00ff88)",
            "drop-shadow(0 0 15px #00ff88)",
          ],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Image
          src="/icons8-settings-10802.png"
          alt="Glowing shape"
          width={400}
          height={400}
          className="select-none pointer-events-none h-[300px] w-[300px]"
        />
      </motion.div>
    </div>
  );
}
