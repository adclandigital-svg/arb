"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

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
          {/* ===== LEFT: LOGO ===== */}
          <Link href="/" className="flex items-center">
            <img
              src="/rba-logo.webp"
              alt="RBA Realcon"
              className="h-12 w-auto"
            />
          </Link>

          {/* ===== RIGHT SIDE ===== */}
          <div className="flex items-center gap-10">
            {/* Desktop Important Links */}
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
              } hover:text-[#106a39]`}
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= SIDEBAR ================= */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>

        {/* Sidebar Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-10 transform transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top */}
          <div className="flex justify-between items-center mb-12">
            <img
              src="/rba-logo.webp"
              alt="RBA Realcon"
              className="h-10"
            />
            <button onClick={() => setOpen(false)} className="text-black">
              <X size={28} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-7 text-lg font-medium">
            <SideItem href="/">Home</SideItem>
            <SideItem href="/about-us">About Us</SideItem>
            <SideItem href="/overview">Project</SideItem>
            <SideItem href="#">Walkthrough</SideItem>
            <SideItem href="/career">Career</SideItem>
            <SideItem href="/registry">Registry</SideItem>
            <SideItem href="/event">Event</SideItem>
            <SideItem href="/blog">Blog</SideItem>
            <SideItem href="/contact-us">Contact</SideItem>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== Desktop Nav Item ===== */
function NavItem({ href, children }) {
  return (
    <Link
      href={href}
      className="relative group transition duration-300 hover:text-[#106a39]"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#106a39] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

/* ===== Sidebar Item ===== */
function SideItem({ href, children }) {
  return (
    <Link
      href={href}
      className="transition duration-300 hover:text-[#106a39] hover:translate-x-2 text-black"
    >
      {children}
    </Link>
  );
} 