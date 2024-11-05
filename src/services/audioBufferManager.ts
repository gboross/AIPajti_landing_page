export class AudioBufferManager {
  private sourceBuffer: SourceBuffer | null = null;
  private chunks: Uint8Array[] = [];
  private isUpdating: boolean = false;

  constructor(mediaSource: MediaSource) {
    try {
      this.sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');
      this.sourceBuffer.mode = 'sequence';
    } catch (error) {
      console.error('Error initializing source buffer:', error);
      throw new Error('Failed to initialize audio buffer');
    }
  }

  public async appendChunk(chunk: Uint8Array): Promise<void> {
    if (!this.sourceBuffer || this.isUpdating) {
      return;
    }

    try {
      this.isUpdating = true;
      this.chunks.push(chunk);
      this.sourceBuffer.appendBuffer(chunk);
      await this.waitForUpdate();
    } catch (error) {
      console.error('Error appending chunk:', error);
      throw new Error('Failed to append audio chunk');
    } finally {
      this.isUpdating = false;
    }
  }

  private waitForUpdate(): Promise<void> {
    return new Promise((resolve) => {
      const handleUpdate = () => {
        this.sourceBuffer?.removeEventListener('updateend', handleUpdate);
        resolve();
      };
      this.sourceBuffer?.addEventListener('updateend', handleUpdate);
    });
  }

  public async clear(): Promise<void> {
    if (!this.sourceBuffer || this.isUpdating) {
      return;
    }

    try {
      this.isUpdating = true;
      if (this.sourceBuffer.buffered.length > 0) {
        const start = this.sourceBuffer.buffered.start(0);
        const end = this.sourceBuffer.buffered.end(0);
        await this.sourceBuffer.remove(start, end);
        await this.waitForUpdate();
      }
      this.chunks = [];
    } catch (error) {
      console.error('Error clearing buffer:', error);
    } finally {
      this.isUpdating = false;
    }
  }

  public dispose(): void {
    this.sourceBuffer = null;
    this.chunks = [];
  }
}