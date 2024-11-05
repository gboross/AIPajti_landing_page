import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { TranslationStrings } from '../i18n/types';
import PricingContent from './pricing/PricingContent';
import EnterpriseInquiryModal from './pricing/EnterpriseInquiryModal';
import { Building2, Sparkles } from 'lucide-react';

interface PricingPlansProps {
  translations: TranslationStrings;
  onLogin?: () => void;
}

const PricingPlans: React.FC<PricingPlansProps> = ({ translations, onLogin }) => {
  const [isEnterpriseModalOpen, setIsEnterpriseModalOpen] = useState(false);

  const handlePlanSelect = () => {
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <section id="pricing" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background with gradient and animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-background-dark to-background-light opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <Container maxWidth="lg" className="relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Sparkles size={32} className="text-primary" />
            <Typography variant="h2" component="h2" className="text-3xl sm:text-4xl font-bold text-primary">
              Affordable AI Power for Everyone
            </Typography>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Choose the perfect plan for your needs, with flexible options and pay-as-you-go available for growing demands
          </motion.p>
        </div>
        
        {/* Pricing Content */}
        <PricingContent translations={translations} onPlanSelect={handlePlanSelect} />

        {/* Footer Notes */}
        <div className="mt-12 text-center">
          {/* Enterprise CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <motion.button
              onClick={() => setIsEnterpriseModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Building2 size={20} className="text-primary" />
              <span>Need a custom enterprise plan?</span>
            </motion.button>
            <p className="text-gray-400 text-sm mt-2">
              Contact us for tailored solutions that match your organization's needs
            </p>
          </motion.div>
        </div>
      </Container>

      {/* Enterprise Modal */}
      <EnterpriseInquiryModal
        isOpen={isEnterpriseModalOpen}
        onClose={() => setIsEnterpriseModalOpen(false)}
      />
    </section>
  );
};

export default PricingPlans;