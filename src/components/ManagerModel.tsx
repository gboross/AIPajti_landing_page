import React, { useState, useEffect, useRef } from 'react';
import { Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Play,
  Pause,
  Brain,
  Send,
} from 'lucide-react';
import { TranslationStrings } from '../i18n/types';
import BrainPowerSelector from './manager/BrainPowerSelector';
import TaskAnalyzer from './manager/TaskAnalyzer';
import ProcessingStages from './manager/ProcessingStages';

interface ManagerModelProps {
  translations: TranslationStrings;
}

const ManagerModel: React.FC<ManagerModelProps> = ({ translations }) => {
  const [stage, setStage] = useState<
    'prompt' | 'typing' | 'brainPower' | 'processing' | 'analyzing' | 'categories'
  >('prompt');
  const [brainLevel, setBrainLevel] = useState(1);
  const [typedText, setTypedText] = useState('');
  const [showPreferences, setShowPreferences] = useState(false);
  const [processingPreference, setProcessingPreference] = useState<'ai' | 'manual' | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [typingInterval, setTypingInterval] = useState<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showBrainSendButton, setShowBrainSendButton] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const examplePrompt = `Create a Multi-Language Futuristic City Video Project:

1. Extract 30 city names from the uploaded document 'cities.xlsx'.
2. For each city, generate a custom futuristic image showcasing a notable landmark or public square as if in 2050.
3. Create a cinematic, realistic 5-second video for each of the 30 cities using the generated images as the starting frame.
4. Compose background music for the video in a funky style, incorporating the lyrics "the future will be bright" to align with the visuals.
5. From the uploaded document 'Elon Musk Robot Theory.pdf', summarize the key points and create a 1-minute story in the style of Shakespeare, focusing on the most impactful ideas.
6. Translate the story to Hungarian and narrate it using a warm-sounding male voice.
7. Merge all 5-second videos into a single, continuous video.
8. Add the narrated voice as a narration track to merged videos along with the background music.
9. Dub the video to French and Chinese.
10. Create English subtitles for all the versions of the video and save them separately as an .srt file with timecodes.
11. Export the final videos in .mp4 format.`;

  const stages = ['prompt', 'typing', 'brainPower', 'processing', 'analyzing', 'categories'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setStage('typing');
          }, 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (stage === 'typing' && isAutoPlay) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < examplePrompt.length) {
          setTypedText(examplePrompt.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsTypingComplete(true);
        }
      }, 20);

      setTypingInterval(interval);

      return () => clearInterval(interval);
    }
  }, [stage, isAutoPlay]);

  useEffect(() => {
    if (stage === 'processing' && isAutoPlay) {
      const timeout = setTimeout(() => {
        setStage('analyzing');
        setTimeout(() => {
          setStage('categories');
          setTimeout(() => {
            setShowPreferences(true);
          }, 1500);
        }, 2000);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [stage, isAutoPlay]);

  useEffect(() => {
    if (stage === 'brainPower') {
      setShowBrainSendButton(true);
    } else {
      setShowBrainSendButton(false);
    }
  }, [stage]);

  const handlePreferenceSelect = (preference: 'ai' | 'manual') => {
    setProcessingPreference(preference);
  };

  const handleReset = () => {
    if (typingInterval) {
      clearInterval(typingInterval);
      setTypingInterval(null);
    }

    setStage('prompt');
    setBrainLevel(1);
    setTypedText('');
    setShowPreferences(false);
    setProcessingPreference(null);
    setIsAutoPlay(true);
    setIsTypingComplete(false);
    setShowBrainSendButton(false);

    setTimeout(() => {
      setStage('typing');
    }, 1000);
  };

  const handleSendPrompt = () => {
    setIsTypingComplete(false);
    setStage('brainPower');
  };

  const handleBrainPowerSend = () => {
    setShowBrainSendButton(false);
    setStage('processing');
  };

  const goToNextStage = () => {
    const currentIndex = stages.indexOf(stage);
    if (currentIndex < stages.length - 1) {
      setStage(stages[currentIndex + 1] as any);
    }
  };

  const goToPreviousStage = () => {
    const currentIndex = stages.indexOf(stage);
    if (currentIndex > 0) {
      setStage(stages[currentIndex - 1] as any);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
    if (typingInterval) {
      clearInterval(typingInterval);
      setTypingInterval(null);
    }
  };

  const colorizeText = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.match(/^\d+\./)) {
        const [number, ...rest] = line.split('.');
        return (
          <div key={i} className="mb-2">
            <span className="text-primary font-bold">{number}.</span>
            <span className="text-gray-300">{rest.join('.')}</span>
          </div>
        );
      } else if (line.trim() === '') {
        return <div key={i} className="mb-4"></div>;
      } else {
        return (
          <div key={i} className="text-primary font-bold mb-4">
            {line}
          </div>
        );
      }
    });
  };

  return (
    <section ref={sectionRef} id="manager-mode" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark/90 via-background-default/80 to-background-light/90 backdrop-blur-sm" />

      <Container maxWidth="lg" className="relative">
        <div className="glass-panel p-8 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background-light/10 to-background-dark/10" />

          <div className="relative z-10">
            {/* Demo Controls */}
            <div className="absolute top-0 right-0">
              <motion.div
                className="flex flex-row items-center gap-4 bg-gray-800/50 rounded-lg p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
              >
                <motion.button
                  onClick={goToPreviousStage}
                  className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={stages.indexOf(stage) === 0}
                >
                  <ChevronLeft size={20} className="text-primary" />
                </motion.button>
                <motion.button
                  onClick={toggleAutoPlay}
                  className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isAutoPlay ? (
                    <Pause size={20} className="text-primary" />
                  ) : (
                    <Play size={20} className="text-primary" />
                  )}
                </motion.button>
                <motion.button
                  onClick={goToNextStage}
                  className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={stages.indexOf(stage) === stages.length - 1}
                >
                  <ChevronRight size={20} className="text-primary" />
                </motion.button>
                <motion.button
                  onClick={handleReset}
                  className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <RotateCcw size={20} className="text-primary" />
                </motion.button>
              </motion.div>
            </div>

            {/* Demo Label */}
            <motion.div
              className="absolute top-2 left-2 bg-primary/20 px-3 py-1 rounded-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
            >
              <span className="text-primary text-sm font-semibold">Interactive Demo</span>
            </motion.div>

            {/* Title Section */}
            <div className="text-center mb-12 pt-12">
              <motion.div
                className="inline-flex items-center justify-center gap-3 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Brain size={32} className="text-primary" />
                <h3 className="text-3xl font-bold text-white">Manager Mode</h3>
              </motion.div>
              <motion.p
                className="text-gray-400 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Watch how AIPajti handles a complex multi-step task: Creating a promotional video with multiple language versions
              </motion.p>
            </div>

            <AnimatePresence mode="wait">
              {stage === 'prompt' && isVisible && (
                <motion.div
                  key="prompt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-panel p-6 rounded-lg mb-6 font-mono text-sm relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
                    animate={{
                      x: ['0%', '100%'],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <div className="relative z-10">
                    <motion.span
                      animate={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-primary ml-1"
                    />
                  </div>
                </motion.div>
              )}

              {stage === 'typing' && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-panel p-6 rounded-lg mb-6 font-mono text-sm relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
                    animate={{
                      x: ['0%', '100%'],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <div className="relative z-10">
                    {colorizeText(typedText)}
                    {!isTypingComplete && (
                      <motion.span
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="inline-block w-2 h-4 bg-primary ml-1"
                      />
                    )}
                  </div>

                  {/* Send Button */}
                  <AnimatePresence>
                    {isTypingComplete && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="mt-6 flex justify-end"
                      >
                        <motion.button
                          onClick={handleSendPrompt}
                          className="bg-primary text-secondary px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            scale: [1, 1.05, 1],
                            boxShadow: [
                              '0 0 0 0 rgba(255,198,0,0)',
                              '0 0 0 10px rgba(255,198,0,0.2)',
                              '0 0 0 0 rgba(255,198,0,0)',
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          <Send size={20} />
                          Send Prompt
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {stage === 'brainPower' && (
                <motion.div
                  key="brainPower"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <BrainPowerSelector
                    brainLevel={brainLevel}
                    setBrainLevel={setBrainLevel}
                    onMaxLevel={() => isAutoPlay && setStage('processing')}
                    onSend={handleBrainPowerSend}
                    showSendButton={showBrainSendButton}
                  />
                </motion.div>
              )}

              {(stage === 'processing' || stage === 'analyzing') && (
                <ProcessingStages stage={stage} showPreferences={showPreferences} />
              )}

              {stage === 'categories' && (
                <TaskAnalyzer isVisible={true} onPreferenceSelect={handlePreferenceSelect} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ManagerModel;
