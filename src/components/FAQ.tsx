import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { TranslationStrings } from '../i18n/types';

interface FAQProps {
  translations: TranslationStrings;
}

const FAQ: React.FC<FAQProps> = ({ translations }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    { question: translations.faq1Question, answer: translations.faq1Answer },
    { question: translations.faq2Question, answer: translations.faq2Answer },
    { question: translations.faq3Question, answer: translations.faq3Answer },
    { question: translations.faq4Question, answer: translations.faq4Answer },
    { question: translations.faq5Question, answer: translations.faq5Answer },
    { question: translations.faq6Question, answer: translations.faq6Answer },
    { question: translations.faq7Question, answer: translations.faq7Answer },
    { question: translations.faq8Question, answer: translations.faq8Answer },
    { question: translations.faq9Question, answer: translations.faq9Answer },
    { question: translations.faq10Question, answer: translations.faq10Answer },
  ];

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h2" className="text-primary text-4xl font-bold text-center mb-12">
            {translations.faqTitle}
          </Typography>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                initial={false}
                animate={{ backgroundColor: expandedIndex === index ? 'rgba(255, 198, 0, 0.1)' : 'rgba(31, 41, 55, 1)' }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
                  onClick={() => toggleQuestion(index)}
                >
                  <Typography className="text-white font-semibold">{faq.question}</Typography>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-primary" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <Typography className="text-gray-300 p-4 pt-0">{faq.answer}</Typography>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQ;