# Abe Isoo (阿部磯雄) — Official Memorial Website

A responsive memorial website dedicated to **Abe Isoo** (1865–1949) — Japanese socialist, Christian pacifist, friend of Leo Tolstoy, and the **Father of Japanese Baseball**.

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Incremental Static Regeneration (ISR)**.

URL: https://abe-isoo.vercel.app

---

## About the Site

This site celebrates the remarkable life of Abe Isoo through:

- **A rich biography** covering his early life, Christian faith, socialist politics, Tolstoy correspondence, and baseball legacy
- **A blog** with articles and historical essays about his life and times
- **Beautiful design** inspired by Japanese aesthetics and baseball culture

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org/) | React framework with App Router + ISR |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [gray-matter](https://github.com/jonschlinkert/gray-matter) | Markdown frontmatter parsing |
| [remark](https://remark.js.org/) + remark-html | Markdown to HTML conversion |
| [Decap CMS](https://decapcms.org/) | Free, open-source git-based CMS |

---

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

```bash
git clone https://github.com/akito-nak/abe-isoo.git
cd abe-isoo
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
abe-isoo/
├── content/
│   └── posts/          # Markdown blog posts
├── public/
│   ├── admin/          # Decap CMS admin panel
│   │   ├── index.html
│   │   └── config.yml
│   └── images/
│       └── uploads/    # CMS-uploaded images
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── about/
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx    # Homepage
│   │   ├── sitemap.ts  # Auto-generated sitemap
│   │   └── robots.ts   # robots.txt
│   ├── components/     # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PostCard.tsx
│   └── lib/
│       └── posts.ts    # Markdown post utilities
└── README.md
```

---

## Incremental Static Regeneration (ISR)

Blog post pages use Next.js ISR with a 60-second revalidation window:

```typescript
// src/app/blog/[slug]/page.tsx
export const revalidate = 60;
```

This means:
- Pages are statically generated at build time for fast delivery
- After 60 seconds, the next request triggers a background regeneration
- Users always receive a cached page instantly
- New content appears within 60 seconds of publishing, without a full rebuild

---

## Content Management

### Option 1: Direct Markdown Editing

Create a new `.md` file in `content/posts/`:

```markdown
---
title: "My Post Title"
date: "2024-06-01"
excerpt: "A brief summary of the post."
author: "Your Name"
tags: ["history", "baseball"]
---

## Introduction

Your post content here in Markdown...
```

### Option 2: Decap CMS (Browser-Based)

1. Deploy to [Netlify](https://netlify.com) (free tier)
2. Enable **Netlify Identity** and **Git Gateway**
3. Visit `/admin` on your deployed site

---

## Design

- **Colors**: Deep navy (#1a2744), cream (#f5f0e8), red accent (#c41e3a), gold (#d4af37)
- **Typography**: Playfair Display (headings) + Noto Serif JP (body)
- **Aesthetic**: Japanese minimalism meets baseball culture

---

## License

Open source under the [MIT License](LICENSE). Historical content about Abe Isoo is in the public domain.
