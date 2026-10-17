import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Calendar, BookOpen, Star } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Certifications & <span className="text-gradient">Specialized Training</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Officially verified cloud qualifications demonstrating formal proficiency in AWS architecture, DevOps automation tooling, and IT enterprise systems.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#111827] border border-gray-800 hover:border-amber-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Top Accent Strip */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.badgeColor}`} />

              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-[11px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-xl font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 mt-1 text-xs font-mono text-gray-400">
                  <span className="text-sky-400 font-semibold">{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-4 mb-6">
                  {cert.description}
                </p>

                {/* Skills Verified */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
                    Curriculum Competencies Mastered:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Credential Bar */}
              <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500">Official Certification</span>
                <span className="text-sky-400 font-semibold group-hover:underline flex items-center gap-1">
                  Ready for Verification
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
