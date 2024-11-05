import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { TranslationStrings } from '../i18n/types';
import ScrollHighlight from './ScrollHighlight';

interface HeroProps {
  translations: TranslationStrings;
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ translations, onGetStarted }) => {
  return (
    <div className="relative min-h-screen flex items-center">
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 bg-opacity-70 p-6 sm:p-8 rounded-lg backdrop-filter backdrop-blur-lg"
            >
              <Typography variant="h1" component="h1" gutterBottom className="text-primary font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-center">
                <ScrollHighlight>AIPajti:</ScrollHighlight> {translations.heroTitle || "The Ultimate AI Platform for All Your Creative Needs"}
              </Typography>
              <Typography variant="h4" paragraph className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-center">
                <ScrollHighlight delay={0.1}>Text</ScrollHighlight>, <ScrollHighlight delay={0.3}>Images</ScrollHighlight>, <ScrollHighlight delay={0.5}>Audio</ScrollHighlight>, <ScrollHighlight delay={0.7}>Videos</ScrollHighlight> and More—Created Effortlessly with AI
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm="auto">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="large" 
                      onClick={onGetStarted}
                      fullWidth
                      className="btn btn-primary w-full sm:w-auto text-base sm:text-lg py-3 px-6 sm:py-4 sm:px-8 animate-pulse"
                    >
                      {translations.startForFree || "Start for Free"}
                    </Button>
                  </motion.div>
                </Grid>
                <Grid item xs={12} sm="auto">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      size="large" 
                      href="#pricing"
                      fullWidth
                      className="btn btn-secondary w-full sm:w-auto text-base sm:text-lg py-3 px-6 sm:py-4 sm:px-8"
                    >
                      {translations.viewPricingPlans || "View Pricing Plans"}
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
