import React from 'react';
import { Typography } from '@mui/material';
import { Brain, Network, Cpu, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const aiIntegrations = [
  {
    icon: <Brain size={32} />,
    title: "Large Language Models",
    description: "Powered by GPT-4, Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3.1, Mistral 7B, o1 Preview, and more cutting-edge models"
  },
  {
    icon: <Network size={32} />,
    title: "Generative AI",
    description: "Advanced image generation with Stable Diffusion XL, Midjourney, DALL·E 3, plus video creation through Runway Gen-3, Luma AI, Kling, and more"
  },
  {
    icon: <Cpu size={32} />,
    title: "Multi-Modal AI",
    description: "Seamless integration of text, image, audio, and video processing capabilities across multiple AI models and technologies"
  },
  {
    icon: <Workflow size={32} />,
    title: "AI Orchestration",
    description: "Advanced model coordination with Google AI, Anthropic, Meta AI, OpenAI, and more leading providers"
  }
];

const seoKeywords = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Neural Networks",
  "Generative AI",
  "Large Language Models",
  "Transformer Models",
  "Multi-modal AI",
  "AI Automation",
  "Cognitive Computing",
  "Text-to-Image",
  "Text-to-Video",
  "AI Content Creation",
  "Claude 3.5",
  "GPT-4",
  "Gemini 1.5",
  "Llama 3.1",
  "Runway Gen-3",
  "Luma AI"
];

const AIIntegrations: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-24 text-center"
    >
      <Typography 
        variant="h3" 
        className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-yellow-500 to-primary"
      >
        Powered by Advanced AI Technology
      </Typography>
      <Typography 
        variant="body1" 
        className="text-gray-400 mb-12 max-w-3xl mx-auto"
      >
        Experience the power of cutting-edge artificial intelligence with our integrated ecosystem of advanced language models, neural networks, and generative AI technologies.
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiIntegrations.map((integration, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/70 transition-colors duration-300"
          >
            <motion.div
              className="text-primary mb-4 flex justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              {integration.icon}
            </motion.div>
            <h3 className="text-white font-bold mb-2">{integration.title}</h3>
            <p className="text-gray-400 text-sm">{integration.description}</p>
          </motion.div>
        ))}
      </div>

      {/* SEO Keywords Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {seoKeywords.map((keyword, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + index * 0.05 }}
            className="px-4 py-2 bg-gray-800/30 rounded-full text-sm text-gray-400 hover:bg-gray-800/50 transition-colors duration-300"
          >
            {keyword}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default AIIntegrations;