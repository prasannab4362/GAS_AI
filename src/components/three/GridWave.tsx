"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WavePlane() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const geoRef = useRef<THREE.PlaneGeometry>(null!);

  const originalPositions = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 20, 60, 60);
    return new Float32Array(geo.attributes.position.array);
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !geoRef.current) return;
    const positions = geoRef.current.attributes.position as THREE.BufferAttribute;
    const arr = positions.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < arr.length; i += 3) {
      const ox = originalPositions[i];
      const oy = originalPositions[i + 1];
      arr[i + 2] =
        Math.sin(ox * 0.5 + time * 0.8) * 0.3 +
        Math.cos(oy * 0.5 + time * 0.6) * 0.3 +
        Math.sin((ox + oy) * 0.3 + time * 0.4) * 0.2;
    }
    positions.needsUpdate = true;
    geoRef.current.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry ref={geoRef} args={[20, 20, 60, 60]} />
      <meshStandardMaterial
        color="#00FF88"
        wireframe
        transparent
        opacity={0.12}
        emissive="#00FF88"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
}

import { useState, useEffect } from "react";

export function GridWave() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 z-0 overflow-hidden" />;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 3, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <WavePlane />
      </Canvas>
    </div>
  );
}
