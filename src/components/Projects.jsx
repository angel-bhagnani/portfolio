import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Sparkles, 
  Code2, 
  Eye, 
  Layers 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects({ onShowToast }) {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Artificial Intelligence', 'Digital Productivity'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-slate-50/50 dark:bg-slate-900/30">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/10 text-brand-500 dark:text-brand-400 border border-brand-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Practical <span className="text-gradient">Projects & Applications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Real-world software built to demonstrate practical competencies in modern web development, artificial intelligence, and digital efficiency.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-brand-600 to-accent-cyan text-white shadow-md shadow-brand-500/25 scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 hover:border-brand-500/60 dark:hover:border-brand-500/60 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-300 border border-brand-500/20">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{project.date}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Tagline / Subtitle */}
                  <p className="text-xs font-semibold text-accent-cyan mt-1 mb-3">
                    {project.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Technologies Used */}
                  <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Technologies Used:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="flex items-center gap-2.5 pt-5 mt-4 border-t border-slate-100 dark:border-slate-800">
                    {/* View Project Button */}
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 to-accent-cyan hover:from-brand-500 hover:to-accent-cyan shadow-md shadow-brand-500/20 transition-all duration-200"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Project</span>
                    </button>

                    {/* GitHub Code Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:text-white hover:bg-slate-900 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                      title="View GitHub Repository"
                      aria-label="View source on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub Direct Banner */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Want to see more code repositories and ongoing experiments?{' '}
            <a
              href="https://github.com/angelbhagnani"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-600 dark:text-brand-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Explore my GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </p>
        </div>

      </div>

      {/* Modal Popup */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onShowToast={onShowToast}
        />
      )}
    </section>
  );
}
