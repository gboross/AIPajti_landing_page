import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { TranslationStrings } from '../i18n/types';
import { Brain, Sparkles, Rocket, Workflow } from 'lucide-react';

interface AboutProps {
  translations: TranslationStrings;
}

const About: React.FC<AboutProps> = ({ translations }) => {
  const features = [
    {
      icon: <Brain size={32} />,
      title: "Intelligent Processing",
      description: "Advanced AI models work together seamlessly to handle complex tasks"
    },
    {
      icon: <Workflow size={32} />,
      title: "Unified Workflow",
      description: "One platform for all your AI needs - no more switching between services"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Quality Results",
      description: "Professional-grade outputs across text, image, audio, and video"
    },
    {
      icon: <Rocket size={32} />,
      title: "Future-Ready",
      description: "Stay ahead with cutting-edge AI technology and regular updates"
    }
  ];

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6
      }
    },
    tap: {
      scale: 0.9,
      rotate: -45,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with transparency */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark/90 via-background-default/80 to-background-light/90 backdrop-blur-sm" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
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
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Main content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h2" 
              className="text-primary text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Revolutionize Your
              <br />
              <span className="text-white/90">Creative Process</span>
            </Typography>

            <Typography 
              variant="body1" 
              className="text-gray-300/90 text-lg mb-8"
            >
              {translations.aboutDescription || "AIPajti combines the best AI models for text, image, audio, video and more, allowing you to generate content and solutions faster than ever."}
            </Typography>

            <motion.div 
              className="glass-panel p-6 rounded-xl relative overflow-hidden border-2 border-primary/30"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 animate-gradient" />
              
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-primary/5 animate-pulse" />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Typography variant="h5" className="text-primary font-bold mb-4 flex items-center justify-center">
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="mr-2"
                    >
                      <Sparkles size={24} />
                    </motion.div>
                    Why Choose AIPajti?
                  </Typography>
                </motion.div>
                <Typography variant="body1" className="text-gray-300/90 text-center">
                  Experience the power of multiple AI models working together in perfect harmony. 
                  Create, transform, and innovate with unprecedented ease and efficiency.
                </Typography>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Feature cards in honeycomb layout */}
          <motion.div 
            className="lg:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-panel p-6 rounded-xl relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                custom={index}
              >
                <motion.div
                  className="text-primary mb-4 flex justify-center"
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {feature.icon}
                </motion.div>
                <Typography variant="h6" className="text-white/90 mb-2 text-center">
                  {feature.title}
                </Typography>
                <Typography variant="body2" className="text-gray-300/80 text-center">
                  {feature.description}
                </Typography>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom section - Stats or highlights */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: "25+", label: "AI Models Integrated" },
            { number: "1", label: "Unified Platform" },
            { number: "∞", label: "Possibilities" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass-panel p-6 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Typography variant="h3" className="text-primary font-bold mb-2">
                {stat.number}
              </Typography>
              <Typography variant="body1" className="text-gray-300/90">
                {stat.label}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default About;