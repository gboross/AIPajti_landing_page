import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found | AIPajti"
        description="The page you're looking for doesn't exist. Return to AIPajti's homepage."
        keywords="404, not found, error page"
        canonicalUrl="https://aipajti.com/404"
      />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <AlertCircle size={64} className="text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">404</h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8">Page Not Found</h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-secondary rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Home size={20} />
              Return Home
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;