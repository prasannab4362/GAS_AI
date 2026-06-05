"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RobotHead() {
  const headRef = useRef<THREE.Group>(null!);
  const visorScannerRef = useRef<THREE.Mesh>(null!);
  const innerBrainRef = useRef<THREE.Mesh>(null!);
  const ringRef1 = useRef<THREE.Mesh>(null!);
  const ringRef2 = useRef<THREE.Mesh>(null!);
  
  const mouse = useRef({ x: 0, y: 0 });

  // Handle both laptop mousemove and mobile touchmove events globally
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
    // 1. Mouse/Touch responsive tilt
    const targetY = mouse.current.x * 0.45;
    const targetX = -mouse.current.y * 0.35;
    
    headRef.current.rotation.y += (targetY - headRef.current.rotation.y) * 0.08;
    headRef.current.rotation.x += (targetX - headRef.current.rotation.x) * 0.08;
    
    // Constant breathing hover effect
    const breathe = Math.sin(state.clock.elapsedTime * 1.5) * 0.06;
    headRef.current.position.y = breathe;

    // 2. Visor Scanner animation (oscillating back and forth)
    if (visorScannerRef.current) {
      visorScannerRef.current.position.x = Math.sin(state.clock.elapsedTime * 3) * 0.3;
    }

    // 3. Inner glowing brain rotation
    if (innerBrainRef.current) {
      innerBrainRef.current.rotation.y += 0.02;
      innerBrainRef.current.rotation.z += 0.01;
    }

    // 4. Mechanical halo rings counter-rotation
    if (ringRef1.current) {
      ringRef1.current.rotation.x += 0.005;
      ringRef1.current.rotation.y += 0.01;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y -= 0.007;
      ringRef2.current.rotation.z += 0.005;
    }
  });

  return (
    <group ref={headRef}>
      {/* 1. Neck/Base support */}
      <mesh position={[0, -0.9, -0.1]}>
        <cylinderGeometry args={[0.22, 0.3, 0.5, 16]} />
        <meshStandardMaterial
          color="#0d111d"
          roughness={0.2}
          metalness={0.85}
          wireframe
        />
      </mesh>
      {/* Mechanical collar joint */}
      <mesh position={[0, -0.65, -0.1]}>
        <torusGeometry args={[0.25, 0.05, 8, 24]} />
        <meshStandardMaterial color="#64ffda" emissive="#64ffda" emissiveIntensity={0.2} />
      </mesh>

      {/* 2. Cybernetic Inner Brain (Pulsing and rotating core) */}
      <mesh ref={innerBrainRef} position={[0, 0.1, -0.05]}>
        <dodecahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={1.2}
          wireframe
        />
      </mesh>

      {/* 3. Outer Semi-Transparent Faceplate/Skull Shell */}
      <mesh position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#0b0f19"
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.65}
        />
      </mesh>
      {/* Outer Wireframe Face Details (adds industrial look) */}
      <mesh position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.57, 16, 16]} />
        <meshStandardMaterial
          color="#64ffda"
          emissive="#64ffda"
          emissiveIntensity={0.25}
          wireframe
        />
      </mesh>

      {/* 4. Cybernetic Visor & Scan Laser */}
      <group position={[0, 0.22, 0.38]}>
        {/* Main Visor Bar */}
        <mesh>
          <boxGeometry args={[0.75, 0.16, 0.15]} />
          <meshStandardMaterial
            color="#0d111d"
            roughness={0.05}
            metalness={0.95}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* Inner Visor LED Strip */}
        <mesh position={[0, 0, 0.08]}>
          <boxGeometry args={[0.7, 0.04, 0.01]} />
          <meshBasicMaterial color="#002211" />
        </mesh>
        {/* Scanning Laser Indicator */}
        <mesh ref={visorScannerRef} position={[0, 0, 0.09]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#00ff88" toneMapped={false} />
        </mesh>
      </group>

      {/* 5. Robotic Temple/Ear Nodes */}
      <mesh position={[0.56, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} />
        <meshStandardMaterial color="#64ffda" emissive="#64ffda" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-0.56, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} />
        <meshStandardMaterial color="#64ffda" emissive="#64ffda" emissiveIntensity={0.3} />
      </mesh>

      {/* 6. Orbital Cyber-Rings (Mechanical Halos) */}
      <mesh ref={ringRef1} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[0.9, 0.015, 8, 48]} />
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.6} wireframe />
      </mesh>
      <mesh ref={ringRef2} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[1.05, 0.012, 8, 48]} />
        <meshStandardMaterial color="#64ffda" emissive="#64ffda" emissiveIntensity={0.6} wireframe />
      </mesh>
    </group>
  );
}

export function RobotScene() {
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
        <ambientLight intensity={0.4} />
        {/* Colorful cyberpunk highlights */}
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#00ff88" />
        <pointLight position={[-5, -5, -3]} intensity={1.0} color="#64ffda" />
        <pointLight position={[0, -2, 4]} intensity={0.8} color="#0d111d" />

        <group position={[0, -0.15, 0]}>
          <RobotHead />
        </group>
      </Canvas>
    </div>
  );
}
