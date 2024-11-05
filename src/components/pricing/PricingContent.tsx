import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Star, Users, Crown, Check, AlertCircle, Shield, CreditCard } from 'lucide-react';
import { TranslationStrings } from '../../i18n/types';

interface PricingPlanProps {
  name: string;
  price: string;
  credits: number;
  features: string[];
  limitations?: string[];
  isPopular?: boolean;
  translations: TranslationStrings;
  icon: React.ElementType;
  hasPayAsYouGo?: boolean;
  onSelectPlan: () => void;
  index: number;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  name, 
  price, 
  credits, 
  features, 
  limitations,
  isPopular, 
  translations, 
  icon: Icon,
  hasPayAsYouGo,
  onSelectPlan,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, translateY: -10 }}
      className="h-full"
    >
      <div className={`h-full ${isPopular ? 'border-2 border-primary' : 'border border-gray-700'} bg-gray-800/50 backdrop-blur-sm rounded-lg relative overflow-hidden`}>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/30 to-gray-900/50" />

        {/* Content */}
        <div className="relative p-4 sm:p-6 flex flex-col h-full">
          {/* Popular Badge */}
          {isPopular && (
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary text-gray-900 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold self-start mb-4 shadow-lg"
            >
              {translations.mostPopular}
            </motion.span>
          )}

          {/* Icon */}
          <motion.div
            className="flex items-center justify-center mb-4"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-2 sm:p-3 rounded-full bg-primary/10 border border-primary/20">
              <Icon size={24} className="text-primary sm:w-8 sm:h-8" />
            </div>
          </motion.div>

          {/* Plan Name & Price */}
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{name}</h3>
          <div className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            {price}
            <span className="text-base sm:text-lg text-gray-300 font-normal">/month</span>
          </div>

          {/* Credits */}
          <div className="bg-gray-700/30 rounded-lg p-2 sm:p-3 mb-4 sm:mb-6">
            <p className="text-sm sm:text-md text-center text-gray-200">
              <span className="font-bold text-primary">{credits.toLocaleString()}</span>
              {' '}{translations.includedCredits}
            </p>
          </div>

          {/* Features */}
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
            {features.map((feature, index) => (
              <motion.li
                key={`feature-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2 text-xs sm:text-sm text-gray-300"
              >
                <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* Limitations */}
          {limitations && limitations.length > 0 && (
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {limitations.map((limitation, index) => (
                <motion.li
                  key={`limitation-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (features.length + index) * 0.1 }}
                  className="flex items-start gap-2 text-xs sm:text-sm text-gray-400"
                >
                  <AlertCircle size={16} className="text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>{limitation}</span>
                </motion.li>
              ))}
            </ul>
          )}

          {/* Pay As You Go Info */}
          {hasPayAsYouGo && (
            <p className="text-xs sm:text-sm text-gray-400 mb-4 text-center">
              {translations.payAsYouGoIncluded}
            </p>
          )}

          {/* Action Button */}
          <motion.button
            onClick={onSelectPlan}
            className={`btn ${isPopular ? 'btn-primary' : 'btn-secondary'} w-full mt-auto text-sm sm:text-base py-2.5 sm:py-3 shadow-xl`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {translations.choosePlan}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

interface PricingContentProps {
  translations: TranslationStrings;
  onPlanSelect?: () => void;
}

const PricingContent: React.FC<PricingContentProps> = ({ translations, onPlanSelect }) => {
  const handlePlanSelect = () => {
    if (onPlanSelect) {
      onPlanSelect();
    }
  };

  const plans = [
    {
      name: translations.freeTier,
      price: "$0",
      credits: 5000,
      features: [
        "Basic access to AI models",
        "5,000 monthly credits",
        "Standard response time",
        "Community support"
      ],
      limitations: [
        "Limited model selection",
        "No pay-as-you-go option",
        "Basic features only"
      ],
      icon: Zap,
      hasPayAsYouGo: false
    },
    {
      name: translations.proPlan,
      price: "$29.99",
      credits: 10000,
      features: [
        "Full access to all models",
        "10,000 monthly credits",
        "Fast response time",
        "Priority email support",
        "Pay-as-you-go available"
      ],
      icon: Star,
      hasPayAsYouGo: true
    },
    {
      name: translations.advancedPlan,
      price: "$99.99",
      credits: 50000,
      features: [
        "Everything in Pro",
        "50,000 monthly credits",
        "Faster processing speed",
        "Priority support 24/7",
        "Early access to features",
        "Pay-as-you-go available"
      ],
      isPopular: true,
      icon: Users,
      hasPayAsYouGo: true
    },
    {
      name: translations.premiumPlan,
      price: "$249.99",
      credits: 120000,
      features: [
        "Everything in Advanced",
        "120,000 monthly credits",
        "Fastest processing speed",
        "Dedicated account manager",
        "Enterprise support",
        "Pay-as-you-go available"
      ],
      icon: Crown,
      hasPayAsYouGo: true
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {plans.map((plan, index) => (
          <PricingPlan
            key={index}
            {...plan}
            translations={translations}
            onSelectPlan={handlePlanSelect}
            index={index}
          />
        ))}
      </div>

      {/* Secure Payment Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 sm:mt-12 bg-gray-800/30 rounded-lg p-4 sm:p-6 border border-gray-700/50"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <Shield className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-gray-300 text-sm sm:text-base">All transactions are secured</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <CreditCard className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-gray-300 text-sm sm:text-base">Major credit cards accepted</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.img
              src="/Pictures/Powered by Stripe/Powered by Stripe - white.svg"
              alt="Powered by Stripe"
              className="h-8 sm:h-10 w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />
          </div>
        </div>
        <p className="text-center text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4">
          Your payment information is never stored on our servers.
        </p>
      </motion.div>
    </>
  );
};

export default PricingContent;