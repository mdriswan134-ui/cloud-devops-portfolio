import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink, ShieldCheck, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { personalInfo, projectsData, experienceData, certificationsData, educationData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainResume = `
MOHAMED RISWAN S
Cloud & DevOps Engineer
Chennai, Tamil Nadu, India | +91-9943924384 | mdriswan134@gmail.com
LinkedIn: https://www.linkedin.com/in/mdriswan134 | GitHub: https://github.com/mdriswan134-ui

PROFESSIONAL SUMMARY
I am a AWS & DevOps engineer with hands-on exposure to cloud platforms and DevOps automation through academic and personal projects. Skilled in containerization, CI/CD pipelines, and Infrastructure as Code using Docker, Kubernetes, Jenkins, and Terraform. Strong fundamentals in Linux administration, networking, and scripting, with a keen interest in building reliable, automated, and scalable deployment systems. Seeking a Cloud/DevOps Engineer role to contribute to infrastructure automation and CI/CD excellence.

TECHNICAL SKILLS
• Cloud Platforms: AWS (EC2, S3, IAM, VPC, Lambda), Microsoft Azure (basic), Google Cloud Platform (basic)
• Containerization & Orchestration: Docker, Kubernetes (Pods, Deployments, Services, Helm - basic)
• CI/CD & Automation: Jenkins, GitHub Actions, GitLab CI (basic)
• Infrastructure as Code: Terraform, Ansible (basic)
• Monitoring & Logging: Prometheus, Grafana, ELK Stack (basic)
• Other: Linux/Unix Administration, Shell Scripting (Bash), Python, Git/GitHub, Networking Fundamentals

SOFT SKILLS
• Technical Troubleshooting
• Teamwork and collaboration
• Adaptability and Continuous Learning

EDUCATION
• B.Sc Information Technology (Jun 2023 - Apr 2026)
  JJ College of Arts and Science / Bharathidasan University | Percentage: 72%
• Higher Secondary Certificate (12th Grade) (Jun 2022 – Mar 2023)
  Government Boys Higher Secondary School | Percentage: 66%

PROJECT EXPERIENCE
1. ONLINE JOB PORTAL – 2-TIER ARCHITECTURE USING AWS EC2 (July 2026)
   Tools: AWS EC2, VPC, Security Groups, Linux, Apache HTTP Server, MySQL, HTML, CSS, JavaScript, IAM, SSH (PuTTY)
   • Developed an Online Job Portal using a 2-tier architecture with AWS EC2.
   • Deployed the web/application layer on Amazon EC2 to host the job portal application.
   • Configured Amazon RDS as the database tier for storing job listings, user profiles, and application data.
   • Configured Security Groups to control secure communication between the EC2 application server and database.
   • Managed Linux server configuration, application deployment, and connectivity between the application and database tiers.

2. SERVERLESS FOOD DELIVERY PLATFORM WITH EVENT-DRIVEN ARCHITECTURE (September 2026)
   Tools: AWS Lambda, API Gateway, DynamoDB, S3, SNS, SQS, EventBridge, IAM, CloudWatch
   • Developed a serverless food delivery platform using an event-driven architecture for scalable order processing.
   • Implemented AWS Lambda functions to handle order, payment, restaurant, and delivery workflows.
   • Used Amazon API Gateway to build secure and scalable REST APIs for application communication.
   • Integrated Amazon SQS/SNS and EventBridge for asynchronous event processing and decoupled services.
   • Utilized Amazon DynamoDB for serverless data storage, improving scalability, performance, and reliability.

INTERNSHIP
• Cloud/DevOps Intern (July 2026 - Sep 2026)
  Login 360, Chennai
  • Developed and deployed cloud-based applications using AWS EC2, Linux, and Python Flask.
  • Integrated DynamoDB and REST APIs for application functionality and data management.
  • Configured AWS Security Groups and tested application connectivity.

CERTIFICATIONS
• AWS Certified Cloud Practitioner
• AWS Training - Login360
• DevOps Training - Login360
• IT Support Operations Course (PITLA-Independent Freelance Educational Organization), Maldives
    `.trim();

    navigator.clipboard.writeText(plainResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#0F172A] border border-gray-700 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Top Actions Bar */}
        <div className="bg-[#1E293B] px-6 py-4 border-b border-gray-700/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
            <span className="font-heading font-bold text-white text-sm sm:text-base">
              Mohamed Riswan S — Official Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 transition-colors"
              title="Copy resume as plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-glow-primary transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 transition-colors ml-2"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Resume Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0B1120] text-gray-200 font-sans print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-gray-800 pb-6 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-white font-heading tracking-tight print:text-black">
              MOHAMED RISWAN S
            </h1>
            <p className="text-base font-semibold text-sky-400 font-mono mt-1 print:text-blue-600">
              Cloud & DevOps Engineer • AWS Certified Cloud Practitioner
            </p>
            
            <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-gray-400 font-mono print:text-gray-700">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                Chennai, Tamil Nadu, India
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                +91-9943924384
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                mdriswan134@gmail.com
              </span>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                linkedin.com/in/mdriswan134
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                github.com/mdriswan134-ui
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono mb-2 border-b border-gray-800 pb-1 print:text-blue-600">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed print:text-gray-800">
              {personalInfo.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono mb-2.5 border-b border-gray-800 pb-1 print:text-blue-600">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-300 print:text-gray-800">
              <div className="p-2.5 rounded bg-[#111827] border border-gray-800 print:bg-gray-100">
                <strong className="text-white print:text-black">Cloud Platforms:</strong> AWS (EC2, S3, IAM, VPC, Lambda, RDS, DynamoDB), Azure (basic), GCP (basic)
              </div>
              <div className="p-2.5 rounded bg-[#111827] border border-gray-800 print:bg-gray-100">
                <strong className="text-white print:text-black">Containerization & Orchestration:</strong> Docker, Kubernetes (Pods, Deployments, Services, Helm - basic)
              </div>
              <div className="p-2.5 rounded bg-[#111827] border border-gray-800 print:bg-gray-100">
                <strong className="text-white print:text-black">CI/CD & Automation:</strong> Jenkins, GitHub Actions, GitLab CI (basic)
              </div>
              <div className="p-2.5 rounded bg-[#111827] border border-gray-800 print:bg-gray-100">
                <strong className="text-white print:text-black">Infrastructure as Code:</strong> Terraform, Ansible (basic)
              </div>
              <div className="p-2.5 rounded bg-[#111827] border border-gray-800 print:bg-gray-100">
                <strong className="text-white print:text-black">Monitoring & Logging:</strong> Prometheus, Grafana, ELK Stack (basic)
              </div>
              <div className="p-2.5 rounded bg-[#111827] border border-gray-800 print:bg-gray-100">
                <strong className="text-white print:text-black">Systems & Scripting:</strong> Linux/Unix Admin, Shell Scripting (Bash), Python, Git/GitHub, Networking
              </div>
            </div>
          </div>

          {/* Project Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono mb-3 border-b border-gray-800 pb-1 print:text-blue-600">
              Project Experience
            </h2>
            <div className="space-y-5">
              {projectsData.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white text-sm font-heading print:text-black">
                      {proj.title.toUpperCase()} — {proj.subtitle.toUpperCase()}
                    </span>
                    <span className="font-mono text-sky-400">{proj.date}</span>
                  </div>
                  <div className="text-[11px] font-mono text-gray-400 print:text-gray-600">
                    <strong>Tools:</strong> {proj.tools.join(', ')}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 print:text-gray-800 pt-1">
                    {proj.architectureDetails.slice(0, 4).map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Internship */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono mb-2 border-b border-gray-800 pb-1 print:text-blue-600">
              Internship Experience
            </h2>
            {experienceData.map((exp, eIdx) => (
              <div key={eIdx} className="text-xs space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <span className="font-bold text-white text-sm print:text-black">{exp.role}</span>
                    <span className="text-gray-400 ml-2">— {exp.company}, {exp.location}</span>
                  </div>
                  <span className="font-mono text-sky-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-300 print:text-gray-800 pt-1">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono mb-2 border-b border-gray-800 pb-1 print:text-blue-600">
                Education
              </h2>
              <div className="space-y-3 text-xs">
                {educationData.map((edu, edIdx) => (
                  <div key={edIdx}>
                    <div className="font-bold text-white print:text-black">{edu.degree}</div>
                    <div className="text-gray-400">{edu.institution}</div>
                    <div className="font-mono text-sky-400 text-[11px]">{edu.period} | Percentage: {edu.score}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono mb-2 border-b border-gray-800 pb-1 print:text-blue-600">
                Certifications
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-gray-300 print:text-gray-800">
                {certificationsData.map((c) => (
                  <li key={c.id}>
                    <strong className="text-white print:text-black">{c.title}</strong> — {c.issuer} ({c.date})
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="bg-[#1E293B] px-6 py-3 border-t border-gray-700/80 flex items-center justify-between shrink-0 text-xs text-gray-400 font-mono">
          <span>Mohamed Riswan S • Resume verified</span>
          <button
            onClick={onClose}
            className="text-sky-400 hover:text-white"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
