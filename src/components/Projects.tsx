import React, { useState } from 'react';
import { 
  FolderGit2, ExternalLink, Github, Server, Database, 
  Shield, Layers, Cpu, ArrowRight, CheckCircle2, AlertTriangle, 
  Sparkles, Terminal, Activity, ArrowUpRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [activeTabByProject, setActiveTabByProject] = useState<{ [key: string]: 'overview' | 'architecture' | 'security' | 'metrics' }>({
    'job-portal-ec2-rds': 'overview',
    'serverless-food-delivery': 'overview',
  });

  const [activeNodeByProject, setActiveNodeByProject] = useState<{ [key: string]: string }>({
    'job-portal-ec2-rds': 'ec2',
    'serverless-food-delivery': 'lambda_order',
  });

  const setTab = (projectId: string, tab: 'overview' | 'architecture' | 'security' | 'metrics') => {
    setActiveTabByProject(prev => ({ ...prev, [projectId]: tab }));
  };

  const setNode = (projectId: string, nodeId: string) => {
    setActiveNodeByProject(prev => ({ ...prev, [projectId]: nodeId }));
  };

  return (
    <section id="projects" className="py-24 bg-[#090E1A] relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-sky-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRODUCTION-GRADE PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Cloud Architecture <span className="text-gradient">Projects & Case Studies</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Detailed breakdown of real-world cloud infrastructures designed, provisioned, secured, and evaluated against enterprise reliability criteria.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-16">
          {projectsData.map((project: Project, pIndex: number) => {
            const currentTab = activeTabByProject[project.id] || 'overview';
            const currentNodeId = activeNodeByProject[project.id] || project.architectureNodes[0].id;
            const selectedNode = project.architectureNodes.find(n => n.id === currentNodeId) || project.architectureNodes[0];

            return (
              <div 
                key={project.id}
                className="bg-[#111827] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl relative"
              >
                {/* Top Banner Bar */}
                <div className="bg-gradient-to-r from-gray-900 via-[#162033] to-gray-900 px-6 sm:px-8 py-5 border-b border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-blue-500 inline-block shadow-glow-primary"></span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
                          {project.title}
                        </h3>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/40">
                          {project.date}
                        </span>
                      </div>
                      <p className="text-xs text-sky-400 font-mono mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Top Right Action & Repo link */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white border border-gray-700 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View GitHub Repo</span>
                      <ArrowUpRight className="w-3 h-3 text-gray-400" />
                    </a>
                  </div>
                </div>

                {/* Sub-navigation Tabs */}
                <div className="bg-[#0D1525] px-6 sm:px-8 border-b border-gray-800 flex gap-2 overflow-x-auto scrollbar-none">
                  {(['overview', 'architecture', 'security', 'metrics'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setTab(project.id, tab)}
                      className={`py-3 px-4 text-xs font-semibold capitalize border-b-2 transition-all whitespace-nowrap ${
                        currentTab === tab
                          ? 'border-blue-500 text-sky-400 bg-blue-500/5'
                          : 'border-transparent text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      {tab === 'overview' && '1. Overview & Problem/Solution'}
                      {tab === 'architecture' && '2. Interactive Cloud Blueprint'}
                      {tab === 'security' && '3. Challenges & Security Controls'}
                      {tab === 'metrics' && '4. Key Outcomes & Well-Architected Metrics'}
                    </button>
                  ))}
                </div>

                {/* Content Area Based on Active Tab */}
                <div className="p-6 sm:p-8">
                  
                  {/* TAB 1: OVERVIEW */}
                  {currentTab === 'overview' && (
                    <div className="space-y-8 animate-fadeIn">
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-gray-400 font-mono mb-2">Executive Summary</h4>
                        <p className="text-gray-200 text-base leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Problem Card */}
                        <div className="p-5 rounded-2xl bg-red-950/20 border border-red-900/30">
                          <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase font-mono mb-2">
                            <AlertTriangle className="w-4 h-4" />
                            <span>The Problem & Infrastructure Risk</span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        {/* Solution Card */}
                        <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-900/30">
                          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono mb-2">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Engineered Cloud Solution</span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Tool Badges */}
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-gray-400 font-mono mb-3">Core Tooling & Services Utilized</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-gray-900 border border-gray-700 text-sky-300 hover:border-blue-500 transition-colors"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features List */}
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-gray-400 font-mono mb-3">Key Architectural Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {project.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300 bg-gray-900/40 p-2.5 rounded-xl border border-gray-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: INTERACTIVE CLOUD BLUEPRINT */}
                  {currentTab === 'architecture' && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h4 className="text-base font-bold text-white font-heading">
                            Interactive Architecture Node Inspector
                          </h4>
                          <p className="text-xs text-gray-400">
                            Click any architectural component node below to inspect tier configuration, traffic routing, and security rules.
                          </p>
                        </div>
                        <span className="text-[11px] font-mono text-sky-400 bg-sky-950/60 px-3 py-1 rounded-full border border-sky-800/40 self-start sm:self-auto">
                          Click Node to Inspect
                        </span>
                      </div>

                      {/* Visual Architecture Flow Line / Nodes */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-4 bg-[#090E17] rounded-2xl border border-gray-800">
                        {project.architectureNodes.map((node, nIdx) => {
                          const isSelected = node.id === currentNodeId;
                          return (
                            <button
                              key={node.id}
                              onClick={() => setNode(project.id, node.id)}
                              className={`p-3.5 rounded-xl border text-left transition-all relative ${
                                isSelected
                                  ? 'bg-blue-600/20 border-blue-500 shadow-md shadow-blue-500/20'
                                  : 'bg-gray-900/70 border-gray-800 hover:border-gray-700 hover:bg-gray-800/70'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                                  Tier {nIdx + 1}
                                </span>
                                {isSelected && (
                                  <span className="w-2 h-2 rounded-full bg-sky-400 live-pulse"></span>
                                )}
                              </div>
                              <div className="font-heading font-bold text-xs text-white mb-1 leading-tight">
                                {node.label}
                              </div>
                              <div className="text-[10px] font-mono text-sky-400 truncate">
                                {node.tier}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Active Node Detail Card */}
                      <div className="bg-gradient-to-br from-blue-950/30 to-gray-900 p-5 rounded-2xl border border-blue-900/40">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400">
                            <Cpu className="w-4 h-4" />
                          </div>
                          <div>
                            <h5 className="font-bold text-white text-sm">
                              {selectedNode.label} <span className="text-sky-400 font-mono text-xs">({selectedNode.tier})</span>
                            </h5>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                          {selectedNode.description}
                        </p>
                      </div>

                      {/* Technical Architecture Bullet Points */}
                      <div className="space-y-2">
                        <h5 className="text-xs font-mono uppercase text-gray-400">Implementation Details:</h5>
                        {project.architectureDetails.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs text-gray-300 p-2 rounded-lg bg-gray-900/40 border border-gray-800/60">
                            <span className="text-sky-400 font-mono font-bold mt-0.5">{dIdx + 1}.</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 3: CHALLENGES & SECURITY */}
                  {currentTab === 'security' && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Challenges Card */}
                        <div className="bg-gray-900/60 p-5 rounded-2xl border border-gray-800">
                          <h4 className="text-sm font-bold text-amber-400 font-heading mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" />
                            Engineering Challenges Encountered
                          </h4>
                          <div className="space-y-3">
                            {project.challenges.map((ch, cIdx) => (
                              <div key={cIdx} className="text-xs text-gray-300 p-3 rounded-xl bg-gray-950 border border-gray-800/80">
                                <span className="text-amber-400 font-mono block mb-1">Challenge #{cIdx + 1}:</span>
                                {ch}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Security Controls */}
                        <div className="bg-gray-900/60 p-5 rounded-2xl border border-gray-800">
                          <h4 className="text-sm font-bold text-emerald-400 font-heading mb-3 flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            Security & Compliance Enforced
                          </h4>
                          <div className="space-y-2.5 text-xs text-gray-300">
                            <div className="p-3 rounded-xl bg-gray-950 border border-gray-800/80">
                              <span className="text-emerald-400 font-mono font-semibold block mb-0.5">Least Privilege IAM:</span>
                              Strict role assignments preventing administrative broad scopes on compute workloads.
                            </div>
                            <div className="p-3 rounded-xl bg-gray-950 border border-gray-800/80">
                              <span className="text-emerald-400 font-mono font-semibold block mb-0.5">Zero Database Public Access:</span>
                              Managed storage instances placed in isolated private subnets with no public IPv4 addresses assigned.
                            </div>
                            <div className="p-3 rounded-xl bg-gray-950 border border-gray-800/80">
                              <span className="text-emerald-400 font-mono font-semibold block mb-0.5">Encrypted Traffic & Keys:</span>
                              SSH key-pair authentication and TLS encrypted client communication.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: OUTCOMES & METRICS */}
                  {currentTab === 'metrics' && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="bg-gradient-to-br from-gray-900 to-[#141C2E] p-4 rounded-2xl border border-gray-800 text-center">
                            <div className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-1">
                              {m.label}
                            </div>
                            <div className="text-lg sm:text-xl font-bold font-heading text-sky-400">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800">
                        <h4 className="text-sm font-bold text-white font-heading mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          Validated Architectural Outcomes
                        </h4>
                        <div className="space-y-2.5">
                          {project.outcomes.map((out, oIdx) => (
                            <div key={oIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{out}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
