import React, { useState } from 'react';
import { 
  Code, Cpu, Terminal, Layers, Cloud, Box, PlayCircle, 
  LineChart, Wrench, CheckCircle, Search, Filter
} from 'lucide-react';
import { skillCategories, toolsGrid } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryNames = ['All', ...skillCategories.map(c => c.title)];

  const filteredCategories = skillCategories.map(category => {
    if (selectedCategory !== 'All' && category.title !== selectedCategory) {
      return null;
    }

    const filteredSkills = category.skills.filter(skill => {
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });

    if (filteredSkills.length === 0) return null;

    return {
      ...category,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 bg-[#090E1A] relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-sky-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Categorized Technical <span className="text-gradient">Skill Stack</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Validated hands-on expertise spanning modern cloud architecture, container orchestration, pipeline automation, Linux administration, and declarative IaC.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categoryNames.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-glow-primary'
                    : 'bg-[#111827] text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools, skills, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111827] border border-gray-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {filteredCategories.map((cat, idx) => (
            <div key={idx} className="bg-[#111827]/60 border border-gray-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-gray-800/80 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">{cat?.title}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{cat?.description}</p>
                </div>
                <span className="text-xs font-mono text-sky-400 bg-sky-950/60 border border-sky-800/40 px-2.5 py-1 rounded-full self-start sm:self-auto">
                  {cat?.skills.length} skills listed
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat?.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-5 rounded-xl border transition-all duration-300 relative group ${
                      skill.highlight 
                        ? 'bg-[#141E33] border-blue-500/40 hover:border-blue-400 shadow-md shadow-blue-900/10' 
                        : 'bg-gray-900/70 border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    {/* Top line: Name and Level */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors flex items-center gap-1.5">
                          <span>{skill.name}</span>
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                          )}
                        </h4>
                        <span className="text-[11px] font-mono text-gray-400">
                          {skill.experience}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-sky-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-900/40">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-1.5 mb-4 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.highlight 
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-400' 
                            : 'bg-blue-600'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-800/80 text-gray-300 border border-gray-700/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global DevOps Tool Arsenal Grid */}
        <div className="mt-16 pt-12 border-t border-gray-800/80">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-white font-heading">
              Technology Ecosystem & Tool Arsenal
            </h3>
            <p className="text-xs text-gray-400 font-mono mt-1">
              End-to-end tooling utilized across infrastructure, containerization, and automated workflows
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {toolsGrid.map((tool, idx) => (
              <div
                key={idx}
                className="bg-[#111827] border border-gray-800/80 hover:border-gray-600 rounded-xl p-3 text-center transition-all hover:scale-105 group"
              >
                <div 
                  className="w-3 h-3 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: tool.color }}
                />
                <div className="font-heading font-semibold text-xs text-white group-hover:text-sky-300">
                  {tool.name}
                </div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5 truncate">
                  {tool.category}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
