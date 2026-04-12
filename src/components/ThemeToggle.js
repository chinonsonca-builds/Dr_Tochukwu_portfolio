"use client";
import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  // Prevent hydration mismatch by not rendering the wrong icon initially
  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle"
      aria-label="Toggle visual theme"
    >
      {theme === 'light' ? '✧ Dark Mode' : '✦ Light Mode'}
    </button>
  );
}
