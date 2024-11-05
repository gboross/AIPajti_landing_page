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
        title="AI Adatmegoldások | AIPajti"
        description="Alakítsa át adatfeldolgozási folyamatait az AIPajti AI-alapú megoldásaival. Automatizálja a komplex adatfeladatokat és nyerjen értékes betekintéseket fejlett AI technológiával."
        keywords="AI adatfeldolgozás, adatautomatizálás, adatelemzés, AI megoldások, üzleti intelligencia"
        canonicalUrl="https://aipajti.com/hu/adat-megoldasok"
        lang="hu"
      />
      <DataSolutions translations={translations} onLogin={handleLogin} />
    </>
  );
};

export default DataSolutionsPage;