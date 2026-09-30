# Angel Bhagnani — Personal Portfolio Website

Modern, responsive, and high-performance personal portfolio website built for **Angel Bhagnani** — B.Tech Student at **JECRC University** specializing in Artificial Intelligence, Web Development, and Digital Productivity.

---

## 🚀 Live Demo & Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment Ready**: Fully configured for [Vercel](https://vercel.com/) via `vercel.json`

---

## ✨ Features

- **Hero Section**: Dynamic developer presentation with live availability status, glowing typography, quick copy-to-clipboard email pill, and an interactive developer terminal card.
- **About Me**: Narrative student journey, core principles, and key statistics bridging computer science theory and practical implementation.
- **Education**: Detailed undergraduate profile at **JECRC University** (2023 - 2027) with interactive coursework cards in AI/ML, Web Technologies, DSA, and DBMS.
- **Skills Matrix**: Interactive cards for **HTML, CSS, JavaScript, Python, Artificial Intelligence, Generative AI, Web Development, and Digital Productivity** with category filtering and visual proficiency bars.
- **Projects Showcase**: High-impact cards for:
  1. *Personal Portfolio Website*
  2. *AI Website Project*
  3. *Student Productivity Project*
  - Includes interactive deep-dive modals, architecture breakdown, and live preview triggers.
- **Achievements & Certifications**: Modular milestone records with filter tabs (*All, Certifications, Hackathons, Courses, Awards, Other*) plus an in-browser **"Add Achievement"** modal.
- **Contact Hub**: Direct email copy with instant toast confirmation, links to LinkedIn & GitHub, location badge (*Arain (Ajmer), India*), and a working message form with `mailto:` fallback.
- **Theme Support**: Seamless Dark Mode / Light Mode toggle with persistent local storage.
- **Responsive & Accessible**: 100% mobile-friendly with animated hamburger drawer and accessible semantics.

---

## 🛠️ Local Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📂 Easy Customization

All personal details, skills, projects, and achievements are organized in a single configuration file:
👉 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

To update your resume, bio, links, or projects, simply edit this file!

---

## 🌐 Deploy to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import this repository.
4. Framework preset **Vite** will be auto-detected. Click **Deploy**!
