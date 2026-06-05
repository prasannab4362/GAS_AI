"use client";
 
import { motion, Variants } from "framer-motion";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";
import { TiltCard } from "@/components/three/TiltCard";
import { cn } from "@/lib/utils";

const JOBS = [
  {
    title: "Student Internship Program",
    type: "Internship (Remote/Hybrid)",
    department: "R&D Labs",
    location: "Global",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe0q_g9lVSP3yYwcSws2NJukx80_xGePg56DuJzZ_8T2R-OMA/viewform?pli=1",
    glow: "rgba(0,255,136,0.18)", // Green glow
    badgeColor: "text-neon-green bg-neon-green/10 border-neon-green/20"
  },
  {
    title: "Mobile App Developer iOS / React Native",
    type: "Full-Time (Remote)",
    department: "Product Development",
    location: "Global",
    link: "/contact",
    glow: "rgba(100,255,218,0.18)", // Cyan glow
    badgeColor: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20"
  },
  {
    title: "Social Media Handler Intern",
    type: "Internship (Remote)",
    department: "Marketing",
    location: "Global",
    link: "/contact",
    glow: "rgba(167,139,250,0.18)", // Purple glow
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export function CareersContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10">
      <div className="max-w-3xl mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
        >
          Join the <span className="text-neon-green">Future</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-xl text-gray-400 leading-relaxed"
        >
          We are looking for brilliant minds to help us research, design, and build enterprise-grade smart automation and IoT ecosystems. Work from anywhere, impact everywhere.
        </motion.p>
      </div>

      <div className="max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl font-heading font-bold text-white mb-8"
        >
          Open Positions
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {JOBS.map((job, i) => (
            <motion.div key={i} variants={itemVariants} className="block">
              <TiltCard glowColor={job.glow} className="p-6 md:p-8 bg-brand-gray/10 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
                  <div className="flex-1">
                    <span className={cn("inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-4", job.badgeColor)}>
                      {job.department}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1.5 text-brand-cyan" /> {job.type}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1.5 text-brand-cyan" /> {job.location}
                      </span>
                    </div>
                  </div>
                  
                  <Link
                    href={job.link}
                    target={job.link.startsWith("http") ? "_blank" : undefined}
                    rel={job.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 text-white hover:bg-neon-green hover:text-black transition-all duration-300 font-bold text-sm border border-white/10 hover:border-neon-green self-start md:self-center"
                  >
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
