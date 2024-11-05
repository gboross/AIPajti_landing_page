import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import { Brain, Sparkles, BookOpen, Lightbulb, Newspaper } from 'lucide-react';
import { TranslationStrings } from '../../i18n/types';

interface BlogHeaderProps {
  translations: TranslationStrings;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ translations }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mb-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(255, 198, 0, 0.15), transparent 70%)',
              'radial-gradient(circle at 80% 80%, rgba(255, 198, 0, 0.15), transparent 70%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Main Content */}
      <div className="text-center relative">
        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [-20, 0, -20],
              x: [-10, 10, -10],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-0 left-1/4"
          >
            <Newspaper className="text-primary/20 w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [10, -10, 10],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 right-1/4"
          >
            <BookOpen className="text-primary/20 w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-0 left-1/3"
          >
            <Lightbulb className="text-primary/20 w-10 h-10" />
          </motion.div>
        </div>

        {/* Main Title Section */}
        <motion.div
          className="relative z-10 py-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Title Icons */}
          <div className="flex justify-center gap-6 mb-6">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Brain size={48} className="text-primary" />
            </motion.div>
            <motion.div
              animate={{
                rotate: [0, -360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles size={48} className="text-primary" />
            </motion.div>
          </div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Typography 
              variant="h1" 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-yellow-500 to-primary"
            >
              Blog & Insights
            </Typography>
            <Typography 
              variant="h2" 
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
            >
              {translations.blogSubtitle}
            </Typography>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            className="absolute left-1/2 bottom-0 h-px bg-primary/20"
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            style={{ transform: 'translateX(-50%)' }}
          />
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
          {[
            { number: "6", label: "Latest Articles" },
            { number: "4", label: "Categories" },
            { number: "Weekly", label: "Updates" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="text-3xl font-bold text-primary mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogHeader;