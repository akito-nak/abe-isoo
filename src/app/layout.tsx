import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://abe-isoo.org'),
  title: {
    default: 'Abe Isoo (阿部磯雄) — Father of Japanese Baseball & Socialist Pioneer',
    template: '%s | Abe Isoo',
  },
  description:
    'Dedicated to Abe Isoo (1865–1949), Japanese socialist, Christian pacifist, friend of Leo Tolstoy, and the Father of Japanese Baseball.',
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
    locale: 'en_US',
    url: 'https://abe-isoo.org',
    siteName: 'Abe Isoo',
    title: 'Abe Isoo (阿部磯雄) — Father of Japanese Baseball & Socialist Pioneer',
    description:
      'Dedicated to Abe Isoo (1865–1949), Japanese socialist, Christian pacifist, friend of Leo Tolstoy, and the Father of Japanese Baseball.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abe Isoo (阿部磯雄) — Father of Japanese Baseball & Socialist Pioneer',
    description:
      'Dedicated to Abe Isoo (1865–1949), Japanese socialist, Christian pacifist, friend of Leo Tolstoy, and the Father of Japanese Baseball.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
