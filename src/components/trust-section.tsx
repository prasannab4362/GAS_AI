"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Automation Solutions", value: 50, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Projects Delivered", value: 120, suffix: "+" },
  { label: "Training Programs", value: 10, suffix: "+" },
];

function Counter({ from = 0, to, suffix = "", duration = 2 }: { from?: number, to: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function TrustSection() {
  return (
    <section className="py-20 bg-brand-gray border-y border-white/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm font-semibold tracking-widest text-brand-cyan uppercase mb-4"
          >
            Trusted Intelligence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-heading text-white max-w-3xl mx-auto"
          >
            Powering the future of enterprise and home automation globally.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl glass-panel group hover:border-neon-green/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Ticker */}
        <div className="mt-20 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-gray to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-gray to-transparent z-10" />
          
          <motion.div 
            className="flex space-x-12 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex space-x-12 items-center text-xl font-heading text-gray-500 font-bold uppercase tracking-widest">
                <span>AI Automation</span>
                <span className="text-neon-green/20">•</span>
                <span>Robotics</span>
                <span className="text-neon-green/20">•</span>
                <span>IoT</span>
                <span className="text-neon-green/20">•</span>
                <span>Computer Vision</span>
                <span className="text-neon-green/20">•</span>
                <span>Industrial Systems</span>
                <span className="text-neon-green/20">•</span>
                <span>AI Agents</span>
                <span className="text-neon-green/20">•</span>
                <span>Smart Security</span>
                <span className="text-neon-green/20">•</span>
                <span>Enterprise Automation</span>
                <span className="text-neon-green/20">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
