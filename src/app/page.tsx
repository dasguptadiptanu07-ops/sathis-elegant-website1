import React from "react";
import Header17 from "@/components/Header";
import { AnimatedMarqueeHero } from "@/components/AnimatedMarqueeHero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StackingCardsSection } from "@/components/StackingCardsSection";

export default function Home() {
  const images = [
    "/images/makeup.webp",
    "/images/skincare.webp",
    "/images/nails.webp",
    "/images/hairwash-1.webp",
    "/images/hairwash-2.webp",
    "/images/bridal-1.webp",
    "/images/bridal-2.webp",
    "/images/hair-color.webp",
    "/images/hand-care.webp",
    "/images/hair-styling.webp",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header17 />
      <AnimatedMarqueeHero
        tagline="✨ Luxury Beauty & Couture Makeover Studio"
        title="Transform Your Look with Royal Elegance"
        description="From traditional bridal transformations and glamorous makeup art to couture hair styling, relaxing spas, and luxury nail care."
        ctaText="Explore Services & Book"
        images={images}
      />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <StackingCardsSection />
    </main>
  );
}







