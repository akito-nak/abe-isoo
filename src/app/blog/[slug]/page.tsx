import { getPostData, getAllPostSlugs } from '@/lib/posts';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ISR: revalidate every 60 seconds
export const revalidate = 60;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug);
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
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
      },
    };
  } catch {
    return { title: 'Post Not Found' };
  }
}

export default async function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = await getPostData(params.slug);
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
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            {' · '}
            {post.author}
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
        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="border-t pt-8" style={{ borderColor: 'var(--gold)' }}>
          <Link
            href="/blog"
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: 'var(--red)' }}
          >
            ← Back to All Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
