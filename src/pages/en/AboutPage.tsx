import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../../components/About';
import { TranslationStrings } from '../../i18n/types';

import { generalTranslations } from '../../i18n/translations/general';
import { featureTranslations } from '../../i18n/translations/features';
import { pricingTranslations } from '../../i18n/translations/pricing';
import { managerModelTranslations } from '../../i18n/translations/managerModel';
import { blogTranslations } from '../../i18n/translations/blog';

// translations/general.ts
export const generalTranslations = {
  en: {
    // meglévő angol fordítások
  },
  hu: {
    // meglévő magyar fordítások
  }
};

export const translations = {
  en: {
    ...generalTranslations.en,
    ...featureTranslations.en,
    ...pricingTranslations.en,
    ...managerModelTranslations.en,
    ...blogTranslations.en,
  },
  hu: {
    ...generalTranslations.hu,
    ...featureTranslations.hu,
    ...pricingTranslations.hu,  
    ...managerModelTranslations.hu,
    ...blogTranslations.hu,
  }
};

interface AboutPageProps {
  translations: TranslationStrings;
}

const AboutPage: React.FC<AboutPageProps> = ({ translations }) => {
  return (
    <>
      <Helmet>
        <title>About AIPajti - AI Platform for Creative Solutions</title>
        <meta name="description" content="Learn about AIPajti's powerful AI platform that combines text, image, audio, and video generation capabilities into one seamless solution." />
        <meta name="keywords" content="AI platform, creative solutions, text generation, image generation, audio processing, video creation" />
        <link rel="canonical" href="https://aipajti.com/about" />
      </Helmet>
      <About translations={translations} />
    </>
  );
};

export default AboutPage;