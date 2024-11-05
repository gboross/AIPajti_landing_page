import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Play, Pause, RefreshCw, Globe2, Mic, Sliders, Languages, UserPlus, Wand2, Sparkles } from 'lucide-react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

interface Voice {
  id: string;
  name: string;
  labels: string[];
}

interface Language {
  language_id: string;
  name: string;
  flag: string;
}

const availableVoices: Voice[] = [
  { id: 'ZQe5CZNOzWyzPSCn5a3c', name: 'János', labels: ['Calm', 'Old', 'Male'] },
  { id: '9yzdeviXkFddZ4Oz8Mok', name: 'Peter', labels: ['Excited', 'Male', 'Young'] },
  { id: 'VOJyehUzZPmLbl8DHdih', name: 'Ricsi', labels: ['Professional', 'Male', 'Middle-Aged'] },
  { id: 'xctasy8XvGp2cVO9HL9k', name: 'Anna', labels: ['Female', 'Young'] },
  { id: 'piTKgcLEGmPE4e6mEKli', name: 'Niki', labels: ['Soft', 'Young', 'Female'] },
  { id: 'LcfcDJNUP1GQjkzn1xUU', name: 'Emma', labels: ['Calm', 'Young', 'Female'] }
];

const availableLanguages: Language[] = [
  { language_id: "hu", name: "Hungarian", flag: "🇭🇺" },
  { language_id: "en", name: "English", flag: "🇬🇧" },
  { language_id: "de", name: "German", flag: "🇩🇪" },
  { language_id: "fr", name: "French", flag: "🇫🇷" },
  { language_id: "es", name: "Spanish", flag: "🇪🇸" },
  { language_id: "it", name: "Italian", flag: "🇮🇹" },
  { language_id: "ja", name: "Japanese", flag: "🇯🇵" },
  { language_id: "zh", name: "Chinese", flag: "🇨🇳" },
  { language_id: "hi", name: "Hindi", flag: "🇮🇳" },
  { language_id: "ko", name: "Korean", flag: "🇰🇷" }
];

interface TTSDemoProps {
  onLogin?: () => void;
}

const TTSDemo: React.FC<TTSDemoProps> = ({ onLogin }) => {
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState<Voice>(availableVoices[0]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(availableLanguages[0]);
  const [variability, setVariability] = useState(0.5);
  const [resemblance, setResemblance] = useState(0.75);
  const [rate, setRate] = useState(1.0);
  const maxChars = 100;

  const { state, controls } = useAudioPlayer();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= maxChars) {
      setText(newText);
    }
  };

  const handlePlay = async () => {
    if (text.trim()) {
      if (state.isPlaying) {
        controls.pause();
      } else {
        await controls.play(text, {
          voiceId: selectedVoice.id,
          stability: variability,
          similarityBoost: resemblance,
          rate,
          language_id: selectedLanguage.language_id
        });
      }
    }
  };

  const handleCloneVoice = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark/90 via-background-default/80 to-background-light/90 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div className="flex items-center justify-center gap-3 mb-4">
              <Globe2 size={32} className="text-primary" />
              <h2 className="text-3xl font-bold text-white">Multilingual Text-to-Speech</h2>
            </motion.div>
            <p className="text-gray-400 text-lg">
              Experience natural-sounding voices in multiple languages. Try it now with a limit of {maxChars} characters.
            </p>
          </div>

          {/* Main Demo Area */}
          <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50">
            {/* Language Selection */}
            <div className="mb-6">
              <label className="block text-white mb-2 font-medium">Select Language</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {availableLanguages.slice(0, 8).map((lang) => (
                  <motion.button
                    key={lang.language_id}
                    className={`p-3 rounded-lg border ${
                      selectedLanguage.language_id === lang.language_id
                        ? 'bg-primary/20 border-primary text-white'
                        : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-700'
                    } transition-all duration-300`}
                    onClick={() => setSelectedLanguage(lang)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl" role="img" aria-label={`${lang.name} flag`}>
                        {lang.flag}
                      </span>
                      <div className="text-left">
                        <div className="font-medium">{lang.name}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Voice Selection */}
            <div className="mb-6">
              <label className="block text-white mb-2 font-medium">Select Voice</label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {availableVoices.map((voice) => (
                  <motion.button
                    key={voice.id}
                    className={`p-4 rounded-lg border ${
                      selectedVoice.id === voice.id
                        ? 'bg-primary/20 border-primary text-white'
                        : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-700'
                    } transition-all duration-300`}
                    onClick={() => setSelectedVoice(voice)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Mic size={20} className={`${selectedVoice.id === voice.id ? 'text-primary' : ''} transition-colors`} />
                        {selectedVoice.id === voice.id && (
                          <motion.div
                            className="absolute inset-0 bg-primary/20 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-lg">{voice.name}</div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {voice.labels.map((label, index) => (
                            <span
                              key={index}
                              className="px-2 py-0.5 bg-gray-700/50 rounded-full text-xs font-medium text-primary/80"
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Additional Voice Options */}
              <div className="mt-6 flex flex-col gap-3">
                <div className="text-gray-400 text-sm flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" />
                  Many more pre-built voices - free to use
                </div>
                <motion.button
                  onClick={handleCloneVoice}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-1 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <UserPlus size={20} />
                  </div>
                  <span className="font-medium">Clone your voice simply</span>
                </motion.button>
              </div>
            </div>

            {/* Text Input */}
            <div className="mb-6">
              <label className="block text-white mb-2 font-medium">Enter Text</label>
              <div className="relative">
                <textarea
                  value={text}
                  onChange={handleTextChange}
                  placeholder="Type something to hear it spoken..."
                  className="w-full h-32 bg-gray-700/50 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <div className="absolute bottom-2 right-2 text-sm">
                  <span className={text.length === maxChars ? 'text-red-400' : 'text-gray-400'}>
                    {text.length}/{maxChars}
                  </span>
                </div>
              </div>
            </div>

            {/* Voice Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-white mb-2 font-medium flex items-center gap-2">
                  <Wand2 size={16} className="text-primary" />
                  Range of Variability
                </label>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                  <span>Less consistent</span>
                  <div className="flex-grow" />
                  <span>More consistent</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={variability}
                  onChange={(e) => setVariability(parseFloat(e.target.value))}
                  className="w-full accent-primary"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-medium flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" />
                  Resemblance
                </label>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                  <span>Low</span>
                  <div className="flex-grow" />
                  <span>High</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={resemblance}
                  onChange={(e) => setResemblance(parseFloat(e.target.value))}
                  className="w-full accent-primary"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-medium flex items-center gap-2">
                  <Sliders size={16} className="text-primary" />
                  Speed
                </label>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                  <span>0.5x</span>
                  <div className="flex-grow" />
                  <span>2.0x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="text-center text-gray-400 mt-1">{rate.toFixed(1)}x</div>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex justify-center gap-4">
              <motion.button
                onClick={handlePlay}
                disabled={!text.trim() || state.status === 'error'}
                className={`px-6 py-3 rounded-lg flex items-center gap-2 font-medium ${
                  !text.trim() || state.status === 'error'
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-primary text-secondary hover:bg-primary/90'
                } transition-colors`}
                whileHover={text.trim() ? { scale: 1.05 } : {}}
                whileTap={text.trim() ? { scale: 0.95 } : {}}
              >
                {state.isPlaying ? (
                  <>
                    <Pause size={20} />
                    Pause
                  </>
                ) : (
                  <>
                    <Play size={20} />
                    {state.status === 'generating' ? 'Generating...' : 'Generate & Play'}
                  </>
                )}
              </motion.button>

              <motion.button
                onClick={controls.stop}
                disabled={!state.isPlaying}
                className={`px-6 py-3 rounded-lg flex items-center gap-2 font-medium ${
                  !state.isPlaying
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                } transition-colors`}
                whileHover={state.isPlaying ? { scale: 1.05 } : {}}
                whileTap={state.isPlaying ? { scale: 0.95 } : {}}
              >
                <RefreshCw size={20} />
                Reset
              </motion.button>
            </div>

            {/* Progress Bar */}
            {state.status !== 'idle' && (
              <motion.div 
                className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: `${state.progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </motion.div>
            )}

            {/* Error Message */}
            {state.error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                className="mt-4 p-3 bg-red-500/20 text-red-500 rounded-lg text-center"
              >
                {state.error}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TTSDemo;