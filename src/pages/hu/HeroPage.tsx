import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero';
import About from '../../components/About';
import WorkModes from '../../components/WorkModes';
import TextCascade from '../../components/TextCascade';
import ManagerModel from '../../components/ManagerModel';
import Features from '../../components/Features';
import HowItWorks from '../../components/HowItWorks';
import AIShowcase from '../../components/AIShowcase';
import AIStudio from '../../components/AIStudio';
import ImageStrip from '../../components/ImageStrip';
import TTSDemo from '../../components/TTSDemo';
import DataSolutions from '../../components/DataSolutions';
import PricingPlans from '../../components/PricingPlans';
import Testimonials from '../../components/Testimonials';
import Blog from '../../components/Blog';
import FAQ from '../../components/FAQ';
import AuthModal from '../../components/AuthModal';
import { translations } from '../../i18n/translations';
import { useLoginModal } from '../../hooks/useLoginModal';

const HeroPage: React.FC = () => {
  const { isLoginModalOpen, openLoginModal, closeLoginModal } = useLoginModal();

  return (
    <>
      <Helmet>
        <title>AIPajti - A Tökéletes AI Platform | Kezdőlap</title>
        <meta name="description" content="Az AIPajti az Ön mindent-egy-helyen AI platformja szöveg, kép, hang és videó generáláshoz. Tapasztalja meg a mesterséges intelligencia erejét intuitív eszközeinkkel." />
        <meta name="keywords" content="AI platform, mesterséges intelligencia, szöveggenerálás, képgenerálás, hangfeldolgozás, videókészítés" />
        <link rel="canonical" href="https://aipajti.com/hu/kezdolap" />
        <meta property="og:title" content="AIPajti - A Tökéletes AI Platform" />
        <meta property="og:description" content="Generáljon szöveget, képeket, hangot és videókat fejlett AI modellekkel. Alakítsa át kreatív folyamatait az AIPajti segítségével." />
        <meta property="og:url" content="https://aipajti.com/hu/kezdolap" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="hu_HU" />
      </Helmet>
      <Hero translations={translations.hu} onGetStarted={openLoginModal} />
      <About translations={translations.hu} />
      <WorkModes onTryNow={openLoginModal} />
      <TextCascade />
      <ImageStrip />
      <ManagerModel translations={translations.hu} onTryNow={openLoginModal} />
      <AIStudio onLogin={openLoginModal} />
      <TTSDemo onLogin={openLoginModal} />
      <Features translations={translations.hu} onTryNow={openLoginModal} />
      <HowItWorks translations={translations.hu} onTryNow={openLoginModal} />
      <AIShowcase translations={translations.hu} onTryNow={openLoginModal} />
      <DataSolutions translations={translations.hu} onLogin={openLoginModal} />
      <PricingPlans translations={translations.hu} onLogin={openLoginModal} />
      <Testimonials translations={translations.hu} />
      <Blog translations={translations.hu} />
      <FAQ translations={translations.hu} />
      <AuthModal 
        isOpen={isLoginModalOpen} 
        onClose={closeLoginModal} 
        translations={translations.hu}
      />
    </>
  );
};

export default HeroPage;