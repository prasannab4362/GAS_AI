"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-3xl text-center border-neon-green/20 relative overflow-hidden">
          {/* Inner Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon-green/5 blur-[120px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10"
          >
            <div className="w-16 h-16 mx-auto bg-neon-green/10 rounded-full flex items-center justify-center mb-6">
              <Terminal className="w-8 h-8 text-neon-green" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Build Real Technology with <br className="hidden md:block" />
              <span className="text-brand-cyan">Virtual AI Labs</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Join our remote internship programs in AI, Machine Learning, Robotics, and IoT. Gain hands-on experience building enterprise-grade systems with corporate certification.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/labs" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto bg-brand-cyan text-black hover:bg-brand-cyan/90 font-semibold shadow-[0_0_20px_rgba(100,255,218,0.3)]")}>
                  Apply for Internship
                  <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/careers" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto border-white/20 text-white hover:bg-white/5")}>
                View All Careers
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
