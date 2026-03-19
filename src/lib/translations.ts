export interface Translation {
  common: {
    home: string;
    about: string;
    blog: string;
    readMore: string;
    backTo: string;
    language: string;
    english: string;
    japanese: string;
  };
  homepage: {
    title: string;
    subtitle: string;
    description: string;
    lifespan: string;
    heroText: string;
    socialDistPioneer: string;
    fatherOfBaseball: string;
    christianPacifist: string;
    friendOfTolstoy: string;
    exploreLifeWork: string;
    featuredArticles: string;
  };
  about: {
    title: string;
    subtitle: string;
    birthAndEarlyLife: string;
    birthAndEarlyLifeContent: string;
    socialismAndChristianity: string;
    socialismAndChristianityContent: string;
    baseball: string;
    baseballContent: string;
    laterYears: string;
    laterYearsContent: string;
    legacy: string;
    legacyContent: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readingTime: string;
    minutes: string;
  };
  footer: {
    description: string;
    rights: string;
  };
  meta: {
    siteTitle: string;
    siteDescription: string;
    ogTitle: string;
    ogDescription: string;
  };
}

const translations: Record<string, Translation> = {
  en: {
    common: {
      home: 'Home',
      about: 'About',
      blog: 'Blog',
      readMore: 'Read More',
      backTo: 'Back to',
      language: 'Language',
      english: 'English',
      japanese: '日本語',
    },
    homepage: {
      title: 'Abe Isoo',
      subtitle: '阿部磯雄',
      description: 'Father of Japanese Baseball & Socialist Pioneer',
      lifespan: '1865 – 1949',
      heroText: 'A visionary who transformed Japan through baseball, socialism, and Christian pacifism.',
      socialDistPioneer: 'Socialist Pioneer',
      fatherOfBaseball: 'Father of Japanese Baseball',
      christianPacifist: 'Christian Pacifist',
      friendOfTolstoy: 'Friend of Leo Tolstoy',
      exploreLifeWork: 'Explore his life and work',
      featuredArticles: 'Featured Articles',
    },
    about: {
      title: 'About Abe Isoo',
      subtitle: 'The Life of a Visionary',
      birthAndEarlyLife: 'Birth and Early Life',
      birthAndEarlyLifeContent: 'Born in Fukuoka Prefecture in 1865, Abe Isoo grew up during the tumultuous Meiji period. His early exposure to Western ideas and Christianity would profoundly shape his worldview.',
      socialismAndChristianity: 'Socialism and Christianity',
      socialismAndChristianityContent: 'Abe uniquely combined Christian faith with socialist ideology, founding the Socialist Democratic Party and advocating for workers\' rights and social justice throughout his life.',
      baseball: 'The Father of Japanese Baseball',
      baseballContent: 'After studying in the United States, Abe brought baseball to Waseda University and organized Japan\'s first collegiate baseball tournament in 1905, forever changing Japanese sports culture.',
      laterYears: 'Later Years and Pacifism',
      laterYearsContent: 'Throughout his life, Abe remained committed to pacifism, opposing Japanese militarism and maintaining correspondence with Leo Tolstoy about peace and non-violence.',
      legacy: 'Legacy',
      legacyContent: 'Abe Isoo\'s influence on Japanese society extends far beyond baseball. His integration of Western democratic ideals with Japanese culture helped shape modern Japan.',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Exploring the Life and Times of Abe Isoo',
      readingTime: 'Reading time:',
      minutes: 'minutes',
    },
    footer: {
      description: 'A memorial website dedicated to Abe Isoo (1865–1949), the Father of Japanese Baseball, socialist, Christian pacifist, and friend of Leo Tolstoy.',
      rights: 'All rights reserved. Content available under Creative Commons.',
    },
    meta: {
      siteTitle: 'Abe Isoo (阿部磯雄) — Father of Japanese Baseball & Socialist Pioneer',
      siteDescription: 'Dedicated to Abe Isoo (1865–1949), Japanese socialist, Christian pacifist, friend of Leo Tolstoy, and the Father of Japanese Baseball.',
      ogTitle: 'Abe Isoo (阿部磯雄) — Father of Japanese Baseball & Socialist Pioneer',
      ogDescription: 'Dedicated to Abe Isoo (1865–1949), Japanese socialist, Christian pacifist, friend of Leo Tolstoy, and the Father of Japanese Baseball.',
    },
  },
  ja: {
    common: {
      home: 'ホーム',
      about: 'について',
      blog: 'ブログ',
      readMore: '続きを読む',
      backTo: '戻る',
      language: '言語',
      english: 'English',
      japanese: '日本語',
    },
    homepage: {
      title: '阿部磯雄',
      subtitle: 'Abe Isoo',
      description: '日本野球の父・社会主義者',
      lifespan: '1865年 – 1949年',
      heroText: '野球、社会主義、キリスト教平和主義を通じて日本を変革した先見者。',
      socialDistPioneer: '社会主義の先駆者',
      fatherOfBaseball: '日本野球の父',
      christianPacifist: 'キリスト教平和主義者',
      friendOfTolstoy: 'トルストイの友人',
      exploreLifeWork: '彼の生涯と業績を探る',
      featuredArticles: '注目記事',
    },
    about: {
      title: '阿部磯雄について',
      subtitle: '先見者の生涯',
      birthAndEarlyLife: '生い立ちと青年時代',
      birthAndEarlyLifeContent: '1865年、福岡県に生まれた阿部磯雄は、激動の明治時代を生きました。幼い頃から西洋思想とキリスト教に触れ、彼の世界観が形成されました。',
      socialismAndChristianity: '社会主義とキリスト教',
      socialismAndChristianityContent: '阿部は、キリスト教信仰と社会主義イデオロギーを独特に組み合わせ、社会民主党を創設し、生涯にわたって労働者の権利と社会正義を提唱しました。',
      baseball: '日本野球の父',
      baseballContent: 'アメリカ留学後、阿部は早稲田大学に野球を持ち込み、1905年に日本初の大学野球トーナメントを組織し、日本のスポーツ文化を永遠に変えました。',
      laterYears: '晩年と平和主義',
      laterYearsContent: '生涯を通じて、阿部は平和主義に忠実であり、日本の軍国主義に反対し、トルストイと平和と非暴力について文通を続けました。',
      legacy: '遺産',
      legacyContent: '阿部磯雄の日本社会への影響は野球をはるかに超えています。西洋民主主義の理想と日本文化の統合は、現代日本の形成に貢献しました。',
    },
    blog: {
      title: 'ブログ',
      subtitle: '阿部磯雄の生涯と時代を探る',
      readingTime: '読書時間：',
      minutes: '分',
    },
    footer: {
      description: '阿部磯雄（1865年-1949年）、日本野球の父、社会主義者、キリスト教平和主義者、レフ・トルストイの友人に捧げる追悼ウェブサイト。',
      rights: 'すべての権利を保有。コンテンツはクリエイティブ・コモンズの下で利用可能。',
    },
    meta: {
      siteTitle: '阿部磯雄 — 日本野球の父・社会主義の先駆者',
      siteDescription: '阿部磯雄（1865年–1949年）、日本の社会主義者、キリスト教平和主義者、レフ・トルストイの友人、そして日本野球の父に捧げます。',
      ogTitle: '阿部磯雄 — 日本野球の父・社会主義の先駆者',
      ogDescription: '阿部磯雄（1865年–1949年）、日本の社会主義者、キリスト教平和主義者、レフ・トルストイの友人、そして日本野球の父に捧げます。',
    },
  },
};

export function useTranslations(locale: string): Translation {
  return translations[locale] || translations.en;
}

export default translations;