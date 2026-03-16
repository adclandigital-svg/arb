"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.08)] border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div
          className={`max-w-[1750px] mx-auto flex items-center justify-between px-8 transition-all duration-500 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/rba-logo.webp"
              alt="RBA Realcon"
              className="h-12 w-auto transition-all duration-500"
              style={{
                filter: scrolled ? "none" : "brightness(0) invert(1)",
              }}
            />
          </Link>

          {/* NAV LINKS */}
          <div className="flex items-center gap-10">
            <div
              className={`hidden lg:flex items-center gap-10 text-sm font-semibold tracking-wider transition duration-300 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <NavItem href="/overview">PROJECT</NavItem>
              <NavItem href="/contact-us">CONTACT</NavItem>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className={`transition duration-300 ${
                scrolled ? "text-black" : "text-white"
              } hover:text-[#c89b5b]`}
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= FULL SCREEN CREATIVE SIDEBAR ================= */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>

        {/* Sidebar Panel */}
        <div
          className={`absolute inset-0 flex flex-col justify-center items-center transform transition-transform duration-700 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: `radial-gradient(circle at top left, #c89b5b55, #000000dd), 
                         url('https://img.freepik.com/free-photo/low-angle-shot-modern-business-building-touching-clear-sky_181624-9829.jpg?t=st=1773657096~exp=1773660696~hmac=bf0b31f6af10b7f79340d246a83870cf75d428118291ca2a7d6fa9ff5a6fb1bf&w=1480')`,
            backgroundSize: "cover",
            backgroundRepeat:"no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Dynamic floating shapes */}
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-[#c89b5b]/40 animate-bounce-slow mix-blend-overlay"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-[#ffffff]/20 animate-pulse-slow mix-blend-overlay"></div>

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-10 right-10 text-white z-20 p-2 rounded-full bg-black/30 hover:bg-[#c89b5b]/70 transition-all duration-300"
          >
            <X size={32} />
          </button>

          {/* Sidebar Links */}
          <nav className="flex flex-col gap-8 z-20 text-center">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about-us" },
              { name: "Projects", href: "/overview" },
              { name: "Walkthrough", href: "#" },
              { name: "Career", href: "/career" },
              { name: "Registry", href: "/registry" },
              { name: "Event", href: "/event" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact-us" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-white text-1xl font-bold uppercase tracking-wider relative group transition-all duration-500 hover:text-[#c89b5b] hover:scale-110"
              >
                <span className="block relative z-10">{item.name}</span>
                <span className="absolute left-0 -bottom-2 w-0 h-[4px] bg-gradient-to-r from-[#c89b5b] to-[#ffdd7f] transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6 mt-16 z-20">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                target="_blank"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-gradient-to-r from-[#c89b5b] to-[#ffdd7f] hover:scale-125 transition-all duration-500 animate-bounce-slow"
              >
                <Icon size={24} className="text-white" />
              </a>
            ))}
          </div>

          {/* Footer Text */}
          <div className="absolute bottom-12 text-white/70 text-sm z-20 text-center px-4">
            © {new Date().getFullYear()} RBA Group. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}

/* Desktop Nav Item */
function NavItem({ href, children }) {
  return (
    <Link
      href={href}
      className="relative group transition duration-300 hover:text-[#c89b5b]"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c89b5b] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}