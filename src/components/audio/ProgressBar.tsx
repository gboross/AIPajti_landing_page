import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative h-1 bg-gray-700 rounded-full mb-4">
      <motion.div
        className="absolute left-0 top-0 h-full bg-primary rounded-full"
        style={{ width: `${progress}%` }}
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default ProgressBar;