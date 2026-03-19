import Link from 'next/link';
import { PostMeta } from '@/lib/posts';
import { useTranslations } from '@/lib/translations';

interface PostCardProps {
  post: PostMeta;
  locale: string;
}

export default function PostCard({ post, locale }: PostCardProps) {
  const t = useTranslations(locale);
  return (
    <article className="card group">
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full font-medium uppercase tracking-wider"
              style={{ backgroundColor: 'var(--cream)', color: 'var(--navy)', border: '1px solid var(--gold)' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-2 group-hover:text-red-700 transition-colors leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>
          <Link href={`/${locale}/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-sm opacity-60 mb-3">
          {new Date(post.date).toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
          {' · '}
          {post.author}
        </p>
        <p className="text-sm leading-relaxed opacity-80 mb-4">{post.excerpt}</p>
        <Link
          href={`/${locale}/blog/${post.slug}`}
          className="text-sm font-semibold uppercase tracking-widest"
          style={{ color: 'var(--red)' }}
        >
          {t.common.readMore} →
        </Link>
      </div>
    </article>
  );
}
