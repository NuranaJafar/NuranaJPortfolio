'use client';

import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveTimeline((prev) => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const luxuryMilestones = [
    {
      year: '2023',
      title: 'Academic Foundation',
      subtitle: 'Odlar Yurdu University',
      description: 'Began cultivating technical excellence in a prestigious academic environment',
      icon: 'ri-graduation-cap-line',
      color: 'amber'
    },
    {
      year: '2024',
      title: 'Digital Awakening',
      subtitle: 'First Lines of Code',
      description: 'Discovered the artistry within algorithms, transforming curiosity into expertise',
      icon: 'ri-code-s-slash-line',
      color: 'stone'
    },
    {
      year: '2025',
      title: 'Creative Mastery',
      subtitle: 'Real-World Applications',
      description: 'Crafting sophisticated digital experiences while expanding academic pursuits',
      icon: 'ri-palette-line',
      color: 'slate'
    },
    {
      year: 'Future',
      title: 'Visionary Leadership',
      subtitle: 'Full-Stack Artisan',
      description: 'Pioneering the intersection of technology and luxury digital experiences',
      icon: 'ri-rocket-line',
      color: 'amber'
    }
  ];

  const getColorClasses = (color: string, active: boolean) => {
    const colors = {
      amber: active ? 'bg-amber-400 text-slate-900' : 'bg-amber-100 text-amber-600',
      stone: active ? 'bg-stone-600 text-white' : 'bg-stone-100 text-stone-600',
      slate: active ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600'
    };
    return colors[color as keyof typeof colors] || colors.amber;
  };

  return (
    <section id="about-section" className="py-24 px-6 bg-gradient-to-b from-stone-50 to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Luxury Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-amber-400" />
            <span className="mx-6 text-sm font-medium text-slate-600 tracking-[0.3em] uppercase">
              About
            </span>
            <div className="w-16 h-px bg-amber-400" />
          </div>
          <h2 className={`text-5xl md:text-6xl font-thin text-slate-900 tracking-wide transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            The Journey
          </h2>
          <p className={`text-xl text-slate-600 font-light mt-6 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            From curiosity to mastery, every line of code tells a story of dedication, creativity, and the pursuit of digital excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Luxury Story Card */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm p-12 shadow-2xl border border-slate-200/50 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-stone-400 to-slate-400" />
              
              <div className="mb-8">
                <img
                  src="https://readdy.ai/api/search-image?query=Elegant%20workspace%20setup%20with%20luxury%20computer%2C%20marble%20desk%2C%20gold%20accents%2C%20minimalist%20design%2C%20premium%20office%20environment%2C%20sophisticated%20lighting%2C%20modern%20technology%20blended%20with%20classical%20elements&width=600&height=300&seq=luxury-workspace&orientation=landscape"
                  alt="Luxury Workspace"
                  className="w-full h-48 object-cover object-top mb-6 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <h3 className="text-3xl font-light text-slate-800 mb-8 tracking-wide">Philosophy & Vision</h3>
              
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p>
                  In 2024, I embarked upon a transformative journey into the realm of software development, approaching each challenge with the precision of a craftsperson and the vision of an artist.
                </p>
                <p>
                  What began as intellectual curiosity evolved into a passionate pursuit of creating digital experiences that seamlessly blend functionality with aesthetic sophistication.
                </p>
                <p>
                  Today, I continue to refine my craft at University of the People, constantly exploring the intersection of technology, design, and human experience in the digital landscape.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between text-sm text-slate-500 font-medium tracking-wider">
                  <span>EXPERTISE AREAS</span>
                  <span>CONTINUOUS LEARNING</span>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Timeline */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-stone-400 to-slate-400" />
              
              {luxuryMilestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-start mb-12 transition-all duration-500 ${
                    activeTimeline === index ? 'transform scale-105' : ''
                  }`}
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-500 ${
                    getColorClasses(milestone.color, activeTimeline === index)
                  }`}>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className={milestone.icon}></i>
                    </div>
                  </div>
                  
                  <div className="ml-8 bg-white/60 backdrop-blur-sm p-8 flex-1 border border-slate-200/50 hover:shadow-xl transition-all duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-slate-500 tracking-widest uppercase">
                        {milestone.year}
                      </span>
                      <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        activeTimeline === index ? 'bg-amber-400' : 'bg-slate-300'
                      }`} />
                    </div>
                    
                    <h4 className="text-2xl font-light text-slate-800 mb-2 tracking-wide">
                      {milestone.title}
                    </h4>
                    <h5 className="text-lg text-amber-600 mb-4 font-medium">
                      {milestone.subtitle}
                    </h5>
                    <p className="text-slate-600 font-light leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Luxury Stats */}
        <div className={`mt-20 grid md:grid-cols-4 gap-8 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {[
            { number: '2+', label: 'Years of Learning', desc: 'Continuous Growth' },
            { number: '15+', label: 'Projects Crafted', desc: 'Digital Excellence' },
            { number: '3', label: 'Tech Stacks', desc: 'Mastered Skills' },
            { number: '∞', label: 'Creative Vision', desc: 'Limitless Potential' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/60 backdrop-blur-sm p-8 border border-slate-200/50">
              <div className="text-4xl font-thin text-slate-800 mb-2">{stat.number}</div>
              <div className="text-sm font-medium text-slate-600 tracking-wider uppercase mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500 italic">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}