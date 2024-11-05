import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X, ArrowRight } from 'lucide-react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

interface FloatingAudioBannerProps {
  onReadMore: () => void;
}

const FloatingAudioBanner: React.FC<FloatingAudioBannerProps> = ({ onReadMore }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { state, controls } = useAudioPlayer();
  const audioUrl = '/Audio/Introducing AIPajti_EN.mp3';

  const handleTogglePlay = async () => {
    if (state.isPlaying) {
      controls.pause();
    } else {
      try {
        await controls.play(audioUrl, {
          rate: 1,
          stability: 0.5,
          similarityBoost: 0.75,
          volume: 1
        });
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      className="fixed top-24 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 z-40"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <motion.button
              onClick={handleTogglePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center"
            >
              {state.isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </motion.button>
            
            <div>
              <h3 className="text-white text-sm font-semibold">Introducing AIPajti</h3>
              <p className="text-gray-400 text-xs">Listen to our introduction</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={onReadMore}
              className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
              whileHover={{ x: 5 }}
            >
              Read Article
              <ArrowRight size={14} />
            </motion.button>

            <motion.button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={16} />
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        {state.status !== 'idle' && (
          <motion.div 
            className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden"
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
      </div>
    </motion.div>
  );
};

export default FloatingAudioBanner;