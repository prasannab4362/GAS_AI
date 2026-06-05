"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function TiltCard({ children, className = "", glowColor = "rgba(0,255,136,0.15)" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tilt angles
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Soft elastic spring motion for premium responsive tilt feel
  const springConfig = { stiffness: 200, damping: 25, mass: 0.6 };
  const xSpring = useSpring(rotateX, springConfig);
  const ySpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Position of cursor relative to card top-left corner
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalised position between -1 and 1
    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    // Tilt limits: 12 degrees max rotation
    rotateX.set(normY * -12);
    rotateY.set(normX * 12);

    // Track the cursor for the dynamic background radial glow reflection
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      className="h-full w-full"
    >
      <motion.div
        style={{
          rotateX: xSpring,
          rotateY: ySpring,
          transformStyle: "preserve-3d",
          background: isHovered 
            ? `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor} 0%, rgba(255,255,255,0.01) 60%, transparent 100%)`
            : "rgba(255,255,255,0.02)",
        }}
        className={`h-full w-full rounded-2xl glass-panel relative transition-all duration-300 ${
          isHovered ? "border-neon-green/30 box-glow" : "border-white/10"
        } ${className}`}
      >
        {/* TranslateZ layer gives the premium floating depth effect to the inner elements */}
        <div 
          style={{ 
            transform: "translateZ(25px)", 
            transformStyle: "preserve-3d" 
          }} 
          className="h-full w-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
