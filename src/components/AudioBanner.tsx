import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X, ArrowRight, Volume2, VolumeX } from 'lucide-react';

interface AudioBannerProps {
  onReadMore: () => void;
}

const AudioBanner: React.FC<AudioBannerProps> = ({ onReadMore }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const audioUrl = 'https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVJ4RWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8511e0275f1ab0f306240e4497f5a948743bb48b/Introducing%20AIPajti_EN.mp3';

  const handleTogglePlay = async () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(audioUrl);
        audioRef.current.addEventListener('ended', () => {
          setIsPlaying(false);
        });
      }

      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = isMuted ? 0 : volume;
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setError(null);
    } catch (err) {
      console.error('Error playing audio:', err);
      setError('Error playing audio. Please try again.');
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? volume : 0;
      setIsMuted(!isMuted);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 z-40"
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
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </motion.button>
            
            <div>
              <h3 className="text-white text-sm font-semibold">Introducing AIPajti</h3>
              {error ? (
                <p className="text-red-400 text-xs">{error}</p>
              ) : (
                <p className="text-gray-400 text-xs">Listen to our introduction</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Volume Control */}
            <div className="relative flex items-center"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <motion.button
                onClick={toggleMute}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </motion.button>

              <AnimatePresence>
                {showVolumeSlider && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="absolute right-8 top-1/2 -translate-y-1/2 bg-gray-800 rounded-lg px-3 py-2"
                  >
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FFC600 0%, #FFC600 ${volume * 100}%, #4B5563 ${volume * 100}%, #4B5563 100%)`,
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
      </div>
    </motion.div>
  );
};

export default AudioBanner;