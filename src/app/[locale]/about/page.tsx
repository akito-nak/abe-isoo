import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from '@/lib/translations';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  return {
    title: t.about.title,
    description: locale === 'ja'
      ? '阿部磯雄（1865-1949）の生涯について学びましょう：彼の幼少期、キリスト教信仰、社会主義政治、トルストイとの友情、そして日本野球の創設について。'
      : 'Learn about the life of Abe Isoo (阿部磯雄): his early life, Christian faith, socialist politics, friendship with Tolstoy, and his founding of Japanese baseball.',
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <div style={{ backgroundColor: 'var(--cream)' }}>
      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: 'var(--navy)', color: 'white' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>
            {locale === 'ja' ? '伝記' : 'Biography'}
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {locale === 'ja' ? t.homepage.title : 'Abe Isoo'}
          </h1>
          <p className="text-2xl mb-6" style={{ fontFamily: 'Noto Serif JP, serif', color: 'var(--gold)' }}>
            {locale === 'ja' ? t.homepage.subtitle : '阿部磯雄'}
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.homepage.lifespan} · {t.homepage.socialDistPioneer} · {t.homepage.christianPacifist} · {t.homepage.fatherOfBaseball} · {t.homepage.friendOfTolstoy}
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
            {t.about.birthAndEarlyLife}
          </h2>
          <div className="prose-custom space-y-4">
            {locale === 'ja' ? (
              <>
                <p>
                  阿部磯雄は1865年2月4日、福岡県に生まれました。江戸時代末期の激動の時代で、日本が西洋の思想と制度に開放されつつありました。
                  明治維新による近代化の中で、旧武士階級が解体され、新しい日本が形成されていく時代に彼は育ちました。
                </p>
                <p>
                  青年期、阿部は教育を通じて西洋思想に魅力を感じ、キリスト教と近代政治哲学に出会いました。
                  新島襄によって設立された日本初のキリスト教学校の一つである同志社大学で学び、そこで信仰と知的形成を深めました。
                </p>
                <p>
                  阿部はその後、アメリカとドイツに留学し、人生の仕事を決定づけることになるキリスト教社会主義と民主改革の思想を吸収しました。
                </p>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </section>

        {/* Christianity and Socialism */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6 pb-4 border-b-2"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', borderColor: 'var(--gold)' }}
          >
            {t.about.socialismAndChristianity}
          </h2>
          <div className="prose-custom space-y-4">
            {locale === 'ja' ? (
              <>
                <p>
                  阿部磯雄にとって、キリスト教と社会主義は切り離せないものでした。イエスの教え—貧しい人々への配慮、すべての人の尊厳、非暴力—は社会変革を要求していると彼は信じていました。
                  これは矛盾ではなく、使命だったのです。
                </p>
                <p>
                  1901年、阿部は<strong>社会民主党</strong>を共同設立しました。これは日本史上初の社会主義政党でした。
                  党の綱領は階級差別の廃止、軍縮、普通選挙権を謳っていました。党は設立からわずか3日後に政府によって解散させられました—その理想がいかに明治体制にとって脅威だったかを示すものでした。
                </p>
                <p>
                  しかし阿部はひるまず、著述、早稲田大学での教鞭、そして組織活動を通じて提唱を続けました。
                  彼は何十年にもわたって早稲田大学の教授を務め、何世代もの日本の学生に影響を与えました。
                </p>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </section>

        {/* Tolstoy Friendship */}
        <section className="mb-16 p-8 rounded-lg" style={{ backgroundColor: 'var(--navy)', color: 'white' }}>
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--gold)' }}
          >
            {locale === 'ja' ? 'レフ・トルストイとの友情' : 'Friendship with Leo Tolstoy'}
          </h2>
          <div className="space-y-4 text-white/85 leading-relaxed">
            {locale === 'ja' ? (
              <>
                <p>
                  阿部磯雄とレフ・トルストイ—大陸と文化によって隔てられた二人—は、共通の信念を通じて互いを見出しました：平和主義、キリスト教倫理、国家暴力への反対。
                  彼らは手紙を交わし、20世紀初頭にロシアと日本を結んだ注目すべき知的友情を築きました。
                </p>
                <p>
                  その時すでに世界で最も有名な人物の一人だったトルストイは、阿部の中に同志を認めました—良心の名において権力に挑戦する意志を持つキリスト教思想家を。
                  彼らの往復書簡は、戦争、帝国、そして個人の道徳的責任についてのグローバルな対話を反映していました。
                </p>
                <blockquote
                  className="border-l-4 pl-6 italic text-xl my-6"
                  style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
                >
                  「神の国はあなたがたの内にある—そして私たちはそれを共に築かなければならない。」
                </blockquote>
                <p>
                  ロシアの小説家と日本の教育者の間でのこの手紙の交換は、彼らが共有した理想の普遍性を物語る証言として立っています。
                </p>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </section>

        {/* Baseball */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6 pb-4 border-b-2"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', borderColor: 'var(--gold)' }}
          >
            ⚾ {t.about.baseball}
          </h2>
          <div className="prose-custom space-y-4">
            {locale === 'ja' ? (
              <>
                <p>
                  阿部磯雄は<strong>「日本野球の父」</strong>として称えられています。
                  彼は初めてアメリカ滞在中に野球に出会い、その中に単なるスポーツ以上のもの—身体的鍛錬、チームワーク、そして道徳的発達の手段—を認めました。
                </p>
                <p>
                  日本に帰国した阿部は、早稲田大学で野球の熱心な擁護者となりました。
                  彼は早稲田大学野球部を設立し、1905年に日本初の大学野球トーナメントを組織し、後に国内で最も人気のあるスポーツの一つとなる枠組みを確立しました。
                </p>
                <p>
                  阿部は野球が彼の最も深い価値観と一致すると信じていました：それにはプレッシャーの下での忍耐、対戦相手への敬意、集団的努力、そして敗北における品位が必要だったのです。
                  彼は学生たちに、野球をすることは精神的実践の一形態—社会に奉仕するために必要な内面の資質を養う方法だと教えました。
                </p>
                <p>
                  今日、日本野球は文化的制度であり、数百万人に愛され、日本のアイデンティティの不可欠な部分として祝われています。その根底には阿部磯雄のビジョンが立っています。
                </p>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </section>

        {/* Legacy */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6 pb-4 border-b-2"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)', borderColor: 'var(--gold)' }}
          >
            {t.about.legacy}
          </h2>
          <div className="prose-custom space-y-4">
            {locale === 'ja' ? (
              <>
                <p>
                  阿部磯雄は日本の最も激動の数十年を生き抜きました—明治維新、日露戦争、軍国主義の台頭、そして第二次世界大戦の破滅。
                  その間ずっと、彼は平和、民主主義、そして人間の尊厳に忠実であり続けました。
                </p>
                <p>
                  彼は日本の議会（帝国議会）で議員を務め、高齢まで著述と教育を続けました。1930年代に軍国主義者たちが権力を握った時、彼の理想は弾圧されました—しかし絶滅はしませんでした。
                </p>
                <p>
                  阿部磯雄は1949年2月10日、84歳で逝去しました。日本の敗北と新しい民主主義時代の始まり—まさに彼が生涯夢見てきた日本—を目の当たりにしてでした。
                </p>
                <p>
                  彼の銅像は東京の早稲田大学近くに立っています。彼の名前は日本の野球ファン、社会主義者、平和主義者、そしてキリスト教徒の心の中に生き続けています。
                  彼は一人の人間の信念が一生涯で成し遂げることができる最善のものを表しています。
                </p>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-8">
          <Link
            href={`/${locale}/blog`}
            className="inline-block px-8 py-3 font-semibold rounded"
            style={{ backgroundColor: 'var(--red)', color: 'white' }}
          >
            {locale === 'ja' ? '阿部磯雄に関する記事を読む →' : 'Read Articles About Abe Isoo →'}
          </Link>
        </div>
      </div>
    </div>
  );
}