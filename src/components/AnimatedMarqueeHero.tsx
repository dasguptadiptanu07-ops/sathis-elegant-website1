"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility from shadcn

// Props interface for the component
interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  images: string[];
  className?: string;
}

// Reusable Button component styled with brand orange
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-8 px-8 py-3.5 rounded-full bg-[#FF6F3C] text-white font-semibold shadow-lg transition-colors hover:bg-[#E65320] focus:outline-none focus:ring-2 focus:ring-[#FF6F3C]/50 cursor-pointer"
  >
    {children}
  </motion.button>
);

// The main hero component
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  images,
  className,
}) => {
  // Animation variants for the text content
  const FADE_IN_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  // Split images into 2 rows for dual horizontal strips
  const row1 = images.filter((_, i) => i % 2 === 0);
  const row2 = images.filter((_, i) => i % 2 !== 0);

  // Fallbacks if images array is short
  const strip1 = [...(row1.length ? row1 : images), ...(row1.length ? row1 : images), ...(row1.length ? row1 : images)];
  const strip2 = [...(row2.length ? row2 : images), ...(row2.length ? row2 : images), ...(row2.length ? row2 : images)];

  return (
    <section
      className={cn(
        "relative w-full min-h-screen overflow-hidden bg-[#F6F1EC] text-[#2A221E] flex flex-col items-center justify-between py-12 px-4 text-center",
        className
      )}
    >
      <div className="z-10 flex flex-col items-center my-auto max-w-4xl">
        {/* Tagline */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-4 inline-block rounded-full border border-[#FF6F3C]/30 bg-[#FF6F3C]/10 px-5 py-2 text-xs sm:text-sm font-semibold text-[#FF6F3C] backdrop-blur-md shadow-xs"
        >
          {tagline}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-[#1D1426]"
        >
          {typeof title === 'string' ? (
            title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={FADE_IN_ANIMATION_VARIANTS}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))
          ) : (
            title
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.4 }}
          className="mt-5 max-w-2xl text-base sm:text-lg text-[#5A504B] leading-relaxed font-normal"
        >
          {description}
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
        >
          <ActionButton>{ctaText}</ActionButton>
        </motion.div>
      </div>

      {/* Dual Animated Image Marquee Strips */}
      <div className="w-full flex flex-col gap-4 mt-8 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        {/* Strip 1: Scrolling Left */}
        <div className="w-full overflow-hidden py-1">
          <motion.div
            className="flex gap-5 w-max"
            animate={{
              x: ["0%", "-50%"],
              transition: {
                ease: "linear",
                duration: 30,
                repeat: Infinity,
              },
            }}
          >
            {strip1.map((src, index) => (
              <motion.div
                key={`strip1-${index}`}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 30 }}
                transition={{ duration: 0.2 }}
                className="relative aspect-[3/4] h-40 sm:h-48 md:h-56 flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-lg border border-white/10 group"
                style={{
                  rotate: `${(index % 2 === 0 ? -2 : 3)}deg`,
                }}
              >
                <img
                  src={src}
                  alt={`Card showcase ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white text-xs font-semibold tracking-wide" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Strip 2: Scrolling Right */}
        <div className="w-full overflow-hidden py-1">
          <motion.div
            className="flex gap-5 w-max"
            animate={{
              x: ["-50%", "0%"],
              transition: {
                ease: "linear",
                duration: 35,
                repeat: Infinity,
              },
            }}
          >
            {strip2.map((src, index) => (
              <motion.div
                key={`strip2-${index}`}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 30 }}
                transition={{ duration: 0.2 }}
                className="relative aspect-[3/4] h-40 sm:h-48 md:h-56 flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden shadow-lg border border-white/10 group"
                style={{
                  rotate: `${(index % 2 === 0 ? 3 : -2)}deg`,
                }}
              >
                <img
                  src={src}
                  alt={`Card showcase ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white text-xs font-semibold tracking-wide" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
