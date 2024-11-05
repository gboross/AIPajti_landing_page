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
        title="Árak | AIPajti AI Platform"
        description="Találja meg az igényeinek megfelelő AIPajti csomagot. Az ingyenes verziótól a vállalati megoldásokig, fedezze fel rugalmas árképzési opcióinkat az AI-alapú tartalomkészítéshez."
        keywords="AI árazás, előfizetési csomagok, AI platform árak, tartalomkészítés árazás"
        canonicalUrl="https://aipajti.com/hu/arak"
        lang="hu"
      />
      <PricingPlans translations={translations} onLogin={handleLogin} />
    </>
  );
};

export default PricingPage;