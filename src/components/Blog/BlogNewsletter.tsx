import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import { TranslationStrings } from '../../i18n/types';

interface BlogNewsletterProps {
  translations: TranslationStrings;
}

const BlogNewsletter: React.FC<BlogNewsletterProps> = ({ translations }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isSubmitted) {
      // Here you would typically handle the newsletter subscription
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          {translations.newsletterTitle || "Stay Updated with AI Innovations"}
        </h3>
        <p className="text-gray-400 mb-6">
          {translations.newsletterDescription || "Subscribe to our newsletter for the latest AI insights, tips, and updates."}
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <motion.input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={translations.emailPlaceholder || "Enter your email"}
            className="w-full sm:w-auto px-6 py-3 bg-gray-700/50 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            whileFocus={{ scale: 1.02 }}
            disabled={isSubmitted}
          />
          
          <motion.button
            type="submit"
            className="px-8 py-3 bg-primary text-secondary rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitted}
          >
            {isSubmitted ? 'Subscribed!' : (translations.subscribeButton || "Subscribe")}
            <Send size={20} />
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-primary mt-4"
            >
              {translations.subscriptionSuccess || "Thank you for subscribing! Check your email to confirm your subscription."}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default BlogNewsletter;