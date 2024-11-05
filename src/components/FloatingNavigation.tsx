import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from '../hooks/useScrollSpy';

const FloatingNavigation: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'image-strip', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'work-modes', label: 'Modes' },
    { id: 'text-cascade', label: 'Cascade' },
    { id: 'manager-model', label: 'Manager' },
    { id: 'ai-studio', label: 'Studio' },
    { id: 'tts-demo', label: 'Voice' },
    { id: 'features', label: 'Features' },
    { id: 'call-to-action', label: 'Action' },
    { id: 'how-it-works', label: 'Process' },
    { id: 'ai-showcase', label: 'Showcase' },
    { id: 'data-solutions', label: 'Data' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'blog', label: 'Blog' },
    { id: 'faq', label: 'FAQ' }
  ];

  const activeSection = useScrollSpy(
    sections.map(section => section.id),
    100
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navigation when scrolling starts
      setIsScrolling(true);
      setIsVisible(true);
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set new timeout to hide navigation after scrolling stops
      const timeout = setTimeout(() => {
        setIsScrolling(false);
        // Only hide on mobile
        if (window.innerWidth < 768 && !isHovered) {
          setIsVisible(false);
        }
      }, 1500); // Hide after 1.5 seconds of no scrolling

      setLastScrollY(currentScrollY);
      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout, lastScrollY, isHovered]);

  const activeIndex = sections.findIndex(section => section.id === activeSection);
  const scrollProgress = ((activeIndex + 1) / sections.length) * 100;

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-50"
          onMouseEnter={() => {
            setIsHovered(true);
            setIsVisible(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            if (!isScrolling && window.innerWidth < 768) {
              setIsVisible(false);
            }
          }}
        >
          <motion.div 
            className="relative flex items-center"
            animate={{ opacity: isScrolling || isHovered ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          >
            {/* Progress Bar */}
            <div className="absolute right-4 sm:right-8 h-[200px] sm:h-[300px] w-0.5 sm:w-1 bg-gray-700/30 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 w-full bg-primary rounded-full"
                style={{ height: `${scrollProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Section Indicators */}
            <div className="relative flex flex-col gap-1 sm:gap-2">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  className="flex items-center gap-2 cursor-pointer group"
                  onClick={() => handleClick(section.id)}
                  animate={{
                    opacity: Math.abs(activeIndex - index) < 2 ? 1 : 0.3
                  }}
                >
                  <motion.div
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
                      section.id === activeSection 
                        ? 'bg-primary w-2 h-2 sm:w-3 sm:h-3' 
                        : 'bg-gray-500 group-hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    animate={{ scale: section.id === activeSection ? 1.2 : 1 }}
                  />
                  
                  <AnimatePresence>
                    {section.id === activeSection && (isScrolling || isHovered) && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute right-6 whitespace-nowrap bg-gray-800/90 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm hidden sm:block"
                      >
                        <span className="text-primary font-medium">{section.label}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNavigation;