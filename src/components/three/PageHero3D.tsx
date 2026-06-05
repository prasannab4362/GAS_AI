"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ type, color }: { type: string; color: string }) {
  const ref = useRef<THREE.Mesh>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.current.x = x;
      mouse.current.y = y;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const x = (touch.clientX / window.innerWidth) * 2 - 1;
        const y = -(touch.clientY / window.innerHeight) * 2 + 1;
        mouse.current.x = x;
        mouse.current.y = y;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.008;

    // Mouse follow using globally tracked mouse coordinates
    const x = (mouse.current.x * viewport.width) / 25;
    const y = (mouse.current.y * viewport.height) / 25;
    ref.current.rotation.z += (x * 0.01 - ref.current.rotation.z * 0.01);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={ref}>
        {type === "icosahedron" && <icosahedronGeometry args={[1.2, 1]} />}
        {type === "torus" && <torusGeometry args={[0.8, 0.3, 16, 32]} />}
        {type === "octahedron" && <octahedronGeometry args={[1]} />}
        {type === "dodecahedron" && <dodecahedronGeometry args={[1]} />}
        {type === "torusKnot" && <torusKnotGeometry args={[0.7, 0.25, 64, 8]} />}
        {type === "sphere" && <sphereGeometry args={[1, 32, 32]} />}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.15}
          wireframe
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

interface PageHero3DProps {
  shape?: string;
  color?: string;
}

export function PageHero3D({ shape = "icosahedron", color = "#00FF88" }: PageHero3DProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 z-0 overflow-hidden opacity-40" />;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.3} color={color} />
        <pointLight position={[-5, -3, 3]} intensity={0.2} color="#64FFDA" />
        <FloatingShape type={shape} color={color} />
      </Canvas>
    </div>
  );
}
