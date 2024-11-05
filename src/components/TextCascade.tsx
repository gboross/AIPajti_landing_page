import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Video, FileText, PenTool, Mic, Code, BarChart, FileSpreadsheet, Languages, Play, Music, FileVideo, Speaker, Globe, Lightbulb, FileImage, Podcast, BookOpen, Headphones, Volume2, MessageSquare, Repeat, FileAudio, Keyboard } from 'lucide-react';
import MatrixRain from './MatrixRain';

interface Node {
  x: number;
  y: number;
  text: string[];
  currentTextIndex: number;
}

interface PathPoint {
  x: number;
  y: number;
}

const TextCascade: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [nodes, setNodes] = useState<Node[]>([]);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);

  const getIconForText = (text: string, size: number = 24) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      'Generate Images': <Image size={size} />,
      'Produce Videos': <Video size={size} />,
      'Analyze Data': <BarChart size={size} />,
      'Dub Audio': <Volume2 size={size} />,
      'Clone Voices': <Mic size={size} />,
      'Write Articles': <FileText size={size} />,
      'Compose Music': <Music size={size} />,
      'Generate Code': <Code size={size} />,
      'Create Videoclips': <FileVideo size={size} />,
      'Write Stories': <FileText size={size} />,
      'Design Logos': <PenTool size={size} />,
      'Translate Text': <Languages size={size} />,
      'Create Animations': <Play size={size} />,
      'Dub Videos': <Volume2 size={size} />,
      'Generate Reports': <FileSpreadsheet size={size} />,
      'Generate Voice': <Mic size={size} />,
      'Transcribe Audio': <FileAudio size={size} />,
      'Write Scripts': <FileText size={size} />,
      'Speech-to-Speech': <Repeat size={size} />,
      'Generate Ideas': <Lightbulb size={size} />,
      'Create Content': <FileText size={size} />,
      'Text-to-Speech (TTS)': <Speaker size={size} />,
      'Speech-to-Text (STT)': <Keyboard size={size} />,
      'Analyze Trends': <BarChart size={size} />,
      'Create Marketing': <PenTool size={size} />,
      'Write Copy': <MessageSquare size={size} />,
      'Create Audiobooks': <BookOpen size={size} />,
      'Produce Podcasts': <Headphones size={size} />,
      'Write Books': <BookOpen size={size} />,
    };

    return iconMap[text] || <FileText size={size} />;
  };

  const texts = [
    ['Generate Images', 'Produce Videos', 'Analyze Data', 'Dub Audio'],
    ['Clone Voices', 'Write Articles', 'Compose Music', 'Generate Code'],
    ['Analyze Data', 'Create Videoclips', 'Write Stories', 'Design Logos'],
    ['Translate Text', 'Create Animations', 'Dub Videos', 'Generate Reports'],
    ['Generate Voice', 'Transcribe Audio', 'Write Scripts', 'Speech-to-Speech'],
    ['Generate Ideas', 'Create Content', 'Text-to-Speech (TTS)', 'Speech-to-Text (STT)'],
    ['Analyze Trends', 'Create Marketing', 'Write Copy', 'Create Audiobooks'],
    ['Transcribe Audio', 'Produce Podcasts', 'Write Books', 'Create Videoclips']
  ];

  useEffect(() => {
    if (containerRef.current) {
      const updateSize = () => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          setContainerSize({ width: rect.width, height: rect.height });
        }
      };

      updateSize();
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);

  useEffect(() => {
    if (containerSize.width && containerSize.height) {
      const centerX = containerSize.width / 2;
      const startY = window.innerWidth < 768 ? 300 : 400; // Adjust for mobile
      const horizontalSpacing = window.innerWidth < 768 ? 150 : 250; // Smaller spacing on mobile
      const verticalSpacing = window.innerWidth < 768 ? 150 : 200; // Smaller spacing on mobile
      
      const newNodes = texts.map((textArray, i) => {
        const row = Math.floor(i / (window.innerWidth < 768 ? 2 : 4)); // 2 columns on mobile, 4 on desktop
        const col = i % (window.innerWidth < 768 ? 2 : 4);
        const x = centerX + (col - (window.innerWidth < 768 ? 0.5 : 1.5)) * horizontalSpacing;
        const y = startY + row * verticalSpacing;
        
        return {
          x,
          y,
          text: textArray,
          currentTextIndex: 0
        };
      });
      
      setNodes(newNodes);
    }
  }, [containerSize]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % nodes.length);
      
      setNodes(prevNodes => 
        prevNodes.map((node, index) => ({
          ...node,
          currentTextIndex: index === activeNodeIndex 
            ? (node.currentTextIndex + 1) % node.text.length 
            : node.currentTextIndex
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [nodes.length, activeNodeIndex]);

  const createPath = (points: PathPoint[]): string => {
    return points.reduce((path, point, i) => {
      return path + (i === 0 ? `M ${point.x},${point.y}` : ` L ${point.x},${point.y}`);
    }, '');
  };

  const getOrthogonalPath = (node: Node): PathPoint[] => {
    const sourceX = containerSize.width / 2;
    const sourceY = window.innerWidth < 768 ? 150 : 215; // Adjust for mobile
    const midY = sourceY + (node.y - sourceY) / 2;
    
    return [
      { x: sourceX, y: sourceY },
      { x: sourceX, y: midY },
      { x: node.x, y: midY },
      { x: node.x, y: node.y }
    ];
  };

  return (
    <div className="relative min-h-[200px] md:h-[900px] w-full overflow-hidden">
      {/* Component Background */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80" />

      {/* Matrix Rain Effect */}
      <MatrixRain />

      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBenJ2RVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03f2d1213102ef97f609a3386943a9370040074c/AIPajti_pictures_v7_r.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1
        }}
      />

      {/* Overlay on the Background Image */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div ref={containerRef} className="relative w-full h-full" style={{ zIndex: 2 }}>
        {/* Logo with Pulsating Effect */}
        <motion.div
          className="absolute left-1/2 top-[80px] md:top-[120px] -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity, repeatType: "mirror" } }}
        >
          <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-primary/20 backdrop-blur-lg flex items-center justify-center relative">
            <img 
              src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOHpvRVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f9ea101dda629a4bb8fc103d25dd3adfae747a10/AIPajti_logo.png"
              alt="AIPajti Logo"
              className="w-20 h-20 md:w-36 md:h-36 object-contain"
            />
            {/* Dynamic Icon Container */}
            <AnimatePresence mode="wait">
              {nodes.map((node, index) => (
                activeNodeIndex === index && (
                  <motion.div
                    key={`icon-${index}-${node.currentTextIndex}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 right-0 bg-primary rounded-full p-2 text-secondary"
                  >
                    {getIconForText(node.text[node.currentTextIndex])}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,198,0,0.2)" />
              <stop offset="50%" stopColor="rgba(255,198,0,0.5)" />
              <stop offset="100%" stopColor="rgba(255,198,0,0.2)" />
            </linearGradient>
          </defs>
          {nodes.map((node, index) => {
            const pathPoints = getOrthogonalPath(node);
            const isActive = activeNodeIndex === index;
            
            return (
              <motion.path
                key={`line-${index}`}
                d={createPath(pathPoints)}
                stroke="url(#lineGradient)"
                strokeWidth={isActive ? "3" : "1.5"}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: isActive ? 1 : 0.3,
                  strokeWidth: isActive ? 3 : 1.5
                }}
                transition={{
                  pathLength: { duration: 1.5, ease: "easeInOut" },
                  opacity: { duration: 0.8 },
                  strokeWidth: { duration: 0.3 }
                }}
              />
            );
          })}
        </svg>

        {/* Text Nodes */}
        {nodes.map((node, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: -75,
              y: -75
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative">
              <motion.div
                className={`w-32 h-32 md:w-40 md:h-40 rounded-lg glass-panel flex items-center justify-center p-4 text-center backdrop-blur-sm
                  ${activeNodeIndex === index ? 'bg-primary/20' : 'bg-white/5'}`}
                animate={{
                  scale: activeNodeIndex === index ? 1.1 : 1,
                  backgroundColor: activeNodeIndex === index ? 'rgba(255,198,0,0.2)' : 'rgba(255,255,255,0.05)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="text-sm md:text-lg text-white/90"
                  key={node.currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {node.text[node.currentTextIndex]}
                </motion.span>
              </motion.div>

              {/* Large Icon Below or Above Box Based on Row */}
              <AnimatePresence mode="wait">
                {activeNodeIndex === index && (
                  <motion.div
                    key={`large-icon-${index}-${node.currentTextIndex}`}
                    initial={{ opacity: 0, y: -20, scale: 0 }}
                    animate={{ opacity: 1, y: 20, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute left-1/2 -translate-x-1/2 ${
                      index < (window.innerWidth < 768 ? 2 : 4) ? '-mt-60' : 'mt-10'
                    } text-primary`}
                  >
                    {getIconForText(node.text[node.currentTextIndex], 48)}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TextCascade;