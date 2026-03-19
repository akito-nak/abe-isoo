import Link from 'next/link';
import { PostMeta } from '@/lib/posts';

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
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
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-sm opacity-60 mb-3">
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          {' · '}
          {post.author}
        </p>
        <p className="text-sm leading-relaxed opacity-80 mb-4">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold uppercase tracking-widest"
          style={{ color: 'var(--red)' }}
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
