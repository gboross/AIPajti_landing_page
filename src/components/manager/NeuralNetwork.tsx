import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Settings } from 'lucide-react';

interface NeuralNetworkProps {
  brainLevel: number;
  color: string;
}

const NeuralNetwork: React.FC<NeuralNetworkProps> = ({ brainLevel, color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodes: Node[] = [];
  const connections: Connection[] = [];

  interface Node {
    x: number;
    y: number;
    radius: number;
    speed: number;
    direction: number;
  }

  interface Connection {
    from: Node;
    to: Node;
    active: boolean;
    pulsePosition: number;
    pulseSpeed: number;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes
    const nodeCount = 20 + brainLevel * 5;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 2 + Math.random() * 2,
        speed: 0.2 + Math.random() * 0.3,
        direction: Math.random() * Math.PI * 2
      });
    }

    // Create connections
    const connectionCount = brainLevel * 10;
    for (let i = 0; i < connectionCount; i++) {
      const fromNode = nodes[Math.floor(Math.random() * nodes.length)];
      const toNode = nodes[Math.floor(Math.random() * nodes.length)];
      if (fromNode !== toNode) {
        connections.push({
          from: fromNode,
          to: toNode,
          active: Math.random() < 0.5,
          pulsePosition: 0,
          pulseSpeed: 0.02 + Math.random() * 0.02
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections
      connections.forEach(connection => {
        if (connection.active) {
          connection.pulsePosition += connection.pulseSpeed * (brainLevel / 2);
          if (connection.pulsePosition > 1) {
            connection.pulsePosition = 0;
            connection.active = Math.random() < 0.8;
          }
        } else {
          connection.active = Math.random() < 0.1;
        }

        const gradient = ctx.createLinearGradient(
          connection.from.x,
          connection.from.y,
          connection.to.x,
          connection.to.y
        );

        const alpha = connection.active ? 0.3 : 0.1;
        gradient.addColorStop(0, `${color}00`);
        gradient.addColorStop(connection.pulsePosition, `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${color}00`);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.moveTo(connection.from.x, connection.from.y);
        ctx.lineTo(connection.to.x, connection.to.y);
        ctx.stroke();
      });

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += Math.cos(node.direction) * node.speed;
        node.y += Math.sin(node.direction) * node.speed;

        if (node.x < 0 || node.x > canvas.width) node.direction = Math.PI - node.direction;
        if (node.y < 0 || node.y > canvas.height) node.direction = -node.direction;

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [brainLevel, color]);

  // Generate gear positions around the brain
  const gears = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * Math.PI * 2) / 6;
    const radius = 50;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      size: 24 + (i % 2) * 8,
      clockwise: i % 2 === 0,
    };
  });

  return (
    <motion.div 
      className="w-full h-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          filter: `drop-shadow(0 0 10px ${color})`
        }}
      />

      {/* Central Brain Icon */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Brain
          size={64}
          className="text-primary"
          style={{
            filter: `drop-shadow(0 0 ${brainLevel * 3}px ${color})`
          }}
        />
      </motion.div>

      {/* Rotating Gears */}
      {gears.map((gear, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-1/2"
          style={{
            x: gear.x,
            y: gear.y,
          }}
          animate={{
            rotate: gear.clockwise ? 360 : -360,
          }}
          transition={{
            duration: 4 / (brainLevel * 0.5),
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Settings
            size={gear.size}
            className="text-primary transform -translate-x-1/2 -translate-y-1/2"
            style={{
              filter: `drop-shadow(0 0 ${brainLevel * 2}px ${color})`
            }}
          />
        </motion.div>
      ))}

      {/* Power Level Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/80 px-4 py-2 rounded-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">Power Level:</span>
          <motion.div
            className="text-white font-mono"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            {brainLevel.toFixed(1)}x
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NeuralNetwork;