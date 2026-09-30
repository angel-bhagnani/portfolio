import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  Calendar, 
  ExternalLink, 
  CheckCircle, 
  PlusCircle, 
  Medal, 
  FileCheck, 
  Flame, 
  X, 
  Plus 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements({ onShowToast }) {
  const [achievementsList, setAchievementsList] = useState(portfolioData.achievements);
  const [filter, setFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Certifications');
  const [newIssuer, setNewIssuer] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const categories = ['All', 'Certifications', 'Hackathons', 'Courses', 'Awards', 'Other'];

  const filteredAchievements = filter === 'All'
    ? achievementsList
    : achievementsList.filter(a => a.category === filter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Certifications':
        return <FileCheck className="w-5 h-5 text-brand-400" />;
      case 'Hackathons':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Courses':
        return <CheckCircle className="w-5 h-5 text-accent-cyan" />;
      case 'Awards':
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      default:
        return <Medal className="w-5 h-5 text-emerald-400" />;
    }
  };

  const handleAddAchievement = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newIssuer.trim()) {
      if (onShowToast) onShowToast('Please provide both a Title and Issuer/Organization.');
      return;
    }

    const newItem = {
      id: `custom-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      issuer: newIssuer,
      date: newDate || '2024',
      description: newDescription || 'Successfully achieved with high dedication and skill mastery.',
      badge: newCategory
    };

    setAchievementsList([newItem, ...achievementsList]);
    setShowAddModal(false);
    setNewTitle('');
    setNewIssuer('');
    setNewDate('');
    setNewDescription('');

    if (onShowToast) {
      onShowToast(`Achievement "${newItem.title}" added successfully!`);
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-violet/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Honors & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A structured record of certifications, hackathon participation, verified coursework, and academic awards.
          </p>
        </div>

        {/* Filter Pills & Add Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
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

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-brand-600 dark:hover:bg-brand-600 border border-slate-700 transition-all shadow-sm shrink-0"
          >
            <Plus className="w-4 h-4 text-accent-cyan" />
            <span>Add Achievement</span>
          </button>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 shadow-md shadow-slate-200/50 dark:shadow-black/20 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-300 border border-brand-500/20">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-brand-600 dark:text-accent-cyan mb-3">
                  {item.issuer}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {item.date}
                </span>
                <span className="text-[11px] font-semibold text-emerald-500 dark:text-emerald-400">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Customization Tip Note for Angel */}
        <div className="mt-12 p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto">
          💡 <span className="font-semibold text-slate-900 dark:text-slate-200">Developer Tip:</span> You can click <strong>"Add Achievement"</strong> above anytime, or permanently add new certifications, hackathons, and awards in <code className="font-mono text-brand-600 dark:text-brand-400">src/data/portfolioData.js</code>.
        </div>

      </div>

      {/* Add Achievement Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setShowAddModal(false)}
          />
          <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl z-10 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                Add New Achievement
              </h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddAchievement} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AWS Cloud Practitioner / Hackathon 1st Place"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Certifications">Certifications</option>
                    <option value="Hackathons">Hackathons</option>
                    <option value="Courses">Courses</option>
                    <option value="Awards">Awards</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Date / Year
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2024"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Issuer / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Coursera, JECRC University, Google Cloud"
                  value={newIssuer}
                  onChange={(e) => setNewIssuer(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Short Description
                </label>
                <textarea
                  rows="3"
                  placeholder="Summary of what you built or learned..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-brand-600 to-accent-cyan shadow-md hover:opacity-95"
                >
                  Save Achievement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
