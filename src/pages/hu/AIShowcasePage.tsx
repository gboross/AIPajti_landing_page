import React from 'react';
import { Helmet } from 'react-helmet-async';
import AIStudio from '../../components/AIStudio';

const AIStudioPage: React.FC = () => {
  const handleLogin = () => {
    // Handle login action
  };

  return (
    <>
      <Helmet>
        <title>AIPajti Stúdió - Fejlett AI Tartalomkészítés</title>
        <meta name="description" content="Tapasztalja meg a tartalomkészítés jövőjét az AIPajti Stúdióval. Hozzon létre professzionális minőségű tartalmakat fejlett AI technológiánkkal." />
        <meta name="keywords" content="AI stúdió, tartalomkészítés, AI technológia, kreatív eszközök, digitális tartalom" />
        <link rel="canonical" href="https://aipajti.com/hu/ai-studio" />
        <html lang="hu" />
      </Helmet>
      <AIStudio onLogin={handleLogin} />
    </>
  );
};

export default AIStudioPage;
