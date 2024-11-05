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
        title="Text-to-Speech Demo | AIPajti"
        description="Experience AIPajti's advanced text-to-speech technology. Convert text to natural-sounding speech in multiple languages with our AI-powered voice synthesis."
        keywords="text to speech, TTS, voice synthesis, AI voice, speech generation, multilingual TTS"
        canonicalUrl="https://aipajti.com/tts-demo"
      />
      <TTSDemo onLogin={handleLogin} />
    </>
  );
};

export default TTSDemoPage;