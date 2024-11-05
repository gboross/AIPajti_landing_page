import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const images = [
  {
    url: "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOS9xRVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--567db40159b6dcf1f720ce6fef882a3955c5c7f6/AIPajti_pictures_v6_r.jpg",
    alt: "Digital Intelligence",
    title: "Simple Use, Complete Results",
    description: "Get your tasks done effortlessly with just one prompt using AIPajti's powerful AI."
  },
  {
    url: "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK0xxRVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--390f7f8357d6e361c5c671f6682b77204d6fec67/AIPajti_pictures_v5_r.jpg",
    alt: "Digital Intelligence",
    title: "Easy to Use",
    description: "Just describe your task, and AIPajti takes care of the rest—no technical skills required."
  },
  {
    url: "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK0hxRVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3889f135d71c59d8a3786fcd86361e647bc3ebd7/AIPajti_pictures_v4_r.jpg",
    alt: "Space Technology",
    title: "Save Over $1500 Monthly",
    description: "Access all the AI models you need in one place without individual subscriptions—saving you thousands."
  },
  {
    url: "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK0RxRVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1dd5cff0e2b7aea3583981355ad281186d24b759/AIPajti_pictures_v3_r.jpg",
    alt: "Future Technology",
    title: "Advanced Solutions",
    description: "From basic tasks to complex workflows, AIPajti's advanced models have dedicated solutions for every need."
  }
];

const ImageStrip: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative h-40 md:h-48 lg:h-56 overflow-hidden bg-gray-900/60 rounded-lg">
      {/* Átlátszó réteg az egész komponensen */}
      <div className="absolute inset-0 bg-gray-900/40 z-10" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {isLoading && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse" />
          )}
          <img 
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover object-center transform transition-transform duration-2000 opacity-80"
            onLoad={handleImageLoad}
            style={{ opacity: 0.8 }}
          />
          
          {/* Text Overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20"
          >
            <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 text-shadow-lg" animate={{ opacity: [1, 0.5, 1], transition: { duration: 0.5, repeat: Infinity } }}> 
              {images[currentIndex].title}
            </motion.h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl text-shadow-lg"> 
              {images[currentIndex].description}
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-400/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageStrip;
