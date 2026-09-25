"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const flipWords = ["Transform", "Elevate", "Radiate", "Empower"];

export const ServicesSection: React.FC = () => {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % flipWords.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const currentWord = flipWords[wordIdx];

  return (
    <section id="services" className="relative w-full py-20 px-6 sm:px-10 lg:px-16 bg-[#F6F1EC] text-[#2A221E] overflow-hidden">
      {/* Ambient Luxury Glow Background Elements */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-[#FF6B2B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-[#C8A279]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#1C1B1D] tracking-tight leading-[1.15] mb-4">
            How Can We{" "}
            <span className="inline-block relative min-w-[7ch] text-[#FF6B2B] italic font-normal">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ rotateX: -90, opacity: 0, y: -10 }}
                  animate={{ rotateX: 0, opacity: 1, y: 0 }}
                  exit={{ rotateX: 90, opacity: 0, y: 10 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="inline-block origin-center"
                >
                  {currentWord}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            You?
          </h2>
          <p className="text-base sm:text-lg text-[#2A221E]/75 font-normal leading-relaxed max-w-2xl mx-auto">
            From hair care to skin treatments, each service is delivered with
            the technique and attention to detail that comes from over a decade of
            experience — so every visit leaves you looking and feeling your best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 1: Skin */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-[#131315] hover:bg-[#1C1B1D] border border-white/10 hover:border-[#FF6B2B]/40 rounded-3xl p-7 flex flex-col h-[390px] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#FF6B2B]/10 rounded-full blur-2xl group-hover:bg-[#FF6B2B]/25 transition-all duration-500 pointer-events-none" />
            <div className="flex items-center justify-between z-10 mb-2">
              <span className="text-xs text-[#FF6B2B] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                Explore Details →
              </span>
            </div>

            {/* Dual Staggered Overlapping Showcase Frame */}
            <div className="relative flex-grow flex items-center justify-center my-auto">
              {/* Back Image */}
              <div className="absolute w-44 sm:w-48 h-32 sm:h-36 rounded-2xl overflow-hidden shadow-2xl border border-white/15 transform -rotate-6 transition-all duration-500 ease-out group-hover:rotate-[-12deg] group-hover:scale-105 group-hover:-translate-x-4 bg-[#1C1B1D]">
                <img
                  src="/images/skincare.webp"
                  alt="Party Makeup Showcase"
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Front Image */}
              <div className="absolute w-44 sm:w-48 h-32 sm:h-36 rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.5)] border border-[#FF6B2B]/50 transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-[8deg] group-hover:scale-110 group-hover:translate-x-4 bg-[#1C1B1D]">
                <img
                  src="/images/service-skin.webp"
                  alt="Wedding & Saree Draping Artistry"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl" />
              </div>
            </div>

            <div className="mt-auto z-10 pt-3 border-t border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#FF6B2B] transition-colors duration-300">
                  Skin
                </h3>
                <p className="text-xs text-white/60 font-normal mt-0.5">
                  High-definition makeup, hair couture & saree draping
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#FF6B2B] flex items-center justify-center text-white/80 group-hover:text-white transition-all duration-300 shrink-0 ml-3">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Hair */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-[#131315] hover:bg-[#1C1B1D] border border-white/10 hover:border-[#FF6B2B]/40 rounded-3xl p-7 flex flex-col h-[390px] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#FF6B2B]/10 rounded-full blur-2xl group-hover:bg-[#FF6B2B]/25 transition-all duration-500 pointer-events-none" />
            <div className="flex items-center justify-between z-10 mb-2">
              <span className="text-xs text-[#FF6B2B] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                Explore Details →
              </span>
            </div>

            <div className="relative flex-grow flex items-center justify-center my-auto">
              <div className="absolute w-44 sm:w-48 h-32 sm:h-36 rounded-2xl overflow-hidden shadow-2xl border border-white/15 transform -rotate-6 transition-all duration-500 ease-out group-hover:rotate-[-12deg] group-hover:scale-105 group-hover:-translate-x-4 bg-[#1C1B1D]">
                <img
                  src="/images/hair-color.webp"
                  alt="Hair Smoothening Showcase"
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute w-44 sm:w-48 h-32 sm:h-36 rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.5)] border border-[#FF6B2B]/50 transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-[8deg] group-hover:scale-110 group-hover:translate-x-4 bg-[#1C1B1D]">
                <img
                  src="/images/service-hair.webp"
                  alt="Silky & Gloss Hair Transformation"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl" />
              </div>
            </div>

            <div className="mt-auto z-10 pt-3 border-t border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#FF6B2B] transition-colors duration-300">
                  Hair
                </h3>
                <p className="text-xs text-white/60 font-normal mt-0.5">
                  Keratin, botox gloss, protein nourish & sleek styling
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#FF6B2B] flex items-center justify-center text-white/80 group-hover:text-white transition-all duration-300 shrink-0 ml-3">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: MakeUp */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-[#131315] hover:bg-[#1C1B1D] border border-white/10 hover:border-[#FF6B2B]/40 rounded-3xl p-7 flex flex-col h-[390px] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#FF6B2B]/10 rounded-full blur-2xl group-hover:bg-[#FF6B2B]/25 transition-all duration-500 pointer-events-none" />
            <div className="flex items-center justify-between z-10 mb-2">
              <span className="text-xs text-[#FF6B2B] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                Explore Details →
              </span>
            </div>

            <div className="relative flex-grow flex items-center justify-center my-auto">
              <div className="absolute w-44 sm:w-48 h-32 sm:h-36 rounded-2xl overflow-hidden shadow-2xl border border-white/15 transform -rotate-6 transition-all duration-500 ease-out group-hover:rotate-[-12deg] group-hover:scale-105 group-hover:-translate-x-4 bg-[#1C1B1D]">
                <img
                  src="/images/makeup.webp"
                  alt="Hydra Facial Glow Treatment"
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute w-44 sm:w-48 h-32 sm:h-36 rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.5)] border border-[#FF6B2B]/50 transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-[8deg] group-hover:scale-110 group-hover:translate-x-4 bg-[#1C1B1D]">
                <img
                  src="/images/service-makeup.webp"
                  alt="Deep Moisture & Skin Revival"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl" />
              </div>
            </div>

            <div className="mt-auto z-10 pt-3 border-t border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#FF6B2B] transition-colors duration-300">
                  MakeUp
                </h3>
                <p className="text-xs text-white/60 font-normal mt-0.5">
                  Deep hydration, organic clarifying & luminous renewal
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#FF6B2B] flex items-center justify-center text-white/80 group-hover:text-white transition-all duration-300 shrink-0 ml-3">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Nails */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-[#131315] hover:bg-[#1C1B1D] border border-white/10 hover:border-[#FF6B2B]/40 rounded-3xl p-7 flex flex-col h-[390px] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#FF6B2B]/10 rounded-full blur-2xl group-hover:bg-[#FF6B2B]/25 transition-all duration-500 pointer-events-none" />
            <div className="flex items-center justify-between z-10 mb-2">
              <span className="text-xs text-[#FF6B2B] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                Explore Details →
              </span>
            </div>

            <div className="relative flex-grow flex items-center justify-center my-auto">
              <div className="absolute w-44 sm:w-48 h-32 sm:h-36 rounded-2xl overflow-hidden shadow-2xl border border-white/15 transform -rotate-6 transition-all duration-500 ease-out group-hover:rotate-[-12deg] group-hover:scale-105 group-hover:-translate-x-4 bg-[#1C1B1D]">
                <img
                  src="/images/service-nails-back.webp"
                  alt="Nail Artistry & Sculpting"
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute w-44 sm:w-48 h-32 sm:h-36 rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.5)] border border-[#FF6B2B]/50 transform rotate-3 transition-all duration-500 ease-out group-hover:rotate-[8deg] group-hover:scale-110 group-hover:translate-x-4 bg-[#1C1B1D]">
                <img
                  src="/images/service-nails-front.webp"
                  alt="Luxe Manicure & Pedicure Spa"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl" />
              </div>
            </div>

            <div className="mt-auto z-10 pt-3 border-t border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#FF6B2B] transition-colors duration-300">
                  Nails
                </h3>
                <p className="text-xs text-white/60 font-normal mt-0.5">
                  Gel extensions, sculpted nail art, organic spa care
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#FF6B2B] flex items-center justify-center text-white/80 group-hover:text-white transition-all duration-300 shrink-0 ml-3">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
