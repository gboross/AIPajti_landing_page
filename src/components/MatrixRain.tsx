import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix rain characters (Binary)
    const chars = '01';
    const fontSize = 20; // Increased font size
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      // Lighter fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Increased opacity for fade effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Brighter text color with reduced transparency
      ctx.fillStyle = '#FFC600'; // Removed transparency from text color for better visibility
      ctx.font = `bold ${fontSize}px monospace`; // Made font bold

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop to top when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down faster
        drops[i] += 0.5; // Slower falling speed
      }
    };

    // Animation loop with faster refresh rate
    const interval = setInterval(draw, 33); // ~30fps

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40" // Set opacity to fully opaque
      style={{ zIndex: 1 }}
    />
  );
};

export default MatrixRain;
