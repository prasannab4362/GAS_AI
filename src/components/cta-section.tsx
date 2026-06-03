"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const GridWave = dynamic(
  () => import("@/components/three/GridWave").then((mod) => ({ default: mod.GridWave })),
  { ssr: false }
);

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* 3D Grid Wave Background */}
      <GridWave />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel p-12 md:p-16 rounded-3xl text-center relative overflow-hidden"
        >
          {/* Background grid inside card */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:3rem_3rem] rounded-3xl" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center"
            >
              <Terminal className="w-8 h-8 text-neon-green" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
            >
              Build Real Technology with Virtual AI Labs
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
            >
              Join our remote internship programs in AI, ML, Robotics, and IoT. Work on live projects from anywhere in the world.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/labs" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto bg-brand-cyan text-black hover:bg-brand-cyan/90 font-semibold group")}>
                Apply for Internship
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/careers" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto border-white/20 hover:bg-white/5 text-white backdrop-blur-sm")}>
                View All Careers
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
