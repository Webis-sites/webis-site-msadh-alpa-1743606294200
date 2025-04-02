'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple fade-in animation when the section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`relative py-16 px-4 md:px-8 lg:px-16 overflow-hidden transition-all duration-1000 ease-out opacity-0 translate-y-10 ${className}`}
      dir="rtl"
      aria-labelledby="about-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/10 to-[#9B786F]/20 -z-10" />
      
      {/* Glassmorphism container */}
      <div className="max-w-6xl mx-auto bg-white/30 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/30 shadow-lg relative overflow-hidden">
        {/* Decorative circle elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#9B786F]/20 backdrop-blur-sm" />
        <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-[#FF6B6B]/20 backdrop-blur-sm" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image container */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/50 shadow-xl transition-transform duration-500 hover:scale-105">
              <Image
                src="/restaurant-quality.svg" 
                alt="איכות ומקצועיות במסעדה אלפא"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 16rem, 20rem"
                // Fallback image if the SVG doesn't exist
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/400?text=מסעדה+אלפא';
                }}
              />
            </div>
          </div>
          
          {/* Text content */}
          <div className="w-full lg:w-3/5 text-right">
            <h2 
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#9B786F] font-playful"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            >
              אודות מסעדה אלפא
            </h2>
            
            <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-800">
              אנחנו מסעדה מוביל בתחום השירותים עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-[-8px]">
                <div className="w-12 h-12 rounded-full bg-[#9B786F]/20 backdrop-blur-sm flex items-center justify-center border border-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#9B786F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-800">מעל 15 שנות ניסיון בענף המסעדנות</p>
              </div>
              
              <div className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-[-8px]">
                <div className="w-12 h-12 rounded-full bg-[#9B786F]/20 backdrop-blur-sm flex items-center justify-center border border-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#9B786F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-800">מגוון תפריטים עשיר ואיכותי</p>
              </div>
              
              <div className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-[-8px]">
                <div className="w-12 h-12 rounded-full bg-[#9B786F]/20 backdrop-blur-sm flex items-center justify-center border border-white/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#9B786F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-800">שירות אדיב ומקצועי</p>
              </div>
            </div>
            
            <button 
              className="mt-8 px-8 py-3 bg-[#9B786F] text-white rounded-full hover:bg-[#FF6B6B] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium"
              aria-label="קרא עוד על מסעדה אלפא"
            >
              קרא עוד
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;