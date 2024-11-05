import { AudioConfig, ElevenLabsConfig } from '../types/audio';
import { AudioBufferManager } from './audioBufferManager';
import { AudioStreamFetcher } from './audioStreamFetcher';

class AudioService {
  private audioContext: AudioContext | null = null;
  private mediaSource: MediaSource | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private bufferManager: AudioBufferManager | null = null;
  private streamFetcher: AudioStreamFetcher;
  private isStreaming: boolean = false;
  private isInitialized: boolean = false;
  private initPromise: Promise<void> | null = null;
  private playPromise: Promise<void> | null = null;

  constructor() {
    const config: ElevenLabsConfig = {
      apiKey: import.meta.env.VITE_ELEVENLABS_API_KEY,
      voiceId: 'FF7KdobWPaiR0vkcALHF',
      modelId: 'eleven_turbo_v2_5'
    };
    this.streamFetcher = new AudioStreamFetcher(config);
  }

  private async initAudioContext(): Promise<void> {
    if (this.isInitialized) return;
    if (this.initPromise) return this.initPromise;

    this.initPromise = new Promise<void>((resolve, reject) => {
      try {
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        this.audioElement = new Audio();
        this.audioElement.crossOrigin = 'anonymous';
        
        this.mediaSource = new MediaSource();
        this.mediaSource.addEventListener('sourceopen', () => {
          try {
            if (this.mediaSource) {
              this.bufferManager = new AudioBufferManager(this.mediaSource);
              this.isInitialized = true;
              resolve();
            }
          } catch (error) {
            console.error('Error in sourceopen:', error);
            reject(new Error('Failed to initialize buffer manager'));
          }
        });

        this.audioElement.src = URL.createObjectURL(this.mediaSource);
        this.audioElement.onerror = (e) => {
          console.error('Audio element error:', e);
          reject(new Error('Audio element initialization failed'));
        };

        if (this.audioContext.state === 'suspended') {
          this.audioContext.resume();
        }
      } catch (error) {
        console.error('Error initializing audio context:', error);
        reject(new Error('Failed to initialize audio context'));
      }
    });

    return this.initPromise;
  }

  private async waitForPlaybackToEnd(): Promise<void> {
    if (this.playPromise) {
      try {
        await this.playPromise;
      } catch (error) {
        if (error.name !== 'AbortError') {
          throw error;
        }
      }
    }
  }

  public async streamAudio(text: string, config: AudioConfig): Promise<void> {
    try {
      await this.waitForPlaybackToEnd();
      
      if (!this.isInitialized) {
        await this.initAudioContext();
      }

      if (this.isStreaming) {
        await this.stopStreaming();
      }

      if (!this.bufferManager || !this.audioElement) {
        throw new Error('Audio system not properly initialized');
      }

      this.isStreaming = true;
      const stream = await this.streamFetcher.fetchStream(text, config);
      const reader = stream.getReader();

      while (this.isStreaming) {
        const { done, value } = await reader.read();

        if (done) break;
        if (!value) continue;

        await this.bufferManager.appendChunk(value);

        if (!this.audioElement.paused) continue;
        
        this.audioElement.playbackRate = config.rate || 1;
        this.audioElement.volume = config.volume || 1;
        
        try {
          this.playPromise = this.audioElement.play();
          await this.playPromise;
        } catch (playError) {
          if (playError.name === 'AbortError') {
            // Playback was interrupted, but this is expected behavior
            continue;
          }
          console.error('Error playing audio:', playError);
          throw new Error('Failed to play audio');
        }
      }
    } catch (error) {
      console.error('Error in streamAudio:', error);
      this.isStreaming = false;
      throw error;
    }
  }

  public async pauseStreaming(): Promise<void> {
    if (!this.audioElement) return;

    try {
      await this.waitForPlaybackToEnd();
      await this.audioElement.pause();
    } catch (error) {
      console.error('Error pausing stream:', error);
      throw new Error('Failed to pause streaming');
    }
  }

  public async stopStreaming(): Promise<void> {
    this.isStreaming = false;

    try {
      await this.waitForPlaybackToEnd();
      
      if (this.audioElement) {
        await this.audioElement.pause();
        this.audioElement.currentTime = 0;
      }

      await this.bufferManager?.clear();
    } catch (error) {
      console.error('Error stopping stream:', error);
      throw new Error('Failed to stop streaming');
    }
  }

  public async toggleMute(): Promise<void> {
    if (this.audioElement) {
      await this.waitForPlaybackToEnd();
      this.audioElement.muted = !this.audioElement.muted;
    }
  }

  public async updateVolume(volume: number): Promise<void> {
    if (this.audioElement) {
      await this.waitForPlaybackToEnd();
      this.audioElement.volume = Math.max(0, Math.min(1, volume));
    }
  }

  public getPlaybackTime(): number {
    return this.audioElement?.currentTime || 0;
  }

  public async cleanup(): Promise<void> {
    try {
      await this.waitForPlaybackToEnd();
      await this.stopStreaming();
      
      if (this.audioContext) {
        await this.audioContext.close();
      }
      
      if (this.audioElement) {
        this.audioElement.remove();
      }

      this.bufferManager?.dispose();
      this.audioContext = null;
      this.audioElement = null;
      this.mediaSource = null;
      this.bufferManager = null;
      this.isInitialized = false;
      this.initPromise = null;
      this.playPromise = null;
    } catch (error) {
      console.error('Error during cleanup:', error);
      throw new Error('Failed to cleanup audio service');
    }
  }
}

export const audioService = new AudioService();