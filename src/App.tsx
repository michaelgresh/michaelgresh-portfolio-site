// src/App.tsx
import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Resume from "./pages/Resume.tsx";
import ICEMSPwa from "./pages/projects/ICEMSPwa.tsx";
import ReferenceHub from "./pages/projects/ReferenceHub.tsx";
import RescueSync from "./pages/projects/RescueSync.tsx";

function NavItem({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "px-2 py-1 transition-opacity",
          isActive ? "opacity-100 font-medium" : "opacity-80 hover:opacity-100",
        ].join(" ")
      }
      end
    >
      {children}
    </NavLink>
  );
}

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    // Set initial dark mode state on mount
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      {/* Top nav (site-wide) */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-neutral-950/60">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 text-sm">
          <Link to="/" className="font-semibold tracking-tight">
            <img src="/mpglogo.svg" alt="Michael Gresh" className="h-16 w-16 invert dark:invert-0" />
          </Link>
          <div className="flex items-center gap-6">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/resume">Résumé</NavItem>
            <DarkModeToggle />
          </div>
        </nav>
      </header>

      {/* Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects/icems-pwa" element={<ICEMSPwa />} />
          <Route path="/projects/reference-hub" element={<ReferenceHub />} />
          <Route path="/projects/rescue-sync" element={<RescueSync />} />
        </Routes>
      </main>

      {/* Footer (site-wide) */}
      <footer className="mt-20 border-t border-black/5 py-10 text-sm dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 opacity-80">
          © {new Date().getFullYear()} Michael Gresh
        </div>
      </footer>
    </div>
  );
}
