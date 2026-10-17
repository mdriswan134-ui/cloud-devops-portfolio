import React, { useState } from 'react';
import { 
  Cloud, Server, HardDrive, ShieldCheck, Network, Zap, 
  Database, Layers, Radio, MessageSquare, Activity, 
  ArrowRight, Check, ExternalLink, Sparkles
} from 'lucide-react';
import { awsServicesData } from '../data/portfolioData';

export const AwsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<typeof awsServicesData[0] | null>(null);

  const categories = ['All', 'Compute', 'Storage', 'Security & Identity', 'Networking', 'Managed Database', 'Serverless NoSQL', 'Application Integration', 'Monitoring & Observability'];

  const filteredServices = activeCategory === 'All' 
    ? awsServicesData 
    : awsServicesData.filter(s => s.category === activeCategory);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Amazon EC2': return <Server className="w-5 h-5 text-amber-400" />;
      case 'Amazon S3': return <HardDrive className="w-5 h-5 text-emerald-400" />;
      case 'AWS IAM': return <ShieldCheck className="w-5 h-5 text-red-400" />;
      case 'Amazon VPC': return <Network className="w-5 h-5 text-purple-400" />;
      case 'AWS Lambda': return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Amazon RDS': return <Database className="w-5 h-5 text-blue-400" />;
      case 'Amazon DynamoDB': return <Layers className="w-5 h-5 text-sky-400" />;
      case 'Amazon API Gateway': return <Radio className="w-5 h-5 text-rose-400" />;
      case 'Amazon SQS & SNS': return <MessageSquare className="w-5 h-5 text-pink-400" />;
      case 'Amazon CloudWatch': return <Activity className="w-5 h-5 text-amber-500" />;
      default: return <Cloud className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="aws" className="py-24 bg-[#0B1120] relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-amber-500/10 via-blue-600/10 to-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-3">
            <Cloud className="w-3.5 h-3.5" />
            <span>AWS ECOSYSTEM MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            AWS Cloud Architecture & <span className="text-gradient">Core Services</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Hands-on implementation of Amazon Web Services aligned with the AWS Well-Architected Framework for security, high availability, and automated performance.
          </p>
        </div>

        {/* AWS Well-Architected Pillars Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs font-mono">
          <span className="text-gray-400 mr-1 hidden sm:inline">Framework Pillars:</span>
          <span className="px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300">
            🛡️ Security
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-300">
            🔄 Reliability
          </span>
          <span className="px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/40 text-sky-300">
            ⚡ Performance Efficiency
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300">
            💰 Cost Optimization
          </span>
          <span className="px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-300">
            ⚙️ Operational Excellence
          </span>
        </div>

        {/* Category Filter */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-gray-950 font-bold shadow-md'
                  : 'bg-[#111827] text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* AWS Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="bg-[#111827]/90 border border-gray-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group relative flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 group-hover:border-amber-500/40 flex items-center justify-center transition-colors shadow-inner">
                    {getServiceIcon(service.name)}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-gray-800 text-amber-400 border border-amber-500/20 font-medium">
                    {service.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {service.name}
                </h3>
                <span className="text-xs font-mono text-gray-500 block mb-3">
                  Category: {service.category}
                </span>

                {/* Description */}
                <p className="text-gray-300 text-xs leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Key features bullets */}
                <div className="space-y-1.5 mb-4">
                  {service.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] text-gray-400">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Application Footer */}
              <div className="pt-3 border-t border-gray-800/80 mt-auto">
                <div className="text-[11px] text-sky-400 font-mono flex items-center justify-between">
                  <span className="truncate">Applied in: {service.usedIn.split('&')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#111827] border border-gray-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 border border-amber-500/30 flex items-center justify-center">
                    {getServiceIcon(selectedService.name)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">{selectedService.name}</h3>
                    <p className="text-xs font-mono text-amber-400">{selectedService.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white p-1 rounded-lg bg-gray-800"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs text-gray-300">
                <div className="p-3 bg-gray-900 rounded-xl border border-gray-800">
                  <span className="text-gray-400 font-mono block mb-1">Architecture Overview:</span>
                  <p className="leading-relaxed">{selectedService.description}</p>
                </div>

                <div>
                  <span className="text-white font-semibold block mb-2 font-mono">Key Architectural Features:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedService.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 p-2 rounded bg-gray-800/70 border border-gray-700/50 text-[11px]">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-blue-950/40 border border-blue-800/50 rounded-xl">
                  <span className="text-sky-300 font-mono font-semibold block mb-1">Portfolio Implementation:</span>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    {selectedService.usedIn}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
