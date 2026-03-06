"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PopupForm() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 8000); // show after 8 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.8, y: 80 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 80 }}
            transition={{ duration: 0.4 }}
            className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2"
          >
            {/* Left Image Section */}
            <div className="hidden md:block relative">
              <img
                src="https://www.rbarealcon.com/images/gallery-3.webp"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">Book Site Visit</h3>
                <p className="text-sm opacity-80">
                  Premium Living | Exclusive Offer
                </p>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="p-8 relative">
              {/* Close Button */}
              <button
                onClick={() => setVisible(false)}
                className="absolute top-4 right-5 text-gray-500 hover:text-black text-2xl"
              >
                ×
              </button>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Request Callback
              </h2>

              <p className="text-sm text-gray-500 mb-6 text-center">
                Fill the form and our team will contact you shortly.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#106a39] placeholder:text-gray-700"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#106a39] placeholder:text-gray-700"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#106a39] placeholder:text-gray-700"
                />

                <textarea
                  rows={3}
                  placeholder="Your Message"
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#106a39] placeholder:text-gray-700"
                />

                <button
                  type="submit"
                  className="w-full bg-[#106a39] text-white py-3 rounded-xl hover:bg-[#0d5a30] transition font-semibold"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
