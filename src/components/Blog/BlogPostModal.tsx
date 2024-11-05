import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { X, ChevronUp } from 'lucide-react';

interface BlogPost {
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  categories: string[];
  image: string;
  excerpt: string;
}

interface BlogPostModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, isOpen, onClose }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setShowScrollTop(target.scrollTop > 200);
  };

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !post) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="bg-gray-900 rounded-xl w-full max-w-4xl h-[90vh] overflow-hidden relative flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {/* Header Image */}
          <div className="relative h-64 flex-shrink-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
            
            {/* Categories */}
            <div className="absolute top-4 left-4 flex gap-2">
              {post.categories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary text-secondary rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-800/50 hover:bg-gray-800 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Title and Meta */}
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-3xl font-bold text-white mb-2">{post.title}</h2>
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <span>{post.author}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Audio Player */}
          {post.title === "The Revolution of AI: How AIPajti is Shaping Tomorrow's Technology" && showAudioPlayer && (
            <div className="px-8 pt-4 flex-shrink-0">
              <BlogAudioPlayer 
                audioUrl="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVJ4RWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8511e0275f1ab0f306240e4497f5a948743bb48b/Introducing%20AIPajti_EN.mp3"
                onClose={() => setShowAudioPlayer(false)}
              />
            </div>
          )}

          {/* Content */}
          <div 
            ref={contentRef}
            className="flex-grow overflow-y-auto px-8 py-6 blog-post" 
            onScroll={handleScroll}
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* Scroll to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={scrollToTop}
                className="absolute bottom-4 right-4 w-10 h-10 bg-primary text-secondary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
              >
                <ChevronUp size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogPostModal;