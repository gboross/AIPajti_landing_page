import React from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { TranslationStrings } from '../../i18n/types';

interface BlogCategoriesProps {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  translations: TranslationStrings;
}

const BlogCategories: React.FC<BlogCategoriesProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  translations
}) => {
  const handleCategoryClick = (category: string) => {
    // If the clicked category is already selected, deselect it
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-12 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        {/* Enhanced Search Bar */}
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors duration-300" size={20} />
          <input
            type="text"
            placeholder={translations.searchPosts}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-800/70"
          />
          {searchQuery && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <X size={16} />
            </motion.button>
          )}
        </div>

        {/* Dynamic Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center">
          <motion.button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              !selectedCategory 
                ? 'bg-primary text-secondary shadow-lg shadow-primary/20'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {translations.allPosts}
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-secondary shadow-lg shadow-primary/20'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCategories;