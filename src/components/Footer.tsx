import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--navy)', color: 'var(--cream)' }} className="mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)' }}>
              Abe Isoo <span style={{ fontFamily: 'Noto Serif JP, serif' }}>阿部磯雄</span>
            </h3>
            <p className="text-sm opacity-75 leading-relaxed">
              1865–1949. Japanese socialist, Christian pacifist, friend of Leo Tolstoy,
              and the Father of Japanese Baseball.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 uppercase tracking-widest text-sm" style={{ color: 'var(--gold)' }}>
              Navigate
            </h4>
            <ul className="space-y-2 text-sm opacity-75">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Abe Isoo' },
                { href: '/blog', label: 'Blog & Articles' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:opacity-100 hover:text-yellow-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 uppercase tracking-widest text-sm" style={{ color: 'var(--gold)' }}>
              Legacy
            </h4>
            <ul className="space-y-1 text-sm opacity-75">
              <li>⚾ Father of Japanese Baseball</li>
              <li>✝ Christian Pacifist</li>
              <li>📜 Socialist Democratic Party</li>
              <li>✉ Correspondent of Leo Tolstoy</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 text-center text-xs opacity-50">
          <p>A memorial site dedicated to the life and legacy of Abe Isoo (阿部磯雄).</p>
        </div>
      </div>
    </footer>
  );
}
