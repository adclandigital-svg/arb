import { Gilda_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import LenisProvider from "@/components/layouts/SmoothScroll";
import PopupForm from "@/components/PopupForm";
import ScrollToTop from "@/components/layouts/ScrollToTop";

const gildaDisplay = Gilda_Display({
  subsets: ["latin"],
  weight: "400", // 🔥 REQUIRED (only available weight)
  display: "swap",
  variable: "--font-gilda",
});

export const metadata = {
  title: "RBA Group | Engineering, Infrastructure & Industrial Solutions",
  description:
    "RBA Group specializes in engineering excellence, infrastructure development, and industrial solutions with innovation, quality, and sustainability at its core.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gildaDisplay.variable} antialiased`}>
        <ScrollToTop />
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
        <PopupForm/>
      </body>
    </html>
  );
}
