'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = 'מסעדה מוביל בישראל',
  subtitle = 'חווית לקוח מושלמת בכל ביקור',
  ctaText = 'קבע תור עכשיו',
}) => {
  // State for animation triggers
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations after component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      dir="rtl" 
      className="relative h-screen w-full overflow-hidden"
      aria-label="אזור כותרת ראשית"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/restaurant-atmosphere.jpg" // Replace with actual image path
          alt="אווירת מסעדה" 
          layout="fill"
          objectFit="cover"
          priority
          className="transition-transform duration-10000 ease-in-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      </div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div 
          className={`
            max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-8 sm:p-12
            backdrop-blur-md transition-all duration-1000 ease-in-out
            shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          {/* Restaurant Name */}
          <div className="mb-2 text-center">
            <span className={`
              inline-block rounded-full bg-gradient-to-l from-[#9B786F]/80 to-[#FF6B6B]/80
              px-4 py-1 text-lg font-medium text-white backdrop-blur-sm
              border border-white/10 shadow-sm
              ${isVisible ? 'animate-fadeIn' : 'opacity-0'}
            `}>
              מסעדה אלפא
            </span>
          </div>

          {/* Main Headline */}
          <h1 
            className={`
              mb-4 bg-gradient-to-l from-white to-white/90 bg-clip-text text-center
              font-serif text-4xl font-bold leading-tight tracking-tight text-transparent
              sm:text-5xl md:text-6xl
              transition-all duration-1000 delay-300
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
          >
            {title}
          </h1>

          {/* Subheadline */}
          <p 
            className={`
              mb-8 text-center font-medium text-white/90 sm:text-xl md:text-2xl
              transition-all duration-1000 delay-500
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
          >
            {subtitle}
          </p>

          {/* CTA Button */}
          <div 
            className={`
              flex justify-center
              transition-all duration-1000 delay-700
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
          >
            <button
              className="
                group relative overflow-hidden rounded-full bg-gradient-to-l from-[#FF6B6B] to-[#9B786F]
                px-8 py-3 text-lg font-bold text-white shadow-lg
                transition-all duration-300 hover:shadow-xl
                border border-white/20
              "
              aria-label="לחץ כדי לקבוע תור"
            >
              {/* Button background animation */}
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#FF6B6B]/80 to-[#9B786F]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              
              {/* Button text */}
              <span className="relative">{ctaText}</span>
              
              {/* Button shine effect */}
              <span className="absolute inset-0 -translate-x-full skew-x-12 transform bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#FF6B6B]/20 blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#9B786F]/20 blur-3xl"></div>
        </div>
      </div>
      
      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;