import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Sphere, Box, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface NeuronProps {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}

const Neuron: React.FC<NeuronProps> = ({ position, color, scale = 1, speed = 1 }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.002;
      ref.current.rotation.x += 0.001 * speed;
      ref.current.rotation.y += 0.002 * speed;
    }
  });

  return (
    <group position={position}>
      {/* Core sphere */}
      <Sphere ref={ref} args={[0.1 * scale, 32, 32]}>
        <MeshDistortMaterial
          color={color}
          envMapIntensity={0.4}
          clearcoat={0.8}
          clearcoatRoughness={0}
          metalness={0.2}
          distort={0.4}
        />
      </Sphere>
      
      {/* Outer glow */}
      <Sphere args={[0.15 * scale, 32, 32]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
};

interface SynapseProps {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
  pulseSpeed?: number;
  thickness?: number;
}

const Synapse: React.FC<SynapseProps> = ({ start, end, color, pulseSpeed = 1, thickness = 0.01 }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  const curve = useMemo(() => {
    const points = [];
    const midPoint = [
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2 + (Math.random() - 0.5) * 0.5,
      (start[2] + end[2]) / 2 + (Math.random() - 0.5) * 0.5,
    ];
    
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      points.push(
        new THREE.Vector3(
          start[0] * (1 - t) * (1 - t) + midPoint[0] * 2 * t * (1 - t) + end[0] * t * t,
          start[1] * (1 - t) * (1 - t) + midPoint[1] * 2 * t * (1 - t) + end[1] * t * t,
          start[2] * (1 - t) * (1 - t) + midPoint[2] * 2 * t * (1 - t) + end[2] * t * t
        )
      );
    }
    return new THREE.CatmullRomCurve3(points);
  }, [start, end]);

  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 20, thickness, 8, false);
  }, [curve, thickness]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.opacity = 
        (Math.sin(state.clock.elapsedTime * pulseSpeed * 2) + 1) / 4 + 0.25;
    }
  });

  return (
    <group>
      {/* Main synapse */}
      <mesh ref={ref} geometry={geometry}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

interface BrainCoreProps {
  color: string;
  intensity: number;
}

const BrainCore: React.FC<BrainCoreProps> = ({ color, intensity }) => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001 * intensity;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      {/* Central core */}
      <Sphere args={[0.5, 32, 32]}>
        <MeshDistortMaterial
          color={color}
          envMapIntensity={0.8}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.5}
          distort={0.4 * intensity}
        />
      </Sphere>
      
      {/* Energy field */}
      <Sphere args={[0.7, 32, 32]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
};

interface ProceduralBrainProps {
  color: string;
  intensity: number;
}

const ProceduralBrain: React.FC<ProceduralBrainProps> = ({ color, intensity }) => {
  const neurons = useMemo(() => {
    const result = [];
    const count = Math.floor(15 + intensity * 10);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.5 + Math.random() * 0.5;
      
      result.push({
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.5,
        speed: Math.random() + 0.5
      });
    }
    return result;
  }, [intensity]);

  const synapses = useMemo(() => {
    const result = [];
    const connectionCount = Math.floor(neurons.length * intensity);
    
    for (let i = 0; i < connectionCount; i++) {
      const startIdx = Math.floor(Math.random() * neurons.length);
      let endIdx;
      do {
        endIdx = Math.floor(Math.random() * neurons.length);
      } while (endIdx === startIdx);
      
      result.push({
        start: neurons[startIdx].position,
        end: neurons[endIdx].position,
        pulseSpeed: Math.random() + 0.5,
        thickness: 0.005 + Math.random() * 0.01
      });
    }
    return result;
  }, [neurons, intensity]);

  return (
    <>
      <BrainCore color={color} intensity={intensity} />
      
      {neurons.map((neuron, i) => (
        <Neuron
          key={`neuron-${i}`}
          position={neuron.position}
          color={color}
          scale={neuron.scale * intensity}
          speed={neuron.speed * intensity}
        />
      ))}
      
      {synapses.map((synapse, i) => (
        <Synapse
          key={`synapse-${i}`}
          start={synapse.start}
          end={synapse.end}
          color={color}
          pulseSpeed={synapse.pulseSpeed * intensity}
          thickness={synapse.thickness * intensity}
        />
      ))}
    </>
  );
};

interface Brain3DProps {
  powerLevel: number;
  color: string;
}

const Brain3D: React.FC<Brain3DProps> = ({ powerLevel, color }) => {
  const intensity = powerLevel / 7;

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ProceduralBrain color={color} intensity={intensity} />
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            blendFunction={BlendFunction.SCREEN}
          />
          <ChromaticAberration
            offset={[0.002, 0.002].map(x => x * intensity)}
            blendFunction={BlendFunction.NORMAL}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Brain3D;