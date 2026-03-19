import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1a2744',
        cream: '#f5f0e8',
        'light-cream': '#faf7f2',
        'dark-navy': '#0f1a2e',
        gold: '#d4af37',
      },
      fontFamily: {
        serif: ['Noto Serif JP', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Noto Sans JP', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
