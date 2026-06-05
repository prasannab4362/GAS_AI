"use client";

import { Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Visual cybernetic mesh background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto glass-panel p-12 md:p-16 rounded-3xl text-center relative overflow-hidden"
        >
          {/* Background grid inside card */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:3rem_3rem] rounded-3xl" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
              <Terminal className="w-8 h-8 text-neon-green" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Build Real Technology with Virtual AI Labs
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join our remote internship programs in AI, ML, Robotics, and IoT. Work on live projects from anywhere in the world.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/labs" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto bg-brand-cyan text-black hover:bg-brand-cyan/90 font-semibold group")}>
                Apply for Internship
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/careers" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto border-white/20 hover:bg-white/5 text-white backdrop-blur-sm")}>
                View All Careers
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
