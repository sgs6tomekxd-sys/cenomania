import React, { useEffect, useState } from 'react';

export const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/10 transition-all text-xl"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};
