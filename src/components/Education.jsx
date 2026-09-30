import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle, 
  Brain, 
  Globe, 
  Code, 
  Boxes, 
  Database, 
  Zap, 
  Award 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  const getAreaIcon = (iconName) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-4 h-4 text-accent-cyan" />;
      case 'Globe': return <Globe className="w-4 h-4 text-brand-400" />;
      case 'Code': return <Code className="w-4 h-4 text-emerald-400" />;
      case 'Boxes': return <Boxes className="w-4 h-4 text-amber-400" />;
      case 'Database': return <Database className="w-4 h-4 text-rose-400" />;
      case 'Zap': return <Zap className="w-4 h-4 text-accent-violet" />;
      default: return <BookOpen className="w-4 h-4 text-brand-400" />;
    }
  };

  return (
    <section id="education" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My <span className="text-gradient">Education Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Building solid foundations in engineering, computation, and modern technologies.
          </p>
        </div>

        {/* Education Main Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-6 sm:p-10 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            
            {/* Glowing gradient accent top bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 via-accent-cyan to-accent-violet" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/30 text-brand-600 dark:text-brand-400 shrink-0 shadow-sm">
                  <GraduationCap className="w-8 h-8" />
                </div>
                
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Currently Pursuing
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {education.degree}
                  </h3>
                  
                  <p className="text-lg font-bold text-brand-600 dark:text-brand-400">
                    {education.institution}
                  </p>
                </div>
              </div>

              {/* Badges: Timeline & Location */}
              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  <Calendar className="w-4 h-4 text-brand-500" />
                  <span>{education.timeline}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            {/* Program Description */}
            <div className="py-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{education.description}</p>
            </div>

            {/* Relevant Learning Areas Section */}
            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent-cyan" />
                <span>Relevant Learning Areas & Core Coursework</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {education.learningAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between hover:border-brand-500/40 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        {getAreaIcon(area.icon)}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {area.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {area.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Learning Experiences
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {education.highlights.map((highlight, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-brand-500/5 dark:bg-brand-500/10 border border-brand-500/15 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
