import React from 'react';
import AIShowcase from '../../components/AIShowcase';
import SEO from '../../components/SEO';
import { TranslationStrings } from '../../i18n/types';

interface AIShowcasePageProps {
  translations: TranslationStrings;
}

const AIShowcasePage: React.FC<AIShowcasePageProps> = ({ translations }) => {
  return (
    <>
      <SEO
        title="AI Showcase | AIPajti's Advanced AI Models"
        description="Experience AIPajti's cutting-edge AI models in action. See real-time demonstrations of text, image, audio, and video generation capabilities."
        keywords="AI showcase, AI models, text generation, image generation, audio synthesis, video creation"
        canonicalUrl="https://aipajti.com/ai-showcase"
      />
      <AIShowcase translations={translations} />
    </>
  );
};

export default AIShowcasePage;