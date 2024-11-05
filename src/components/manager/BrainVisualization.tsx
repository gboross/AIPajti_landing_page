import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

interface BrainVisualizationProps {
  brainLevel: number;
  color: string;
}

const BrainVisualization: React.FC<BrainVisualizationProps> = ({ brainLevel, color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const brainIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes
    const nodes: { x: number; y: number; connections: number[] }[] = [];
    const nodeCount = 20 + brainLevel * 10;

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: []
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      const connectionCount = Math.min(3 + Math.floor(brainLevel), 8);
      for (let j = 0; j < connectionCount; j++) {
        const target = Math.floor(Math.random() * nodeCount);
        if (target !== i && !node.connections.includes(target)) {
          node.connections.push(target);
        }
      }
    });

    // Animation variables
    let pulsePhase = 0;
    const pulseSpeed = 0.05 * brainLevel;
    let particlePhase = 0;

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update pulse phase
      pulsePhase += pulseSpeed;
      particlePhase += 0.02 * brainLevel;

      // Draw connections
      ctx.lineWidth = 1;
      nodes.forEach((node, i) => {
        node.connections.forEach(targetIndex => {
          const target = nodes[targetIndex];
          const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
          
          // Pulse effect on connections
          const alpha = (Math.sin(pulsePhase + i * 0.1) + 1) * 0.25;
          gradient.addColorStop(0, `${color}00`);
          gradient.addColorStop(0.5, `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
          gradient.addColorStop(1, `${color}00`);
          
          ctx.strokeStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();

          // Animated particles along connections
          const particleCount = Math.floor(brainLevel * 2);
          for (let p = 0; p < particleCount; p++) {
            const phase = (particlePhase + p / particleCount) % 1;
            const x = node.x + (target.x - node.x) * phase;
            const y = node.y + (target.y - node.y) * phase;
            
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = (Math.sin(pulsePhase + i * 0.1) + 1) * 0.5;
        const radius = 3 + pulse * 2;
        
        // Glow effect
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, radius * 2
        );
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, `${color}00`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Node center
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [brainLevel, color]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <motion.div
        ref={brainIconRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2 / brainLevel,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Brain
          size={80}
          className="text-primary"
          style={{
            filter: `drop-shadow(0 0 ${brainLevel * 5}px ${color})`
          }}
        />
      </motion.div>
    </div>
  );
};

export default BrainVisualization;