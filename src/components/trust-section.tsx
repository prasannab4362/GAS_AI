"use client";

import { motion, Variants } from "framer-motion";

const STATS = [
  { label: "Automation Solutions", value: 50, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Projects Delivered", value: 120, suffix: "+" },
  { label: "Training Programs", value: 10, suffix: "+" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

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
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-heading text-white max-w-3xl mx-auto"
          >
            Powering the future of enterprise and home automation globally.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl glass-panel group hover:border-neon-green/30 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies List (Static & Clean) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 border-t border-white/5 pt-12"
        >
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-mono text-gray-500 font-bold uppercase tracking-widest">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
