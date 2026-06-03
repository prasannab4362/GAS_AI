"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((mod) => ({ default: mod.HeroScene })),
  { ssr: false }
);

const KEYWORDS = [
  "AI Automation",
  "Smart Homes",
  "Industrial IoT",
  "Robotics",
  "AI Agents",
  "Smart Security",
  "Intelligent Workflows",
];

export function HeroSection() {
  const [currentKeyword, setCurrentKeyword] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % KEYWORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-brand-black">
      {/* 3D Background Scene */}
      <HeroScene />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gray/50 via-brand-black to-brand-black z-[1] opacity-40" />

      {/* Glowing grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-[1]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green mb-8 backdrop-blur-sm"
        >
          <Cpu className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide uppercase">Enterprise-Grade Systems</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Complete AI Smart
          <br className="hidden sm:block" />
          <span className="text-glow text-neon-green relative inline-block min-w-[300px] md:min-w-[500px]">
             Automation Systems
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-12 md:h-16 mb-6"
        >
          <p className="text-xl md:text-3xl font-medium text-brand-cyan">
             Engineering <span className="font-bold text-white">{KEYWORDS[currentKeyword]}</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 font-sans leading-relaxed"
        >
          We engineer intelligent automation ecosystems powered by AI, Robotics, IoT, Computer Vision, and Smart Technologies for modern homes, businesses, industries, and educational institutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/services" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto bg-neon-green text-black hover:bg-neon-green/90 font-semibold box-glow group")}>
            Explore Solutions
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto border-white/20 hover:bg-white/5 text-white backdrop-blur-sm")}>
            Book Technical Consultation
          </Link>
        </motion.div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-neon-green/10 blur-[100px] z-[1] rounded-full" />
    </section>
  );
}
