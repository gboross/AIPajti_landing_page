import React from 'react';
import { motion } from 'framer-motion';

const ModesTransition: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-gray-800/50 backdrop-blur-sm">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255, 198, 0, 0.1), transparent 70%)',
              'radial-gradient(circle at 80% 50%, rgba(255, 198, 0, 0.1), transparent 70%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <motion.img 
              src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOHpvRVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f9ea101dda629a4bb8fc103d25dd3adfae747a10/AIPajti_logo.png"
              alt="AIPajti Logo"
              className="h-16 w-auto"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div>
              <motion.h3 
                className="text-2xl font-bold text-white"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Your <span className="text-primary">AI Studio</span>
              </motion.h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button
              className="bg-primary hover:bg-primary/90 text-secondary px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,198,0,0.3)]"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(255,198,0,0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Try It Free Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModesTransition;