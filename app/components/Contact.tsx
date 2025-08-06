'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Message must be less than 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const luxuryContactMethods = [
    {
      title: 'Direct Communication',
      subtitle: 'Personal Consultation',
      icon: 'ri-phone-line',
      description: 'Schedule a premium consultation to discuss your vision and requirements in detail.',
      action: 'Schedule Call',
      color: 'amber'
    },
    {
      title: 'Professional Email',
      subtitle: 'Written Correspondence',
      icon: 'ri-mail-line',
      description: 'Reach out via professional email for detailed project discussions and proposals.',
      action: 'Send Email',
      color: 'slate'
    },
    {
      title: 'Portfolio Review',
      subtitle: 'Work Showcase',
      icon: 'ri-folder-line',
      description: 'Request a comprehensive portfolio review and project case study presentation.',
      action: 'View Portfolio',
      color: 'stone'
    }
  ];

  const socialConnections = [
    {
      name: 'LinkedIn',
      icon: 'ri-linkedin-line',
      href: '#',
      color: 'from-blue-600 to-blue-700',
      desc: 'Professional Network'
    },
    {
      name: 'GitHub',
      icon: 'ri-github-line',
      href: '#',
      color: 'from-slate-700 to-slate-800',
      desc: 'Code Repository'
    },
    {
      name: 'Behance',
      icon: 'ri-behance-line',
      href: '#',
      color: 'from-purple-600 to-purple-700',
      desc: 'Design Portfolio'
    },
    {
      name: 'Dribbble',
      icon: 'ri-dribbble-line',
      href: '#',
      color: 'from-pink-500 to-pink-600',
      desc: 'Creative Showcase'
    }
  ];

  return (
    <section id="contact-section" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Luxury Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-amber-400" />
            <span className="mx-6 text-sm font-medium text-slate-600 tracking-[0.3em] uppercase">
              Connect
            </span>
            <div className="w-16 h-px bg-amber-400" />
          </div>
          <h2 className={`text-5xl md:text-6xl font-thin text-slate-900 tracking-wide mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Begin the Conversation
          </h2>
          <p className={`text-xl text-slate-600 font-light max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Transform your digital vision into reality through collaborative excellence. Every great project begins with a meaningful conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Luxury Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 p-12 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-slate-400 to-stone-400" />
              
              <h3 className="text-3xl font-light text-slate-800 mb-8 tracking-wide">Project Inquiry</h3>
              
              <form id="luxury-contact-form" onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-6 py-4 bg-slate-50 border-b-2 ${errors.name ? 'border-red-300' : 'border-slate-200'} focus:outline-none focus:border-amber-400 transition-all duration-300 font-light text-slate-800`}
                      placeholder="Full Name *"
                    />
                    {errors.name && <span className="text-red-500 text-sm mt-2 block font-light">{errors.name}</span>}
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-6 py-4 bg-slate-50 border-b-2 ${errors.email ? 'border-red-300' : 'border-slate-200'} focus:outline-none focus:border-amber-400 transition-all duration-300 font-light text-slate-800`}
                      placeholder="Email Address *"
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-2 block font-light">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-slate-50 border-b-2 border-slate-200 focus:outline-none focus:border-amber-400 transition-all duration-300 font-light text-slate-800"
                      placeholder="Company / Organization"
                    />
                  </div>

                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-slate-50 border-b-2 border-slate-200 focus:outline-none focus:border-amber-400 transition-all duration-300 font-light text-slate-800 pr-8 appearance-none cursor-pointer"
                    >
                      <option value="">Project Budget Range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-slate-400"></i>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    maxLength={500}
                    className={`w-full px-6 py-4 bg-slate-50 border-b-2 ${errors.message ? 'border-red-300' : 'border-slate-200'} focus:outline-none focus:border-amber-400 transition-all duration-300 resize-none font-light text-slate-800`}
                    placeholder="Tell us about your project vision... *"
                  />
                  <div className="absolute right-6 bottom-4 text-xs text-slate-400 font-light">
                    {formData.message.length}/500
                  </div>
                  {errors.message && <span className="text-red-500 text-sm mt-2 block font-light">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-12 py-4 bg-slate-900 text-white font-medium tracking-wider uppercase text-sm transition-all duration-500 hover:bg-amber-400 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Processing...
                    </div>
                  ) : (
                    'Initiate Project Discussion'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Luxury Contact Information */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="space-y-8">
              {/* Contact Methods */}
              {luxuryContactMethods.map((method, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm border border-slate-200/50 p-8 hover:shadow-xl transition-all duration-500 group">
                  <div className="flex items-start">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-6 transition-all duration-300 ${
                      method.color === 'amber' ? 'bg-amber-100 group-hover:bg-amber-400' :
                      method.color === 'slate' ? 'bg-slate-100 group-hover:bg-slate-600' :
                      'bg-stone-100 group-hover:bg-stone-600'
                    }`}>
                      <div className={`w-8 h-8 flex items-center justify-center transition-all duration-300 ${
                        method.color === 'amber' ? 'text-amber-600 group-hover:text-slate-900' :
                        method.color === 'slate' ? 'text-slate-600 group-hover:text-white' :
                        'text-stone-600 group-hover:text-white'
                      }`}>
                        <i className={`${method.icon} text-xl`}></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-light text-slate-800 mb-2 tracking-wide">{method.title}</h4>
                      <p className="text-sm text-slate-500 font-medium tracking-wider uppercase mb-3">{method.subtitle}</p>
                      <p className="text-slate-600 font-light leading-relaxed mb-4">{method.description}</p>
                      <button className="text-sm font-medium text-slate-600 tracking-wider uppercase hover:text-amber-600 transition-colors duration-300 cursor-pointer">
                        {method.action} →
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Connections */}
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 p-8">
                <h4 className="text-xl font-light text-slate-800 mb-6 tracking-wide">Professional Network</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialConnections.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`group p-4 bg-gradient-to-r ${social.color} text-white transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}
                      title={social.name}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="w-8 h-8 flex items-center justify-center mb-2">
                            <i className={`${social.icon} text-xl`}></i>
                          </div>
                          <p className="text-sm font-medium">{social.name}</p>
                          <p className="text-xs opacity-80">{social.desc}</p>
                        </div>
                        <div className="w-4 h-4 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                          <i className="ri-external-link-line"></i>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white border border-slate-200/50 p-12 max-w-md w-full mx-4 text-center animate-fade-in shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="w-10 h-10 flex items-center justify-center text-white">
                  <i className="ri-check-line text-2xl"></i>
                </div>
              </div>
              <h3 className="text-3xl font-light text-slate-800 mb-6 tracking-wide">Message Received</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-8">
                Thank you for reaching out. I will review your inquiry and respond within 24 hours to discuss your project in detail.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-12 py-4 bg-slate-900 text-white font-medium tracking-wider uppercase text-sm hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}