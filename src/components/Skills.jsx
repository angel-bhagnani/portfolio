import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode2, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Globe2, 
  CheckSquare, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Core Tech', 'AI & Future Tech', 'Productivity'];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code2 className="w-6 h-6 text-orange-500" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-sky-500" />;
      case 'FileCode2':
        return <FileCode2 className="w-6 h-6 text-amber-400" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-brand-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-accent-cyan" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-indigo-400" />;
      case 'CheckSquare':
        return <CheckSquare className="w-6 h-6 text-teal-400" />;
      default:
        return <Layers className="w-6 h-6 text-brand-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-violet/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/10 text-brand-500 dark:text-brand-400 border border-brand-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="text-gradient">Core Competencies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A comprehensive overview of the modern technologies, AI frameworks, and digital tools I use to build solutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-brand-600 to-accent-cyan text-white shadow-md shadow-brand-500/25 scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 hover:border-brand-500/60 dark:hover:border-brand-500/60 shadow-lg shadow-slate-200/50 dark:shadow-black/20 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top Row: Icon & Category */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 group-hover:scale-110 transition-transform duration-300">
                  {getSkillIcon(skill.icon)}
                </div>
                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-300 border border-brand-500/20">
                  {skill.badge}
                </span>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5 min-h-[48px]">
                {skill.description}
              </p>

              {/* Proficiency Bar */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-500 dark:text-slate-400">Proficiency</span>
                  <span className="text-brand-600 dark:text-brand-400 font-mono">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-cyan transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Highlights / Learning Commitment Footer */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-brand-950/40 via-slate-900/60 to-brand-950/40 border border-brand-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
              <Sparkles className="w-5 h-5 text-accent-cyan" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Continual Technology Evolution</h4>
              <p className="text-xs text-slate-400">
                Regularly experimenting with new JavaScript runtimes, AI APIs, and developer productivity tooling.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-brand-300 hover:text-white bg-brand-500/20 hover:bg-brand-500/30 border border-brand-500/30 transition-all whitespace-nowrap"
          >
            See in Action ➜
          </a>
        </div>

      </div>
    </section>
  );
}
