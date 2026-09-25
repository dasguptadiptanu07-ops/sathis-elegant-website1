"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import StackingCards, { StackingCardItem } from "@/components/ui/stacking-cards";

const cardsData = [
  {
    index: 0,
    badge: "Most Popular",
    category: "SIGNATURE BRIDAL TRANSFORMATIONS",
    title: "Royal Bridal Makeover & HD Airbrush Art",
    description:
      "Customized bridal consultations, trial sessions, waterproof HD airbrush contouring, and royal saree/dupatta draping crafted for your big day.",
    highlights: [
      "Customized Color Palette & Skin Matching",
      "Long-lasting Waterproof HD Airbrush Finish",
      "Hairstyling, Extensions & Accessories",
      "Complimentary Pre-Bridal Skin Preparation",
    ],
    duration: "4 - 5 Hours",
    guarantee: "100% Sweat & Smudge Proof",
    image: "/images/bridal-1.webp",
    imageAlt: "Royal Bridal Makeover at Sathi's Elegant Beauty Zone",
    accentColor: "from-[#FF6F3C] to-[#FFB68D]",
    bgGradient: "bg-gradient-to-br from-[#1D1426] via-[#2A1839] to-[#120B19]",
    borderColor: "border-[#FF8A50]/30",
  },
  {
    index: 1,
    badge: "Clinical Skincare",
    category: "ADVANCED SKIN RESURFACING",
    title: "Hydra-Radiance & Botanical Glow Facials",
    description:
      "Deep pore cleansing, multi-depth hydra infusion, LED photon therapy, and organic botanical concentrates that unlock luminous, glass-skin clarity.",
    highlights: [
      "Non-Invasive Hydro-Dermabrasion & Exfoliation",
      "Pure Hyaluronic & Vitamin Infusion",
      "Red & Blue Light LED Skin Rejuvenation",
      "Visible Hydration & Pore Tightening in 1 Session",
    ],
    duration: "60 - 90 Minutes",
    guarantee: "Dermatologically Safe & Organic",
    image: "/images/skincare.webp",
    imageAlt: "Hydra Radiance Facial Therapy",
    accentColor: "from-[#FF8A50] to-[#FFD1B3]",
    bgGradient: "bg-gradient-to-br from-[#26131F] via-[#381B2D] to-[#160A13]",
    borderColor: "border-[#FF8A50]/30",
  },
  {
    index: 2,
    badge: "Couture Styling",
    category: "HAIR REPAIR & COLOR CRAFT",
    title: "Keratin Smoothing & Balayage Color Artistry",
    description:
      "Formaldehyde-free cysteine smoothing, custom dimensional Balayage highlights, and luxurious scalp detox spas for silky, vibrant hair.",
    highlights: [
      "Zero-Damage Formaldehyde Free Formula",
      "Custom Hand-Painted Balayage & Highlights",
      "Deep Conditioning Scalp Spa Treatment",
      "Up to 4 Months of Frizz-Free Shine",
    ],
    duration: "2.5 - 3.5 Hours",
    guarantee: "Premium International Brands",
    image: "/images/service-hair.webp",
    imageAlt: "Keratin Smoothing & Hair Color Artistry",
    accentColor: "from-[#FF6F3C] to-[#FFA07A]",
    bgGradient: "bg-gradient-to-br from-[#171126] via-[#24163C] to-[#0D0A14]",
    borderColor: "border-[#FF8A50]/30",
  },
];

export const StackingCardsSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-[#140D1B] text-[#F6F1EC] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF6F3C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FFB68D]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF8A50]/10 border border-[#FF8A50]/20 text-[#FF8A50] text-xs sm:text-sm font-medium tracking-wide uppercase mb-4">
          <Sparkles className="w-4 h-4 text-[#FF8A50]" />
          <span>Curated Beauty Experiences</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-[#F6F1EC] leading-tight mb-5">
          Signature Transformations <br />
          <span className="bg-gradient-to-r from-[#FF8A50] via-[#FF6F3C] to-[#FFB68D] bg-clip-text text-transparent italic font-normal">
            Crafted for Perfection
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#F6F1EC]/75 max-w-2xl mx-auto font-light leading-relaxed">
          Scroll down to explore our flagship luxury treatments — designed to enhance your natural grace with regal sophistication.
        </p>
      </div>

      {/* Stacking Cards Component */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <StackingCards totalCards={cardsData.length} scaleMultiplier={0.04} className="space-y-16 pb-24">
          {cardsData.map((card) => (
            <StackingCardItem
              key={card.index}
              index={card.index}
              topPosition={`${8 + card.index * 4}%`}
              className="py-4"
            >
              <div
                className={`relative rounded-3xl border ${card.borderColor} ${card.bgGradient} p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 min-h-[460px] flex flex-col justify-between`}
              >
                {/* Glow Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF8A50]/10 to-transparent opacity-30 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left Column: Content */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Top Meta Tag */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FF8A50]/15 text-[#FF8A50] border border-[#FF8A50]/30">
                          {card.badge}
                        </span>
                        <span className="text-xs font-medium text-[#F6F1EC]/50 uppercase tracking-widest">
                          {card.category}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#F6F1EC] leading-tight mb-4">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#F6F1EC]/80 leading-relaxed font-light mb-6">
                        {card.description}
                      </p>
                    </div>

                    {/* Highlights List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/10">
                      {card.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#FF8A50] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-[#F6F1EC]/90 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Metadata & CTA */}
                    <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                      <div className="flex items-center gap-4 text-xs text-[#F6F1EC]/70">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#FF8A50]" />
                          <span>{card.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-[#FF8A50]" />
                          <span>{card.guarantee}</span>
                        </div>
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF8A50] to-[#FF6F3C] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-[#FF8A50]/20 hover:shadow-[#FF8A50]/40 transition-all duration-300 hover:scale-105"
                      >
                        <span>Reserve Appointment</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <div className="lg:col-span-5 relative group">
                    <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 35vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#140D1B]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#140D1B]/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-[#F6F1EC]">
                          <ShieldCheck className="w-4 h-4 text-[#FF8A50]" />
                          <span className="font-medium">Sathi's Certified Expert</span>
                        </div>
                        <span className="text-[10px] text-[#FF8A50] font-semibold uppercase tracking-wider">
                          Premium Spa
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StackingCardItem>
          ))}
        </StackingCards>
      </div>
    </section>
  );
};
