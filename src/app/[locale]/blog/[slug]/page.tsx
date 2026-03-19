import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { getTranslations } from '@/lib/translations';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ISR: revalidate every 60 seconds
export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  const locales = ['en', 'ja'];
  
  return slugs.flatMap(({ slug }) =>
    locales.map((locale) => ({
      slug,
      locale,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  try {
    const post = await getPostData(slug, locale);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        tags: post.tags,
        locale: locale === 'ja' ? 'ja_JP' : 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
      },
      alternates: {
        languages: {
          'en': `/en/blog/${slug}`,
          'ja': `/ja/blog/${slug}`,
        },
      },
    };
  } catch {
    return { title: 'Post Not Found' };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  let post;
  const t = getTranslations(locale);
  
  try {
    post = await getPostData(slug, locale);
  } catch {
    notFound();
  }

  return (
    <div style={{ backgroundColor: 'var(--cream)' }}>
      {/* Post header */}
      <section className="py-16" style={{ backgroundColor: 'var(--navy)', color: 'white' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full uppercase tracking-wider"
                style={{ backgroundColor: 'rgba(212,175,55,0.2)', color: 'var(--gold)', border: '1px solid var(--gold)' }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {post.title}
          </h1>
          <p className="text-sm text-white/60">
            {new Date(post.date).toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            {' · '}
            {post.author}
            {post.readingTime && (
              <>
                {' · '}
                {t.blog.readingTime} {post.readingTime} {t.blog.minutes}
              </>
            )}
          </p>
        </div>
      </section>

      {/* Post content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {post.excerpt && (
          <p
            className="text-xl leading-relaxed mb-8 font-light italic"
            style={{ color: 'var(--navy)', borderLeft: '4px solid var(--gold)', paddingLeft: '1.5rem' }}
          >
            {post.excerpt}
          </p>
        )}
        
        {/* Note for Japanese readers */}
        {locale === 'ja' && (
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              <strong>注記：</strong> この記事は現在英語で書かれています。日本語翻訳版を近日中に公開予定です。
            </p>
          </div>
        )}
        
        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="border-t pt-8" style={{ borderColor: 'var(--gold)' }}>
          <Link
            href={`/${locale}/blog`}
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: 'var(--red)' }}
          >
            ← {t.common.backTo} {t.blog.title}
          </Link>
        </div>
      </div>
    </div>
  );
}