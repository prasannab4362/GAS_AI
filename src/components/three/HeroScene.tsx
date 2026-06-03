"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function GlowingSphere() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.003;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 1]} />
        <MeshDistortMaterial
          color="#00FF88"
          emissive="#00FF88"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          wireframe
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function OrbitingRing({ radius, speed, color, size = 0.08 }: { radius: number; speed: number; color: string; size?: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 2) * 0.5;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </mesh>
  );
}

function FloatingGeometry({ position, geometry, color, speed }: { position: [number, number, number]; geometry: string; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.005 * speed;
    ref.current.rotation.y += 0.008 * speed;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        {geometry === "torus" && <torusGeometry args={[0.5, 0.2, 16, 32]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[0.5]} />}
        {geometry === "torusKnot" && <torusKnotGeometry args={[0.4, 0.15, 64, 8]} />}
        {geometry === "dodecahedron" && <dodecahedronGeometry args={[0.4]} />}
        {geometry === "cone" && <coneGeometry args={[0.4, 0.8, 6]} />}
        <MeshWobbleMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.15}
          wireframe
          factor={0.3}
          speed={speed}
        />
      </mesh>
    </Float>
  );
}

function OrbitRings() {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    ref.current.rotation.z += 0.001;
  });

  return (
    <group ref={ref}>
      {/* Orbit ring 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.005, 16, 100]} />
        <meshBasicMaterial color="#00FF88" transparent opacity={0.15} />
      </mesh>
      {/* Orbit ring 2 */}
      <mesh rotation={[Math.PI / 2.5, 0.5, 0]}>
        <torusGeometry args={[3.8, 0.005, 16, 100]} />
        <meshBasicMaterial color="#64FFDA" transparent opacity={0.1} />
      </mesh>
      {/* Orbit ring 3 */}
      <mesh rotation={[Math.PI / 3, -0.3, 0.2]}>
        <torusGeometry args={[4.5, 0.004, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
      </mesh>

      {/* Orbiting particles */}
      <OrbitingRing radius={3} speed={0.5} color="#00FF88" size={0.1} />
      <OrbitingRing radius={3} speed={0.5} color="#00FF88" size={0.05} />
      <OrbitingRing radius={3.8} speed={-0.3} color="#64FFDA" size={0.08} />
      <OrbitingRing radius={3.8} speed={-0.3} color="#64FFDA" size={0.04} />
      <OrbitingRing radius={4.5} speed={0.2} color="#ffffff" size={0.06} />
    </group>
  );
}

function MouseTracker({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null!);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!ref.current) return;
    const x = (state.pointer.x * viewport.width) / 20;
    const y = (state.pointer.y * viewport.height) / 20;
    ref.current.rotation.y += (x - ref.current.rotation.y) * 0.02;
    ref.current.rotation.x += (-y - ref.current.rotation.x) * 0.02;
  });

  return <group ref={ref}>{children}</group>;
}

function HeroSceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#00FF88" />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#64FFDA" />

      <MouseTracker>
        <GlowingSphere />
        <OrbitRings />

        {/* Floating geometries around the edges */}
        <FloatingGeometry position={[-4, 2, -2]} geometry="torus" color="#00FF88" speed={0.8} />
        <FloatingGeometry position={[4.5, -1.5, -3]} geometry="octahedron" color="#64FFDA" speed={1.2} />
        <FloatingGeometry position={[-3, -2.5, -1]} geometry="torusKnot" color="#00FF88" speed={0.6} />
        <FloatingGeometry position={[3.5, 2.5, -2.5]} geometry="dodecahedron" color="#64FFDA" speed={1} />
        <FloatingGeometry position={[0, 3, -4]} geometry="cone" color="#ffffff" speed={0.5} />
        <FloatingGeometry position={[-5, 0, -3]} geometry="octahedron" color="#00FF88" speed={0.7} />
        <FloatingGeometry position={[5, 0.5, -2]} geometry="torus" color="#64FFDA" speed={0.9} />
      </MouseTracker>
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <HeroSceneContent />
      </Canvas>
    </div>
  );
}
