import React from 'react';
import FAQ from '../../components/FAQ';
import SEO from '../../components/SEO';
import { TranslationStrings } from '../../i18n/types';

interface FAQPageProps {
  translations: TranslationStrings;
}

const FAQPage: React.FC<FAQPageProps> = ({ translations }) => {
  return (
    <>
      <SEO
        title="Frequently Asked Questions | AIPajti Help Center"
        description="Find answers to common questions about AIPajti's AI platform. Learn about our features, pricing, and how to get started with AI-powered content creation."
        keywords="FAQ, help center, AI platform help, frequently asked questions, AI support"
        canonicalUrl="https://aipajti.com/faq"
      />
      <FAQ translations={translations} />
    </>
  );
};

export default FAQPage;