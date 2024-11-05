import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ScrollHighlightProps {
  children: React.ReactNode;
  delay?: number;
}

const ScrollHighlight: React.FC<ScrollHighlightProps> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            scale: [1, 1.2, 1],
            color: ['#FFFFFF', '#FFC600', '#FFFFFF'],
            transition: { duration: 1, delay: delay, ease: 'easeInOut' }
          });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, delay]);

  return (
    <motion.span ref={ref} animate={controls} className="inline-block">
      {children}
    </motion.span>
  );
};

export default ScrollHighlight;
