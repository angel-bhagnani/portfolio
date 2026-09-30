import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const { personal } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast(`Copied to clipboard: ${personal.email}`);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      if (onShowToast) onShowToast('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending with nice UX feedback, and offer mailto
    setTimeout(() => {
      setIsSubmitting(false);
      if (onShowToast) {
        onShowToast(`Thank you, ${formState.name}! Your message has been received.`);
      }
      
      // Also construct mailto fallback in case user wants to send directly via mail client
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Angel,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Optional trigger for desktop email clients
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-500/10 text-brand-500 dark:text-brand-400 border border-brand-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's <span className="text-gradient">Connect & Collaborate</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Have an opportunity, project idea, or just want to discuss Artificial Intelligence and Web Technologies? Reach out!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy & Direct Mail */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-black/20 hover:border-brand-500/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-brand-500 transition-colors break-all"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-black/20 hover:border-blue-500/40 transition-all flex items-center justify-between block"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">
                    LinkedIn Network
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    linkedin.com/in/angelbhagnani
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub Card */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-black/20 hover:border-brand-500/40 transition-all flex items-center justify-between block"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">
                    GitHub Code
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    github.com/angelbhagnani
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-black/20 flex items-center gap-3">
              <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">
                  Location
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {personal.location}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20">
              <div className="mb-6 space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  Send Me a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Feel free to send inquiries, feedback, or collaborative proposals.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Tech Discussion"
                    value={formState.subject}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Hello Angel, I came across your portfolio and would like to talk about..."
                    value={formState.message}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-accent-cyan hover:opacity-95 shadow-lg shadow-brand-500/25 transition-all disabled:opacity-50 text-sm sm:text-base cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
