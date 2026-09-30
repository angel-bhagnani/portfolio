import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  Code2, 
  Sparkles, 
  MapPin, 
  GraduationCap 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-accent-cyan p-0.5 shadow-sm">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <span className="font-extrabold text-xs text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-cyan">
                    AB
                  </span>
                </div>
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                Angel Bhagnani
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
              B.Tech Student at {personal.college} • AI, Web Development & Digital Productivity Enthusiast.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:text-white hover:bg-slate-900 dark:hover:bg-brand-600 border border-slate-200 dark:border-slate-800 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:text-white hover:bg-blue-600 border border-slate-200 dark:border-slate-800 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:text-white hover:bg-brand-600 border border-slate-200 dark:border-slate-800 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 hover:bg-brand-500 hover:text-white border border-brand-500/30 transition-all shadow-sm"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Angel Bhagnani. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <span>Built with React + Vite + Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
