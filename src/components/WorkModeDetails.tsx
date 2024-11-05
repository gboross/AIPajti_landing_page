import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Bot, Workflow, Cpu, Zap, Layers, ChevronDown, Image, FileText, Video, Music, Code, Database } from 'lucide-react';

interface WorkModeDetailsProps {
  activeTab: string;
  selectedTask: string | null;
  setSelectedTask: (task: string | null) => void;
  modes: {
    [key: string]: {
      icon: JSX.Element;
      title: string;
      description: string;
    };
  };
  onTryNow: () => void;
}

const WorkModeDetails: React.FC<WorkModeDetailsProps> = ({
  activeTab,
  selectedTask,
  setSelectedTask,
  modes,
  onTryNow
}) => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [brainLevel, setBrainLevel] = useState(3);

  const tasks = [
    { id: 'image', name: 'Image Generation', icon: Image, description: 'Create, edit, or transform images' },
    { id: 'text', name: 'Text Generation', icon: FileText, description: 'Generate or analyze text content' },
    { id: 'video', name: 'Video Creation', icon: Video, description: 'Create or edit videos' },
    { id: 'audio', name: 'Audio Processing', icon: Music, description: 'Generate or process audio' },
    { id: 'code', name: 'Code Generation', icon: Code, description: 'Generate or analyze code' },
    { id: 'data', name: 'Data Analysis', icon: Database, description: 'Process and analyze data' },
  ];

  const modelCapabilities = {
    image: [
      { strength: 'Photorealistic', description: 'Best for creating lifelike images' },
      { strength: 'Artistic', description: 'Excellent for creative and artistic styles' },
      { strength: 'Technical', description: 'Ideal for precise technical illustrations' },
      { strength: 'Conceptual', description: 'Perfect for abstract and conceptual art' },
    ],
    text: [
      { strength: 'Creative', description: 'Excels at creative writing and storytelling' },
      { strength: 'Technical', description: 'Specialized in technical documentation' },
      { strength: 'Analytical', description: 'Best for data analysis and reports' },
      { strength: 'Conversational', description: 'Natural dialogue and responses' },
    ],
    video: [
      { strength: 'Motion', description: 'Specialized in fluid motion and animation' },
      { strength: 'Realistic', description: 'Photorealistic video generation' },
      { strength: 'Stylized', description: 'Artistic and stylized animations' },
      { strength: 'Technical', description: 'Professional video editing and effects' },
    ],
    audio: [
      { strength: 'Natural', description: 'Human-like voice synthesis' },
      { strength: 'Musical', description: 'Music composition and generation' },
      { strength: 'Effects', description: 'Sound effects and audio processing' },
      { strength: 'Multilingual', description: 'Support for multiple languages' },
    ],
    code: [
      { strength: 'Full-Stack', description: 'Complete application development' },
      { strength: 'Algorithm', description: 'Efficient algorithm implementation' },
      { strength: 'Analysis', description: 'Code review and optimization' },
      { strength: 'Documentation', description: 'Code documentation generation' },
    ],
    data: [
      { strength: 'Analysis', description: 'Deep data analysis and insights' },
      { strength: 'Visualization', description: 'Data visualization generation' },
      { strength: 'Processing', description: 'Large-scale data processing' },
      { strength: 'Prediction', description: 'Predictive analytics and forecasting' },
    ],
  };

  const brainLevels = [
    { level: 1, name: "Basic", color: "#4A5568" },
    { level: 2, name: "Advanced", color: "#4299E1" },
    { level: 3, name: "Expert", color: "#48BB78" },
    { level: 4, name: "Master", color: "#ECC94B" },
    { level: 5, name: "Elite", color: "#ED8936" },
    { level: 6, name: "Supreme", color: "#E53E3E" },
    { level: 7, name: "Genius", color: "#FFC600" }
  ];

  const BrainLevelIndicator = () => (
    <div className="w-full max-w-md mb-8">
      <div className="relative pt-8 pb-4">
        <div className="flex justify-between mb-2">
          {brainLevels.map((level, index) => (
            <motion.div
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                index <= brainLevel - 1 ? 'text-secondary' : 'text-gray-400'
              }`}
              style={{
                background: index <= brainLevel - 1 ? level.color : '#2D3748',
                boxShadow: index <= brainLevel - 1 ? `0 0 15px ${level.color}` : 'none'
              }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setBrainLevel(index + 1)}
            >
              {index + 1}
            </motion.div>
          ))}
        </div>
        <div className="h-2 bg-gray-700 rounded-full mt-2">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: brainLevels[brainLevel - 1].color,
              width: `${(brainLevel / brainLevels.length) * 100}%`
            }}
            initial={{ width: 0 }}
            animate={{ width: `${(brainLevel / brainLevels.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
        <motion.div
          className="absolute -top-6 left-0 w-full text-center text-lg font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={brainLevel}
        >
          {brainLevels[brainLevel - 1].name} Level
        </motion.div>
      </div>
    </div>
  );

  const FlowAnimation = ({ task }: { task: string }) => {
    const capabilities = modelCapabilities[task as keyof typeof modelCapabilities];
    
    return (
      <div className="relative py-12">
        <motion.div 
          className="absolute left-1/2 top-0 w-1 h-full bg-yellow-500/20"
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 1 }}
        />
        <div className="grid gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <motion.div
                  className="w-4 h-4 rounded-full bg-yellow-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                />
                <div className={`bg-gray-700/50 p-4 rounded-lg flex-1 max-w-md ${
                  index % 2 === 0 ? 'text-left' : 'text-right'
                }`}>
                  <h4 className="text-lg font-semibold text-yellow-500 mb-1">{capability.strength}</h4>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const contentVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        variants={contentVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
        className="max-w-6xl mx-auto"
      >
        {activeTab === 'advanced' && (
          <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">{modes.advanced.title}</h3>
              <p className="text-gray-300 text-lg">{modes.advanced.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {!selectedTask ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tasks.map((task) => (
                    <motion.button
                      key={task.id}
                      className="p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
                      onClick={() => setSelectedTask(task.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <task.icon size={48} className="text-yellow-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">{task.name}</h3>
                      <p className="text-gray-300">{task.description}</p>
                    </motion.button>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <motion.button
                      onClick={() => setSelectedTask(null)}
                      className="text-yellow-500 flex items-center"
                      whileHover={{ x: -5 }}
                    >
                      <ChevronDown className="rotate-90 mr-2" /> Back to Tasks
                    </motion.button>
                    <h3 className="text-2xl font-semibold text-white">
                      Capabilities for {tasks.find(t => t.id === selectedTask)?.name}
                    </h3>
                  </div>
                  <FlowAnimation task={selectedTask} />

                  {/* Try Now Button */}
                  <motion.div className="flex justify-center mt-8">
                    <motion.button
                      onClick={onTryNow}
                      className="bg-primary text-secondary px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Try Now
                      <Zap size={20} />
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'manager' && (
          <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-yellow-500">
                    {modes.manager.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {modes.manager.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg">
                  {modes.manager.description}
                </p>
                <BrainLevelIndicator />
                <motion.button
                  onClick={onTryNow}
                  className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Manager Mode
                </motion.button>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: <Command size={24} className="text-yellow-500" />,
                    title: "Single Command Control",
                    description: "Execute complex multi-step tasks with one simple prompt"
                  },
                  {
                    icon: <Bot size={24} className="text-yellow-500" />,
                    title: "Smart Task Distribution",
                    description: "AI automatically selects and coordinates multiple models"
                  },
                  {
                    icon: <Workflow size={24} className="text-yellow-500" />,
                    title: "Automated Workflow",
                    description: "Focus on results while AI handles the process"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredFeature(feature.title)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className={`p-6 rounded-xl transition-all duration-300 ${
                      hoveredFeature === feature.title
                        ? 'bg-yellow-500/20 scale-105'
                        : 'bg-gray-700/30'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        animate={{
                          rotate: hoveredFeature === feature.title ? 360 : 0
                        }}
                        transition={{ duration: 0.5 }}
                        className={hoveredFeature === feature.title ? 'text-white' : 'text-yellow-500'}
                      >
                        {feature.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkModeDetails;