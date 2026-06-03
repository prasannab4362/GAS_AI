"use client";

import { motion } from "framer-motion";
import { MessageSquare, Workflow, LineChart, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

import { TiltCard } from "@/components/three/TiltCard";

const FEATURES = [
  {
    title: "WhatsApp AI Automation",
    description: "Intelligent conversational agents that handle customer inquiries, bookings, and support 24/7 directly on WhatsApp.",
    icon: MessageSquare,
    glow: "rgba(0,255,136,0.12)" // neon green glow
  },
  {
    title: "AI Workflow Automation",
    description: "Connect disparate systems using n8n and custom AI scripts to automate data entry, processing, and reporting.",
    icon: Workflow,
    glow: "rgba(100,255,218,0.12)" // cyan glow
  },
  {
    title: "Smart Lead Systems",
    description: "Automatically qualify, score, and route leads using predictive AI models, boosting conversion rates.",
    icon: LineChart,
    glow: "rgba(167,139,250,0.12)" // violet glow
  },
  {
    title: "Intelligent CRM",
    description: "AI-enhanced CRM workflows that summarize client interactions and recommend the next best actions.",
    icon: HeadphonesIcon,
    glow: "rgba(248,113,113,0.12)" // red/coral glow
  },
];

export function BusinessAutomationSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-neon-green/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-sm font-semibold tracking-widest text-brand-cyan uppercase mb-4"
            >
              Enterprise Solutions
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Automate Your Business with <span className="text-neon-green">AI</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-8 leading-relaxed"
            >
              Transform your operational efficiency. We build custom AI agents, automated communication pipelines, and intelligent reporting systems that save thousands of manual hours.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/services/business-automation" className={cn(buttonVariants(), "bg-neon-green text-black hover:bg-neon-green/90 box-glow")}>
                Explore Business Solutions
              </Link>
            </motion.div>
          </div>

          {/* Feature Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="h-full"
                >
                  <TiltCard glowColor={feature.glow} className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-brand-cyan">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-heading font-semibold text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
