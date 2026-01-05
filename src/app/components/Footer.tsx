"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-white px-6 lg:px-28 pt-20 pb-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6 md:gap-14">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/Novrith_DM-02.png" // 🔁 replace with your logo
              alt="Novrith"
              width={142}
              height={142}
              className="md:w-[200px]"
            />
          </div>

          <p className="text-gray-300 mb-4 md:mb-6 font-normal font-inter text-[14px] md:text-[16px]">
            Your Vision. Our <br /> Technology.
          </p>

          <div className=" space-y-2 md:space-y-3 text-gray-300 font-normal font-inter text-[14px] md:text-[16px]">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt />
              Colombo, Sri Lanka
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope />
              Info@Novrithtech.Com
            </p>
          </div>
        </div>

        {/* Company Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Company</h3>
          <ul className="space-y-2 md:space-y-4 text-gray-300 font-normal font-inter text-[14px] md:text-[16px]">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Company</h3>
          <ul className=" space-y-2 md:space-y-4 text-gray-300 font-normal font-inter text-[14px] md:text-[16px]">
            <li>
              <Link href="/portfolio" className="hover:text-white transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy & Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-10" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-normal font-inter text-[12px] md:text-[16px] text-gray-400 text-center md:text-left">
          Copyright © 2025 Novrith Technology.
          <br className="md:hidden" /> All rights reserved
        </p>

        <div className="flex gap-3">
          <SocialIcon href="#" icon={<FaFacebookF />} /> 
          <SocialIcon href="#" icon={<FaXTwitter />} />
          <SocialIcon href="#" icon={<FaLinkedinIn />} />
          <SocialIcon href="#" icon={<FaInstagram />} />
        </div>
      </div>
    </footer>
  );
}

/* Social Button */
function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      className="
        w-9 h-9 rounded-full
        bg-[#2a2a2a]
        flex items-center justify-center
        text-white
        hover:bg-green-400 hover:text-black
        transition
      "
    >
      {icon}
    </a>
  );
}
