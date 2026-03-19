import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslations } from '@/lib/translations';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ja' }];
}

export async function generateMetadata({
  params: { locale },
}: LocaleLayoutProps): Promise<Metadata> {
  const t = useTranslations(locale);
  
  return {
    metadataBase: new URL('https://abe-isoo.org'),
    title: {
      default: t.meta.siteTitle,
      template: `%s | ${t.homepage.title}`,
    },
    description: t.meta.siteDescription,
    keywords: [
      'Abe Isoo',
      '阿部磯雄',
      'Japanese baseball history',
      'Japanese socialism',
      'Socialist Democratic Party Japan',
      'Father of Japanese Baseball',
      'Leo Tolstoy Japan',
      'Japanese pacifist',
      'Christian socialist Japan',
      'collegiate baseball Japan',
    ],
    authors: [{ name: 'Abe Isoo Archive' }],
    openGraph: {
      type: 'website',
      locale: locale === 'ja' ? 'ja_JP' : 'en_US',
      url: 'https://abe-isoo.org',
      siteName: t.homepage.title,
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      languages: {
        'en': '/en',
        'ja': '/ja',
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}