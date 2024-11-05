import React from 'react';
import { Helmet } from 'react-helmet-async';
import WorkModes from '../../components/WorkModes';

const WorkModesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Működési Módok - AIPajti AI Platform</title>
        <meta name="description" content="Fedezze fel az AIPajti rugalmas működési módjait: Menedzser Mód az automatizált munkafolyamatokhoz és Haladó Mód a teljes AI folyamatvezérléshez." />
        <meta name="keywords" content="AI munkafolyamat, automatizálás, menedzser mód, haladó mód, AI vezérlés, munkafolyamat automatizálás" />
        <link rel="canonical" href="https://aipajti.com/hu/work-modes" />
        <html lang="hu" />
      </Helmet>
      <WorkModes />
    </>
  );
};

export default WorkModesPage;