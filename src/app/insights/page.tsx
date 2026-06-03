import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Tech Blog - AI, Robotics & IoT Articles",
  description:
    "Expert insights on AI automation, robotics, IoT, smart home tech & Industry 4.0 from the GAS AI engineering team. Stay ahead of the automation curve.",
  keywords: [
    "AI automation blog",
    "robotics technology articles",
    "IoT insights",
    "smart home technology blog",
    "Industry 4.0 articles",
    "WhatsApp AI automation",
    "predictive maintenance blog",
    "GAS AI insights",
    "automation technology news",
    "machine learning engineering blog",
  ],
  alternates: {
    canonical: "https://gasautomation.ai/insights",
  },
  openGraph: {
    title: "Insights & Tech Blog | GAS AI",
    description:
      "Expert perspectives on AI automation, robotics, IoT, and the technologies shaping Industry 4.0.",
    url: "https://gasautomation.ai/insights",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "GAS AI Insights & Blog" }],
  },
  twitter: {
    title: "Insights & Tech Blog | GAS AI",
    description:
      "Expert perspectives on AI automation, robotics, IoT, and the technologies shaping Industry 4.0.",
  },
};

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of WhatsApp AI Automation in Retail",
    excerpt: "How intelligent WhatsApp agents are transforming customer support and sales pipelines for retail businesses globally.",
    category: "AI Automation",
    author: "GAS Engineering",
    date: "May 28, 2026",
    slug: "whatsapp-ai-retail",
  },
  {
    id: 2,
    title: "Predictive Maintenance in Industry 4.0",
    excerpt: "Leveraging IoT sensors and machine learning to predict CNC machine failures before they happen.",
    category: "Industrial IoT",
    author: "GAS Research",
    date: "May 20, 2026",
    slug: "predictive-maintenance-industry-4-0",
  },
  {
    id: 3,
    title: "Building a Smart Home Ecosystem from Scratch",
    excerpt: "A comprehensive guide to planning and deploying a fully automated smart home using modern protocols.",
    category: "Smart Homes",
    author: "GAS Technical Team",
    date: "May 10, 2026",
    slug: "smart-home-ecosystem-guide",
  },
  {
    id: 4,
    title: "Why n8n is the Ultimate Workflow Automation Tool",
    excerpt: "Comparing n8n with traditional automation tools and why it excels in complex enterprise environments.",
    category: "Business Automation",
    author: "GAS Engineering",
    date: "April 25, 2026",
    slug: "n8n-workflow-automation-tool",
  },
];

import { PageHero3D } from "@/components/three/PageHero3D";

export default function InsightsPage() {
  return (
    <div className="py-24 bg-black min-h-screen relative overflow-hidden">
      <PageHero3D shape="sphere" color="#64FFDA" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Insights & <span className="text-neon-green">Articles</span>
          </h1>
          <p className="text-xl text-gray-400">
            Expert perspectives on AI, automation, and the technologies shaping the future of industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="glass-panel rounded-2xl p-6 hover:border-brand-cyan/40 transition-colors group">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                <span className="text-brand-cyan font-semibold">{post.category}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
              </div>
              <h2 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                <Link href={`/insights/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-400 mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <User className="w-4 h-4" /> {post.author}
                </div>
                <Link href={`/insights/${post.slug}`} className="text-sm font-medium text-brand-cyan group-hover:text-neon-green flex items-center">
                  Read Article <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
