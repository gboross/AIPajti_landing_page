import React from 'react';
import Features from '../../components/Features';
import { translations } from '../../i18n/translations';
import SEO from '../../components/SEO';

const FeaturesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="AIPajti Features | AI-Powered Content Creation Tools"
        description="Explore AIPajti's comprehensive suite of AI tools for text generation, image creation, audio processing, and video production. Transform your content creation workflow with advanced AI technology."
        keywords="AI content creation, text generation, image generation, audio processing, video creation, AI tools, content automation"
        canonicalUrl="https://aipajti.com/features"
        ogImage="https://aipajti.com/og-features.jpg"
      />
      <Features translations={translations.en} />
    </>
  );
};

export default FeaturesPage;