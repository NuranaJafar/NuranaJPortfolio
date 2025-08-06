'use client';

import { useState, useEffect } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const luxuryProjects = [
    {
      title: 'Ethereal Commerce',
      subtitle: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'A sophisticated shopping experience featuring minimalist design principles, seamless user interactions, and premium aesthetic sensibilities.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      image: 'https://readdy.ai/api/search-image?query=Luxury%20e-commerce%20website%20interface%20on%20premium%20laptop%2C%20minimalist%20product%20layout%20with%20high-end%20fashion%20items%2C%20marble%20background%2C%20gold%20accents%2C%20sophisticated%20typography%2C%20clean%20white%20space%2C%20premium%20web%20design%20aesthetic&width=600&height=400&seq=ethereal-commerce&orientation=landscape',
      status: 'Featured',
      year: '2024'
    },
    {
      title: 'Portfolio Artisan',
      subtitle: 'Personal Branding',
      category: 'Brand Identity',
      description: 'An artistic showcase platform that seamlessly blends personal narrative with professional excellence through elegant visual storytelling.',
      tech: ['Next.js', 'Framer Motion', 'GSAP'],
      image: 'https://readdy.ai/api/search-image?query=Elegant%20creative%20portfolio%20website%20mockup%20on%20MacBook%20Pro%2C%20artistic%20layout%20with%20sophisticated%20typography%2C%20gallery%20presentations%2C%20soft%20luxury%20lighting%2C%20marble%20desk%20setup%2C%20premium%20web%20design%20showcase&width=600&height=400&seq=portfolio-artisan&orientation=landscape',
      status: 'Live',
      year: '2024'
    },
    {
      title: 'Productivity Luxe',
      subtitle: 'Task Management',
      category: 'Web Application',
      description: 'A premium productivity suite combining intuitive workflows with luxurious interface design for the discerning professional.',
      tech: ['Vue.js', 'Node.js', 'MongoDB'],
      image: 'https://readdy.ai/api/search-image?query=Premium%20task%20management%20application%20interface%20on%20high-end%20desktop%20monitor%2C%20elegant%20kanban%20boards%20with%20gold%20accents%2C%20sophisticated%20dark%20theme%2C%20luxury%20office%20environment%2C%20professional%20productivity%20app%20design&width=600&height=400&seq=productivity-luxe&orientation=landscape',
      status: 'Featured',
      year: '2024'
    },
    {
      title: 'Climate Couture',
      subtitle: 'Weather Dashboard',
      category: 'Data Visualization',
      description: 'Weather forecasting reimagined through the lens of luxury design, featuring immersive data visualization and premium user experience.',
      tech: ['React', 'D3.js', 'OpenWeather API'],
      image: 'https://readdy.ai/api/search-image?query=Sophisticated%20weather%20dashboard%20application%20on%20premium%20tablet%2C%20elegant%20weather%20data%20visualization%20with%20gold%20and%20silver%20accents%2C%20luxury%20interface%20design%2C%20marble%20surface%2C%20high-end%20aesthetic&width=600&height=400&seq=climate-couture&orientation=landscape',
      status: 'Live',
      year: '2025'
    },
    {
      title: 'Academy Elite',
      subtitle: 'Learning Platform',
      category: 'Education',
      description: 'An exclusive educational platform designed for premium learning experiences, featuring sophisticated course management and progress tracking.',
      tech: ['React', 'GraphQL', 'PostgreSQL'],
      image: 'https://readdy.ai/api/search-image?query=Luxury%20online%20learning%20platform%20interface%20on%20premium%20laptop%2C%20sophisticated%20course%20cards%20with%20elegant%20typography%2C%20gold%20accents%2C%20marble%20background%2C%20high-end%20educational%20website%20design&width=600&height=400&seq=academy-elite&orientation=landscape',
      status: 'Development',
      year: '2025'
    },
    {
      title: 'Gastronomy Grace',
      subtitle: 'Restaurant Experience',
      category: 'Hospitality',
      description: 'A refined digital presence for fine dining establishments, showcasing culinary artistry through sophisticated web design.',
      tech: ['Gatsby', 'Contentful', 'Stripe'],
      image: 'https://readdy.ai/api/search-image?query=Elegant%20restaurant%20website%20mockup%20on%20MacBook%2C%20sophisticated%20food%20photography%20layout%2C%20fine%20dining%20presentation%2C%20luxury%20hospitality%20web%20design%2C%20marble%20and%20gold%20accents%2C%20premium%20aesthetic&width=600&height=400&seq=gastronomy-grace&orientation=landscape',
      status: 'Featured',
      year: '2024'
    }
  ];

  const filters = ['All', 'Web Application', 'Brand Identity', 'Data Visualization', 'Education', 'Hospitality'];

  const filteredProjects = activeFilter === 'All' 
    ? luxuryProjects 
    : luxuryProjects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    const colors = {
      'Featured': 'bg-amber-100 text-amber-700 border-amber-200',
      'Live': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'Development': 'bg-blue-100 text-blue-700 border-blue-200'
    };
    return colors[status as keyof typeof colors] || colors.Featured;
  };

  return (
    <section id="projects-section" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Luxury Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-amber-400" />
            <span className="mx-6 text-sm font-medium text-slate-600 tracking-[0.3em] uppercase">
              Portfolio
            </span>
            <div className="w-16 h-px bg-amber-400" />
          </div>
          <h2 className={`text-5xl md:text-6xl font-thin text-slate-900 tracking-wide mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Selected Works
          </h2>
          <p className={`text-xl text-slate-600 font-light max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            A curated collection of digital experiences that exemplify the marriage of technical excellence and luxury design principles.
          </p>
        </div>

        {/* Luxury Filter Navigation */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 border whitespace-nowrap cursor-pointer ${
                activeFilter === filter
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-amber-400 hover:text-amber-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Luxury Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white border border-slate-200/50 overflow-hidden hover:shadow-2xl transition-all duration-700 cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${600 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-white">
                    <div className="flex gap-3 mb-4">
                      <button className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-slate-900 transition-all duration-300 whitespace-nowrap cursor-pointer">
                        View Project
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-slate-900 transition-all duration-300 cursor-pointer">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-external-link-line"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 text-xs font-medium border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-slate-500 tracking-widest uppercase">
                    {project.year} • {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-light text-slate-800 mb-2 group-hover:text-amber-600 transition-colors duration-300 tracking-wide">
                  {project.title}
                </h3>
                <h4 className="text-lg text-slate-600 mb-4 font-light italic">
                  {project.subtitle}
                </h4>
                <p className="text-slate-600 font-light leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium tracking-wider uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Lines */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
            </div>
          ))}
        </div>

        {/* Luxury CTA */}
        <div className="text-center">
          <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <button className="group relative px-12 py-4 bg-transparent border-2 border-slate-300 text-slate-700 font-medium tracking-wider uppercase text-sm overflow-hidden hover:border-amber-400 transition-all duration-500 whitespace-nowrap cursor-pointer">
              <span className="relative z-10 group-hover:text-amber-600 transition-colors duration-300">
                Explore All Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50/0 via-amber-50/50 to-amber-50/0 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <p className="text-sm text-slate-500 mt-4 font-light tracking-wide">
              Each project represents a commitment to excellence in digital craftsmanship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}