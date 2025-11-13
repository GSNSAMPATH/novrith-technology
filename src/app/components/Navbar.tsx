"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "CAREERS", path: "/careers" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#030419] shadow-sm shadow-[#00B74A] text-white flex justify-between items-center px-6 lg:px-28 py-4 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center justify-start space-x-2">
        <Image
          src="/Novrith_DM-02.png" // place your logo file in /public/logo.png
          alt="Novrith Logo"
          width={160}
          height={160}
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`text-sm font-semibold ${
              pathname === item.path
                ? "text-[#00B74A]"
                : "text-white hover:text-[#00B74A]"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Contact Button */}
      <Link
        href="/contact"
        className="hidden md:block md:inline-flex items-center gap-3 bg-[#00B259] hover:bg-green-600 transition-colors px-4 py-1.5 font-semibold relative after:content-[''] after:absolute after:right-0 after:top-0 after:w-6 after:h-full after:bg-[#030419] [clip-path:polygon(0_0,100%_0,calc(99%_-_35px)_100%,0%_100%)]"
      >
        <span className="flex mr-6 text-white">CONTACT US</span>
     
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm font-semibold ${
                pathname === item.path
                  ? "text-[#00B74A]"
                  : "text-white hover:text-[#00B74A]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#00B74A] text-white px-5 py-2 font-semibold rounded-none hover:bg-[#00a13e] transition"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
}
