'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/publications', label: 'Publications' },
  { href: '/media', label: 'Media & Presentations' },
  { href: '/contact', label: 'Consultation' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Logo */}
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="https://res.cloudinary.com/dnafn0y7z/image/upload/w_150,h_150,c_fill,r_max/v1/Dr_Toch_Profile_hr5g6x.jpg"
            alt="Home"
            className="nav-profile-img"
          />
        </Link>

        {/* Desktop Links */}
        <div className="navbar-links desktop-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Right Side: Theme Toggle + Hamburger */}
        <div className="mobile-nav-controls">
          <ThemeToggle />
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              // X icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <>
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="mobile-menu-link" onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
          </div>
          {/* Backdrop */}
          <div className="mobile-menu-backdrop" onClick={closeMenu} />
        </>
      )}
    </nav>
  );
}
