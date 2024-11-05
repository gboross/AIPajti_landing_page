import { ElevenLabsConfig, AudioConfig } from '../types/audio';

export class AudioStreamFetcher {
  constructor(private config: ElevenLabsConfig) {}

  public async fetchStream(text: string, audioConfig: AudioConfig): Promise<ReadableStream<Uint8Array>> {
    try {
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/' + this.config.voiceId + '/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': this.config.apiKey,
        },
        body: JSON.stringify({
          text,
          model_id: this.config.modelId,
          voice_settings: {
            stability: audioConfig.stability || 0.5,
            similarity_boost: audioConfig.similarityBoost || 0.75,
          },
          optimize_streaming_latency: 3,
          output_format: 'mp3_44100_128',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (!response.body) {
        throw new Error('Response body is null');
      }

      return response.body;
    } catch (error) {
      console.error('Error fetching audio stream:', error);
      throw new Error('Failed to fetch audio stream');
    }
  }
}