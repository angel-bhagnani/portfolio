import React from 'react';
import { 
  User, 
  GraduationCap, 
  Compass, 
  Lightbulb, 
  Code2, 
  Sparkles, 
  Cpu, 
  Rocket, 
  CheckCircle2, 
  Target 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about, personal } = portfolioData;

  const valueIcons = [
    <Rocket className="w-5 h-5 text-brand-500" />,
    <Cpu className="w-5 h-5 text-accent-cyan" />,
    <Sparkles className="w-5 h-5 text-accent-violet" />,
    <Target className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/10 text-brand-500 dark:text-brand-400 border border-brand-500/20">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curious Learner,{' '}
            <span className="text-gradient">Practical Builder</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Get to know my journey, academic drive, and what fuels my passion for emerging technologies.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Student-friendly Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Lightbulb className="w-6 h-6 text-amber-400 shrink-0" />
                <span>{about.heading}</span>
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Quick Key Takeaways */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  My Core Philosophy
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Theory validated through real code</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Focused on AI & Digital Productivity</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Responsive, human-centric UI/UX</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Always open to learn & collaborate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {about.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center shadow-sm hover:border-brand-500/40 transition-colors"
                >
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-brand-600 dark:text-brand-300">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Core Values / Mindset Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 px-1">
              <Compass className="w-5 h-5 text-accent-cyan" />
              <span>What Drives My Work</span>
            </h3>

            <div className="space-y-3.5">
              {about.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="group p-5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform">
                      {valueIcons[idx % valueIcons.length]}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {val.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* University & Regional Pride Badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-900/30 to-accent-cyan/10 border border-brand-500/20 text-slate-300">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-brand-400 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white">
                    {personal.college}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Pursuing B.Tech with high academic curiosity from Arain (Ajmer), India.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
