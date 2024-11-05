import post1Content from './blogPosts/post1.md?raw';
import post2Content from './blogPosts/post2.md?raw';
import post3Content from './blogPosts/post3.md?raw';
import post4Content from './blogPosts/post4.md?raw';
import post5Content from './blogPosts/post5.md?raw';
import post6Content from './blogPosts/post6.md?raw';

interface BlogPost {
  title: string;
  author: string;
  date: string;
  readTime: string;
  categories: string[];
  image: string;
  excerpt: string;
  content: string;
}

function parseMarkdownFrontmatter(content: string): BlogPost {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    throw new Error('Invalid markdown format');
  }

  const [, frontmatter, markdownContent] = match;
  const metadata: any = {};

  // Parse frontmatter
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      let value = valueParts.join(':').trim();
      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        metadata[key.trim()] = value
          .slice(1, -1)
          .split(',')
          .map(item => item.trim().replace(/"/g, ''));
      } else {
        metadata[key.trim()] = value;
      }
    }
  });

  return {
    ...metadata,
    content: markdownContent.trim(),
  };
}

export const blogPosts: BlogPost[] = [
  parseMarkdownFrontmatter(post1Content),
  parseMarkdownFrontmatter(post2Content),
  parseMarkdownFrontmatter(post3Content),
  parseMarkdownFrontmatter(post4Content),
  parseMarkdownFrontmatter(post5Content),
  parseMarkdownFrontmatter(post6Content),
];