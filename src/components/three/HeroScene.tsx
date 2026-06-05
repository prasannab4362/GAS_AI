"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// 3D coordinates representing a brain-like neural network structure
const NEURAL_NODES = [
  // Left Hemisphere
  { pos: [-1.4, 0.9, 0.4], size: 0.07 },
  { pos: [-1.6, 0.4, 0.8], size: 0.05 },
  { pos: [-1.1, 1.1, -0.3], size: 0.06 },
  { pos: [-1.8, 0.0, 0.1], size: 0.08 },
  { pos: [-1.5, -0.5, 0.3], size: 0.07 },
  { pos: [-1.0, -0.9, -0.2], size: 0.06 },
  { pos: [-0.9, 0.6, 1.1], size: 0.05 },
  { pos: [-0.7, 1.0, 0.5], size: 0.06 },
  { pos: [-0.6, -0.4, 0.9], size: 0.07 },
  { pos: [-1.3, -1.1, -0.5], size: 0.05 },
  
  // Right Hemisphere
  { pos: [1.4, 0.9, 0.4], size: 0.07 },
  { pos: [1.6, 0.4, 0.8], size: 0.05 },
  { pos: [1.1, 1.1, -0.3], size: 0.06 },
  { pos: [1.8, 0.0, 0.1], size: 0.08 },
  { pos: [1.5, -0.5, 0.3], size: 0.07 },
  { pos: [1.0, -0.9, -0.2], size: 0.06 },
  { pos: [0.9, 0.6, 1.1], size: 0.05 },
  { pos: [0.7, 1.0, 0.5], size: 0.06 },
  { pos: [0.6, -0.4, 0.9], size: 0.07 },
  { pos: [1.3, -1.1, -0.5], size: 0.05 },
  
  // Central Stem (Automation Hub / Core Nodes)
  { pos: [0, 0.7, -0.4], size: 0.1 },
  { pos: [0, 0.1, -0.7], size: 0.09 },
  { pos: [0, -0.5, -0.8], size: 0.09 },
  { pos: [0, -1.1, -0.6], size: 0.07 },
];

function Connections({ connections, linePositions }: { connections: [number, number][]; linePositions: Float32Array }) {
  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[linePositions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#64FFDA" transparent opacity={0.15} />
    </lineSegments>
  );
}

function DataPulses({ connections }: { connections: [number, number][] }) {
  const count = 16;
  const pulses = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      connIdx: Math.floor(Math.random() * connections.length),
      progress: Math.random(),
      speed: 0.4 + Math.random() * 0.6,
    }));
  }, [connections]);

  const meshRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    pulses.forEach((pulse, i) => {
      pulse.progress += delta * pulse.speed * 0.3;
      if (pulse.progress > 1) {
        pulse.progress = 0;
        pulse.connIdx = Math.floor(Math.random() * connections.length);
        pulse.speed = 0.4 + Math.random() * 0.6;
      }

      const mesh = meshRefs.current[i];
      if (mesh && connections[pulse.connIdx]) {
        const [idx1, idx2] = connections[pulse.connIdx];
        const p1 = NEURAL_NODES[idx1].pos;
        const p2 = NEURAL_NODES[idx2].pos;
        
        const x = p1[0] + (p2[0] - p1[0]) * pulse.progress;
        const y = p1[1] + (p2[1] - p1[1]) * pulse.progress;
        const z = p1[2] + (p2[2] - p1[2]) * pulse.progress;
        mesh.position.set(x, y, z);
      }
    });
  });

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) meshRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#00FF88" toneMapped={false} />
        </mesh>
      ))}
    </>
  );
}

function NeuralNodes() {
  const meshRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    NEURAL_NODES.forEach((node, i) => {
      const mesh = meshRefs.current[i];
      if (mesh) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.12;
        mesh.scale.set(pulse, pulse, pulse);
      }
    });
  });

  return (
    <>
      {NEURAL_NODES.map((node, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) meshRefs.current[i] = el;
          }}
          position={node.pos as [number, number, number]}
        >
          <sphereGeometry args={[node.size, 12, 12]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#00FF88" : "#64FFDA"}
            emissive={i % 2 === 0 ? "#00FF88" : "#64FFDA"}
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </>
  );
}

function CentralHubNode() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.15;
      meshRef.current.scale.set(pulse, pulse, pulse);
      meshRef.current.rotation.y += 0.01;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.005;
      ringRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={[0, 0.1, 0]}>
      {/* Dynamic Central Automation Core */}
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[0.3]} />
        <meshStandardMaterial
          color="#00FF88"
          emissive="#00FF88"
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>
      
      {/* Core Halo Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.55, 0.015, 8, 32]} />
        <meshStandardMaterial
          color="#64FFDA"
          emissive="#64FFDA"
          emissiveIntensity={0.9}
          wireframe
        />
      </mesh>
    </group>
  );
}

function AtmosphericDust() {
  const count = 100;
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = 1.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi);
      
      vel[i3] = (Math.random() - 0.5) * 0.005;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    return [pos, vel];
  }, []);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const positionsAttr = geo.attributes.position as THREE.BufferAttribute;
    const arr = positionsAttr.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3] += velocities[i3];
      arr[i3 + 1] += velocities[i3 + 1];
      arr[i3 + 2] += velocities[i3 + 2];
      
      const distance = Math.sqrt(arr[i3]**2 + arr[i3+1]**2 + arr[i3+2]**2);
      if (distance > 4) {
        arr[i3] = -arr[i3] * 0.95;
        arr[i3+1] = -arr[i3+1] * 0.95;
        arr[i3+2] = -arr[i3+2] * 0.95;
      }
    }
    positionsAttr.needsUpdate = true;
    pointsRef.current.rotation.y += 0.0002;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#64FFDA"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function BrainstormingSceneContent() {
  const groupRef = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.current.x = x;
      mouse.current.y = y;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [connections, linePositions] = useMemo(() => {
    const conn: [number, number][] = [];
    const maxDistance = 1.35; 
    for (let i = 0; i < NEURAL_NODES.length; i++) {
      for (let j = i + 1; j < NEURAL_NODES.length; j++) {
        const p1 = NEURAL_NODES[i].pos;
        const p2 = NEURAL_NODES[j].pos;
        const dist = Math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2 + (p1[2] - p2[2])**2);
        if (dist < maxDistance) {
          conn.push([i, j]);
        }
      }
    }

    const pos = new Float32Array(conn.length * 6);
    for (let i = 0; i < conn.length; i++) {
      const [idx1, idx2] = conn[i];
      const p1 = NEURAL_NODES[idx1].pos;
      const p2 = NEURAL_NODES[idx2].pos;
      pos[i * 6] = p1[0];
      pos[i * 6 + 1] = p1[1];
      pos[i * 6 + 2] = p1[2];
      pos[i * 6 + 3] = p2[0];
      pos[i * 6 + 4] = p2[1];
      pos[i * 6 + 5] = p2[2];
    }

    return [conn, pos];
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    
    // Natural responsive tilt (Mouse move tilts to reveal corresponding angles)
    const targetY = mouse.current.x * 0.5;
    const targetX = -mouse.current.y * 0.4;
    
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.08;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.08;
    
    // Constant slow float/spin
    groupRef.current.rotation.y += 0.0008;
  });

  return (
    <group ref={groupRef}>
      <CentralHubNode />
      <NeuralNodes />
      <Connections connections={connections} linePositions={linePositions} />
      <DataPulses connections={connections} />
      <AtmosphericDust />
    </group>
  );
}

export function HeroScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 z-0 bg-transparent" />;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 10, 5]} intensity={0.7} color="#00ff88" />
        <pointLight position={[-5, -10, -5]} intensity={0.4} color="#64ffda" />
        
        <BrainstormingSceneContent />
      </Canvas>
    </div>
  );
}
