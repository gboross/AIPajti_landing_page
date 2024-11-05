import React from 'react';
import TTSDemo from '../../components/TTSDemo';
import SEO from '../../components/SEO';

const TTSDemoPage: React.FC = () => {
  const handleLogin = () => {
    // Handle login action
  };

  return (
    <>
      <SEO
        title="Szövegfelolvasás Demó | AIPajti"
        description="Tapasztalja meg az AIPajti fejlett szövegfelolvasási technológiáját. Alakítson át szöveget természetes hangzású beszéddé több nyelven AI-alapú hangszintézissel."
        keywords="szövegfelolvasás, TTS, hangszintézis, AI hang, beszédgenerálás, többnyelvű TTS"
        canonicalUrl="https://aipajti.com/hu/hangfelolvasas"
        lang="hu"
      />
      <TTSDemo onLogin={handleLogin} />
    </>
  );
};

export default TTSDemoPage;