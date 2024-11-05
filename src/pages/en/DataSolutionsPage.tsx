import React from 'react';
import DataSolutions from '../../components/DataSolutions';
import SEO from '../../components/SEO';
import { TranslationStrings } from '../../i18n/types';

interface DataSolutionsPageProps {
  translations: TranslationStrings;
}

const DataSolutionsPage: React.FC<DataSolutionsPageProps> = ({ translations }) => {
  const handleLogin = () => {
    // Handle login action
  };

  return (
    <>
      <SEO
        title="AI Data Solutions | AIPajti"
        description="Transform your data processing with AIPajti's AI-powered solutions. Automate complex data tasks and gain valuable insights with advanced AI technology."
        keywords="AI data processing, data automation, data analysis, AI solutions, business intelligence"
        canonicalUrl="https://aipajti.com/data-solutions"
      />
      <DataSolutions translations={translations} onLogin={handleLogin} />
    </>
  );
};

export default DataSolutionsPage;