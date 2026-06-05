"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function LabGrid() {
  const gridRef = useRef<THREE.GridHelper>(null!);
  const serversRef = useRef<THREE.Group>(null!);
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

  // Set up procedural server nodes
  const servers = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => {
      const theta = (i / 6) * Math.PI * 2;
      const r = 1.0;
      return {
        pos: [Math.cos(theta) * r, -0.2, Math.sin(theta) * r],
        height: 0.3 + Math.random() * 0.4,
        speed: 0.8 + Math.random() * 0.8,
        offset: Math.random() * 10,
      };
    });
  }, []);

  useFrame((state) => {
    // 1. Tilt based on global coordinates
    const targetY = mouse.current.x * 0.5;
    const targetX = -mouse.current.y * 0.3;

    if (gridRef.current) {
      gridRef.current.rotation.x = Math.PI / 2.5 + targetX * 0.25;
      gridRef.current.rotation.z = targetY * 0.3;
    }

    if (serversRef.current) {
      serversRef.current.rotation.x = Math.PI / 2.5 + targetX * 0.25;
      serversRef.current.rotation.z = targetY * 0.3;
    }

    // 2. Animate servers floating and core pulsing
    serversRef.current.children.forEach((child, i) => {
      const server = servers[i];
      if (server) {
        const bounce = Math.sin(state.clock.elapsedTime * server.speed + server.offset) * 0.08;
        child.position.y = server.pos[1] + bounce;
      }
    });
  });

  return (
    <group position={[0, -0.2, 0]}>
      {/* Holographic Lab Base Grid */}
      <gridHelper
        ref={gridRef}
        args={[5, 12, "#00ff88", "#64ffda"]}
        position={[0, -0.4, 0]}
        rotation={[Math.PI / 2.5, 0, 0]}
      />

      {/* Cybernetic Server Clusters */}
      <group ref={serversRef} rotation={[Math.PI / 2.5, 0, 0]}>
        {servers.map((server, i) => (
          <group key={i} position={server.pos as [number, number, number]}>
            {/* Main Server Chassis */}
            <mesh>
              <boxGeometry args={[0.22, server.height, 0.22]} />
              <meshStandardMaterial
                color="#0b0f19"
                roughness={0.1}
                metalness={0.9}
                wireframe
              />
            </mesh>
            {/* Glowing active core inside server */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.16, server.height - 0.1, 0.16]} />
              <meshStandardMaterial
                color="#00ff88"
                emissive="#00ff88"
                emissiveIntensity={0.6}
                transparent
                opacity={0.7}
              />
            </mesh>
            {/* Small antenna link */}
            <mesh position={[0, server.height / 2 + 0.05, 0]}>
              <cylinderGeometry args={[0.005, 0.005, 0.1, 8]} />
              <meshBasicMaterial color="#64ffda" />
            </mesh>
            <mesh position={[0, server.height / 2 + 0.1, 0]}>
              <sphereGeometry args={[0.015, 8, 8]} />
              <meshBasicMaterial color="#64ffda" toneMapped={false} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

export function VirtualLabScene() {
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
        <pointLight position={[5, 10, 5]} intensity={1.2} color="#00ff88" />
        <pointLight position={[-5, -10, -5]} intensity={0.8} color="#64ffda" />
        <LabGrid />
      </Canvas>
    </div>
  );
}
