import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { TranslationStrings } from '../../i18n/types';
import { blogPosts } from '../../data/blogPosts';

interface BlogPost {
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  categories: string[];
  image: string;
  excerpt: string;
}

interface BlogGridProps {
  posts: BlogPost[];
  translations: TranslationStrings;
  onSelect: (index: number) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BlogGrid: React.FC<BlogGridProps> = ({
  posts,
  translations,
  onSelect,
  currentPage,
  totalPages,
  onPageChange
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Function to get the actual index in the full blogPosts array
  const getGlobalIndex = (localIndex: number): number => {
    // Calculate the starting index for the current page
    const startIndex = (currentPage - 1) * 6; // 6 posts per page
    // Return the actual index in the full blogPosts array
    return startIndex + localIndex;
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {posts.map((post, index) => (
          <motion.div
            key={getGlobalIndex(index)}
            variants={item}
            className="group cursor-pointer"
            onClick={() => onSelect(getGlobalIndex(index))}
          >
            <div className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50 hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Categories */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {post.categories.map((category: string, catIndex: number) => (
                    <motion.span
                      key={catIndex}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIndex * 0.1 }}
                      className="px-3 py-1 bg-primary/90 text-secondary rounded-full text-xs font-medium shadow-lg"
                    >
                      {category}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {post.title}
                </motion.h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar size={16} className="text-primary" />
                    {post.date}
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Clock size={16} className="text-primary" />
                    {post.readTime}
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <User size={16} className="text-primary" />
                    {post.author}
                  </motion.div>
                </div>

                {/* Read More Button */}
                <motion.button
                  className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 5 }}
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
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <motion.button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                currentPage === page
                  ? 'bg-primary text-secondary'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {page}
            </motion.button>
          ))}
        </div>
      )}
    </>
  );
};

export default BlogGrid;