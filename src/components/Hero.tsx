import React, { useState, useEffect } from 'react';
import { 
  Cloud, Terminal, Server, Shield, Database, Cpu, 
  ArrowRight, Download, CheckCircle2, Copy, Play, Sparkles, MapPin, ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const roles = [
    "AWS Certified Cloud Practitioner",
    "Cloud & DevOps Engineer",
    "Infrastructure as Code (Terraform) Builder",
    "CI/CD Pipeline Automation Engineer",
    "Linux Systems Administrator"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [terminalTab, setTerminalTab] = useState<'aws' | 'terraform' | 'docker' | 'k8s'>('aws');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  // Typing effect
  useEffect(() => {
    const currentFullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        const nextChar = isDeleting
          ? currentFullText.substring(0, displayText.length - 1)
          : currentFullText.substring(0, displayText.length + 1);
        setDisplayText(nextChar);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const terminalSnippets = {
    aws: {
      cmd: "aws sts get-caller-identity --output json",
      output: `{\n  "UserId": "AIDAXAMPLEMOHAMEDRISWAN",\n  "Account": "720913840291",\n  "Arn": "arn:aws:iam::720913840291:user/mohamed-riswan",\n  "Role": "CloudDevOpsEngineer",\n  "Region": "ap-south-1 (Mumbai)"\n}`
    },
    terraform: {
      cmd: "terraform plan -out=tfplan",
      output: `Plan: 8 to add, 0 to change, 0 to destroy.\n\n+ aws_vpc.main_vpc (10.0.0.0/16)\n+ aws_subnet.public_app (10.0.1.0/24)\n+ aws_subnet.private_db (10.0.2.0/24)\n+ aws_security_group.ec2_app_sg\n+ aws_security_group.rds_db_sg\n+ aws_instance.job_portal_ec2 (t3.micro)\n+ aws_db_instance.job_portal_rds (MySQL 8.0)\n\nApply complete! State locked in S3.`
    },
    docker: {
      cmd: "docker ps --format 'table {{.Names}}\\t{{.Status}}\\t{{.Ports}}'",
      output: `NAMES                     STATUS          PORTS\njob-portal-web-app        Up 4 days       0.0.0.0:80->80/tcp, 443/tcp\nflask-api-microservice    Up 4 days       0.0.0.0:5000->5000/tcp\nprometheus-agent          Up 4 days       0.0.0.0:9090->9090/tcp\ngrafana-dashboard         Up 4 days       0.0.0.0:3000->3000/tcp`
    },
    k8s: {
      cmd: "kubectl get pods,svc -n production",
      output: `NAME                                 READY   STATUS    RESTARTS   AGE\npod/order-service-789cf9b69b-x82l9   1/1     Running   0          3d\npod/payment-worker-54f67c54d-k92m1   1/1     Running   0          3d\n\nNAME                    TYPE           PORT(S)                      AGE\nservice/ingress-gateway LoadBalancer   80:31200/TCP,443:32400/TCP   7d`
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center bg-grid-pattern overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-sky-500/15 to-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs text-blue-300 font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 live-pulse"></span>
              <span className="font-semibold text-white tracking-wide">AWS CERTIFIED CLOUD PRACTITIONER</span>
              <span className="text-blue-400/60 hidden sm:inline">•</span>
              <span className="hidden sm:inline text-blue-300">OPEN FOR ROLES</span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-sm uppercase tracking-widest text-sky-400 font-mono font-semibold mb-2">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight">
                MOHAMED <span className="text-gradient">RISWAN S</span>
              </h1>
              
              {/* Dynamic Subtitle */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mt-3">
                <span className="text-xl sm:text-2xl font-semibold text-gray-300 font-mono">
                  {'> '}
                  <span className="text-sky-400">{displayText}</span>
                  <span className="animate-pulse text-white">|</span>
                </span>
              </div>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specializing in architecting <span className="text-white font-medium">highly available AWS infrastructures</span>, 
              orchestrating <span className="text-white font-medium">Docker & Kubernetes</span> workloads, 
              writing declarative <span className="text-white font-medium">Terraform IaC</span>, and deploying automated 
              <span className="text-white font-medium"> Jenkins CI/CD</span> release pipelines.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 pb-1 max-w-xl mx-auto lg:mx-0">
              <div className="bg-[#111827]/80 border border-gray-800 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold font-heading text-sky-400">AWS</div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">Cloud Core</div>
              </div>
              <div className="bg-[#111827]/80 border border-gray-800 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold font-heading text-blue-400">2-Tier</div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">& Serverless</div>
              </div>
              <div className="bg-[#111827]/80 border border-gray-800 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold font-heading text-cyan-400">IaC</div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">Terraform</div>
              </div>
              <div className="bg-[#111827]/80 border border-gray-800 rounded-xl p-3 text-center">
                <div className="text-2xl font-bold font-heading text-emerald-400">CI/CD</div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">Pipelines</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-glow-primary transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Cloud Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm text-gray-200 bg-[#111827] hover:bg-gray-800/90 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:text-white"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-sky-300 hover:text-white bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 transition-all"
              >
                <span>Hire Me</span>
              </button>
            </div>

            {/* Location & Contact Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-400 pt-2 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>B.Sc IT (72%)</span>
              </div>
              <span>•</span>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-sky-400 transition-colors flex items-center gap-1"
              >
                <span>github.com/mdriswan134-ui</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive DevOps Terminal */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

              {/* Terminal Window Card */}
              <div className="relative bg-[#0F172A] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden font-mono text-xs">
                
                {/* Header Bar */}
                <div className="bg-[#1E293B] px-4 py-3 flex items-center justify-between border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-gray-400 text-xs ml-2 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-sky-400" />
                      <span>riswan@aws-bastion:~</span>
                    </span>
                  </div>
                  
                  {/* Status ping */}
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-pulse"></span>
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Command Selector Tabs */}
                <div className="bg-[#111827] px-3 pt-2.5 pb-2 border-b border-gray-800/80 flex gap-1.5 overflow-x-auto">
                  {(['aws', 'terraform', 'docker', 'k8s'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setTerminalTab(tab)}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                        terminalTab === tab
                          ? 'bg-blue-600 text-white shadow-sm font-semibold'
                          : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                      }`}
                    >
                      {tab.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* Terminal Content Area */}
                <div className="p-4 bg-[#090E17] min-h-[290px] flex flex-col justify-between">
                  <div className="space-y-3">
                    
                    {/* Command Prompt */}
                    <div className="flex items-center justify-between group/cmd bg-gray-900/40 p-2 rounded border border-gray-800/50">
                      <div className="flex items-center gap-2 text-sky-400 overflow-x-auto">
                        <span className="text-emerald-400 font-bold">$</span>
                        <span className="text-gray-200">{terminalSnippets[terminalTab].cmd}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(terminalSnippets[terminalTab].cmd)}
                        className="p-1 hover:bg-gray-800 rounded text-gray-400 hover:text-white transition-colors"
                        title="Copy command"
                      >
                        {copiedCmd === terminalSnippets[terminalTab].cmd ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Output */}
                    <pre className="text-gray-300 font-mono text-[11px] leading-relaxed whitespace-pre-wrap overflow-x-auto bg-[#070B12] p-3 rounded-lg border border-gray-800/80 text-left">
                      {terminalSnippets[terminalTab].output}
                    </pre>

                  </div>

                  {/* Terminal Footer Info */}
                  <div className="pt-3 mt-3 border-t border-gray-800/60 flex items-center justify-between text-[11px] text-gray-500">
                    <span className="flex items-center gap-1 text-gray-400">
                      <Cpu className="w-3 h-3 text-sky-400" />
                      AWS Cloud Practitioner Verified
                    </span>
                    <span className="text-blue-400">Interactive CLI Demo</span>
                  </div>

                </div>

              </div>
            </div>

            {/* Quick floating tech badges */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-full bg-gray-900/90 border border-gray-800 text-gray-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF9900]"></span>
                AWS EC2 & Lambda
              </span>
              <span className="px-2.5 py-1 rounded-full bg-gray-900/90 border border-gray-800 text-gray-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#2496ED]"></span>
                Docker Containers
              </span>
              <span className="px-2.5 py-1 rounded-full bg-gray-900/90 border border-gray-800 text-gray-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7B42BC]"></span>
                Terraform IaC
              </span>
              <span className="px-2.5 py-1 rounded-full bg-gray-900/90 border border-gray-800 text-gray-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#326CE5]"></span>
                Kubernetes
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
