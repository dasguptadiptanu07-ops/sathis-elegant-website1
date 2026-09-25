"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Review {
  name: string;
  avatar?: string;
  initials?: string;
  gradient?: string;
  tag: string;
  text: string;
}

const row1Reviews: Review[] = [
  {
    name: "Payel Das",
    avatar: "/images/avatar-payel.webp",
    tag: "Party Makeup • Hair • Saree Draping",
    text: "“I did party makeup, hair and saree draping for wedding day and reception and am very satisfied... got compliments for the makeup.. you can trust her work.”",
  },
  {
    name: "Debasri Das",
    avatar: "/images/avatar-debasri.webp",
    tag: "Hair Treatment • Hair Colour • Hydra Facial",
    text: "“I have a amazing experience, I'm doing here my hair treatment, colour & hydra facial.....it's just waaooo. Thank you Sathi Madam...I'm visit again...& I must say you also visit Sathi's Elegant.”",
  },
  {
    name: "Soumi Bhanja",
    avatar: "/images/avatar-soumi.webp",
    tag: "Haircut • Styling • Facial",
    text: "“I had a wonderful experience at Sathi's Elegant Beauty Zone. I got a haircut, style, and facial, and I was very impressed with the results. The staff is very friendly and professional, and they made sure I was comfortable and happy.”",
  },
  {
    name: "Rohan Roy",
    avatar: "/images/avatar-rohan.webp",
    tag: "Hair Smoothening • Hair Transformation",
    text: "“I recently got my hair smoothened and I’m really happy with the results! The texture feels silky and manageable, and it gave me a confident look. The thing which I was looking for.”",
  },
  {
    name: "Poushali Das",
    avatar: "/images/avatar-poushali.webp",
    tag: "Professional Service • Authentic Products • Customer Care",
    text: "“Sathi's Elegant Beauty zone is one of the best parlour in Agartala. I loved the services. The staff are cooperative and true professional. They use authentic products. The owner, Sathi is a very nice and helpful. I am truly satisfied for the service.”",
  },
];

const row2Reviews: Review[] = [
  {
    name: "Avik",
    avatar: "/images/avatar-avik.webp",
    tag: "Hair Straightening • Hair Transformation",
    text: "“My wife recently visited Sathi's Elegant Beauty Zone for a hair straightening treatment, and the results were truly remarkable. Thank you so much sis for making my wife's hair so beautiful and for such a nice treatment.”",
  },
  {
    name: "Joysree Debnath",
    avatar: "/images/avatar-joysree.webp",
    tag: "Protein Hair Treatment • Haircut • Silky & Shiny Hair",
    text: "“I have found this studio through facebook ad....and I have done my protein hair treatment and hair cut 3 days ago....i am so satisfied with the result ..my hair became silky and shiny ....i have a great experience.”",
  },
  {
    name: "Himani Chakraborty",
    initials: "HC",
    gradient: "from-[#4A154B] to-[#FF6F3C]",
    tag: "First Visit • Hairstyling • Friendly Service",
    text: "“I went there for the first time today and I really liked their service. Polite behaviour & I really liked my new hair style. Thank u mam.”",
  },
  {
    name: "Kunjalata Saikia",
    initials: "KS",
    gradient: "from-[#31103F] to-[#E65320]",
    tag: "Manicure • Pedicure • Personalized Advice",
    text: "“My first visit to this place was wonderful. I got an mani and pedi. At first she checked my skin n advised which product would be better for me.”",
  },
  {
    name: "Shyamagree Deb",
    initials: "SD",
    gradient: "from-[#753404] to-[#FF6F3C]",
    tag: "First Visit • Personalized Care • Customer Satisfaction",
    text: "“It’s was my 1st visit here..Really the effort she gave to satisfy me was remarkable that too on 1st visit..This place is worth the money…Trust me she became my personal favourite❤️”",
  },
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="group/card relative w-[330px] sm:w-[370px] p-6 shrink-0 bg-[#1D1426] hover:bg-[#23192f] border border-white/10 hover:border-[#FF6F3C]/60 rounded-2xl shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {review.avatar ? (
            <img
              src={review.avatar}
              alt={review.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#FF6F3C]/50"
            />
          ) : (
            <div
              className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center text-[#FCEEE9] font-bold text-xs ring-2 ring-[#FF6F3C]/50 shadow-inner`}
            >
              {review.initials}
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#FCEEE9]">
              {review.name}
            </span>
            <span className="text-[11px] font-medium text-[#FFB68D] flex items-center gap-1">
              ✓ Verified Client
            </span>
          </div>
        </div>
        <div className="flex text-[#FFB800] text-xs gap-0.5" aria-label="5 stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800] stroke-none" />
          ))}
        </div>
      </div>

      <div>
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium bg-[#FF6F3C]/15 text-[#FFB68D] border border-[#FF6F3C]/30">
          {review.tag}
        </span>
      </div>

      <p className="text-sm text-[#E2D9E8] leading-relaxed font-normal">
        {review.text}
      </p>
    </div>
  </div>
);

export const TestimonialsSection: React.FC = () => {
  const duplicatedRow1 = [...row1Reviews, ...row1Reviews, ...row1Reviews];
  const duplicatedRow2 = [...row2Reviews, ...row2Reviews, ...row2Reviews];

  return (
    <section id="reviews" className="relative w-full py-20 bg-[#F6F1EC] text-[#2A221E] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-14 space-y-3 px-4 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1D1426] tracking-tight leading-tight">
            Real Stories,{" "}
            <span className="italic font-normal text-[#FF6F3C] font-serif">
              Radiant Results
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A504B] font-normal leading-relaxed">
            Authentic experiences and transformations from our cherished clients at
            Sathi's Elegant Beauty Zone.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full flex flex-col gap-6 overflow-hidden">
          {/* Row 1: Forward Marquee */}
          <div className="flex w-full overflow-hidden group">
            <motion.div
              className="flex gap-5 w-max group-hover:[animation-play-state:paused]"
              animate={{
                x: ["0%", "-50%"],
                transition: {
                  ease: "linear",
                  duration: 40,
                  repeat: Infinity,
                },
              }}
            >
              {duplicatedRow1.map((review, index) => (
                <ReviewCard key={`row1-${index}`} review={review} />
              ))}
            </motion.div>
          </div>

          {/* Row 2: Reverse Marquee */}
          <div className="flex w-full overflow-hidden group">
            <motion.div
              className="flex gap-5 w-max group-hover:[animation-play-state:paused]"
              animate={{
                x: ["-50%", "0%"],
                transition: {
                  ease: "linear",
                  duration: 45,
                  repeat: Infinity,
                },
              }}
            >
              {duplicatedRow2.map((review, index) => (
                <ReviewCard key={`row2-${index}`} review={review} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
