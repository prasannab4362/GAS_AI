"use client";

import { useState } from "react";
import { Send, MapPin, Mail, MessageCircle, Clock } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="py-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            Let's Build the <span className="text-neon-green">Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Ready to upgrade your enterprise? Reach out to our engineering team for a technical consultation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-3xl"
          >
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Full Name *</label>
                  <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-green/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Address *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-green/50 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-green/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Company</label>
                  <input name="company" value={formData.company} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-green/50 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Project Details *</label>
                <textarea required rows={4} name="message" value={formData.message} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-green/50 transition-colors resize-none" />
              </div>
              
              <Button type="submit" disabled={status === "loading"} className="w-full bg-brand-cyan text-black hover:bg-brand-cyan/90 py-6 text-lg font-semibold mt-4">
                {status === "loading" ? "Sending..." : "Submit Inquiry"} <Send className="ml-2 w-5 h-5" />
              </Button>

              {status === "success" && <p className="text-neon-green mt-4 text-center">Message sent successfully!</p>}
              {status === "error" && <p className="text-red-400 mt-4 text-center">Failed to send message. Please try again.</p>}
            </form>
          </motion.div>

          {/* Contact Info & Calendly */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-brand-cyan" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <a href="mailto:sparkinnov8kjpd@gmail.com" className="text-gray-400 hover:text-neon-green transition-colors">sparkinnov8kjpd@gmail.com</a>
              </div>
              
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-brand-cyan" />
                </div>
                <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors">Start a Chat</a>
              </div>
            </div>

            {/* Location */}
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-brand-cyan" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">100% Remote & Global</h3>
                <p className="text-gray-400 text-sm">Operating completely remotely, engineering automation systems worldwide.</p>
              </div>
            </div>

            {/* Calendly Embed Placeholder */}
            <div className="glass-panel p-6 rounded-2xl h-80 flex flex-col items-center justify-center text-center border-neon-green/20">
              <Clock className="w-10 h-10 text-neon-green mb-4" />
              <h3 className="text-xl font-heading font-bold text-white mb-2">Schedule a Meeting</h3>
              <p className="text-gray-400 mb-6 text-sm">Book a direct technical consultation with our engineers.</p>
              <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", className: "bg-white/10 hover:bg-white/20 text-white border-0" })}>
                Open Calendly Scheduler
              </a>
            </div>
          </motion.div>
          
        </div>

        {/* Map Placeholder */}
        <div className="h-96 w-full glass-panel rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-brand-gray/50 flex flex-col items-center justify-center text-center p-6">
            <MapPin className="w-12 h-12 text-brand-cyan mb-4" />
            <h3 className="text-2xl font-heading font-bold text-white mb-2">Global & Remote Operations</h3>
            <p className="text-gray-400">Our engineering teams operate entirely remotely, delivering automation systems worldwide without borders.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
