import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { ArrowRight, ExternalLink, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  examples: string[];
  capabilities: string[];
  benefits: string[];
}

const TabContent: React.FC<{ items: string[]; icon: React.ElementType }> = ({ items, icon: Icon }) => (
  <div className="space-y-3">
    {items.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-start gap-3 group p-2 rounded-lg hover:bg-gray-700/30"
      >
        <motion.div
          className="mt-1 text-primary"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <Icon size={16} />
        </motion.div>
        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
          {item}
        </span>
      </motion.div>
    ))}
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  image,
  examples,
  capabilities,
  benefits
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'examples' | 'capabilities' | 'benefits'>('examples');
  const [isHovered, setIsHovered] = useState(false);

  const tabs = [
    { id: 'examples', label: 'Examples', icon: ArrowRight, content: examples },
    { id: 'capabilities', label: 'Capabilities', icon: ExternalLink, content: capabilities },
    { id: 'benefits', label: 'Benefits', icon: Sparkles, content: benefits }
  ] as const;

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/50"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Header Section */}
      <div className="relative h-64 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover filter brightness-50"
            style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/80 to-gray-900/95" />
        </motion.div>
        
        <div className="relative h-full flex flex-col items-center justify-center p-6">
          {/* Icon */}
          <motion.div
            className="relative mb-4"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-full filter blur-xl"
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative z-10 text-primary p-3 bg-gray-800/50 rounded-full border border-primary/20">
              {icon}
            </div>
          </motion.div>

          {/* Title */}
          <div className="relative mb-3">
            <Typography variant="h5" className="text-white font-bold text-center">
              {title}
            </Typography>
            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: isHovered ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className="px-4"
          >
            <Typography variant="body2" className="text-gray-300 text-center">
              {description}
            </Typography>
          </motion.div>
        </div>
      </div>

      {/* Quick Features Preview */}
      <div className="px-6 py-4 bg-gray-800/30">
        <div className="flex flex-wrap gap-2 justify-center">
          {examples.slice(0, 3).map((example, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
            >
              {example}
            </span>
          ))}
        </div>
      </div>

      {/* Expand/Collapse Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors bg-gray-800/50"
        whileHover={{ backgroundColor: 'rgba(255, 198, 0, 0.1)' }}
      >
        <span className="text-sm font-semibold">
          {isExpanded ? 'Show Less' : 'Explore Features'}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/30 backdrop-blur-sm"
          >
            {/* Tabs */}
            <div className="flex border-b border-gray-700/50">
              {tabs.map(({ id, label, icon: TabIcon }) => (
                <motion.button
                  key={id}
                  onClick={() => setActiveTab(id as typeof activeTab)}
                  className={`flex-1 px-4 py-4 text-sm font-medium transition-all ${
                    activeTab === id
                      ? 'text-primary border-b-2 border-primary bg-primary/5'
                      : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/30'
                  }`}
                  whileHover={{ backgroundColor: 'rgba(255, 198, 0, 0.05)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <TabIcon size={16} />
                    {label}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {tabs.map(({ id, content, icon }) => (
                  activeTab === id && (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <TabContent items={content} icon={icon} />
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FeatureCard;