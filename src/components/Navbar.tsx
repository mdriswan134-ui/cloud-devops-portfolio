import React, { useState, useEffect } from 'react';
import { Menu, X, Cloud, Terminal, FileText, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'aws', 'projects', 'pipeline', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'AWS Cloud', href: '#aws' },
    { label: 'Projects', href: '#projects' },
    { label: 'CI/CD Lab', href: '#pipeline' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certs', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0B1120]/90 backdrop-blur-md border-b border-gray-800/80 shadow-lg shadow-black/30 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 p-[1.5px] shadow-glow-primary">
              <div className="w-full h-full bg-[#0B1120] rounded-[10px] flex items-center justify-center group-hover:bg-[#0B1120]/80 transition-colors">
                <Cloud className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-2">
                <span>MOHAMED RISWAN</span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  AWS CCP
                </span>
              </div>
              <div className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 live-pulse inline-block"></span>
                <span className="text-emerald-400 font-medium">Ready to Deploy</span>
                <span className="text-gray-600">|</span>
                <span className="hidden md:inline">DevOps & Cloud</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#111827]/70 p-1.5 rounded-full border border-gray-800/90 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-gray-200 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700 transition-all hover:border-gray-500 hover:text-white"
              title="View & Download Official Resume"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume</span>
            </button>

            <button
              onClick={onOpenContact}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-glow-primary transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg bg-gray-800/50"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1120] border-b border-gray-800 px-4 pt-3 pb-6 mt-2 space-y-2 animate-fadeIn shadow-2xl">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/70 rounded-lg flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-gray-800 text-white border border-gray-700"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              View Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500"
            >
              <Send className="w-4 h-4" />
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
