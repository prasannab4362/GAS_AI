"use client";

import { useRef, useState, useEffect } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // Kept for backward compatibility, but overridden with dynamic HSL
}

export function TiltCard({ children, className = "", glowColor }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [baseHue, setBaseHue] = useState(120); // Default baseline

  useEffect(() => {
    // Generate a random base hue on mount so each card gets its own start color
    setBaseHue(Math.floor(Math.random() * 360));
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!cardRef.current || e.touches.length === 0) return;
    const rect = cardRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setGlowPos({ x: 50, y: 50 });
  };

  // Calculate dynamic hue based on cursor position relative coordinates
  const currentHue = isHovered
    ? (baseHue + Math.round((glowPos.x + glowPos.y) * 1.5)) % 360
    : baseHue;

  const dynamicGlow = `rgba(${hslToRgb(currentHue, 1, 0.6)}, 0.15)`;
  const dynamicBorder = `rgba(${hslToRgb(currentHue, 1, 0.65)}, 0.45)`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
      style={{
        background: isHovered
          ? `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${dynamicGlow} 0%, rgba(255,255,255,0.01) 60%, transparent 100%)`
          : "rgba(255,255,255,0.02)",
        borderColor: isHovered ? dynamicBorder : "rgba(255, 255, 255, 0.1)",
        boxShadow: isHovered ? `0 0 25px -5px ${dynamicGlow}` : "none",
        transition: isHovered
          ? "border-color 0.15s ease, box-shadow 0.15s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
          : "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
      className={`h-full w-full rounded-2xl glass-panel relative overflow-hidden border hover:scale-[1.02] ${className}`}
    >
      <div className="h-full w-full">
        {children}
      </div>
    </div>
  );
}

// Helper to convert HSL to RGB string for embedding in rgba()
function hslToRgb(h: number, s: number, l: number): string {
  let r, g, b;
  h = h / 360;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return `${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}`;
}
