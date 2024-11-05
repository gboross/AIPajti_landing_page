import React, { useState, useEffect, useRef } from 'react';
import { Brain, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import WorkModeDetails from './WorkModeDetails';

interface WorkModesProps {
  onTryNow: () => void;
}

const WorkModes: React.FC<WorkModesProps> = ({ onTryNow }) => {
  const [activeTab, setActiveTab] = useState('manager');
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [flowStep, setFlowStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const modes = {
    manager: {
      icon: <Brain size={48} className={`transition-colors ${activeTab === 'manager' ? 'text-white' : 'text-yellow-500'}`} />,
      title: "Manager Mode",
      description: "Let our AI, AIPajti, handle complex workflows automatically, as it is specifically designed for this purpose. Perfect for users who want quick results with minimal input. You can also adjust the task complexity and the level of AI brain power used, depending on the difficulty of the task."
    },
    advanced: {
      icon: <Settings size={48} className={`transition-colors ${activeTab === 'advanced' ? 'text-white' : 'text-yellow-500'}`} />,
      title: "Advanced Mode",
      description: "Take full control of individual AI models and create custom workflows for maximum flexibility. Choose specific models for each task type and fine-tune every aspect of the process to achieve exactly the results you want."
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section ref={sectionRef} id="work-modes" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-background-dark to-background-light opacity-90" />
      
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Choose Your Working Style</h2>
          
          <div className="flex justify-center mb-12 space-x-4">
            {Object.entries(modes).map(([key, mode]) => (
              <motion.button
                key={key}
                className={`px-8 py-4 rounded-lg flex items-center space-x-3 transition-all duration-300 ${
                  activeTab === key 
                    ? 'bg-primary text-secondary shadow-lg shadow-primary/20' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
                onClick={() => {
                  setActiveTab(key);
                  setSelectedTask(null);
                  setFlowStep(0);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div>
                  {mode.icon}
                </div>
                <span className="font-semibold text-white">{mode.title}</span>
              </motion.button>
            ))}
          </div>

          <WorkModeDetails
            activeTab={activeTab}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            modes={modes}
            onTryNow={onTryNow}
          />

          <p className="text-gray-400 text-sm text-center mt-8 italic">
            * This is an illustration. Actual features and capabilities can be explored within the application.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkModes;