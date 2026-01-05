"use client";

import { ArrowUpRight, User, Mail, Phone, MessageSquare } from "lucide-react";
import AnimatedImage from "../AnimatedWireBlob";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="py-24 px-6 lg:px-28">
      <div className="grid md:grid-cols-2 gap-6 mx-auto">

        {/* LEFT PANEL */}
        <div className="service-card6 p-[2.7px] order-2 md:order-1">
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
              <div>📘 Address</div>
              <div>📸 Address</div>
              <div>🔗 Address</div>
              <div>🐦 Address</div>
            </div>
            </div>



          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="service-card4 p-[2.7px] order-1 md:order-2">
          <div className="service-card3 flex flex-col justify-between h-full p-6 lg:p-10 text-white">
            
            <h3 className="text-3xl font-semibold text-green-400 mb-2">
              Send us a message
            </h3>
            <p className="text-gray-400 mb-8">
              Drop a message — you never know where one connection could lead.
            </p>

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
        </div>

      </div>
    </section>
  );
}
