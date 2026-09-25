"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Clock, Users, RefreshCw } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#fff8f6] text-[#261813]">
      {/* Ambient Atmospheric Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] rounded-full bg-amber-500/10 blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header & Eyebrow Module */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 mb-4 shadow-xs text-xs font-semibold tracking-wider uppercase">
            ✨ Established 2012 in Agartala
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1c1917] tracking-tight mb-4 leading-tight font-serif">
            About <br />
            <span>Sathi's </span>
            <span className="italic font-serif text-[#ea580c] inline-block">
              Elegant
            </span>
            <span> Beauty Salon</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed font-sans">
            Founded by Mrs. Sathi Saha, whose 15 years of expertise have shaped
            over 1,000 transformations — Sathi's Elegant Beauty Zone is where
            skilled hands and genuine care come together.
          </p>
        </motion.div>

        {/* Asymmetrical Editorial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Founder Portrait & Badges (lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex flex-col items-center lg:items-start"
          >
            {/* Master Portrait Frame */}
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-orange-50 border border-orange-100">
              <img
                src="/images/founder.webp"
                alt="Mrs. Sathi Saha, Founder & Master Cosmetologist"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Founder Floating Glass Pill */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-xl z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">
                      Sathi Saha
                    </h3>
                    <p className="text-xs text-orange-600 font-semibold tracking-wider uppercase">
                      Founder & Master in Cosmetology
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Story (lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center pt-6 lg:pt-0 lg:pl-6 text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1c1917] tracking-tight mb-6 leading-snug font-serif">
              Twelve Years of Making Agartala Feel{" "}
              <span className="italic text-[#ea580c] font-serif">
                Beautiful
              </span>
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Every great salon starts with someone who cares deeply about her
                craft. For Mrs. Sathi Saha, that meant 15 years of mastering the
                techniques that make hair and skin truly thrive — and 12 years
                of bringing that expertise to Agartala.
              </p>
              <p>
                What started as one woman's passion has grown into a trusted
                destination for over 1,000 clients who return not just for the
                results, but for how they feel walking out the door. Our team
                stays trained in the latest techniques — from keratin
                treatments to advanced skin care — because you deserve results
                that last, not trends that fade.
              </p>
              <p>
                Whether you're here for a fresh haircut or a complete hair
                transformation, you're in hands that have done this thousands
                of times before.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quick Metrics Ribbon ("Built on Result Not Promises") */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 w-full max-w-5xl mx-auto py-8"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-gray-900 tracking-tight">
              Built on Results, Not Promises
            </h3>
            <p className="mt-2 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Trusted by over a thousand clients across Agartala for beauty
              that lasts
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Metric 1 */}
            <div className="rounded-2xl border border-white/10 bg-[#121110] p-8 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-6 flex items-center justify-start">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-orange-400">
                  <Clock className="w-7 h-7" />
                </div>
              </div>
              <span className="font-serif font-semibold text-4xl sm:text-5xl tracking-tight text-[#F6F1EC] block">
                12+
              </span>
              <p className="mt-3 text-[#D1C7BD] text-base font-medium">
                Years serving Agartala
              </p>
            </div>

            {/* Metric 2 */}
            <div className="rounded-2xl border border-white/10 bg-[#121110] p-8 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-6 flex items-center justify-start">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-orange-400">
                  <Users className="w-7 h-7" />
                </div>
              </div>
              <span className="font-serif font-semibold text-4xl sm:text-5xl tracking-tight text-[#F6F1EC] block">
                1000+
              </span>
              <p className="mt-3 text-[#D1C7BD] text-base font-medium">
                Happy clients
              </p>
            </div>

            {/* Metric 3 */}
            <div className="rounded-2xl border border-white/10 bg-[#121110] p-8 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-6 flex items-center justify-start">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-orange-400">
                  <RefreshCw className="w-7 h-7" />
                </div>
              </div>
              <span className="font-serif font-semibold text-4xl sm:text-5xl tracking-tight text-[#F6F1EC] block">
                98%
              </span>
              <p className="mt-3 text-[#D1C7BD] text-base font-medium">
                Clients who return
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
