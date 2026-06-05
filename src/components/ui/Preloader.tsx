"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIATING BOOT CORE...");
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress < 25) {
      setStatusText("ESTABLISHING SECURE CONNECTION...");
    } else if (progress < 50) {
      setStatusText("LINKING TO SMART AUTOMATION HUB...");
    } else if (progress < 75) {
      setStatusText("MOUNTING VIRTUAL LAB SANDBOX...");
    } else if (progress < 100) {
      setStatusText("STATUS: ALL SYSTEMS OPERATIONAL.");
    } else {
      setStatusText("WELCOME TO GAS AI R&D HUB.");
      const fadeTimer = setTimeout(() => {
        setShow(false);
      }, 500);
      return () => clearTimeout(fadeTimer);
    }
  }, [progress]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center font-mono select-none"
      >
        <div className="max-w-md w-full px-6 text-left">
          {/* Futuristic Cyber Grid Lines in background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8804_1px,transparent_1px),linear-gradient(to_bottom,#00ff8808_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
          
          <div className="relative z-10">
            {/* Glowing Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-heading font-extrabold text-white mb-8 tracking-wider"
            >
              GAS <span className="text-neon-green text-glow">AI</span>
            </motion.div>

            {/* Status Lines */}
            <div className="space-y-1.5 text-xs text-gray-500 mb-6 uppercase tracking-wider">
              <div>System: Green Automation Hub v2.8</div>
              <div>Network: Secure TLS Cryptographic Node</div>
              <div>Hardware: Edge NPU Cluster Active</div>
            </div>

            {/* Progress Bar Container */}
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-4 border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-green to-brand-cyan"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Loading text and percentage */}
            <div className="flex justify-between items-center text-xs tracking-widest font-semibold">
              <span className="text-neon-green animate-pulse">{statusText}</span>
              <span className="text-brand-cyan">{progress}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
