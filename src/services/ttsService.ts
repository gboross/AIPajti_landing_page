import { AudioConfig } from '../types/audio';

export class TTSService {
  private apiKey: string;

  constructor() {
    this.apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;
    if (!this.apiKey) {
      throw new Error('ElevenLabs API key is missing');
    }
  }

  public async generateSpeech(
    text: string,
    voiceId: string = 'ZQe5CZNOzWyzPSCn5a3c',
    modelId: string = 'eleven_turbo_v2_5',
    config: AudioConfig
  ): Promise<Blob> {
    try {
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`, {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': this.apiKey
        },
        body: JSON.stringify({
          text,
          model_id: modelId,
          voice_settings: {
            stability: config.stability || 0.5,
            similarity_boost: config.similarityBoost || 0.75,
            style: config.style || 0,
            use_speaker_boost: config.useSpeakerBoost || true
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.detail || `HTTP error! status: ${response.status}`
        );
      }

      const blob = await response.blob();
      if (!blob || blob.size === 0) {
        throw new Error('Received empty audio data');
      }

      return blob;
    } catch (error) {
      console.error('Error generating speech:', error);
      throw error instanceof Error ? error : new Error('Failed to generate speech');
    }
  }
}

export const ttsService = new TTSService();