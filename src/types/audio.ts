export interface AudioConfig {
  stability?: number;
  similarityBoost?: number;
  rate?: number;
  volume?: number;
  pitch?: number;
  style?: number;
  useSpeakerBoost?: boolean;
  language_id?: string;
  voiceId?: string;
}

export interface AudioState {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  progress: number;
  status: 'idle' | 'loading' | 'playing' | 'paused' | 'stopped' | 'error';
  error: string | null;
}

export interface AudioChunk {
  data: Uint8Array;
  timestamp: number;
}

export interface ElevenLabsConfig {
  apiKey: string;
  voiceId: string;
  modelId: string;
}