"use client";

import { motion } from "framer-motion";
import { MessageSquare, Workflow, LineChart, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "WhatsApp AI Automation",
    description: "Intelligent conversational agents that handle customer inquiries, bookings, and support 24/7 directly on WhatsApp.",
    icon: MessageSquare,
  },
  {
    title: "AI Workflow Automation",
    description: "Connect disparate systems using n8n and custom AI scripts to automate data entry, processing, and reporting.",
    icon: Workflow,
  },
  {
    title: "Smart Lead Systems",
    description: "Automatically qualify, score, and route leads using predictive AI models, boosting conversion rates.",
    icon: LineChart,
  },
  {
    title: "Intelligent CRM",
    description: "AI-enhanced CRM workflows that summarize client interactions and recommend the next best actions.",
    icon: HeadphonesIcon,
  },
];

export function BusinessAutomationSection() {
  return (
    <section className="py-24 bg-black relative">
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
                  className="glass-panel p-6 rounded-2xl hover:border-brand-cyan/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
