import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  coverImage?: string;
  readingTime?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function getPostsPath(locale: string = 'en'): string {
  if (locale === 'en') {
    return postsDirectory;
  }
  return path.join(postsDirectory, locale);
}

export function getSortedPostsData(locale: string = 'en'): PostMeta[] {
  const currentPostsDirectory = getPostsPath(locale);
  
  if (!fs.existsSync(currentPostsDirectory)) {
    // Fallback to English if locale-specific directory doesn't exist
    if (locale !== 'en') {
      return getSortedPostsData('en');
    }
    return [];
  }
  
  const fileNames = fs.readdirSync(currentPostsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(currentPostsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        author: data.author || 'Editor',
        tags: data.tags || [],
        coverImage: data.coverImage,
        readingTime: data.readingTime,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs(): { slug: string }[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => ({ slug: fileName.replace(/\.md$/, '') }));
}

export async function getPostData(slug: string, locale: string = 'en'): Promise<Post> {
  let fullPath = path.join(getPostsPath(locale), `${slug}.md`);
  
  // Check if locale-specific post exists, otherwise fallback to English
  if (locale !== 'en' && !fs.existsSync(fullPath)) {
    fullPath = path.join(getPostsPath('en'), `${slug}.md`);
  }
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    author: data.author || 'Editor',
    tags: data.tags || [],
    coverImage: data.coverImage,
    readingTime: data.readingTime,
    content: contentHtml,
  };
}
