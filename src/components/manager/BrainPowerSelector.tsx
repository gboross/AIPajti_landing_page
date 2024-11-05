import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Send } from 'lucide-react';

interface BrainPowerSelectorProps {
  brainLevel: number;
  setBrainLevel: (level: number) => void;
  onMaxLevel?: () => void;
  onSend?: () => void;
  showSendButton?: boolean;
}

const BrainPowerSelector: React.FC<BrainPowerSelectorProps> = ({ 
  brainLevel, 
  setBrainLevel, 
  onMaxLevel,
  onSend,
  showSendButton = false
}) => {
  const brainLevels = [
    { level: 1, name: "Basic", color: "#4A5568", description: "Simple tasks and basic operations" },
    { level: 2, name: "Advanced", color: "#4299E1", description: "More complex tasks with better accuracy" },
    { level: 3, name: "Expert", color: "#48BB78", description: "Professional-level tasks with high precision" },
    { level: 4, name: "Master", color: "#ECC94B", description: "Complex multi-step operations" },
    { level: 5, name: "Elite", color: "#ED8936", description: "Advanced AI processing with exceptional results" },
    { level: 6, name: "Supreme", color: "#E53E3E", description: "Extremely sophisticated tasks with perfect execution" },
    { level: 7, name: "Genius", color: "#FFC600", description: "Ultimate AI power for the most complex operations" }
  ];

  const handleBrainLevelChange = (level: number) => {
    setBrainLevel(level);
    if (level === 7 && onMaxLevel) {
      setTimeout(() => {
        onMaxLevel();
      }, 500);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-white mb-2">Select Brain Power Level</h3>
        <p className="text-gray-400">Adjust the AI processing power for your task</p>
      </motion.div>

      <div className="relative pt-8 pb-4">
        {/* Brain Level Selector */}
        <div className="flex justify-between mb-8">
          {brainLevels.map((level, index) => (
            <motion.button
              key={index}
              className={`relative w-16 h-16 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                index <= brainLevel - 1 ? 'bg-opacity-100' : 'bg-opacity-30'
              }`}
              style={{
                backgroundColor: index <= brainLevel - 1 ? level.color : '#2D3748',
                boxShadow: index <= brainLevel - 1 ? `0 0 20px ${level.color}` : 'none'
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBrainLevelChange(index + 1)}
            >
              <span className={`text-lg font-bold ${
                index <= brainLevel - 1 ? 'text-gray-900' : 'text-gray-300'
              }`}>
                {index + 1}
              </span>
              <span className={`text-xs ${
                index <= brainLevel - 1 ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {level.name}
              </span>
              
              {/* Hover indicator */}
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
              </motion.div>
            </motion.button>
          ))}
        </div>

        {/* Slider */}
        <div className="relative mb-8">
          <input
            type="range"
            min="1"
            max="7"
            value={brainLevel}
            onChange={(e) => handleBrainLevelChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, ${brainLevels[brainLevel - 1].color} 0%, ${brainLevels[brainLevel - 1].color} ${(brainLevel / 7) * 100}%, #2D3748 ${(brainLevel / 7) * 100}%, #2D3748 100%)`,
            }}
          />
          <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500">
            <span>Basic</span>
            <span>Genius</span>
          </div>
        </div>

        {/* Level Description */}
        <motion.div
          className="mt-12 text-center bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={brainLevel}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain 
              className="text-primary" 
              size={24}
              style={{
                filter: `drop-shadow(0 0 10px ${brainLevels[brainLevel - 1].color})`
              }}
            />
            <h4 className="text-xl font-bold text-white">
              {brainLevels[brainLevel - 1].name} Brain Level
            </h4>
          </div>
          <p className="text-gray-300 text-lg">
            {brainLevels[brainLevel - 1].description}
          </p>

          {/* Send Button */}
          <AnimatePresence>
            {showSendButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-8 flex justify-center"
              >
                <motion.button
                  onClick={onSend}
                  className="bg-primary text-secondary px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(255,198,0,0)',
                      '0 0 0 10px rgba(255,198,0,0.2)',
                      '0 0 0 0 rgba(255,198,0,0)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Send size={20} />
                  Process with Selected Power
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default BrainPowerSelector;