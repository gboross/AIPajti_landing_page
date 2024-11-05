import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Clock, Mail } from 'lucide-react';
import SEO from '../components/SEO';

const MaintenancePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Maintenance Mode | AIPajti"
        description="AIPajti is currently undergoing scheduled maintenance. We'll be back soon!"
        keywords="maintenance, scheduled maintenance, downtime"
        canonicalUrl="https://aipajti.com/maintenance"
      />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Settings size={64} className="text-primary" />
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We're Currently Under Maintenance
            </h1>
            
            <p className="text-gray-300 mb-8">
              AIPajti is undergoing scheduled maintenance to improve our services.
              We'll be back online shortly!
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-400">
                <Clock size={20} className="text-primary" />
                <span>Estimated duration: 2 hours</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={20} className="text-primary" />
                <a 
                  href="mailto:support@aipajti.com"
                  className="hover:text-primary transition-colors"
                >
                  support@aipajti.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
          >
            <h2 className="text-lg font-semibold text-primary mb-4">
              What's Being Updated?
            </h2>
            <ul className="text-gray-300 space-y-2 text-left">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                System performance improvements
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Security enhancements
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                New feature implementations
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MaintenancePage;