import { Metadata } from "next";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers & Remote AI Jobs",
  description:
    "Join GAS AI — remote careers in AI, machine learning, robotics, IoT & web development. Work from anywhere, build enterprise-grade automation systems.",
  keywords: [
    "AI jobs remote",
    "robotics engineer jobs India",
    "machine learning careers",
    "IoT developer jobs",
    "remote AI internship",
    "work from home tech jobs",
    "GAS AI careers",
    "automation engineer jobs",
    "Next.js developer remote",
    "SparkInnov8 internship",
  ],
  alternates: {
    canonical: "https://gasautomation.ai/careers",
  },
  openGraph: {
    title: "Careers & Remote AI Jobs | GAS AI",
    description:
      "Join the future of automation. Remote careers in AI, ML, robotics, IoT & full stack development at Green Automation Solution.",
    url: "https://gasautomation.ai/careers",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "GAS AI Careers" }],
  },
  twitter: {
    title: "Careers & Remote AI Jobs | GAS AI",
    description:
      "Remote careers in AI, ML, robotics, IoT & full stack development at Green Automation Solution.",
  },
};

const JOBS = [
  { title: "Senior AI Engineer", type: "Full-Time (Remote)", department: "AI & ML", location: "Global" },
  { title: "Robotics Software Developer", type: "Full-Time (Hybrid)", department: "Robotics", location: "Tamil Nadu, India" },
  { title: "IoT Systems Architect", type: "Contract", department: "Industrial Automation", location: "Remote" },
  { title: "Full Stack Next.js Developer", type: "Full-Time (Remote)", department: "Web Development", location: "Global" },
  { title: "Student Internship Program", type: "Internship (Remote/Hybrid)", department: "SparkInnov8", location: "Global", link: "https://docs.google.com/forms/d/e/1FAIpQLSe0q_g9lVSP3yYwcSws2NJukx80_xGePg56DuJzZ_8T2R-OMA/viewform?pli=1" },
];

import { PageHero3D } from "@/components/three/PageHero3D";

export default function CareersPage() {
  return (
    <div className="py-24 bg-brand-gray min-h-screen relative overflow-hidden">
      <PageHero3D shape="octahedron" color="#00FF88" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Join the <span className="text-neon-green">Future</span>
          </h1>
          <p className="text-xl text-gray-400">
            We are looking for brilliant minds to help us build enterprise-grade AI and smart automation ecosystems. Work from anywhere, impact everywhere.
          </p>
        </div>

        <div className="bg-black/50 border border-white/5 rounded-3xl p-6 md:p-10 mb-20">
          <h2 className="text-2xl font-heading font-bold text-white mb-8">Open Positions</h2>
          
          <div className="space-y-4">
            {JOBS.map((job, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 glass-panel rounded-2xl hover:border-neon-green/30 transition-colors group">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-neon-green transition-colors mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1 text-brand-cyan" /> {job.type}</span>
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-brand-cyan" /> {job.location}</span>
                  </div>
                </div>
                <Link href={job.link || "/contact"} target={job.link ? "_blank" : undefined} rel={job.link ? "noopener noreferrer" : undefined} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 text-white hover:bg-neon-green hover:text-black transition-colors font-medium text-sm border border-white/10 group-hover:border-neon-green">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
