"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "AI Automation", href: "/services/ai-automation" },
  { name: "Virtual AI Labs", href: "/labs" },
  { name: "SparkInnov8 (Schools)", href: "/sparkinnov8" },
  { name: "Products", href: "/products" },
  { name: "Careers", href: "/careers" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
              <img 
                src="/logo-transparent.png" 
                alt="GAS Logo" 
                className="h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,255,136,0.4)] transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="hidden lg:flex flex-col">
                <span className="font-heading font-bold text-xl tracking-widest text-white leading-none">
                  GAS <span className="text-neon-green">AI</span>
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.3em] text-brand-cyan font-bold mt-1 opacity-90">
                  Smart Automations
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 lg:space-x-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-medium transition-colors"
                  >
                    <span className={`relative z-10 ${isActive ? "text-neon-green" : "text-gray-300 hover:text-white"}`}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 border-b-2 border-neon-green"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "border-neon-green/50 text-neon-green hover:bg-neon-green hover:text-black")}>
              Book Consultation
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-black border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive ? "text-neon-green" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="px-3 py-4 border-t border-white/5">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={cn(buttonVariants(), "w-full bg-neon-green text-black hover:bg-neon-green/90")}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
