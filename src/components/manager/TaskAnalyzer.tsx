import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Image, Video, Music, Coins, Clock, Brain, CheckCircle, AlertCircle, ChevronDown, Table, Play } from 'lucide-react';

interface SubTask {
  name: string;
  tokenUsage: number;
}

interface TaskCategory {
  name: string;
  icon: React.ElementType;
  estimatedTokens: number;
  timeEstimate: string;
  subTasks: SubTask[];
}

interface TaskAnalyzerProps {
  isVisible: boolean;
  onPreferenceSelect?: (preference: 'ai' | 'manual') => void;
}

const TaskAnalyzer: React.FC<TaskAnalyzerProps> = ({ isVisible, onPreferenceSelect }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [processingChoice, setProcessingChoice] = useState<'ai' | 'manual' | null>(null);

  const taskCategories: TaskCategory[] = [
    {
      name: "Document Processing",
      icon: FileText,
      estimatedTokens: 500,
      timeEstimate: "1-2 minutes",
      subTasks: [
        { name: "Extract city names from 'cities.xlsx'", tokenUsage: 50 },
        { name: "Summarize 'Elon Musk Robot Theory'", tokenUsage: 100 },
        { name: "Create Shakespearean story from summary", tokenUsage: 150 },
        { name: "Translate Shakespearean story to Hungarian", tokenUsage: 100 },
        { name: "Create English subtitles and save as .srt", tokenUsage: 100 }
      ]
    },
    {
      name: "Image Generation",
      icon: Image,
      estimatedTokens: 2000,
      timeEstimate: "3-4 minutes",
      subTasks: [
        { name: "Generate 30 futuristic images (50 tokens/image)", tokenUsage: 1500 }
      ]
    },
    {
      name: "Video Creation",
      icon: Video,
      estimatedTokens: 5000,
      timeEstimate: "8-10 minutes",
      subTasks: [
        { name: "Create 30 cinematic 5-second videos", tokenUsage: 3600 },
        { name: "Merge videos into a single video", tokenUsage: 100 },
        { name: "Export final video in .mp4 format", tokenUsage: 100 }
      ]
    },
    {
      name: "Audio Processing",
      icon: Music,
      estimatedTokens: 1500,
      timeEstimate: "2-3 minutes",
      subTasks: [
        { name: "Compose background music with lyrics", tokenUsage: 500 },
        { name: "Narrate Hungarian story with warm male voice", tokenUsage: 500 },
        { name: "Add narration and background music to videos", tokenUsage: 200 },
        { name: "Dub videos into French and Chinese", tokenUsage: 300 }
      ]
    }
  ];

  const totalTokens = taskCategories.reduce((sum, category) => sum + category.estimatedTokens, 0);
  const maxTime = Math.max(...taskCategories.map(cat => parseInt(cat.timeEstimate.split('-')[1])));

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <h3 className="text-xl font-bold text-primary mb-4">Task Categories:</h3>
      <div className="grid gap-4">
        {taskCategories.map((category, index) => {
          const Icon = category.icon;
          const isExpanded = expandedCategory === category.name;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="flex items-center justify-between bg-gray-700/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/70 transition-colors"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="text-primary" size={24} />
                  </motion.div>
                  <span className="text-white">{category.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Coins size={16} className="text-primary" />
                      <span>~{category.estimatedTokens} estimated tokens</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} className="text-primary" />
                      <span>{category.timeEstimate}</span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-primary" size={20} />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Table size={16} className="text-primary" />
                        <span className="text-primary font-semibold">Subtasks Breakdown</span>
                      </div>
                      <div className="space-y-2">
                        {category.subTasks.map((subTask, subIndex) => (
                          <motion.div
                            key={subIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.1 }}
                            className="flex justify-between items-center text-sm"
                          >
                            <span className="text-gray-300">{subTask.name}</span>
                            <span className="text-primary font-mono">
                              {subTask.tokenUsage} tokens
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Summary Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-6 bg-gray-800/50 rounded-lg"
      >
        <h4 className="text-lg font-semibold text-primary mb-4">Task Summary</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Coins size={20} className="text-primary" />
            <span className="text-white">Total Estimated Tokens: ~{totalTokens}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-primary" />
            <span className="text-white">Estimated Time: Up to {maxTime} minutes</span>
          </div>
        </div>
      </motion.div>

      {/* Processing Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-8 p-6 bg-gray-800/50 rounded-lg"
      >
        <h4 className="text-lg font-semibold text-primary mb-4">Processing Preferences</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 rounded-lg transition-colors ${
              processingChoice === 'ai' 
                ? 'bg-primary/30 ring-2 ring-primary'
                : 'bg-primary/20 hover:bg-primary/30'
            }`}
            onClick={() => setProcessingChoice('ai')}
          >
            <div className="flex items-center gap-2 mb-2">
              <Brain size={24} className="text-primary" />
              <span className="text-white font-semibold">AI Automated</span>
            </div>
            <p className="text-sm text-gray-300">Let AI handle everything automatically with optimal decisions at each step.</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 rounded-lg transition-colors ${
              processingChoice === 'manual'
                ? 'bg-gray-700/70 ring-2 ring-primary'
                : 'bg-gray-700/50 hover:bg-gray-700/70'
            }`}
            onClick={() => setProcessingChoice('manual')}
          >
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle size={24} className="text-primary" />
              <span className="text-white font-semibold">Step-by-Step Review</span>
            </div>
            <p className="text-sm text-gray-300">Review and approve each step for maximum control over the process.</p>
          </motion.button>
        </div>

        {/* Start Process Button */}
        <motion.button
          className={`w-full py-4 px-8 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
            processingChoice
              ? 'bg-primary text-secondary hover:bg-primary/90'
              : 'bg-gray-700/50 text-gray-400 cursor-not-allowed'
          }`}
          whileHover={processingChoice ? { scale: 1.02 } : {}}
          whileTap={processingChoice ? { scale: 0.98 } : {}}
          onClick={() => {
            if (processingChoice && onPreferenceSelect) {
              onPreferenceSelect(processingChoice);
            }
          }}
          disabled={!processingChoice}
        >
          <Play size={24} />
          Start Process
        </motion.button>
      </motion.div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-gray-400 text-sm text-center mt-8 italic"
      >
        * This is an illustration. Actual features and capabilities can be explored within the application. Our platform is under continuous development to bring you the latest AI innovations.
      </motion.div>
    </motion.div>
  );
};

export default TaskAnalyzer;