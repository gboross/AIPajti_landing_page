import React from 'react';
import PricingPlans from '../../components/PricingPlans';
import SEO from '../../components/SEO';
import { TranslationStrings } from '../../i18n/types';

interface PricingPageProps {
  translations: TranslationStrings;
}

const PricingPage: React.FC<PricingPageProps> = ({ translations }) => {
  const handleLogin = () => {
    // Handle login action
  };

  return (
    <>
      <SEO
        title="Pricing Plans | AIPajti AI Platform"
        description="Find the perfect AIPajti plan for your needs. From free tier to enterprise solutions, explore our flexible pricing options for AI-powered content creation."
        keywords="AI pricing, subscription plans, AI platform pricing, content creation pricing"
        canonicalUrl="https://aipajti.com/pricing"
      />
      <PricingPlans translations={translations} onLogin={handleLogin} />
    </>
  );
};

export default PricingPage;