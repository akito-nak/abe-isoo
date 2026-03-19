'use client';
import Link from 'next/link';
import { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import { useTranslations } from '@/lib/translations';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations(locale);

  return (
    <header style={{ backgroundColor: 'var(--navy)' }} className="text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex flex-col leading-tight">
          <span className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)' }}>
            {locale === 'ja' ? t.homepage.title : 'Abe Isoo'}
          </span>
          <span className="text-sm opacity-80" style={{ fontFamily: 'Noto Serif JP, serif' }}>
            {locale === 'ja' ? t.homepage.subtitle : '阿部磯雄'}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: `/${locale}`, label: t.common.home },
            { href: `/${locale}/about`, label: t.common.about },
            { href: `/${locale}/blog`, label: t.common.blog },
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
          <LanguageSelector locale={locale} />
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
            { href: `/${locale}`, label: t.common.home },
            { href: `/${locale}/about`, label: t.common.about },
            { href: `/${locale}/blog`, label: t.common.blog },
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
          <div className="py-2 border-t border-white/10 mt-2">
            <LanguageSelector locale={locale} />
          </div>
        </nav>
      )}
    </header>
  );
}
