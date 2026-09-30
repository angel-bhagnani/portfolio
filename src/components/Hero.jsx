import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Mail, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Code2, 
  Cpu, 
  Terminal, 
  Layers 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onShowToast }) {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast(`Email copied: ${personal.email}`);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-brand-600/20 via-accent-cyan/15 to-accent-violet/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern dark:block hidden opacity-60 pointer-events-none -z-20" />
      <div className="absolute inset-0 bg-grid-pattern-light dark:hidden block opacity-40 pointer-events-none -z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-500/10 dark:bg-brand-500/15 border border-brand-500/30 text-brand-600 dark:text-brand-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.availability}</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm{' '}
                <span className="text-gradient hover:opacity-90 transition-opacity">
                  {personal.name}
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                <span className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {personal.role}
                </span>
                <span className="hidden sm:inline text-slate-400">•</span>
                <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-brand-400">
                  {personal.title}
                </span>
              </div>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personal.shortBio}
            </p>

            {/* Meta Tags: University & Location */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <GraduationCap className="w-4 h-4 text-brand-500" />
                <span className="font-medium text-slate-700 dark:text-slate-200">{personal.college}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span className="font-medium text-slate-700 dark:text-slate-200">{personal.location}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => handleScroll('#projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-accent-cyan shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScroll('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4 text-brand-500" />
                <span>Contact Me</span>
              </button>

              {/* Quick Copy Email Pill */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-900/60 hover:text-brand-600 dark:hover:text-brand-400 border border-slate-200/80 dark:border-slate-800/80 transition-all"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? "Copied!" : personal.email}</span>
                <span className="sm:hidden">{copied ? "Copied!" : "Email"}</span>
              </button>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Connect:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-900 dark:hover:bg-brand-600 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-blue-600 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Sleek Interactive Code / Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Decorative Accent Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-500 via-accent-cyan to-accent-violet opacity-30 blur-xl"></div>
              
              {/* Developer Terminal Card */}
              <div className="relative rounded-2xl glass-card dark:glass-card bg-slate-900/90 text-slate-200 border border-slate-800 shadow-2xl p-5 overflow-hidden">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                      angel-dev ~ bash
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Online
                  </span>
                </div>

                {/* Simulated Code / Bio Object */}
                <div className="space-y-2.5 font-mono text-xs sm:text-sm">
                  <div>
                    <span className="text-brand-400">const</span>{' '}
                    <span className="text-accent-cyan">developer</span> = &#123;
                  </div>
                  <div className="pl-4 space-y-1.5">
                    <div>
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300">"{personal.name}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">university:</span>{' '}
                      <span className="text-emerald-300">"{personal.college}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">degree:</span>{' '}
                      <span className="text-amber-300">"B.Tech in Engineering"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">focusAreas:</span> [
                      <div className="pl-4 text-brand-300 space-y-0.5">
                        <div>"Artificial Intelligence",</div>
                        <div>"Generative AI",</div>
                        <div>"Web Development",</div>
                        <div>"Digital Productivity"</div>
                      </div>
                      ],
                    </div>
                    <div>
                      <span className="text-slate-400">passion:</span>{' '}
                      <span className="text-emerald-300">"Building practical projects"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">openForCollab:</span>{' '}
                      <span className="text-accent-cyan">true</span>
                    </div>
                  </div>
                  <div>&#125;;</div>

                  {/* Terminal Execution Output */}
                  <div className="pt-3 border-t border-slate-800/80 mt-3 text-xs text-slate-400">
                    <span className="text-emerald-400">➜</span>{' '}
                    <span className="text-slate-300">developer.run()</span>
                    <p className="text-accent-cyan text-[11px] mt-1 italic">
                      ✨ Ready to innovate, engineer, and create impactful software.
                    </p>
                  </div>
                </div>

                {/* Floating Chips */}
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-brand-500/10 text-brand-300 border border-brand-500/20">
                    <Code2 className="w-3 h-3 text-brand-400" /> React & Vite
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                    <Cpu className="w-3 h-3" /> Python & AI
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent-violet/10 text-accent-violet border border-accent-violet/20">
                    <Sparkles className="w-3 h-3" /> GenAI Models
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
