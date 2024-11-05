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
        title="AI Hírek és Frissítések | AIPajti Blog"
        description="Maradjon naprakész a legújabb AI trendekkel, tippekkel és frissítésekkel. Olvasson szakértői betekintéseket az AI technológiáról és annak alkalmazásairól a tartalomkészítésben."
        keywords="AI blog, AI betekintések, AI trendek, tartalomkészítés, AI technológiai frissítések"
        canonicalUrl="https://aipajti.com/hu/blog"
        lang="hu"
      />
      <Blog translations={translations} initialSelectedPost={initialSelectedPost} />
    </>
  );
};

export default BlogPage;