import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return true; // Default to sleek dark mode
  });

  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  const showToast = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
  };

  const closeToast = () => {
    setToastMessage('');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-brand-500/30 selection:text-brand-300 font-sans transition-colors duration-300">
      {/* Sticky Header */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main>
        <Hero onShowToast={showToast} />
        <About />
        <Education />
        <Skills />
        <Projects onShowToast={showToast} />
        <Achievements onShowToast={showToast} />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Toast Notifications */}
      <Toast 
        message={toastMessage} 
        type={toastType} 
        onClose={closeToast} 
      />
    </div>
  );
}
