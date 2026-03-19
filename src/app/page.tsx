import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abe Isoo (阿部磯雄) — Father of Japanese Baseball & Socialist Pioneer',
  description:
    'A memorial website dedicated to Abe Isoo (1865–1949), the Father of Japanese Baseball, socialist, Christian pacifist, and friend of Leo Tolstoy.',
};

export default function HomePage() {
  const allPosts = getSortedPostsData();
  const featuredPosts = allPosts.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-24 md:py-36"
        style={{ backgroundColor: 'var(--navy)' }}
      >
        {/* Decorative baseball diamond */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 rotate-45"
          style={{ border: '3px solid var(--gold)' }}
        />
        <div
          className="absolute right-12 top-1/2 -translate-y-1/2 w-64 h-64 opacity-5 rotate-45"
          style={{ border: '2px solid var(--gold)' }}
        />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Japanese mon / crest decoration */}
            <div className="mb-6 text-4xl">⚾</div>
            <p
              className="text-sm uppercase tracking-widest mb-4 font-medium"
              style={{ color: 'var(--gold)' }}
            >
              1865 – 1949
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Abe Isoo
            </h1>
            <p
              className="text-2xl md:text-3xl mb-6 font-light"
              style={{ color: 'var(--gold)', fontFamily: 'Noto Serif JP, serif' }}
            >
              阿部磯雄
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
              Socialist visionary, Christian pacifist, friend of Leo Tolstoy, and the
              <span style={{ color: 'var(--gold)' }}> Father of Japanese Baseball</span>.
              A man who believed sport and spirit could transform a nation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="btn-primary px-8 py-3 font-semibold rounded"
                style={{ backgroundColor: 'var(--red)', color: 'white' }}
              >
                Discover His Story
              </Link>
              <Link
                href="/blog"
                className="px-8 py-3 font-semibold rounded border-2 text-white hover:bg-white/10 transition-colors"
                style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--light-cream)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title inline-block" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: '700', color: 'var(--navy)' }}>
              A Life of Many Callings
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '⚾',
                title: 'Baseball Pioneer',
                desc: 'Founded collegiate baseball in Japan, believing the sport built character and spirit in young men.',
              },
              {
                icon: '✝',
                title: 'Christian Faith',
                desc: 'A devoted Christian whose faith shaped his pacifism, social justice work, and educational mission.',
              },
              {
                icon: '✊',
                title: 'Socialist Leader',
                desc: "Co-founded the Socialist Democratic Party, advocating for workers' rights and democratic reform.",
              },
              {
                icon: '✉',
                title: "Tolstoy's Friend",
                desc: 'Maintained a correspondence with Leo Tolstoy, sharing ideals of pacifism and moral courage.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-lg"
                style={{ backgroundColor: 'white', border: '1px solid rgba(212, 175, 55, 0.3)' }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-75">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 baseball-stitch" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="japanese-divider mb-8">
            <span className="mx-4 text-2xl" style={{ color: 'var(--gold)' }}>✦</span>
          </div>
          <blockquote
            className="text-2xl md:text-3xl font-light italic mb-6 leading-relaxed"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)' }}
          >
            &ldquo;Baseball is not merely a sport — it is a path to discipline,
            fellowship, and the cultivation of the human spirit.&rdquo;
          </blockquote>
          <cite className="text-sm uppercase tracking-widest opacity-60">— Abe Isoo</cite>
          <div className="japanese-divider mt-8">
            <span className="mx-4 text-2xl" style={{ color: 'var(--gold)' }}>✦</span>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16" style={{ backgroundColor: 'var(--light-cream)' }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)' }}
              >
                From the Blog
              </h2>
              <Link
                href="/blog"
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: 'var(--red)' }}
              >
                All Posts →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: 'var(--navy)', color: 'white' }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <p
            className="text-3xl mb-3 font-bold"
            style={{ fontFamily: 'Noto Serif JP, serif', color: 'var(--gold)' }}
          >
            野球と平和
          </p>
          <p className="text-sm opacity-60 mb-6 uppercase tracking-widest">Baseball and Peace</p>
          <p className="text-lg text-white/80 mb-8">
            Explore the remarkable life of a man who shaped modern Japan through sport,
            faith, and an unwavering commitment to peace and justice.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-3 font-semibold rounded border-2"
            style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
          >
            Learn More About Abe Isoo
          </Link>
        </div>
      </section>
    </>
  );
}
