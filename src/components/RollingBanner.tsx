import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg', alt: 'OpenAI' },
  { src: 'https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg', alt: 'Google Cloud' },
  { src: 'https://www.gstatic.com/lamda/images/gemini_wordmark_light_v2_262a4aa6d6fab27f02a5.svg', alt: 'Gemini' },
  { src: 'https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png', alt: 'Runway' },
  { src: 'https://luma-api-production.s3.amazonaws.com/favicon-32x32-luma-website.png', alt: 'Luma AI' },
];

const RollingBanner: React.FC = () => {
  return (
    <div className="overflow-hidden bg-gray-900 bg-opacity-50 py-4 fixed top-1/2 left-0 right-0 transform -translate-y-1/2 z-20">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -1920],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-8 w-auto filter brightness-0 invert"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default RollingBanner;