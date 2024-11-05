import React from 'react';
import { Helmet } from 'react-helmet-async';
import ManagerModel from '../../components/ManagerModel';
import { TranslationStrings } from '../../i18n/types';

interface ManagerModelPageProps {
  translations: TranslationStrings;
}

const ManagerModelPage: React.FC<ManagerModelPageProps> = ({ translations }) => {
  return (
    <>
      <Helmet>
        <title>Menedzser Modell - Automatizált AI Munkafolyamatok | AIPajti</title>
        <meta name="description" content="Ismerje meg az AIPajti Menedzser Modelljét - egy intelligens rendszert, amely automatizálja a komplex AI munkafolyamatokat és koordinálja a különböző AI modelleket az optimális eredményekért." />
        <meta name="keywords" content="AI automatizálás, munkafolyamat kezelés, AI koordináció, intelligens automatizálás, AI vezérlés" />
        <link rel="canonical" href="https://aipajti.com/hu/manager-model" />
        <html lang="hu" />
      </Helmet>
      <ManagerModel translations={translations} />
    </>
  );
};

export default ManagerModelPage;