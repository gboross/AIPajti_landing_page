import { useState, useRef } from 'react';
import { AudioState, AudioConfig } from '../types/audio';
import { ttsService } from '../services/ttsService';

export const useAudioPlayer = () => {
  const [state, setState] = useState<AudioState>({
    isPlaying: false,
    isMuted: false,
    volume: 1,
    progress: 0,
    status: 'idle',
    error: null,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<number | null>(null);

  const cleanup = () => {
    if (progressInterval.current) {
      window.clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setState(prev => ({
        ...prev,
        progress: isNaN(progress) ? 0 : progress
      }));
    }
  };

  const play = async (text: string, config: AudioConfig) => {
    try {
      cleanup();
      setState(prev => ({ ...prev, status: 'generating', error: null }));

      // Generate speech using TTS service
      const audioBlob = await ttsService.generateSpeech(text, config.voiceId, undefined, config);
      const audioUrl = URL.createObjectURL(audioBlob);

      if (!audioRef.current) {
        audioRef.current = new Audio();
      }

      audioRef.current.src = audioUrl;
      audioRef.current.volume = config.volume || 1;
      audioRef.current.playbackRate = config.rate || 1;
      audioRef.current.muted = state.isMuted;

      // Set up event listeners
      audioRef.current.oncanplay = async () => {
        try {
          await audioRef.current?.play();
          setState(prev => ({
            ...prev,
            isPlaying: true,
            status: 'playing',
            error: null
          }));

          progressInterval.current = window.setInterval(updateProgress, 100);
        } catch (error) {
          console.error('Error playing audio:', error);
          setState(prev => ({
            ...prev,
            isPlaying: false,
            status: 'error',
            error: 'Failed to play audio'
          }));
        }
      };

      audioRef.current.onended = () => {
        cleanup();
        setState(prev => ({
          ...prev,
          isPlaying: false,
          status: 'idle',
          progress: 0
        }));
        URL.revokeObjectURL(audioUrl);
      };

      audioRef.current.onerror = () => {
        cleanup();
        setState(prev => ({
          ...prev,
          isPlaying: false,
          status: 'error',
          error: 'Error loading audio'
        }));
        URL.revokeObjectURL(audioUrl);
      };

    } catch (error) {
      console.error('Error setting up audio:', error);
      setState(prev => ({
        ...prev,
        isPlaying: false,
        status: 'error',
        error: error instanceof Error ? error.message : 'Failed to setup audio'
      }));
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      cleanup();
      setState(prev => ({
        ...prev,
        isPlaying: false,
        status: 'paused'
      }));
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      cleanup();
      setState(prev => ({
        ...prev,
        isPlaying: false,
        status: 'idle',
        progress: 0
      }));
    }
  };

  const setProgress = (percentage: number) => {
    if (audioRef.current) {
      const time = (percentage / 100) * audioRef.current.duration;
      audioRef.current.currentTime = time;
      setState(prev => ({
        ...prev,
        progress: percentage
      }));
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setState(prev => ({ ...prev, isMuted: audioRef.current?.muted || false }));
    }
  };

  const setVolume = (volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume));
      setState(prev => ({ ...prev, volume }));
    }
  };

  return {
    state,
    controls: {
      play,
      pause,
      stop,
      toggleMute,
      setVolume,
      setProgress
    }
  };
};