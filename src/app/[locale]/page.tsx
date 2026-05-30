import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import ResponsiveHeroImage from '@/components/ResponsiveHeroImage';
import { getTranslations } from '@/lib/translations';
import type { Metadata } from 'next';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  
  return {
    title: t.meta.siteTitle,
    description: t.meta.siteDescription,
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const allPosts = getSortedPostsData(locale);
  const featuredPosts = allPosts.slice(0, 3);
  const t = getTranslations(locale);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-12 md:py-24"
        style={{ backgroundColor: 'var(--navy)' }}
      >
        {/* Decorative baseball diamond */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 rotate-45 hidden lg:block"
          style={{ border: '3px solid var(--gold)' }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="mb-6 text-4xl">⚾</div>
              <p
                className="text-sm uppercase tracking-widest mb-4 font-medium"
                style={{ color: 'var(--gold)' }}
              >
                {t.homepage.lifespan}
              </p>
              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {locale === 'ja' ? t.homepage.title : 'Abe Isoo'}
              </h1>
              <p
                className="text-xl md:text-2xl lg:text-3xl mb-6 font-light"
                style={{ color: 'var(--gold)', fontFamily: 'Noto Serif JP, serif' }}
              >
                {locale === 'ja' ? t.homepage.subtitle : '阿部磯雄'}
              </p>
              <div className="mb-8">
                <h2
                  className="text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {t.homepage.description}
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  {t.homepage.heroText}
                </p>
              </div>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300 border-2 border-white/20 text-sm md:text-base"
              >
                {t.homepage.exploreLifeWork}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] max-w-md mx-auto lg:max-w-none">
                <ResponsiveHeroImage
                  src="/images/abe-isoo-portrait.webp"
                  alt={locale === 'ja'
                    ? '阿部磯雄の肖像イラスト'
                    : 'Illustrated portrait of Abe Isoo'
                  }
                />
                {/* Image Credit */}
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="text-xs text-white/70 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                    {locale === 'ja' ? '阿部磯雄（イラスト）' : 'Abe Isoo (illustration)'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚾',
                title: t.homepage.fatherOfBaseball,
                description: locale === 'ja' 
                  ? '早稲田大学で野球を指導し、1905年に日本初の大学野球トーナメントを開催。'
                  : 'Introduced baseball to Waseda University and organized Japan\'s first collegiate tournament in 1905.',
              },
              {
                icon: '✊',
                title: t.homepage.socialDistPioneer,
                description: locale === 'ja' 
                  ? '社会民主党を創設し、労働者の権利と社会正義のために生涯戦い続けた。'
                  : 'Founded the Socialist Democratic Party and fought for workers\' rights and social justice.',
              },
              {
                icon: '✝️',
                title: t.homepage.christianPacifist,
                description: locale === 'ja' 
                  ? 'キリスト教信仰に基づき、平和主義を貫き、戦争に反対し続けた。'
                  : 'Advocated for peace and non-violence, opposing war based on his Christian faith.',
              },
              {
                icon: '✉️',
                title: t.homepage.friendOfTolstoy,
                description: locale === 'ja' 
                  ? 'レフ・トルストイと文通を交わし、平和と非暴力について議論した。'
                  : 'Corresponded with Leo Tolstoy about peace, non-violence, and social reform.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: 'var(--navy)', fontFamily: 'Playfair Display, serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="py-24" style={{ backgroundColor: 'var(--cream)' }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className="text-4xl font-bold mb-4"
                style={{ color: 'var(--navy)', fontFamily: 'Playfair Display, serif' }}
              >
                {t.homepage.featuredArticles}
              </h2>
              <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--gold)' }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} locale={locale} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-full hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'var(--navy)', color: 'white' }}
              >
                {locale === 'ja' ? 'すべての記事を見る' : 'View All Articles'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}