import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Brain, Network, Cpu, Workflow, Sparkles, Zap } from 'lucide-react';
import { TranslationStrings } from '../i18n/types';

interface HowItWorksProps {
  translations: TranslationStrings;
  onTryNow: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ translations, onTryNow }) => {
  const steps = [
    {
      icon: <Brain size={32} />,
      title: "Input Your Request",
      description: "Simply describe what you want to create in natural language"
    },
    {
      icon: <Network size={32} />,
      title: "AI Processing",
      description: "Our advanced AI models work together to process your request"
    },
    {
      icon: <Cpu size={32} />,
      title: "Model Selection",
      description: "The right AI models are automatically selected for your task"
    },
    {
      icon: <Workflow size={32} />,
      title: "Task Execution",
      description: "Your request is executed with optimal settings and parameters"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark/90 via-background-default/80 to-background-light/90 backdrop-blur-sm" />
      
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h2" className="text-primary text-3xl md:text-4xl font-bold text-center mb-4">
            How It Works
          </Typography>
          
          <Typography variant="h6" component="p" className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Experience the simplicity of AI-powered creation with our streamlined process
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300"
              >
                <motion.div
                  className="text-primary mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.icon}
                </motion.div>
                <Typography variant="h6" className="text-white font-bold mb-2">
                  {step.title}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  {step.description}
                </Typography>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <motion.button
              onClick={onTryNow}
              className="bg-primary text-secondary px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try It Now
              <Sparkles size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWorks;