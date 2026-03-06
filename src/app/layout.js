import { Gilda_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import LenisProvider from "@/components/layouts/SmoothScroll";

const gildaDisplay = Gilda_Display({
  subsets: ["latin"],
  weight: "400", // 🔥 REQUIRED (only available weight)
  display: "swap",
  variable: "--font-gilda",
});

export const metadata = {
  title: "ARB Group | Engineering & Infrastructure Solutions",
  description:
    "ARB Group delivers innovative engineering, infrastructure, and industrial solutions with a commitment to quality and sustainability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gildaDisplay.variable} antialiased`}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
