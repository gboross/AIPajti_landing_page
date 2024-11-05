import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Image, Video, Music, Brain, Sparkles, Code, Database, Wand2, Layers, Zap, Camera } from 'lucide-react';
import { TranslationStrings } from '../i18n/types';

interface AIShowcaseProps {
  translations: TranslationStrings;
}

const AIShowcase: React.FC<AIShowcaseProps> = ({ translations }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [audioHeights, setAudioHeights] = useState<number[]>(Array(50).fill(20));
  const [imageProcessingStep, setImageProcessingStep] = useState(0);
  const [videoFrame, setVideoFrame] = useState(0);

  const textExamples = [
    "Generating creative content...",
    "Analyzing context...",
    "Processing language patterns...",
    "Creating engaging narratives..."
  ];

  const imageProcessingSteps = [
    "Analyzing composition...",
    "Applying style transfer...",
    "Enhancing details...",
    "Optimizing output...",
    "Finalizing image..."
  ];

  const videoProcessingSteps = [
    "Initializing scene generation...",
    "Processing frame sequences...",
    "Applying motion dynamics...",
    "Enhancing visual effects...",
    "Rendering final output..."
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textExamples.length);
    }, 3000);

    const audioInterval = setInterval(() => {
      setAudioHeights(prev => 
        prev.map(() => Math.random() * 80 + 20)
      );
    }, 100);

    const imageInterval = setInterval(() => {
      setImageProcessingStep((prev) => (prev + 1) % imageProcessingSteps.length);
    }, 2000);

    const videoInterval = setInterval(() => {
      setVideoFrame((prev) => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(textInterval);
      clearInterval(audioInterval);
      clearInterval(imageInterval);
      clearInterval(videoInterval);
    };
  }, []);

  // ... (previous imports and interface remain the same)

  const showcaseItems = [
    {
      title: 'Advanced Text Generation',
      icon: <FileText size={32} />,
      content: 'Experience the power of GPT-4, Claude 3.5, and other advanced language models for creating engaging, context-aware content that adapts to your needs.',
      visual: (
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-gray-800/50">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(255,198,0,0.1) 0%, rgba(255,107,0,0.1) 100%)',
                'linear-gradient(45deg, rgba(255,107,0,0.1) 0%, rgba(255,198,0,0.1) 100%)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          />
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
            <motion.div
              className="w-full max-w-md bg-gray-900/50 rounded-lg p-4 border border-primary/20"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255,198,0,0.1)',
                  '0 0 40px rgba(255,198,0,0.2)',
                  '0 0 20px rgba(255,198,0,0.1)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center gap-2 mb-4 text-primary">
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  &gt;
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                >
                  &gt;
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                >
                  &gt;
                </motion.span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-white font-mono"
                >
                  {textExamples[currentTextIndex]}
                </motion.div>
              </AnimatePresence>

              {/* Additional Processing Indicators */}
              <motion.div
                className="mt-4 flex items-center gap-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Brain size={16} className="text-primary" />
                </motion.div>
                <span className="text-primary text-sm">AI Processing</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      title: 'State-of-the-Art Image Generation',
      icon: <Image size={32} />,
      content: 'Create stunning visuals with Stable Diffusion XL, DALL·E 3, and Midjourney integration. Transform ideas into professional-quality images instantly.',
      visual: (
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                background: [
                  'linear-gradient(45deg, rgba(255,198,0,0.2) 0%, transparent 100%)',
                  'linear-gradient(225deg, rgba(255,198,0,0.2) 0%, transparent 100%)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            />

            <img 
              src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMnBiRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3aaee1de3d18d64391edab5458df4027255c5383/Elon_v1.jpg"
              alt="AI Generated Image"
              className="w-full h-full object-cover"
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"
              animate={{
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Enhanced Image Processing UI */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-4 left-4 right-4 flex items-center justify-between"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="flex items-center gap-2 bg-gray-900/80 px-3 py-1.5 rounded-full">
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-primary text-sm">AI Processing</span>
                </div>

                <div className="flex items-center gap-2 bg-gray-900/80 px-3 py-1.5 rounded-full">
                  <Camera size={16} className="text-primary" />
                  <span className="text-primary text-sm">Resolution: 1024x1024</span>
                </div>
              </motion.div>

              {/* Processing Steps */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={imageProcessingStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute bottom-4 left-4 right-4 bg-gray-900/80 p-4 rounded-lg"
                >
                  <div className="flex items-center justify-between text-primary">
                    <span className="text-sm">{imageProcessingSteps[imageProcessingStep]}</span>
                    <span className="text-sm">{((imageProcessingStep + 1) / imageProcessingSteps.length * 100).toFixed(0)}%</span>
                  </div>
                  <motion.div
                    className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2 }}
                  >
                    <motion.div
                      className="h-full bg-primary"
                      style={{
                        width: `${((imageProcessingStep + 1) / imageProcessingSteps.length) * 100}%`,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <motion.div
                className="absolute inset-0 bg-primary/10"
                animate={{
                  top: ['0%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  height: '2px',
                  boxShadow: '0 0 20px 5px rgba(255,198,0,0.3)',
                }}
              />
            </div>
          </motion.div>
        </div>
      )
    },
    {
      title: 'Next-Gen Video Creation',
      icon: <Video size={32} />,
      content: 'Generate and edit videos with Runway Gen-3, Luma AI, and Kling. Create professional video content with cutting-edge AI technology.',
      visual: (
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full">
              <img 
                src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMmxiRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--37d8cb15445013945becd78f322dadbe7c0470d1/Video_v1.gif"
                alt="AI Video Generation"
                className="w-full h-full object-cover"
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"
                animate={{
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Enhanced Video Processing UI */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top Bar */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <motion.div
                    className="bg-gray-900/80 px-3 py-1.5 rounded-full"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Video size={16} className="text-primary" />
                      </motion.div>
                      <span className="text-primary text-sm">
                        Frame: {videoFrame.toString().padStart(3, '0')}/100
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-gray-900/80 px-3 py-1.5 rounded-full"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-2">
                      <Layers size={16} className="text-primary" />
                      <span className="text-primary text-sm">4K Resolution</span>
                    </div>
                  </motion.div>
                </div>

                {/* Processing Steps */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={Math.floor(videoFrame / 20)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 p-3 rounded-lg"
                  >
                    <div className="text-primary text-sm">
                      {videoProcessingSteps[Math.floor(videoFrame / 20)]}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Bar */}
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.div
                    className="h-1 bg-gray-600 rounded-full overflow-hidden"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div
                      className="h-full bg-primary"
                      style={{
                        width: `${videoFrame}%`,
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      title: 'Intelligent Audio Processing',
      icon: <Music size={32} />,
      content: 'Transform text to speech, generate music, and process audio with advanced AI models. Create professional audio content effortlessly.',
      visual: (
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-gray-800/50">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Enhanced Audio Visualization */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
              <motion.div
                className="bg-gray-900/80 px-3 py-1.5 rounded-full"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Music size={16} className="text-primary" />
                  </motion.div>
                  <span className="text-primary text-sm">Processing Audio</span>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-900/80 px-3 py-1.5 rounded-full"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-primary" />
                  <span className="text-primary text-sm">48kHz | 24bit</span>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="flex items-end justify-center gap-[2px] w-full h-full px-4 pt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {audioHeights.map((height, i) => (
                <motion.div
                  key={i}
                  className="w-2 bg-gradient-to-t from-primary to-primary/50 rounded-t-full"
                  initial={{ height: 0 }}
                  animate={{ 
                    height: `${height}%`,
                    transition: {
                      duration: 0.2,
                      ease: "easeInOut"
                    }
                  }}
                  style={{
                    filter: `brightness(${1 + height/200})`,
                    boxShadow: `0 0 ${height/10}px ${height/20}px rgba(255, 198, 0, 0.3)`
                  }}
                />
              ))}
            </motion.div>
            
            <motion.div
              className="absolute inset-0 bg-primary/5"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Audio Processing Info */}
            <motion.div
              className="absolute bottom-4 left-4 right-4 bg-gray-900/80 rounded-lg p-4"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex justify-between items-center text-primary text-sm mb-2">
                <span>Processing Audio...</span>
                <span>00:02:34</span>
              </div>
              <motion.div
                className="h-1 bg-gray-700 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2 }}
              >
                <motion.div
                  className="h-full bg-primary"
                  animate={{
                    width: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-background-dark to-background-light opacity-90" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div className="flex items-center justify-center gap-3 mb-4">
            <Brain size={32} className="text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              AI Capabilities Showcase
            </h2>
          </motion.div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the future of content creation with our advanced AI technologies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/30 rounded-xl backdrop-blur-sm border border-gray-700/50 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="p-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3 mb-4"
                    >
                      <div className="text-primary">
                        {showcaseItems[activeIndex].icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {showcaseItems[activeIndex].title}
                      </h3>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-gray-300"
                    >
                      {showcaseItems[activeIndex].content}
                    </motion.p>
                  </div>

                  <div className="h-64 bg-gray-800/50 rounded-lg overflow-hidden">
                    {showcaseItems[activeIndex].visual}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {showcaseItems.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-600'
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;