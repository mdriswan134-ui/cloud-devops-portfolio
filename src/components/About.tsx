import React from 'react';
import { 
  User, GraduationCap, Award, CheckCircle, ShieldCheck, 
  Terminal, Server, Target, BookOpen, Layers, Sparkles
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-sky-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Engineering Foundations & <span className="text-gradient">Career Objective</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Passionate AWS & DevOps Engineer blending academic rigor in Information Technology with hands-on cloud deployment, containerization, and infrastructure automation.
          </p>
        </div>

        {/* Top Grid: Bio Card & Core Competency Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Professional Summary Card */}
          <div className="lg:col-span-7 bg-[#111827]/90 border border-gray-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-heading">Professional Profile</h3>
                <p className="text-xs font-mono text-sky-400">AWS Certified Cloud Practitioner</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6 font-normal">
              {personalInfo.bio}
            </p>

            {/* Inferred Career Goal */}
            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 mb-6">
              <div className="flex items-center gap-2 text-sky-300 font-semibold text-xs uppercase font-mono mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Primary Engineering Objective</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                To join a high-impact engineering organization (such as AWS, Google, Microsoft, Deloitte, TCS, Cognizant, or IBM) where I can contribute to building resilient, automated cloud infrastructure, reducing deployment friction through CI/CD pipelines, and maintaining enterprise-grade system availability.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "AWS Well-Architected Framework Alignment",
                "Automated Infrastructure as Code (Terraform)",
                "Containerization with Docker & Kubernetes",
                "Linux Kernel & System Administration Fundamentals",
                "Strict Least-Privilege IAM & Security Groups",
                "Continuous Integration & Continuous Delivery (CI/CD)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Quick Facts & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-[#111827]/90 border border-gray-800 rounded-2xl p-6 shadow-xl">
              <h4 className="text-base font-bold text-white font-heading mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-400" />
                Quick Highlights
              </h4>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/80 border border-gray-800">
                  <span className="text-gray-400">Current Base:</span>
                  <span className="text-white font-medium">Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/80 border border-gray-800">
                  <span className="text-gray-400">Availability:</span>
                  <span className="text-emerald-400 font-medium">Immediate / Fresher Ready</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/80 border border-gray-800">
                  <span className="text-gray-400">Official Certification:</span>
                  <span className="text-amber-400 font-medium">AWS Cloud Practitioner</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/80 border border-gray-800">
                  <span className="text-gray-400">Primary Cloud:</span>
                  <span className="text-blue-400 font-medium">AWS (EC2, S3, IAM, VPC, Lambda)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/80 border border-gray-800">
                  <span className="text-gray-400">Internship Completed:</span>
                  <span className="text-sky-400 font-medium">Login 360 (Cloud & DevOps)</span>
                </div>
              </div>
            </div>

            {/* Soft Skills Card */}
            <div className="bg-[#111827]/90 border border-gray-800 rounded-2xl p-6 shadow-xl">
              <h4 className="text-base font-bold text-white font-heading mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Core Soft Skills
              </h4>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                  <div className="font-semibold text-xs text-white">Technical Troubleshooting</div>
                  <p className="text-[11px] text-gray-400 mt-1">
                    Systematic root-cause isolation using Linux logs, curl, Postman, network routing checks, and CloudWatch metrics.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                  <div className="font-semibold text-xs text-white">Teamwork & Collaboration</div>
                  <p className="text-[11px] text-gray-400 mt-1">
                    Effective communication across development and operations, peer code reviews, Git branching hygiene, and collaborative sprints.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800">
                  <div className="font-semibold text-xs text-white">Adaptability & Continuous Learning</div>
                  <p className="text-[11px] text-gray-400 mt-1">
                    Passionate about rapidly testing new open-source DevOps utilities, cloud security patches, and microservices patterns.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Education Section Timeline */}
        <div className="border-t border-gray-800/80 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-sky-400 mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC BACKGROUND</span>
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">
              Education & Degrees
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="bg-[#111827]/90 border border-gray-800 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono text-sky-400 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 inline-block mb-2">
                      {edu.period}
                    </span>
                    <h4 className="text-lg font-bold text-white font-heading group-hover:text-sky-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-extrabold text-gradient font-heading">
                      {edu.score}
                    </span>
                    <div className="text-[10px] text-gray-500 font-mono uppercase">Score</div>
                  </div>
                </div>

                <div className="border-t border-gray-800/80 pt-3 mt-3">
                  <div className="text-xs text-gray-400 space-y-1.5">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
