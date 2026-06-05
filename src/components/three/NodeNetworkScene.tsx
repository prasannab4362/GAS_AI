"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NETWORK_NODES = [
  { pos: [0, 0.1, 0], color: "#00ff88", size: 0.12, label: "Core Agent" },
  { pos: [-1.0, 0.7, -0.3], color: "#64ffda", size: 0.07, label: "WhatsApp AI" },
  { pos: [1.0, 0.7, 0.3], color: "#64ffda", size: 0.07, label: "n8n Trigger" },
  { pos: [-0.8, -0.8, 0.4], color: "#64ffda", size: 0.07, label: "CRM Sync" },
  { pos: [0.8, -0.8, -0.4], color: "#64ffda", size: 0.07, label: "LLM Agent" },
  { pos: [-1.6, -0.1, -0.2], color: "#a78bfa", size: 0.06, label: "Web scraper" },
  { pos: [1.6, -0.1, 0.2], color: "#a78bfa", size: 0.06, label: "Reporting" },
  { pos: [0, 1.1, 0.1], color: "#a78bfa", size: 0.06, label: "API Gateway" },
];

const CONNECTIONS = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 5], [2, 6], [3, 5], [4, 6],
  [1, 7], [2, 7]
];

function NetworkLines() {
  const linePositions = useMemo(() => {
    const pos = new Float32Array(CONNECTIONS.length * 6);
    CONNECTIONS.forEach(([n1, n2], i) => {
      const p1 = NETWORK_NODES[n1].pos;
      const p2 = NETWORK_NODES[n2].pos;
      pos[i * 6] = p1[0];
      pos[i * 6 + 1] = p1[1];
      pos[i * 6 + 2] = p1[2];
      pos[i * 6 + 3] = p2[0];
      pos[i * 6 + 4] = p2[1];
      pos[i * 6 + 5] = p2[2];
    });
    return pos;
  }, []);

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[linePositions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#64ffda" transparent opacity={0.25} linewidth={1} />
    </lineSegments>
  );
}

function NodePulses() {
  const count = 12;
  const pulses = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      connIdx: Math.floor(Math.random() * CONNECTIONS.length),
      progress: Math.random(),
      speed: 0.3 + Math.random() * 0.5,
    }));
  }, []);

  const meshRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    pulses.forEach((pulse, i) => {
      pulse.progress += delta * pulse.speed;
      if (pulse.progress > 1) {
        pulse.progress = 0;
        pulse.connIdx = Math.floor(Math.random() * CONNECTIONS.length);
        pulse.speed = 0.3 + Math.random() * 0.5;
      }

      const mesh = meshRefs.current[i];
      if (mesh) {
        const [n1, n2] = CONNECTIONS[pulse.connIdx];
        const p1 = NETWORK_NODES[n1].pos;
        const p2 = NETWORK_NODES[n2].pos;
        const x = p1[0] + (p2[0] - p1[0]) * pulse.progress;
        const y = p1[1] + (p2[1] - p1[1]) * pulse.progress;
        const z = p1[2] + (p2[2] - p1[2]) * pulse.progress;
        mesh.position.set(x, y, z);
        
        // Pulse size oscillation
        const scale = 1 + Math.sin(state.clock.elapsedTime * 8 + i) * 0.3;
        mesh.scale.set(scale, scale, scale);
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
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial color="#00ff88" toneMapped={false} />
        </mesh>
      ))}
    </>
  );
}

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null!);
  const nodeRefs = useRef<THREE.Mesh[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouse.current.x = (touch.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(touch.clientY / window.innerHeight) * 2 + 1;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useFrame((state) => {
    // 1. Tilt rotation based on mouse/finger
    const targetY = mouse.current.x * 0.45;
    const targetX = -mouse.current.y * 0.35;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.08;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.08;

    // Slow constant spin
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.1;

    // 2. Pulse nodes scale
    NETWORK_NODES.forEach((node, i) => {
      const mesh = nodeRefs.current[i];
      if (mesh) {
        const wave = 1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.15;
        mesh.scale.set(wave, wave, wave);
      }
    });
  });

  return (
    <group ref={groupRef}>
      <NetworkLines />
      <NodePulses />
      
      {NETWORK_NODES.map((node, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) nodeRefs.current[i] = el;
          }}
          position={node.pos as [number, number, number]}
        >
          <sphereGeometry args={[node.size, 16, 16]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

export function NodeNetworkScene() {
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
        camera={{ position: [0, 0, 2.5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#00ff88" />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#64ffda" />
        <SceneContent />
      </Canvas>
    </div>
  );
}
