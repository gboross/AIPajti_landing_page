import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Building2, X, ExternalLink } from 'lucide-react';

interface EnterpriseInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnterpriseInquiryModal: React.FC<EnterpriseInquiryModalProps> = ({ isOpen, onClose }) => {
  const handleMailTo = () => {
    window.location.href = 'mailto:sales@aipajti.com?subject=Enterprise%20Pricing%20Inquiry';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-gray-800/90 rounded-xl w-full max-w-lg mx-auto my-4 p-4 sm:p-6 md:p-8 relative border border-gray-700"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700/50"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6 pt-2">
              <div className="p-2 sm:p-3 rounded-full bg-primary/10">
                <Building2 size={24} className="text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Enterprise Solutions</h3>
            </div>

            {/* Content */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-300 text-sm sm:text-base">
                Looking for a custom solution? Our enterprise plans offer tailored features, dedicated support, and flexible pricing to meet your organization's specific needs.
              </p>

              <div className="bg-gray-900/50 rounded-lg p-3 sm:p-4 border border-gray-700">
                <h4 className="text-primary font-semibold mb-2 text-sm sm:text-base">Enterprise Benefits:</h4>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Custom credit allocation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Dedicated account management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Priority feature requests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Custom API integration support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Enhanced security features</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Mail size={20} className="text-primary" />
                  <span className="text-white font-semibold text-sm sm:text-base">Contact Sales</span>
                </div>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  Send your inquiry to our sales team at:
                </p>
                <motion.button
                  onClick={handleMailTo}
                  className="w-full bg-primary text-secondary py-2.5 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  sales@aipajti.com
                  <ExternalLink size={16} />
                </motion.button>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 text-center">
                Our team will respond to your inquiry within 24 hours.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnterpriseInquiryModal;