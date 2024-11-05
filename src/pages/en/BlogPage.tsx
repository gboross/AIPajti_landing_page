import React from 'react';
import Blog from '../../components/Blog';
import SEO from '../../components/SEO';
import { TranslationStrings } from '../../i18n/types';

interface BlogPageProps {
  translations: TranslationStrings;
  initialSelectedPost?: number | null;
}

const BlogPage: React.FC<BlogPageProps> = ({ translations, initialSelectedPost }) => {
  return (
    <>
      <SEO
        title="AI Insights & Updates | AIPajti Blog"
        description="Stay informed about the latest AI trends, tips, and updates. Read expert insights about AI technology and its applications in content creation."
        keywords="AI blog, AI insights, AI trends, content creation, AI technology updates"
        canonicalUrl="https://aipajti.com/blog"
      />
      <Blog translations={translations} initialSelectedPost={initialSelectedPost} />
    </>
  );
};

export default BlogPage;