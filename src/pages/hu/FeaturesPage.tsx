import React from 'react';
import Features from '../../components/Features';
import { translations } from '../../i18n/translations';
import SEO from '../../components/SEO';

const FeaturesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="AIPajti Funkciók | AI-Alapú Tartalomkészítő Eszközök"
        description="Fedezd fel az AIPajti átfogó AI eszköztárát szöveggeneráláshoz, képalkotáshoz, hangfeldolgozáshoz és videókészítéshez. Alakítsd át tartalomkészítési munkafolyamatodat fejlett AI technológiával."
        keywords="AI tartalomkészítés, szöveggenerálás, képgenerálás, hangfeldolgozás, videókészítés, AI eszközök, tartalom automatizálás"
        canonicalUrl="https://aipajti.com/hu/funkciok"
        ogImage="https://aipajti.com/og-features.jpg"
        lang="hu"
      />
      <Features translations={translations.hu} />
    </>
  );
};

export default FeaturesPage;