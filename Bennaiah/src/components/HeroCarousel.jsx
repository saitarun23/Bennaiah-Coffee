import React, { useEffect, useState } from 'react';
import { Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/mockData';
import '../styles/HeroCarousel.css';

const AUTO_SCROLL_MS = 4000; // time per slide (4 seconds)

export default function HeroCarousel({ heroSlide, setHeroSlide }) {
  const [isPaused, setIsPaused] = useState(false);
  const currentSlide = HERO_SLIDES[heroSlide];

  // Auto scroll. Pauses on hover/touch, restarts when the slide changes.
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, AUTO_SCROLL_MS);
    return () => clearInterval(timer);
  }, [heroSlide, isPaused, setHeroSlide]);

  return (
    <div
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="hero__frame">
        <img src={currentSlide.image} alt={currentSlide.title} className="hero__image" />

        <div className="hero__overlay">
          <div className="hero__badge">
            <Tag />
            <span>{currentSlide.badge}</span>
          </div>

          <h2 className="hero__title">{currentSlide.title}</h2>
          <p className="hero__subtitle">{currentSlide.subtitle}</p>

          <div className="hero__cta">
            <div className="hero__code">
              <span>Use Promo Code</span>
              <b>{currentSlide.code}</b>
            </div>
            <button className="hero__claim">Claim Now</button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setHeroSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
        className="hero__arrow hero__arrow--left"
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => setHeroSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1))}
        className="hero__arrow hero__arrow--right"
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>

      <div className="hero__dots">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setHeroSlide(index)}
            className={`hero__dot ${heroSlide === index ? 'hero__dot--active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}