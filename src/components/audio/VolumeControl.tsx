import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface VolumeControlProps {
  isMuted: boolean;
  onToggleMute: () => void;
  isDisabled?: boolean;
}

const VolumeControl: React.FC<VolumeControlProps> = ({
  isMuted,
  onToggleMute,
  isDisabled = false
}) => {
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={onToggleMute}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`text-gray-400 hover:text-primary transition-colors ${
          isDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isDisabled}
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </motion.button>

      {showVolumeSlider && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 rounded-lg p-2"
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            defaultValue="1"
            className="w-24 h-2"
            onChange={(e) => {
              // Handle volume change
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default VolumeControl;