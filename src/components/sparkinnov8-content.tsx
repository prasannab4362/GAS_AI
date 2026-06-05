"use client";
 
import { motion, Variants } from "framer-motion";
import { Cpu, Wifi, Smartphone, Network, Rocket, Lightbulb, BookOpen } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TiltCard } from "@/components/three/TiltCard";

const PROGRAMS = [
  {
    name: "Arduino & Microcontrollers",
    icon: Cpu,
    description: "Learn the fundamentals of electronics and programming. Build your first circuits, blink LEDs, and control motors using Arduino.",
    glow: "rgba(0,255,136,0.15)"
  },
  {
    name: "Internet of Things (IoT)",
    icon: Wifi,
    description: "Connect the physical world to the internet. Build smart home prototypes, weather stations, and remote monitoring systems.",
    glow: "rgba(100,255,218,0.15)"
  },
  {
    name: "Robotics Fundamentals",
    icon: Rocket,
    description: "Design and build autonomous robots, line followers, and obstacle-avoiding rovers using sensors and actuators.",
    glow: "rgba(251,146,60,0.15)"
  },
  {
    name: "Mobile App Development",
    icon: Smartphone,
    description: "Create your own Android and iOS applications. Learn UI/UX design and connect apps to your IoT projects.",
    glow: "rgba(167,139,250,0.15)"
  },
  {
    name: "Networking & Security",
    icon: Network,
    description: "Understand how the internet works, set up local networks, and learn the basics of cybersecurity and data encryption.",
    glow: "rgba(96,165,250,0.15)"
  },
  {
    name: "AI & Future Tech",
    icon: Lightbulb,
    description: "Introduction to Artificial Intelligence, Machine Learning basics, and computer vision for young innovators.",
    glow: "rgba(244,114,182,0.15)"
  }
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

export function SparkInnov8Content() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
      
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 text-sm font-semibold mb-6"
        >
          <BookOpen className="w-4 h-4" /> For Schools & Students
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-neon-green">SparkInnov8</span> Program
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-300 font-medium mb-6"
        >
          Next-Generation Robotics & AI Labs for Future Innovators
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          We bring enterprise-grade technology education directly to school students. Our SparkInnov8 program establishes state-of-the-art labs and curriculums in Arduino, IoT, Robotics, Mobile App Development, and Networking.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto bg-neon-green text-black hover:bg-neon-green/90 box-glow text-lg px-8")}>
            Setup Lab in Your School
          </Link>
        </motion.div>
      </div>

      {/* Modules Grid */}
      <div className="mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold text-white text-center mb-12"
        >
          Core Learning Modules
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROGRAMS.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div key={program.name} variants={itemVariants} className="h-full">
                <TiltCard glowColor={program.glow} className="p-8 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-neon-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-brand-cyan" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-neon-green transition-colors">
                      {program.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel border-neon-green/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-neon-green/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Empower Your Students Today</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Equip your educational institution with the tools and curriculum needed to inspire the next generation of engineers, developers, and scientists.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-brand-cyan text-black hover:bg-brand-cyan/90 font-semibold shadow-[0_0_20px_rgba(100,255,218,0.3)]")}>
            Partner With Us
          </Link>
        </div>
      </motion.div>

    </div>
  );
}
