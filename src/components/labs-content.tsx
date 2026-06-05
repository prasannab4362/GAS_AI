"use client";
 
import { motion, Variants } from "framer-motion";
import { Terminal, Code, Cpu, Database, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TiltCard } from "@/components/three/TiltCard";

const PROGRAMS = [
  { title: "AI & Deep Learning", icon: Database, glow: "rgba(0,255,136,0.15)" },
  { title: "Computer Vision", icon: Terminal, glow: "rgba(100,255,218,0.15)" },
  { title: "NLP & LLM", icon: Code, glow: "rgba(167,139,250,0.15)" },
  { title: "Agentic AI", icon: Cpu, glow: "rgba(244,114,182,0.15)" },
  { title: "n8n AI Automation", icon: Terminal, glow: "rgba(250,204,21,0.15)" },
  { title: "Full Stack Development", icon: Code, glow: "rgba(96,165,250,0.15)" },
  { title: "IoT & Robotics", icon: Cpu, glow: "rgba(251,146,60,0.15)" },
  { title: "Embedded Systems", icon: Database, glow: "rgba(248,113,113,0.15)" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
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

export function LabsContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
        >
          Build Real Technology with <br />
          <span className="text-neon-green">Virtual AI Labs</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-xl text-gray-400 mb-8"
        >
          Our internship programs are 100% virtual and designed to give you hands-on experience building enterprise-grade systems alongside our engineering team.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-4 text-sm font-medium text-gray-300"
        >
          <span className="bg-white/10 px-4 py-2 rounded-full border border-white/5">100% Virtual</span>
          <span className="bg-white/10 px-4 py-2 rounded-full border border-white/5">Live Projects</span>
          <span className="bg-white/10 px-4 py-2 rounded-full border border-white/5">Corporate Certification</span>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
      >
        {PROGRAMS.map((program) => {
          const Icon = program.icon;
          return (
            <motion.div key={program.title} variants={itemVariants}>
              <TiltCard glowColor={program.glow} className="p-6 text-center hover:border-brand-cyan/50">
                <div className="w-12 h-12 mx-auto bg-brand-cyan/10 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <Icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-white">{program.title}</h3>
              </TiltCard>
            </motion.div>
          );
        })}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl font-heading font-bold text-white mb-6">Ready to start your engineering journey?</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="https://gas-virutallab.vercel.app/" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-[#111111] text-neon-green border border-neon-green/30 hover:bg-neon-green/10 w-full sm:w-auto")}>
            Visit Virtual Lab <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe0q_g9lVSP3yYwcSws2NJukx80_xGePg56DuJzZ_8T2R-OMA/viewform?pli=1" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-brand-cyan text-black hover:bg-brand-cyan/90 w-full sm:w-auto")}>
            Apply for Internship <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
