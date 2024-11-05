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
        title="Gyakran Ismételt Kérdések | AIPajti Súgó"
        description="Találjon válaszokat az AIPajti AI platformmal kapcsolatos gyakori kérdésekre. Ismerje meg funkcióinkat, árainkat és hogyan kezdhet neki az AI-alapú tartalomkészítésnek."
        keywords="GYIK, súgó, AI platform segítség, gyakran ismételt kérdések, AI támogatás"
        canonicalUrl="https://aipajti.com/hu/gyik"
        lang="hu"
      />
      <FAQ translations={translations} />
    </>
  );
};

export default FAQPage;