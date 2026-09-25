"use client";

import React from "react";
import StackingCards, { StackingCardItem } from "@/components/ui/stacking-cards";
import { Sparkles, ArrowRight } from "lucide-react";

interface StackingCardData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  image: string;
  tags: string[];
  gradient: string;
}

const cardsData: StackingCardData[] = [
  {
    id: 1,
    title: "Royal Bridal & Couture Makeovers",
    subtitle: "Traditional & Modern Bridal Artistry",
    description:
      "Complete HD & 3D bridal makeup, saree draping, hair extensions, and custom jewelry styling crafted for your special day.",
    badge: "Bridal Specialist",
    image: "/images/bridal-1.webp",
    tags: ["HD Bridal Makeup", "Saree Draping", "Couture Styling"],
    gradient: "from-[#1D1426] via-[#281836] to-[#120B19]",
  },
  {
    id: 2,
    title: "Advanced Hydra Skin Renewal",
    subtitle: "Luminous & Clarifying Skin Care",
    description:
      "Deep moisture infusion, organic facial peels, LED light therapy, and skin tightening for a youthful, radiant glow.",
    badge: "Skin Radiance",
    image: "/images/service-skin.webp",
    tags: ["Hydra Facial", "Collagen Boost", "Glowing Skin"],
    gradient: "from-[#1B1526] via-[#241738] to-[#0F0C16]",
  },
  {
    id: 3,
    title: "Keratin & Hair Transformation",
    subtitle: "Silky Smoothness & Gloss Treatments",
    description:
      "Nanoplastia, protein hair treatments, global hair coloring, and precision cuts for ultra-sleek, healthy hair.",
    badge: "Hair Care Studio",
    image: "/images/service-hair.webp",
    tags: ["Keratin Botox", "Global Highlights", "Precision Cut"],
    gradient: "from-[#221728] via-[#2F1B38] to-[#140D18]",
  },
  {
    id: 4,
    title: "Couture Nail Art & Spa Care",
    subtitle: "Gel Extensions & Organic Pedicures",
    description:
      "Hand-painted nail sculpting, gel extensions, luxury manicures, and relaxing botanical pedicures.",
    badge: "Nail Couture",
    image: "/images/service-nails-front.webp",
    tags: ["Gel Extensions", "Sculpted Nail Art", "Spa Pedicure"],
    gradient: "from-[#1E1228] via-[#2D163D] to-[#110A1B]",
  },
];

export const StackingCardsSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-[#F6F1EC] text-[#2A221E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6F3C]/15 text-[#FF6F3C] text-xs font-semibold tracking-wider uppercase border border-[#FF6F3C]/30">
            <Sparkles className="w-3.5 h-3.5" /> Premier Salon Experiences
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1D1426] tracking-tight leading-tight">
            Signature <span className="italic font-normal text-[#FF6F3C]">Makeover Collections</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A504B] font-normal leading-relaxed">
            Discover our premier beauty experiences, curated with expert precision, authentic products, and 15 years of master cosmetology care.
          </p>
        </div>

        {/* Stacking Cards Wrapper */}
        <StackingCards totalCards={cardsData.length} scaleMultiplier={0.04} className="flex flex-col gap-12 pb-24">
          {cardsData.map((card, index) => (
            <StackingCardItem
              key={card.id}
              index={index}
              topPosition={`${10 + index * 4}%`}
              className="w-full max-w-5xl mx-auto"
            >
              <div
                className={`relative rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl overflow-hidden bg-gradient-to-br ${card.gradient} text-white flex flex-col md:flex-row items-center justify-between gap-8 min-h-[420px]`}
              >
                {/* Background Ambient Glow */}
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FF6F3C]/15 rounded-full blur-3xl pointer-events-none" />

                {/* Left Content */}
                <div className="flex flex-col justify-between h-full space-y-6 max-w-xl z-10 text-left">
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6F3C]/20 text-[#FFB68D] border border-[#FF6F3C]/40 tracking-wider uppercase">
                      {card.badge}
                    </span>

                    <h3 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight text-white leading-tight">
                      {card.title}
                    </h3>

                    <p className="text-sm font-medium text-[#FFB68D]">
                      {card.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {card.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-white/10 text-gray-200 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6F3C] hover:bg-[#E65320] text-white text-sm font-semibold shadow-lg transition-all duration-300 group cursor-pointer">
                      Book This Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right Image Showcase */}
                <div className="relative w-full md:w-80 lg:w-96 aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/20 shrink-0 z-10 group">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </StackingCardItem>
          ))}
        </StackingCards>
      </div>
    </section>
  );
};
