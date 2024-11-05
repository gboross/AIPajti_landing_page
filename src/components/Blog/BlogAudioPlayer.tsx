import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, X } from 'lucide-react';
import VolumeControl from '../audio/VolumeControl';
import ErrorMessage from '../audio/ErrorMessage';

interface BlogAudioPlayerProps {
  audioUrl: string;
  onClose?: () => void;
}

const BlogAudioPlayer: React.FC<BlogAudioPlayerProps> = ({ audioUrl, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioUrl);
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      if (audio) {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('error', handleError);
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audioUrl]);

  const formatTime = (seconds: number) => {
    if (!isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && !isDragging) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      if (isFinite(currentProgress)) {
        setProgress(currentProgress);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const handleError = () => {
    setError('Error playing audio. Please try again.');
    setIsPlaying(false);
  };

  const setAudioTime = (percentage: number) => {
    if (!audioRef.current || !isFinite(audioRef.current.duration)) return;
    
    const time = (percentage / 100) * audioRef.current.duration;
    if (isFinite(time) && time >= 0 && time <= audioRef.current.duration) {
      audioRef.current.currentTime = time;
      setProgress(percentage);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setAudioTime(percentage);
  };

  const handleProgressBarDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setProgress(percentage);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setAudioTime(progress);
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setError(null);
    } catch (err) {
      setError('Error playing audio. Please try again.');
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50 mb-4"
    >
      <div className="flex items-center gap-4">
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center flex-shrink-0"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </motion.button>

        <div className="flex-grow">
          {/* Progress Bar */}
          <div 
            ref={progressBarRef}
            className="h-2 bg-gray-700 rounded-full cursor-pointer relative"
            onClick={handleProgressBarClick}
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={handleProgressBarDrag}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
          >
            <motion.div
              className="absolute left-0 top-0 h-full bg-primary rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Time Display */}
          <div className="flex justify-between mt-1 text-xs text-gray-400">
            <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <VolumeControl
            isMuted={isMuted}
            onToggleMute={toggleMute}
            isDisabled={!isPlaying}
          />

          {onClose && (
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </motion.button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <ErrorMessage
            message={error}
            onDismiss={() => setError(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogAudioPlayer;