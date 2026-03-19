import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Abe Isoo',
  description:
    'Learn about the life of Abe Isoo (阿部磯雄): his early life, Christian faith, socialist politics, friendship with Tolstoy, and his founding of Japanese baseball.',
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: 'var(--cream)' }}>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: 'var(--navy)', color: 'white' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>
            Biography
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Abe Isoo
          </h1>
          <p className="text-2xl mb-6" style={{ fontFamily: 'Noto Serif JP, serif', color: 'var(--gold)' }}>
            阿部磯雄
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            1865–1949 · Socialist · Christian · Pacifist · Baseball Pioneer · Friend of Tolstoy
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-16">

        {/* Early Life */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6 pb-4 border-b-2"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', borderColor: 'var(--gold)' }}
          >
            Early Life
          </h2>
          <div className="prose-custom space-y-4">
            <p>
              Abe Isoo was born on February 4, 1865, in Fukuoka, Japan, during the late Edo period
              — a time of profound transformation as Japan opened itself to Western ideas and institutions.
              He grew up in an era when the old samurai class was dissolving and a new Japan was being
              forged through Meiji-era modernization.
            </p>
            <p>
              As a young man, Abe was drawn to Western thought through his education, encountering
              both Christianity and modern political philosophy. He studied at Dōshisha University in
              Kyoto, one of Japan&apos;s first Christian schools founded by Niijima Jō, where he deepened
              his faith and intellectual formation.
            </p>
            <p>
              Abe later studied in the United States and Germany, where he absorbed the ideas of
              Christian socialism and democratic reform that would define his life&apos;s work.
            </p>
          </div>
        </section>

        {/* Christianity and Socialism */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6 pb-4 border-b-2"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', borderColor: 'var(--gold)' }}
          >
            Christianity &amp; Socialism
          </h2>
          <div className="prose-custom space-y-4">
            <p>
              For Abe Isoo, Christianity and socialism were inseparable. He believed that the
              teachings of Jesus — care for the poor, the dignity of every person, non-violence —
              demanded social transformation. This was not a contradiction but a calling.
            </p>
            <p>
              In 1901, Abe co-founded the <strong>Shakai Minshutō</strong> (Social Democratic Party of Japan),
              the first socialist party in Japanese history. The party&apos;s platform called for the
              abolition of class discrimination, disarmament, and universal suffrage. It was dissolved
              by the government just three days after its founding — a sign of how threatening its ideals
              were to the Meiji establishment.
            </p>
            <p>
              Undeterred, Abe continued his advocacy through writing, teaching at Waseda University,
              and organizing. He remained a professor at Waseda for decades, influencing generations of
              Japanese students.
            </p>
          </div>
        </section>

        {/* Tolstoy Friendship */}
        <section className="mb-16 p-8 rounded-lg" style={{ backgroundColor: 'var(--navy)', color: 'white' }}>
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)' }}
          >
            Friendship with Leo Tolstoy
          </h2>
          <div className="space-y-4 text-white/85 leading-relaxed">
            <p>
              Abe Isoo and Leo Tolstoy — separated by continents and cultures — found each other
              through their shared convictions: pacifism, Christian ethics, and opposition to state
              violence. They exchanged letters, a remarkable intellectual friendship that bridged
              Russia and Japan at the turn of the twentieth century.
            </p>
            <p>
              Tolstoy, by then one of the most famous men in the world, recognized in Abe a kindred
              spirit — a Christian thinker willing to challenge power in the name of conscience.
              Their correspondence reflected a global conversation about war, empire, and the moral
              responsibilities of individuals.
            </p>
            <blockquote
              className="border-l-4 pl-6 italic text-xl my-6"
              style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
            >
              &ldquo;The Kingdom of God is within you — and we must build it together.&rdquo;
            </blockquote>
            <p>
              This exchange of letters between a Russian novelist and a Japanese educator stands as
              a testament to the universality of the ideals they shared.
            </p>
          </div>
        </section>

        {/* Baseball */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6 pb-4 border-b-2"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', borderColor: 'var(--gold)' }}
          >
            ⚾ Father of Japanese Baseball
          </h2>
          <div className="prose-custom space-y-4">
            <p>
              Abe Isoo is celebrated as the <strong>&ldquo;Father of Japanese Baseball.&rdquo;</strong>
              He first encountered baseball during his time in the United States and recognized in it
              something more than a game — a vehicle for physical discipline, teamwork, and moral development.
            </p>
            <p>
              Returning to Japan, Abe became a passionate advocate for baseball at Waseda University.
              He founded the Waseda University baseball team and, in 1905, organized the first
              collegiate baseball tournament in Japan, establishing the framework for what would
              become one of the most popular sports in the country.
            </p>
            <p>
              Abe believed that baseball aligned with his deepest values: it required perseverance
              under pressure, respect for opponents, collective effort, and grace in defeat. He taught
              his students that playing baseball was a form of spiritual practice — a way to cultivate
              the inner qualities needed to serve society.
            </p>
            <p>
              Today, Japanese baseball is a cultural institution, followed by millions and celebrated
              as an integral part of Japanese identity. At its roots stands the vision of Abe Isoo.
            </p>
          </div>
        </section>

        {/* Legacy */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6 pb-4 border-b-2"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', borderColor: 'var(--gold)' }}
          >
            Legacy
          </h2>
          <div className="prose-custom space-y-4">
            <p>
              Abe Isoo lived through Japan&apos;s most turbulent decades — the Meiji Restoration,
              the Russo-Japanese War, the rise of militarism, and the catastrophe of World War II.
              Throughout, he remained committed to peace, democracy, and human dignity.
            </p>
            <p>
              He served in the Japanese parliament (the Diet) and continued writing and teaching into
              old age. When the militarists rose to power in the 1930s, his ideals were suppressed
              — but not extinguished.
            </p>
            <p>
              Abe Isoo died on February 10, 1949, at the age of 84, having witnessed Japan&apos;s defeat
              and the beginning of a new democratic era — the very Japan he had dreamed of for a lifetime.
            </p>
            <p>
              His statue stands near Waseda University in Tokyo. His name lives on in the hearts of
              baseball fans, socialists, pacifists, and Christians in Japan. He represents the best
              of what one person&apos;s convictions can accomplish in a single lifetime.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-8">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 font-semibold rounded"
            style={{ backgroundColor: 'var(--red)', color: 'white' }}
          >
            Read Articles About Abe Isoo →
          </Link>
        </div>
      </div>
    </div>
  );
}
