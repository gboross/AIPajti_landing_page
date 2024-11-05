import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { Database, BarChart, Brain, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import { TranslationStrings } from '../i18n/types';

interface DataSolutionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
}

interface DataSolutionsProps {
  translations: TranslationStrings;
  onLogin?: () => void;
}

const DataSolution: React.FC<DataSolutionProps> = ({ icon, title, description, examples }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 h-full transition-all duration-300 hover:bg-gray-800/70"
  >
    <motion.div
      className="text-primary mb-4 flex justify-center"
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ duration: 0.3 }}
    >
      {icon}
    </motion.div>
    
    <Typography variant="h5" component="h3" className="text-white font-semibold mb-3 text-center">
      {title}
    </Typography>
    
    <Typography variant="body2" className="text-gray-300 mb-6">
      {description}
    </Typography>

    <div className="space-y-4">
      {examples.map((example, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-3 group p-2 rounded-lg hover:bg-gray-700/30"
        >
          <span className="text-primary">→</span>
          <span className="text-gray-300 group-hover:text-white transition-colors">
            {example}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const DataSolutions: React.FC<DataSolutionsProps> = ({ translations, onLogin }) => {
  const solutions: DataSolutionProps[] = [
    {
      icon: <Database size={36} />,
      title: "Database Automation",
      description: "Automate repetitive database tasks and streamline your data management processes with AI-powered tools.",
      examples: [
        "Automated data extraction and analysis from multiple sources",
        "Smart data cleaning and preprocessing",
        "Intelligent data validation and error detection",
        "Automated database schema optimization"
      ]
    },
    {
      icon: <Brain size={36} />,
      title: "Data-Driven Content Creation",
      description: "Transform raw data into meaningful insights and engaging content automatically.",
      examples: [
        "Generate comprehensive reports from complex datasets",
        "Create dynamic dashboards and visualizations",
        "Produce data-backed content for presentations",
        "Automated performance metric summaries"
      ]
    },
    {
      icon: <Network size={36} />,
      title: "Large-Scale Data Processing",
      description: "Handle massive datasets and complex calculations with advanced AI processing capabilities.",
      examples: [
        "Process and analyze big data efficiently",
        "Perform complex financial modeling and simulations",
        "Scientific data analysis and research",
        "Market trend analysis and forecasting"
      ]
    }
  ];

  return (
    <section id="data-solutions" className="py-20 relative overflow-hidden">
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
            Handle Complex Data with AI
          </Typography>
          
          <Typography variant="h6" component="p" className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            AIPajti isn't just for media generation—it can also handle complex data tasks. Whether you need to automate database management, analyze large datasets, or create detailed reports, AIPajti's AI tools can help you manage it all.
          </Typography>

          <Grid container spacing={4}>
            {solutions.map((solution, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <DataSolution {...solution} />
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={onLogin}
              className="bg-primary text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {translations.manageDataWithAI || "Manage Data with AI"}
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default DataSolutions;