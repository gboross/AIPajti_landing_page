import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';

interface AIStudioProps {
  onLogin: () => void;
}

const AIStudio: React.FC<AIStudioProps> = ({ onLogin }) => {
  return (
    <section className="py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-default/80 to-background-light/90 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-4">
              <motion.div
                className="p-3 rounded-full bg-primary/10 border border-primary/20"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Bot size={24} className="text-primary" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  <span className="text-primary">AIPajti:</span> Your AI Studio
                </h3>
                <p className="text-gray-400">
                  All the AI power you need, right in your hand
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={onLogin}
              className="bg-primary text-secondary px-8 py-3 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-primary/90 transition-colors whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Creating Now
              <Sparkles size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIStudio;