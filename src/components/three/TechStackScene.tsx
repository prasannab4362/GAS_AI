"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export const TECHNOLOGIES_DATA = [
  { 
    name: "Machine Learning", 
    shape: "sphere", 
    color: "#00ff88", 
    radius: 3.2, 
    speed: 0.15, 
    phase: 0,
    desc: "Predictive modeling, regression, and pattern recognition systems built for industrial metrics and forecasting."
  },
  { 
    name: "Deep Learning", 
    shape: "octahedron", 
    color: "#64ffda", 
    radius: 3.8, 
    speed: 0.12, 
    phase: Math.PI / 4,
    desc: "Multi-layered neural networks for complex feature extraction, classification, and generative AI models."
  },
  { 
    name: "LLM & VLM", 
    shape: "torusKnot", 
    color: "#ffffff", 
    radius: 4.4, 
    speed: -0.08, 
    phase: Math.PI / 2,
    desc: "Large Language Models & Vision-Language Models integrated as custom agents for cognitive operations and automated workflows."
  },
  { 
    name: "OCR & NLP", 
    shape: "dodecahedron", 
    color: "#00ff88", 
    radius: 3.0, 
    speed: 0.2, 
    phase: Math.PI,
    desc: "Natural Language Processing and optical character recognition pipelines to convert unstructured documents to structured databases."
  },
  { 
    name: "Computer Vision", 
    shape: "sphere", 
    color: "#64ffda", 
    radius: 4.6, 
    speed: -0.06, 
    phase: 1.5 * Math.PI,
    desc: "Real-time edge visual inspection, crowd tracking, object tracking, and automatic defect detection in production lines."
  },
  { 
    name: "n8n Automation", 
    shape: "torus", 
    color: "#ffffff", 
    radius: 3.4, 
    speed: 0.14, 
    phase: 1.2 * Math.PI,
    desc: "Enterprise-grade workflow coordination connecting CRMs, databases, and LLM APIs into automated execution loops."
  },
  { 
    name: "ROS & Edge AI", 
    shape: "octahedron", 
    color: "#00ff88", 
    radius: 4.0, 
    speed: -0.12, 
    phase: 0.8 * Math.PI,
    desc: "Robot Operating System programming combined with edge NPUs for sub-millisecond reaction controls in autonomous rovers and arms."
  },
  { 
    name: "Industrial IoT", 
    shape: "dodecahedron", 
    color: "#64ffda", 
    radius: 4.2, 
    speed: 0.1, 
    phase: 0.4 * Math.PI,
    desc: "Distributed sensor mesh systems (Matter, Zigbee, LoRa) for telemetry collection and OEE tracking in modern factories."
  },
];

function CentralCore() {
  const sphereRef = useRef<THREE.Mesh>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005;
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (torusRef.current) {
      torusRef.current.rotation.z += 0.01;
      torusRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group>
      <mesh ref={sphereRef}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.4}
          wireframe
        />
      </mesh>
      
      <mesh ref={torusRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.2, 0.02, 8, 48]} />
        <meshStandardMaterial
          color="#64ffda"
          emissive="#64ffda"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>
    </group>
  );
}

function OrbitalNode({
  node,
  isHovered,
  isActive,
  onHover,
  onClick,
}: {
  node: typeof TECHNOLOGIES_DATA[0];
  isHovered: boolean;
  isActive: boolean;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const lineRef = useRef<any>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime * node.speed + node.phase;
    const x = Math.cos(t) * node.radius;
    const z = Math.sin(t) * node.radius;
    const y = Math.sin(t * 1.5) * (node.radius * 0.2);
    
    if (meshRef.current) {
      meshRef.current.position.set(x, y, z);
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
    }

    if (lineRef.current) {
      const positions = lineRef.current.geometry.attributes.position.array as Float32Array;
      positions[0] = 0;
      positions[1] = 0;
      positions[2] = 0;
      positions[3] = x;
      positions[4] = y;
      positions[5] = z;
      lineRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <line ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array([0, 0, 0, 0, 0, 0]), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={node.color}
          transparent
          opacity={isHovered || isActive ? 0.8 : 0.15}
        />
      </line>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(true);
        }}
        onPointerOut={() => onHover(false)}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        scale={isHovered ? 1.5 : isActive ? 1.3 : 1.0}
      >
        {node.shape === "sphere" && <sphereGeometry args={[0.26, 16, 16]} />}
        {node.shape === "octahedron" && <octahedronGeometry args={[0.26]} />}
        {node.shape === "torusKnot" && <torusKnotGeometry args={[0.18, 0.06, 32, 4]} />}
        {node.shape === "dodecahedron" && <dodecahedronGeometry args={[0.24]} />}
        {node.shape === "torus" && <torusGeometry args={[0.22, 0.06, 8, 24]} />}
        
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={isHovered || isActive ? 0.9 : 0.15}
          wireframe
        />
      </mesh>
    </group>
  );
}

interface TechStackSceneProps {
  onSelectNode: (name: string) => void;
  selectedNode: string | null;
}

export function TechStackScene({ onSelectNode, selectedNode }: TechStackSceneProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-black/20" />;
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 5, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 10, 5]} intensity={0.6} color="#00ff88" />
        <pointLight position={[-5, -10, -5]} intensity={0.4} color="#64ffda" />
        
        <CentralCore />

        {TECHNOLOGIES_DATA.map((node) => (
          <OrbitalNode
            key={node.name}
            node={node}
            isHovered={hoveredNode === node.name}
            isActive={selectedNode === node.name}
            onHover={(hovered) => setHoveredNode(hovered ? node.name : null)}
            onClick={() => onSelectNode(node.name)}
          />
        ))}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      {/* Futuristic status overlay inside the canvas container */}
      <div className="absolute bottom-4 left-4 z-10 font-mono text-[10px] text-gray-500 uppercase tracking-widest pointer-events-none select-none">
        <div>System: GAS Orbital Core</div>
        <div>Drag to orbit // Click nodes to inspect</div>
      </div>

      {hoveredNode && (
        <div className="absolute top-4 left-4 z-10 glass-panel px-3 py-1.5 rounded-lg border border-neon-green/30 font-mono text-xs text-neon-green uppercase tracking-wider animate-pulse pointer-events-none">
          Active target: {hoveredNode}
        </div>
      )}
    </div>
  );
}
