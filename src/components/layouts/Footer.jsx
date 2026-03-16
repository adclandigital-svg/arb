"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function RBAPremiumFooter() {
  return (
    <footer className="relative text-white pt-15 pb-10 overflow-hidden">

      {/* Background Image with black overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/free-photo/skyscraper-building-cityscape_23-2151899150.jpg?t=st=1773655229~exp=1773658829~hmac=4ed7012d1e21fabe8d89da223b5c42284bb52dc3cd9b933284cc6fb8938ce6fa&w=2000"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/90"></div> {/* Dark overlay */}
      </div>

      <div className="max-w-[1600px] mx-auto px-8 relative z-10">

        {/* ================= TOP GRID ================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-16"
        >

          {/* LOGO + ADDRESS */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#c89b5b]">
              RBA Group
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              <strong>Reg. Office:</strong>
              <br />
              Ground Floor, No.152, Eden Self City, Taraori, Karnal, Haryana - 132116
            </p>

            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              <strong>Site Office:</strong>
              <br />
              RBA Uptown City, Taraori, Sec-1 Karnal, Haryana 132116
            </p>

            <p className="text-sm text-gray-300 mt-4">
              <strong>Phone:</strong> +91 954 08 44444
              <br />
              <strong>Email:</strong> info@rbarealcon.com
            </p>
          </div>

          {/* MENU */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#c89b5b]">
              Menu
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact-us">Contact Us</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms & Conditions</FooterLink>
            </div>
          </div>

          {/* RERA INFO */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#c89b5b]">
              RERA Information
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              <strong>RERA Reg No:</strong>
              <br />
              HRERA-PKL-KNL-556-2024
            </p>

            <p className="text-sm text-gray-300 mt-6">
              Website of HARYANA RERA:
            </p>

            <a
              href="https://haryanarera.gov.in"
              target="_blank"
              className="text-[#c89b5b] underline text-sm"
            >
              https://haryanarera.gov.in
            </a>
          </div>

          {/* FOLLOW US */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#c89b5b]">
              Follow Us
            </h3>

            <div className="flex gap-6">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
            </div>
          </div>

        </motion.div>

        {/* ================= COPYRIGHT ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-gray-700 pt-6 text-center text-xs text-gray-400"
        >
          © {new Date().getFullYear()} RBA Group. All Rights Reserved.
        </motion.div>

      </div>
    </footer>
  );
}

/* ================= FOOTER LINK ================= */
function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative w-fit transition-all duration-300 hover:text-[#c89b5b] group"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#c89b5b] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

/* ================= SOCIAL ICON ================= */
function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      target="_blank"
      className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-[#c89b5b] transition-all duration-300 hover:scale-110"
    >
      {icon}
    </a>
  );
}