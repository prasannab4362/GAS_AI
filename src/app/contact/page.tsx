"use client";

import { useState } from "react";
import { Send, Mail, MessageCircle, Calendar, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="py-24 bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-neon-green/30 selection:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-10">
        
        {/* Top Row: Form & Calendly */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg border border-neon-green/30 flex items-center justify-center bg-neon-green/5 text-neon-green">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-heading font-black tracking-wider uppercase text-white italic">
                Send Us A <span className="text-neon-green">Message</span>
              </h2>
            </div>

            <div className="bg-[#111111] border border-white/5 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-600"></div>
                      </div>
                      <input required name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-neon-green/50 transition-colors placeholder:text-gray-600" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-600">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input required type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-neon-green/50 transition-colors placeholder:text-gray-600" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">Service Interest</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon-green/50 transition-colors appearance-none">
                    <option value="" disabled>Select a service...</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="Robotics">Robotics</option>
                    <option value="IoT Solutions">IoT Solutions</option>
                    <option value="Custom App Dev">Custom App Development</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">Your Message</label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 text-gray-600">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <textarea required rows={4} name="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-neon-green/50 transition-colors resize-none placeholder:text-gray-600" />
                  </div>
                </div>
                
                {/* Fake ReCaptcha block to match reference */}
                <div className="flex justify-end">
                  <div className="bg-[#1a1a1a] border border-white/10 rounded-md p-3 flex items-center gap-4">
                    <div className="w-6 h-6 bg-white rounded-sm border-2 border-gray-300"></div>
                    <span className="text-sm text-gray-300">I'm not a robot</span>
                    <div className="w-8 h-8 opacity-50 bg-gray-600 rounded-full flex items-center justify-center text-[8px] flex-col leading-none ml-4">
                      <span>re</span>
                      <span>CAP</span>
                    </div>
                  </div>
                </div>

                <Button type="submit" disabled={status === "loading"} className="w-full bg-gray-600/50 hover:bg-neon-green hover:text-black text-white py-6 text-sm tracking-widest font-bold uppercase transition-all duration-300">
                  {status === "loading" ? "Sending..." : "Launch Inquiry"} <Send className="ml-2 w-4 h-4" />
                </Button>

                {status === "success" && <p className="text-neon-green mt-4 text-center text-sm font-medium">Message sent successfully!</p>}
                {status === "error" && <p className="text-red-400 mt-4 text-center text-sm font-medium">Failed to send message. Please try again.</p>}
              </form>
            </div>
          </motion.div>

          {/* Right: Calendly */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg border border-neon-green/30 flex items-center justify-center bg-neon-green/5 text-neon-green">
                <Calendar className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-heading font-black tracking-wider uppercase text-white italic">
                Book A <span className="text-neon-green">Strategy Session</span>
              </h2>
            </div>

            <div className="bg-[#111111] border border-white/5 rounded-3xl shadow-2xl overflow-hidden flex h-full min-h-[600px] relative items-center justify-center p-8 text-center">
              <div className="space-y-4 max-w-sm">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-neon-green" />
                </div>
                <h3 className="text-xl font-bold text-white">Calendar Not Connected</h3>
                <p className="text-gray-400 text-sm">
                  Please provide your Calendly URL (e.g. calendly.com/your-name) so we can activate your inline scheduler.
                </p>
                <div className="pt-4">
                  <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-neon-green text-black hover:bg-neon-green/90 transition-colors font-bold text-sm uppercase tracking-widest">
                    Go to Calendly
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Info & FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          
          {/* Bottom Left: Contact Info + FAQ */}
          <div className="space-y-12">
            
            {/* Direct Line & Email Swarm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#111111] border border-white/5 p-6 rounded-3xl flex items-center gap-4 hover:border-neon-green/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-neon-green flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1">Direct Line</p>
                  <p className="font-bold text-white text-lg">(+91) 9080151505</p>
                </div>
              </div>

              <div className="bg-[#111111] border border-white/5 p-6 rounded-3xl flex items-center gap-4 hover:border-neon-green/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-neon-green flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1">Email Swarm</p>
                  <p className="font-bold text-white text-sm break-all">sparkinnov8kjpd@gmail.com</p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-heading font-black tracking-wider uppercase text-white italic mb-8">
                Common <span className="text-neon-green">Inquiries</span>
              </h2>
              <div className="space-y-4">
                {[
                  { q: "What's the typical timeline for an MVP?", a: "Most MVPs take between 4 to 8 weeks from discovery to deployment, depending on core feature complexity." },
                  { q: "Do you offer post-launch support?", a: "Yes, we provide scalable maintenance and iterative improvement plans for all our AI solutions." },
                  { q: "Can you help with AI model selection?", a: "Absolutely. We evaluate your data and goals to recommend the most cost-effective and performant models (OpenAI, Anthropic, or Open Source)." }
                ].map((faq, i) => (
                  <div key={i} className="bg-[#111111] border border-white/5 p-6 rounded-2xl hover:border-neon-green/20 transition-all">
                    <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Right: Expectations & Stats */}
          <div className="space-y-6">
            
            <div className="bg-[#111111] border border-neon-green/10 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/5 blur-3xl rounded-full"></div>
              
              <h3 className="text-xs font-bold tracking-widest text-neon-green uppercase mb-8">What To Expect</h3>
              
              <div className="space-y-8 relative">
                <div className="absolute left-3.5 top-2 bottom-2 w-px bg-white/10"></div>
                
                {[
                  { step: "1", title: "Discovery", desc: "30-minute deep dive with our AI engineers." },
                  { step: "2", title: "Technical Vibe", desc: "Honest discussion on feasibility and scaling." },
                  { step: "3", title: "The Blueprint", desc: "Personalized roadmap for your intelligent system." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-neon-green/30 flex items-center justify-center text-neon-green text-xs font-bold flex-shrink-0 mt-1">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#111111] border border-white/5 p-8 rounded-3xl flex flex-col justify-center">
                <p className="text-4xl font-black text-white mb-2">15+</p>
                <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Countries Reached</p>
              </div>
              <div className="bg-[#111111] border border-white/5 p-8 rounded-3xl flex flex-col justify-center">
                <p className="text-4xl font-black text-white mb-2">24/7</p>
                <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Global Support</p>
              </div>
            </div>

          </div>

        </div>
        
      </div>
    </div>
  );
}
