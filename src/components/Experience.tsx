import React from 'react';
import { 
  Briefcase, Calendar, MapPin, CheckCircle2, 
  ExternalLink, Server, Database, Shield, Cpu, Sparkles 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#090E1A] relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-sky-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Work Experience & <span className="text-gradient">Internship</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Professional industry exposure applying cloud engineering principles, RESTful microservices, and network security configuration in real deployment workflows.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#111827] border border-gray-800 hover:border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group transition-all"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400" />

              {/* Title & Organization Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/20 text-blue-400 border border-blue-500/40 font-semibold">
                      {exp.type}
                    </span>
                    <span className="text-xs text-emerald-400 font-mono font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-pulse"></span>
                      Verified Completion
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-heading mt-2 group-hover:text-sky-300 transition-colors">
                    {exp.role}
                  </h3>
                  
                  <div className="text-sm font-semibold text-sky-400 font-mono mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="text-left sm:text-right font-mono text-xs text-gray-400 space-y-1">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {exp.summary}
              </p>

              {/* Responsibilities Bullets from resume */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs uppercase font-mono font-semibold tracking-wider text-gray-400">
                  Key Responsibilities & Deliverables
                </h4>
                <div className="space-y-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-gray-300 bg-gray-900/40 p-3 rounded-xl border border-gray-800/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Pill Badges */}
              <div>
                <h4 className="text-xs uppercase font-mono font-semibold tracking-wider text-gray-400 mb-2.5">
                  Applied Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-gray-900 text-sky-300 border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}

          {/* Complementary Fresher Learning Journey Card */}
          <div className="bg-[#0F172A] border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">
                  Hands-On Cloud Practice & Architecture Sandbox
                </h3>
                <p className="text-xs font-mono text-gray-400">
                  Continuous Self-Directed DevOps Labs
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
              In addition to formal internship training, completed extensive hands-on laboratory scenarios replicating enterprise microservice deployments, writing modular Terraform configurations, experimenting with Kubernetes pods, configuring custom Prometheus scraping rules, and writing resilient Bash bootstrap scripts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="text-sky-400 font-bold mb-1">AWS Free-Tier Labs</div>
                <div className="text-gray-400 text-[11px]">VPC peering, NAT routing, EC2 autoscaling, RDS backups</div>
              </div>
              <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="text-purple-400 font-bold mb-1">Docker & K8s Cluster</div>
                <div className="text-gray-400 text-[11px]">Multi-stage builds, ingress controllers, ConfigMap injection</div>
              </div>
              <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="text-emerald-400 font-bold mb-1">CI/CD Automation</div>
                <div className="text-gray-400 text-[11px]">Jenkins pipeline-as-code, GitHub webhooks, automated linting</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
