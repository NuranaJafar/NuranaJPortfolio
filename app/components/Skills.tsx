'use client';

import { useState, useEffect } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set<string>());
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimatedSkills(new Set(['html', 'css', 'javascript', 'react', 'typescript', 'nextjs']));
          }, 800);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveCategory((prev) => (prev + 1) % 3);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const luxurySkillCategories = [
    {
      title: 'Technical Mastery',
      subtitle: 'Core Technologies',
      icon: 'ri-code-s-slash-line',
      color: 'amber',
      skills: [
        { name: 'HTML5', level: 90, icon: 'ri-html5-line', id: 'html', desc: 'Semantic markup excellence' },
        { name: 'CSS3', level: 85, icon: 'ri-css3-line', id: 'css', desc: 'Advanced styling & animations' },
        { name: 'JavaScript', level: 80, icon: 'ri-javascript-line', id: 'javascript', desc: 'Modern ES6+ development' }
      ]
    },
    {
      title: 'Framework Expertise',
      subtitle: 'Modern Development',
      icon: 'ri-reactjs-line',
      color: 'slate',
      skills: [
        { name: 'React', level: 75, icon: 'ri-reactjs-line', id: 'react', desc: 'Component-based architecture' },
        { name: 'TypeScript', level: 70, icon: 'ri-file-code-line', id: 'typescript', desc: 'Type-safe development' },
        { name: 'Next.js', level: 65, icon: 'ri-nextjs-line', id: 'nextjs', desc: 'Full-stack React framework' }
      ]
    },
    {
      title: 'Design Systems',
      subtitle: 'Visual Excellence',
      icon: 'ri-palette-line',
      color: 'stone',
      skills: [
        { name: 'UI/UX Design', level: 80, icon: 'ri-layout-line', id: 'design', desc: 'User-centered design principles' },
        { name: 'Figma', level: 75, icon: 'ri-palette-line', id: 'figma', desc: 'Professional design tools' },
        { name: 'Design Systems', level: 70, icon: 'ri-grid-line', id: 'systems', desc: 'Scalable design frameworks' }
      ]
    }
  ];

  const getColorClasses = (color: string, active: boolean) => {
    const colors = {
      amber: {
        bg: active ? 'bg-amber-400' : 'bg-amber-100',
        text: active ? 'text-slate-900' : 'text-amber-600',
        border: 'border-amber-200',
        gradient: 'from-amber-400 to-amber-500'
      },
      slate: {
        bg: active ? 'bg-slate-700' : 'bg-slate-100',
        text: active ? 'text-white' : 'text-slate-600',
        border: 'border-slate-200',
        gradient: 'from-slate-600 to-slate-700'
      },
      stone: {
        bg: active ? 'bg-stone-600' : 'bg-stone-100',
        text: active ? 'text-white' : 'text-stone-600',
        border: 'border-stone-200',
        gradient: 'from-stone-500 to-stone-600'
      }
    };
    return colors[color as keyof typeof colors] || colors.amber;
  };

  return (
    <section id="skills-section" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Luxury Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-amber-400" />
            <span className="mx-6 text-sm font-medium text-slate-600 tracking-[0.3em] uppercase">
              Expertise
            </span>
            <div className="w-16 h-px bg-amber-400" />
          </div>
          <h2 className={`text-5xl md:text-6xl font-thin text-slate-900 tracking-wide mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Technical Artistry
          </h2>
          <p className={`text-xl text-slate-600 font-light max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            A refined blend of technical precision and creative vision, continuously evolved through dedication to excellence in digital craftsmanship.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {luxurySkillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color, activeCategory === categoryIndex);
            return (
              <div
                key={category.title}
                className={`bg-white/80 backdrop-blur-sm border border-slate-200/50 p-10 transition-all duration-700 hover:shadow-2xl group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${
                  activeCategory === categoryIndex ? 'scale-105 shadow-2xl' : ''
                }`}
                style={{ animationDelay: `${600 + categoryIndex * 200}ms` }}
              >
                {/* Category Header */}
                <div className="text-center mb-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${colors.bg} ${colors.border} border-2`}>
                    <div className={`w-10 h-10 flex items-center justify-center ${colors.text}`}>
                      <i className={`${category.icon} text-2xl`}></i>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-slate-800 mb-2 tracking-wide">{category.title}</h3>
                  <p className="text-sm text-slate-500 tracking-wider uppercase font-medium">{category.subtitle}</p>
                </div>

                {/* Skills List */}
                <div className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="relative group/skill">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 flex items-center justify-center mr-4 rounded-lg ${colors.bg} ${colors.text} transition-all duration-300`}>
                            <i className={`${skill.icon} text-sm`}></i>
                          </div>
                          <div>
                            <span className="font-medium text-slate-700 tracking-wide">{skill.name}</span>
                            <p className="text-xs text-slate-500 font-light">{skill.desc}</p>
                          </div>
                        </div>
                        <span className={`text-sm font-medium ${colors.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`absolute left-0 top-0 h-full bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-1500 ease-out`}
                          style={{
                            width: animatedSkills.has(skill.id) ? `${skill.level}%` : '0%',
                            transitionDelay: `${1000 + categoryIndex * 300 + skillIndex * 200}ms`
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Footer */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="text-center">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase ${colors.bg} ${colors.text} transition-all duration-300`}>
                      <div className="w-2 h-2 rounded-full bg-current mr-2 animate-pulse" />
                      Continuously Evolving
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Luxury Philosophy Statement */}
        <div className={`bg-gradient-to-r from-amber-50 via-white to-stone-50 border border-amber-200/50 p-12 text-center transition-all duration-1000 delay-1200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-8 bg-gradient-to-r from-amber-400 to-stone-400 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 flex items-center justify-center text-white">
                <i className="ri-lightbulb-line text-2xl"></i>
              </div>
            </div>
            <h3 className="text-3xl font-light text-slate-800 mb-6 tracking-wide">
              Philosophy of Continuous Excellence
            </h3>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
              In the realm of digital artistry, mastery is not a destination but a journey of continuous refinement. 
              Each skill represents not just technical capability, but a commitment to pushing the boundaries of what's possible 
              in the intersection of technology and luxury design.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-slate-500 font-medium tracking-wider uppercase">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                Technical Precision
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                Creative Vision
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-stone-400 rounded-full mr-3"></div>
                Continuous Growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}