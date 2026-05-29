import { Metadata } from "next";
import { Cpu, Wifi, Smartphone, Network, Rocket, Lightbulb, BookOpen } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "SparkInnov8 Program | Robotics & AI Lab for Schools",
  description: "The SparkInnov8 program by GAS brings Arduino, IoT, Robotics, Mobile App Development, and Networking labs directly to school students.",
};

const PROGRAMS = [
  {
    name: "Arduino & Microcontrollers",
    icon: Cpu,
    description: "Learn the fundamentals of electronics and programming. Build your first circuits, blink LEDs, and control motors using Arduino.",
  },
  {
    name: "Internet of Things (IoT)",
    icon: Wifi,
    description: "Connect the physical world to the internet. Build smart home prototypes, weather stations, and remote monitoring systems.",
  },
  {
    name: "Robotics Fundamentals",
    icon: Rocket,
    description: "Design and build autonomous robots, line followers, and obstacle-avoiding rovers using sensors and actuators.",
  },
  {
    name: "Mobile App Development",
    icon: Smartphone,
    description: "Create your own Android and iOS applications. Learn UI/UX design and connect apps to your IoT projects.",
  },
  {
    name: "Networking & Security",
    icon: Network,
    description: "Understand how the internet works, set up local networks, and learn the basics of cybersecurity and data encryption.",
  },
  {
    name: "AI & Future Tech",
    icon: Lightbulb,
    description: "Introduction to Artificial Intelligence, Machine Learning basics, and computer vision for young innovators.",
  }
];

export default function SparkInnov8Page() {
  return (
    <div className="py-24 bg-brand-black min-h-screen relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-cyan/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" /> For Schools & Students
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-neon-green">SparkInnov8</span> Program
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
            Next-Generation Robotics & AI Labs for Future Innovators
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            We bring enterprise-grade technology education directly to school students. Our SparkInnov8 program establishes state-of-the-art labs and curriculums in Arduino, IoT, Robotics, Mobile App Development, and Networking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto bg-neon-green text-black hover:bg-neon-green/90 box-glow text-lg px-8")}>
              Setup Lab in Your School
            </Link>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">Core Learning Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={program.name} className="glass-panel p-8 rounded-3xl hover:border-brand-cyan/50 transition-all duration-300 group hover:-translate-y-1">
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
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass-panel border-neon-green/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
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
        </div>

      </div>
    </div>
  );
}
