import React, { useEffect, useState } from 'react';
import { Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/mockData';

const AUTO_SCROLL_MS = 4000; // time per slide (4 seconds)

export default function HeroCarousel({ heroSlide, setHeroSlide }) {
  const [isPaused, setIsPaused] = useState(false);
  const currentSlide = HERO_SLIDES[heroSlide];

  // Auto scroll: moves to the next slide every few seconds.
  // Pauses while the mouse is over the banner, and the timer
  // restarts whenever the slide changes (including manual clicks).
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, AUTO_SCROLL_MS);

    return () => clearInterval(timer);
  }, [heroSlide, isPaused, setHeroSlide]);

  return (
    <div
      className="relative rounded-3xl overflow-hidden mb-8 group border border-amber-200/70"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-64 sm:h-80 md:h-96 w-full">
        <img
          src={currentSlide.image}
          alt={currentSlide.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />

        {/* Brand gold-brown overlay (replaces the green gradient from the data file) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b2407]/95 via-[#5c3b0b]/90 to-[#8a5a12]/75 flex flex-col justify-center px-8 sm:px-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-3.5 py-1 rounded-full text-xs font-bold w-fit mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>{currentSlide.badge}</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl font-black text-white leading-tight mb-2"
            style={{ marginLeft: '1rem', fontFamily: "'Playfair Display', serif" }}
          >
            {currentSlide.title}
          </h2>

          <p
            className="text-amber-100 text-sm sm:text-base mb-6 font-medium"
            style={{ marginLeft: '1rem' }}
          >
            {currentSlide.subtitle}
          </p>

          <div className="flex items-center gap-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white">
              <span className="text-[10px] block opacity-80 font-bold uppercase tracking-wider">
                Use Promo Code
              </span>
              <span className="font-mono font-extrabold tracking-wider text-sm">
                {currentSlide.code}
              </span>
            </div>
            <button className="bg-white text-[#8a5a12] hover:bg-amber-50 px-6 py-2.5 rounded-xl font-extrabold text-sm transition-colors">
              Claim Now
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <button
        onClick={() => setHeroSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/60 hover:text-[#8a5a12] transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => setHeroSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-md text-white hover:bg-white/60 hover:text-[#8a5a12] transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setHeroSlide(index)}
            className={`h-2 rounded-full transition-all ${
              heroSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}