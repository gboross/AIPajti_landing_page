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
        <title>Az AIPajti-ról - Kreatív AI Platform</title>
        <meta name="description" content="Ismerje meg az AIPajti hatékony AI platformját, amely egyesíti a szöveg-, kép-, hang- és videógenerálási képességeket egy egységes megoldásban." />
        <meta name="keywords" content="AI platform, kreatív megoldások, szöveggenerálás, képgenerálás, hangfeldolgozás, videókészítés" />
        <link rel="canonical" href="https://aipajti.com/hu/about" />
        <html lang="hu" />
      </Helmet>
      <About translations={translations} />
    </>
  );
};

export default AboutPage;