import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../../components/About';
import { TranslationStrings } from '../../i18n/types';

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