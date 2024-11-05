import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Post } from '../../types/blog';
import { TranslationStrings } from '../../i18n/types';

interface BlogSliderProps {
  posts: Post[];
  translations: TranslationStrings;
  onSelect: (index: number) => void;
}

const BlogSlider: React.FC<BlogSliderProps> = ({ posts = [], translations, onSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  if (!posts.length) {
    return null;
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + posts.length) % posts.length);
  };

  const handleNavigationClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleReadClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    onSelect(index);
  };

  return (
    <div className="space-y-8">
      <div className="relative h-[500px] rounded-2xl overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full"
          >
            {/* Clickable Container */}
            <div 
              className="relative w-full h-full cursor-pointer"
              onClick={(e) => handleReadClick(e, currentIndex)}
            >
              {/* Image */}
              <img
                src={posts[currentIndex].image}
                alt={posts[currentIndex].title}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent pointer-events-none" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
                <div className="max-w-3xl mx-auto">
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {posts[currentIndex].categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/90 text-secondary rounded-full text-xs font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {posts[currentIndex].title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-300 text-lg mb-6">
                    {posts[currentIndex].excerpt}
                  </p>

                  {/* Read Article Button */}
                  <motion.button
                    onClick={(e) => handleReadClick(e, currentIndex)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-secondary rounded-lg font-semibold hover:bg-primary/90 transition-colors pointer-events-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {translations.readMore}
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
          <motion.button
            className="navigation-button w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors border border-white/10 pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
              paginate(-1);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            className="navigation-button w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors border border-white/10 pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
              paginate(1);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Post Counter */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm z-20">
          <span className="font-bold text-primary">{currentIndex + 1}</span>
          <span className="mx-1">/</span>
          <span>{posts.length}</span>
        </div>
      </div>

      {/* Navigation Dots with Thumbnails */}
      <div className="navigation-dots flex justify-center gap-4">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="cursor-pointer flex flex-col items-center"
            onClick={(e) => handleNavigationClick(e, index)}
          >
            {/* Navigation Dot */}
            <motion.div
              className={`w-3 h-3 rounded-full mb-2 transition-colors duration-300 ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-500/50'
              }`}
              whileHover={{ scale: 1.2 }}
            />
            
            {/* Mini Preview */}
            <motion.div
              className={`w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex ? 'border-primary' : 'border-transparent'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative w-full h-full group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                
                {/* Mini Read Button */}
                <motion.button
                  onClick={(e) => handleReadClick(e, index)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-xs font-bold text-primary">
                    Read
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogSlider;