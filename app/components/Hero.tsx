
'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const luxuryTexts = [
    "Crafting Digital Excellence",
    "Where Code Meets Artistry", 
    "Transforming Visions into Reality"
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02
      });
    };

    if (isClient) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (isClient) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % luxuryTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isClient, luxuryTexts.length]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-stone-50">
      {/* Luxury Geometric Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-20 w-96 h-96 opacity-5"
          style={{
            transform: isClient ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` : 'translate(0px, 0px)',
            background: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-80 h-80 opacity-3"
          style={{
            transform: isClient ? `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` : 'translate(0px, 0px)',
            background: 'linear-gradient(45deg, transparent 40%, #1a1a1a 41%, #1a1a1a 42%, transparent 43%)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Floating Luxury Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-20 bg-gradient-to-b from-amber-400/20 to-transparent animate-pulse" 
             style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute bottom-1/3 right-16 w-1 h-32 bg-gradient-to-t from-stone-400/20 to-transparent animate-pulse" 
             style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-1/4 w-px h-24 bg-gradient-to-b from-slate-300/30 to-transparent animate-pulse" 
             style={{ animationDelay: '2s', animationDuration: '5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Luxury Portrait */}
        <div className="mb-12 relative">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-transparent to-stone-400/20 rounded-full blur-lg" />
            <img
              src="https://readdy.ai/api/search-image?query=Elegant%20professional%20portrait%20of%20a%20sophisticated%20female%20developer%20in%20luxurious%20modern%20office%20setting%2C%20wearing%20minimalist%20high-end%20clothing%2C%20soft%20premium%20lighting%2C%20marble%20and%20gold%20accents%20in%20background%2C%20ultra-high%20fashion%20photography%20style%2C%20editorial%20luxury%20aesthetic&width=400&height=400&seq=luxury-portrait&orientation=squarish"
              alt="Nurana Jafarova"
              className="relative w-40 h-40 rounded-full mx-auto border-4 border-white/80 shadow-2xl object-top backdrop-blur-sm"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-400 rounded-full border-4 border-white animate-pulse" />
          </div>
        </div>
        
        {/* Luxury Typography */}
        <div className="mb-4">
          <h1 className="text-7xl md:text-8xl font-thin mb-4 text-slate-900 tracking-wider">
            NURANA
          </h1>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-amber-400" />
            <span className="mx-4 text-sm font-medium text-slate-600 tracking-[0.3em] uppercase">
              JAFAROVA
            </span>
            <div className="w-16 h-px bg-amber-400" />
          </div>
        </div>
        
        {/* Dynamic Luxury Tagline - Fixed for SSR */}
        <div className="h-16 mb-12 flex items-center justify-center">
          {isClient ? (
            <p className="text-2xl md:text-3xl text-slate-700 font-light tracking-wide italic transition-all duration-1000">
              {luxuryTexts[currentTextIndex]}
            </p>
          ) : (
            <p className="text-2xl md:text-3xl text-slate-700 font-light tracking-wide italic">
              {luxuryTexts[0]}
            </p>
          )}
        </div>
        
        {/* Luxury CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button 
            onClick={scrollToProjects}
            className="group relative px-12 py-4 bg-slate-900 text-white font-medium tracking-wider uppercase text-sm transition-all duration-500 hover:bg-amber-400 hover:text-slate-900 whitespace-nowrap cursor-pointer"
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>
          <button 
            onClick={scrollToContact}
            className="px-12 py-4 border border-slate-300 text-slate-700 font-medium tracking-wider uppercase text-sm hover:border-amber-400 hover:text-amber-400 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Luxury Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-xs text-slate-400 mb-4 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-slate-300 to-transparent" />
        </div>
      </div>

      {/* Luxury Corner Accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-amber-400/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-amber-400/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-amber-400/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-amber-400/30" />
    </section>
  );
}
