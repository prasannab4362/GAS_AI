import { Metadata } from "next";
import { CareersContent } from "@/components/careers-content";
 
export const metadata: Metadata = {
  title: "Careers & Remote AI Jobs | GAS AI",
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
 
export default function CareersPage() {
  return (
    <div className="py-24 bg-black min-h-screen relative overflow-hidden">
      {/* Visual cybernetic mesh background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <CareersContent />
    </div>
  );
}
