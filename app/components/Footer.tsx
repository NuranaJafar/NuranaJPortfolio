'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Portfolio',
      links: [
        { name: 'Featured Work', href: '#projects' },
        { name: 'Case Studies', href: '#' },
        { name: 'Client Testimonials', href: '#' },
        { name: 'Awards & Recognition', href: '#' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#' },
        { name: 'UI/UX Design', href: '#' },
        { name: 'Brand Identity', href: '#' },
        { name: 'Consultation', href: '#' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Professional Email', href: 'mailto:nurana@example.com' },
        { name: 'LinkedIn Profile', href: '#' },
        { name: 'Schedule Meeting', href: '#' },
        { name: 'Download Resume', href: '#' }
      ]
    }
  ];

  const socialNetworks = [
    {
      name: 'LinkedIn',
      icon: 'ri-linkedin-fill',
      href: '#',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: 'ri-github-fill',
      href: '#',
      color: 'hover:bg-slate-700'
    },
    {
      name: 'Behance',
      icon: 'ri-behance-fill',
      href: '#',
      color: 'hover:bg-purple-600'
    },
    {
      name: 'Dribbble',
      icon: 'ri-dribbble-fill',
      href: '#',
      color: 'hover:bg-pink-500'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 text-white">
      {/* Main Footer Content */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Footer Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin tracking-wide mb-6">
              NURANA JAFAROVA
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-amber-400" />
              <span className="mx-6 text-sm font-medium text-slate-300 tracking-[0.3em] uppercase">
                Digital Artisan
              </span>
              <div className="w-16 h-px bg-amber-400" />
            </div>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Crafting premium digital experiences where technology meets luxury design
            </p>
          </div>

          {/* Footer Links Grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-stone-400 rounded-full flex items-center justify-center mb-6">
                  <span className="text-slate-900 font-bold text-xl font-['Pacifico']">N</span>
                </div>
                <p className="text-slate-300 font-light leading-relaxed">
                  Dedicated to pushing the boundaries of digital excellence through innovative design and technical mastery.
                </p>
              </div>
              
              {/* Social Networks */}
              <div className="flex gap-3">
                {socialNetworks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 transition-all duration-300 ${social.color} hover:text-white hover:scale-110 cursor-pointer`}
                    title={social.name}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className={social.icon}></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((column, columnIndex) => (
              <div key={column.title} className="md:col-span-1">
                <h4 className="text-lg font-medium text-white mb-6 tracking-wide">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-slate-300 font-light hover:text-amber-400 transition-colors duration-300 cursor-pointer tracking-wide"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-slate-800/50 to-stone-800/50 border border-slate-700/50 p-12 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light text-white mb-4 tracking-wide">
                Stay Connected
              </h3>
              <p className="text-slate-300 font-light">
                Receive updates on new projects, insights, and exclusive content
              </p>
            </div>
            <form className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-slate-900 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-all duration-300 font-light"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-amber-400 text-slate-900 font-medium tracking-wider uppercase text-sm hover:bg-amber-300 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-slate-400 font-light">
                © {currentYear} Nurana Jafarova. All rights reserved.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Designed and developed with passion for excellence
              </p>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-slate-400 font-light">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Terms of Service
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Accent Line */}
      <div className="h-1 bg-gradient-to-r from-amber-400 via-stone-400 to-slate-400"></div>
    </footer>
  );
}