import { getSortedPostsData } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles and reflections on the life and legacy of Abe Isoo — baseball, socialism, pacifism, and Japanese history.',
};

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <div style={{ backgroundColor: 'var(--cream)' }}>
      {/* Header */}
      <section className="py-16" style={{ backgroundColor: 'var(--navy)', color: 'white' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest mb-3" style={{ color: 'var(--gold)' }}>
            Articles &amp; Reflections
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            The Blog
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Exploring the life, times, and legacy of Abe Isoo through essays, research,
            and historical reflection.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {allPosts.length === 0 ? (
          <div className="text-center py-16 opacity-60">
            <p className="text-xl mb-2">No posts yet.</p>
            <p className="text-sm">Check back soon for articles about Abe Isoo.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
