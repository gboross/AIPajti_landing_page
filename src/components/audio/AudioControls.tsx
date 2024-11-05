import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Stop, AlertCircle } from 'lucide-react';
import { StreamingStatus } from '../../types/audio';

interface AudioControlsProps {
  status: StreamingStatus;
  onTogglePlay: () => void;
  onStop: () => void;
}

const AudioControls: React.FC<AudioControlsProps> = ({
  status,
  onTogglePlay,
  onStop
}) => {
  return (
    <div className="flex items-center gap-2">
      <motion.button
        onClick={onTogglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        disabled={status === 'error'}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
          status === 'error'
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-primary hover:bg-primary/90'
        } text-secondary`}
      >
        {status === 'error' ? (
          <AlertCircle size={20} />
        ) : status === 'streaming' ? (
          <Pause size={20} />
        ) : (
          <Play size={20} />
        )}
      </motion.button>

      {(status === 'streaming' || status === 'paused') && (
        <motion.button
          onClick={onStop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white transition-colors"
        >
          <Stop size={20} />
        </motion.button>
      )}
    </div>
  );
};

export default AudioControls;