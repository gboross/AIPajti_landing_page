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
        <title>Manager Model - Automated AI Workflows | AIPajti</title>
        <meta name="description" content="Experience AIPajti's Manager Model - an intelligent system that automates complex AI workflows and coordinates multiple AI models for optimal results." />
        <meta name="keywords" content="AI automation, workflow management, AI coordination, intelligent automation, AI orchestration" />
        <link rel="canonical" href="https://aipajti.com/manager-model" />
      </Helmet>
      <ManagerModel translations={translations} />
    </>
  );
};

export default ManagerModelPage;