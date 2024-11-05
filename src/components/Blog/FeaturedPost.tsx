import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { TranslationStrings } from '../../i18n/types';

interface FeaturedPostProps {
  post: any;
  translations: TranslationStrings;
  onSelect: () => void;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post: initialPost, translations, onSelect }) => {
  const [currentPost, setCurrentPost] = useState(initialPost);
  const [direction, setDirection] = useState(0);

  // Rotate through all blog posts every 10 seconds
  useEffect(() => {
    const posts = [initialPost]; // Itt bővítheted a posztok listáját
    let currentIndex = 0;

    const timer = setInterval(() => {
      currentIndex = (currentIndex + 1) % posts.length;
      setDirection(1);
      setCurrentPost(posts[currentIndex]);
    }, 10000);

    return () => clearInterval(timer);
  }, [initialPost]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPost.title}
        initial={{ opacity: 0, x: direction * 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -direction * 100 }}
        transition={{ duration: 0.5 }}
        className="relative h-screen min-h-[600px] max-h-[800px] w-full overflow-hidden cursor-pointer group"
        onClick={onSelect}
      >
        {/* Background Image with Parallax Effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
          <motion.img
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full h-full object-cover object-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {/* Categories */}
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {currentPost.categories.map((category: string, index: number) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-primary text-secondary rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {category}
                  </motion.span>
                ))}
              </div>

              {/* Title */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {currentPost.title}
              </motion.h1>

              {/* Excerpt */}
              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {currentPost.excerpt}
              </motion.p>

              {/* Meta Information */}
              <motion.div
                className="flex flex-wrap gap-6 justify-center text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-primary" />
                  {currentPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  {currentPost.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <User size={20} className="text-primary" />
                  {currentPost.author}
                </div>
              </motion.div>

              {/* Read More Button */}
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-secondary rounded-full font-bold text-lg group-hover:gap-4 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                {translations.readMore}
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <div className="w-1 h-16 bg-primary/20 rounded-full relative">
            <motion.div
              className="absolute top-0 left-0 right-0 h-1/3 bg-primary rounded-full"
              animate={{
                y: [0, 32, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FeaturedPost;