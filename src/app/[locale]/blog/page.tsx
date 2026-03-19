import { getSortedPostsData } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import { useTranslations } from '@/lib/translations';
import type { Metadata } from 'next';

interface BlogPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: BlogPageProps): Promise<Metadata> {
  const t = useTranslations(locale);
  
  return {
    title: t.blog.title,
    description: locale === 'ja'
      ? '阿部磯雄の生涯と遺産に関する記事と考察—野球、社会主義、平和主義、そして日本の歴史。'
      : 'Articles and reflections on the life and legacy of Abe Isoo — baseball, socialism, pacifism, and Japanese history.',
  };
}

export default function BlogPage({ params: { locale } }: BlogPageProps) {
  const allPosts = getSortedPostsData(locale);
  const t = useTranslations(locale);

  return (
    <div style={{ backgroundColor: 'var(--cream)' }}>
      {/* Header */}
      <section className="py-16" style={{ backgroundColor: 'var(--navy)', color: 'white' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest mb-3" style={{ color: 'var(--gold)' }}>
            {locale === 'ja' ? '記事と考察' : 'Articles & Reflections'}
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t.blog.title}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {allPosts.length === 0 ? (
          <div className="text-center py-16 opacity-60">
            <p className="text-xl mb-2">
              {locale === 'ja' ? 'まだ記事がありません。' : 'No posts yet.'}
            </p>
            <p className="text-sm">
              {locale === 'ja' ? '阿部磯雄に関する記事をお楽しみに。' : 'Check back soon for articles about Abe Isoo.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <PostCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}