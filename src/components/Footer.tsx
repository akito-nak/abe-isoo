import Link from 'next/link';
import { useTranslations } from '@/lib/translations';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations(locale);
  return (
    <footer style={{ backgroundColor: 'var(--navy)', color: 'var(--cream)' }} className="mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)' }}>
              {locale === 'ja' ? t.homepage.title : 'Abe Isoo'} <span style={{ fontFamily: 'Noto Serif JP, serif' }}>
                {locale === 'ja' ? t.homepage.subtitle : '阿部磯雄'}
              </span>
            </h3>
            <p className="text-sm opacity-75 leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 uppercase tracking-widest text-sm" style={{ color: 'var(--gold)' }}>
              {locale === 'ja' ? 'ナビゲート' : 'Navigate'}
            </h4>
            <ul className="space-y-2 text-sm opacity-75">
              {[
                { href: `/${locale}`, label: t.common.home },
                { href: `/${locale}/about`, label: t.common.about },
                { href: `/${locale}/blog`, label: t.common.blog },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:opacity-100 hover:text-yellow-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 uppercase tracking-widest text-sm" style={{ color: 'var(--gold)' }}>
              {locale === 'ja' ? '遺産' : 'Legacy'}
            </h4>
            <ul className="space-y-1 text-sm opacity-75">
              <li>⚾ {t.homepage.fatherOfBaseball}</li>
              <li>✝ {t.homepage.christianPacifist}</li>
              <li>📜 {locale === 'ja' ? '社会民主党' : 'Socialist Democratic Party'}</li>
              <li>✉ {t.homepage.friendOfTolstoy}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 text-center text-xs opacity-50">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
