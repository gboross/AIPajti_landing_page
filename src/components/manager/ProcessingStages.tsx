import React from 'react';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, AlertCircle } from 'lucide-react';

interface ProcessingStagesProps {
  stage: 'processing' | 'analyzing' | 'categories';
  showPreferences: boolean;
}

const ProcessingStages: React.FC<ProcessingStagesProps> = ({ stage, showPreferences }) => {
  const BrainIcon = () => (
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 360, 0]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Brain size={64} className="text-primary" />
    </motion.div>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      {stage === 'processing' && (
        <motion.div
          key="processing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center justify-center py-12"
        >
          <BrainIcon />
          <motion.p
            className="text-primary text-lg mt-6"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Processing with Genius Level Brain Power...
          </motion.p>
        </motion.div>
      )}

      {stage === 'analyzing' && (
        <motion.div
          key="analyzing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center justify-center py-12"
        >
          <BrainIcon />
          <motion.p
            className="text-primary text-lg mt-6"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Analyzing task requirements...
          </motion.p>
        </motion.div>
      )}

      {showPreferences && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-6 p-6 bg-gray-700/30 rounded-lg"
        >
          <h4 className="text-lg font-semibold text-primary mb-4">How would you like to proceed?</h4>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-primary text-secondary py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <CheckCircle size={20} />
              Trust AI Completely
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <AlertCircle size={20} />
              Review Each Step
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProcessingStages;