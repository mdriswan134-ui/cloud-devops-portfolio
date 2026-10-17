import React from 'react';
import { Cloud, ArrowUp, Github, Linkedin, Mail, Phone, Heart, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070B12] border-t border-gray-900 py-16 text-gray-400 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-sky-400">
                <Cloud className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-lg text-white tracking-tight">
                MOHAMED RISWAN S
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              AWS Certified Cloud Practitioner & DevOps Engineer specializing in building scalable 2-tier and serverless architectures, declarative Terraform IaC, container orchestration, and automated CI/CD release engineering.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 live-pulse"></span>
              <span>Available for Immediate Joining (Chennai / Remote / Relocation)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Portfolio Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-sky-400 transition-colors">About & Profile</a>
              <a href="#skills" className="hover:text-sky-400 transition-colors">Categorized Skills</a>
              <a href="#aws" className="hover:text-sky-400 transition-colors">AWS Ecosystem</a>
              <a href="#projects" className="hover:text-sky-400 transition-colors">Cloud Projects</a>
              <a href="#pipeline" className="hover:text-sky-400 transition-colors">CI/CD Simulator</a>
              <a href="#experience" className="hover:text-sky-400 transition-colors">Internship</a>
              <a href="#certifications" className="hover:text-sky-400 transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-sky-400 transition-colors">Contact Direct</a>
            </div>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Direct Channels
            </h4>
            
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 hover:text-white text-gray-400 flex items-center justify-center transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 hover:text-white text-gray-400 flex items-center justify-center transition-all"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 hover:border-emerald-500 hover:text-white text-gray-400 flex items-center justify-center transition-all"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 hover:border-sky-500 hover:text-white text-gray-400 flex items-center justify-center transition-all"
                title="Direct Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="text-[11px] font-mono text-gray-500 pt-1">
              Chennai, Tamil Nadu, India • +91-9943924384
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-gray-500 font-mono">
            © {new Date().getFullYear()} Mohamed Riswan S. Built with React, TypeScript & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
