import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { FileText, Image, Mic, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import { TranslationStrings } from '../i18n/types';
import FeatureCard from './features/FeatureCard';
import AIIntegrations from './features/AIIntegrations';

interface FeaturesProps {
  translations: TranslationStrings;
}

const Features: React.FC<FeaturesProps> = ({ translations }) => {
  const features = [
    {
      icon: <FileText size={36} />,
      title: translations.textGenerationTitle || "Generate Human-Like Text",
      description: "Create engaging content from blog posts to marketing copy with advanced AI models.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80",
      examples: [
        "Write compelling blog posts and articles",
        "Generate creative stories and scripts",
        "Create professional marketing copy",
        "Produce technical documentation",
        "Generate product descriptions",
        "Write social media content"
      ],
      capabilities: [
        "Advanced language understanding and generation",
        "Multiple writing styles and tones",
        "Support for 50+ languages",
        "SEO optimization",
        "Content rephrasing and summarization",
        "Grammar and style checking"
      ],
      benefits: [
        "Save hours on content creation",
        "Maintain consistent brand voice",
        "Scale content production efficiently",
        "Improve content quality",
        "Reach global audiences",
        "Boost engagement rates"
      ]
    },
    {
      icon: <Image size={36} />,
      title: translations.imageCreationTitle || "Create Custom Images",
      description: "Generate stunning visuals for any purpose, from artistic designs to marketing materials.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      examples: [
        "Generate artistic illustrations",
        "Create professional logos",
        "Design marketing visuals",
        "Produce custom graphics",
        "Create product mockups",
        "Generate brand assets"
      ],
      capabilities: [
        "High-resolution image generation",
        "Multiple artistic styles",
        "Photo-realistic rendering",
        "Image editing and enhancement",
        "Style transfer",
        "Background removal and replacement"
      ],
      benefits: [
        "Reduce design costs",
        "Quick iteration on concepts",
        "Unique, custom visuals",
        "Consistent brand imagery",
        "Rapid prototyping",
        "Professional-quality output"
      ]
    },
    {
      icon: <Mic size={36} />,
      title: translations.audioProcessingTitle || "Audio Creation & Processing",
      description: "Transform text to speech, compose music, and clone voices with advanced audio AI.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
      examples: [
        "Convert text to natural speech",
        "Compose original music",
        "Clone and synthesize voices",
        "Create podcast content",
        "Generate sound effects",
        "Produce audio books"
      ],
      capabilities: [
        "Natural voice synthesis",
        "Multi-language support",
        "Voice cloning technology",
        "Music composition",
        "Audio enhancement",
        "Noise reduction"
      ],
      benefits: [
        "Professional voice-overs",
        "Custom music creation",
        "Multi-language content",
        "Enhanced audio quality",
        "Consistent voice branding",
        "Rapid audio production"
      ]
    },
    {
      icon: <Video size={36} />,
      title: translations.videoCreationTitle || "Video Generation",
      description: "Create professional videos from scratch or enhance existing footage with AI.",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80",
      examples: [
        "Generate promotional videos",
        "Create educational content",
        "Produce animated explainers",
        "Edit and enhance footage",
        "Create social media videos",
        "Generate product demonstrations"
      ],
      capabilities: [
        "Text-to-video generation",
        "Video editing automation",
        "Motion graphics creation",
        "Style transfer for videos",
        "Video upscaling",
        "Automated subtitling"
      ],
      benefits: [
        "Reduce video production costs",
        "Quick content creation",
        "Professional quality output",
        "Consistent brand videos",
        "Multi-format optimization",
        "Engaging visual content"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            component="h2" 
            className="text-primary text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Create What You Need with AI
          </Typography>
          
          <Typography 
            variant="h6" 
            component="p" 
            className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          >
            Transform your ideas into reality with our comprehensive suite of AI-powered creation tools
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <AIIntegrations />
        </motion.div>
      </Container>
    </section>
  );
};

export default Features;