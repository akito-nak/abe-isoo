'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: 'var(--navy)' }} className="text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)' }}>
            Abe Isoo
          </span>
          <span className="text-sm opacity-80" style={{ fontFamily: 'Noto Serif JP, serif' }}>
            阿部磯雄
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/blog', label: 'Blog' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium hover:text-yellow-300 transition-colors duration-200 uppercase tracking-widest"
              style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{ backgroundColor: 'var(--dark-navy)' }}>
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/blog', label: 'Blog' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="py-2 text-sm font-medium hover:text-yellow-300 transition-colors border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
