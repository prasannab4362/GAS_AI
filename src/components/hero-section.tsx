"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Database, Brain } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const KEYWORDS = [
  "Smart IoT Networks",
  "Robotics & ROS Hub",
  "R&D Virtual Labs",
  "n8n Workflow Agents",
  "Smart Space Automation",
  "Edge NPU Vision",
];

export function HeroSection() {
  const [currentKeyword, setCurrentKeyword] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % KEYWORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black py-20">
      {/* 1. Futuristic CSS Cyber Grid backdrop (0ms load time, 100% responsive, high-performance) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />

      {/* 2. Emissive neon highlights in background */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Sub-badge indicating R&D status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-neon-green/5 border border-neon-green/15 text-neon-green mb-8 backdrop-blur-sm"
        >
          <Server className="w-4 h-4" />
          <span className="text-xs font-bold tracking-widest uppercase">Global R&D Hub & Virtual Labs</span>
        </motion.div>

        {/* Ruthless, High-Contrast Landing Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-8xl font-heading font-extrabold text-white mb-6 tracking-tight leading-none"
        >
          GAS <span className="text-neon-green text-glow">AI</span>
          <br />
          <span className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-300">
            AI <span className="font-sans font-light italic text-neon-green/90 px-1">&</span> smart Automation Hub
          </span>
        </motion.h1>

        {/* Keyword Loop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-10 md:h-12 mb-8"
        >
          <p className="text-lg md:text-2xl font-mono text-brand-cyan uppercase tracking-widest">
            ENGINEERING // <span className="font-bold text-white text-glow">{KEYWORDS[currentKeyword]}</span>
          </p>
        </motion.div>

        {/* Focused descriptive copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto text-base sm:text-lg text-gray-400 mb-12 font-sans leading-relaxed"
        >
          We build secure, enterprise-grade IoT networks, ROS-compatible robotic actuator systems, and custom smart automation workflows. Through our GAS Virtual Labs sandbox, we research, test, and deploy AI-driven solutions globally.
        </motion.p>

        {/* Focused action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4.5"
        >
          <Link href="/labs" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto bg-neon-green text-black hover:bg-neon-green/90 font-bold box-glow group text-base")}>
            Access Virtual Labs
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto border-white/10 hover:bg-white/5 hover:border-white/20 text-white backdrop-blur-sm text-base")}>
            Partner With R&D Hub
          </Link>
        </motion.div>

        {/* Summary metric blocks (Ruthless layout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20 pt-10 border-t border-white/5"
        >
          <div className="flex items-center gap-4 text-left p-4.5 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-neon-green/10 flex items-center justify-center text-neon-green">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold tracking-tight">Smart IoT Gateways</div>
              <div className="text-xs text-gray-500 font-mono">Multiprotocol Integration</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-left p-4.5 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold tracking-tight">AI & n8n Workflows</div>
              <div className="text-xs text-gray-500 font-mono">Autonomous Agents</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-left p-4.5 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-purple-400/10 flex items-center justify-center text-purple-400">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-bold tracking-tight">Virtual Labs Sandbox</div>
              <div className="text-xs text-gray-500 font-mono">Remote R&D Platform</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-neon-green/5 blur-[90px] rounded-full pointer-events-none" />
    </section>
  );
}
