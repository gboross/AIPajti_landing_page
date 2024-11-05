import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onDismiss: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onDismiss }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-red-500/20 text-red-500 p-4 rounded-lg flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <AlertCircle size={20} />
        <span>{message}</span>
      </div>
      <button
        onClick={onDismiss}
        className="text-red-500 hover:text-red-400 transition-colors"
      >
        ×
      </button>
    </motion.div>
  );
};

export default ErrorMessage;