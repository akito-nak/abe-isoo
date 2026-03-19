'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from '@/lib/translations';

interface LanguageSelectorProps {
  locale: string;
}

export default function LanguageSelector({ locale }: LanguageSelectorProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations(locale);

  // Remove the current locale from the pathname to get the base path
  const basePath = pathname.startsWith(`/${locale}`) 
    ? pathname.slice(locale.length + 1) || '/'
    : pathname;

  const getLocalizedPath = (newLocale: string) => {
    return `/${newLocale}${basePath === '/' ? '' : basePath}`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium hover:text-yellow-300 transition-colors duration-200 uppercase tracking-widest"
        style={{ fontFamily: 'Noto Sans JP, sans-serif' }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        {locale === 'ja' ? '日本語' : 'EN'}
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-lg z-20 border border-gray-200">
            <Link
              href={getLocalizedPath('en')}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                locale === 'en' ? 'bg-gray-50 font-semibold' : ''
              }`}
              style={{ color: 'var(--navy)' }}
            >
              {t.common.english}
            </Link>
            <Link
              href={getLocalizedPath('ja')}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                locale === 'ja' ? 'bg-gray-50 font-semibold' : ''
              }`}
              style={{ color: 'var(--navy)' }}
            >
              {t.common.japanese}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}