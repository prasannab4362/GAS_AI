import { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Consultation",
  description:
    "Contact GAS AI for a free consultation on AI automation, smart home, robotics, IoT & custom product development. Book a strategy session with our engineers.",
  keywords: [
    "contact GAS AI",
    "AI automation consultation",
    "smart home consultation India",
    "robotics project inquiry",
    "IoT solutions contact",
    "book automation consultation",
    "GAS AI contact",
    "free AI consultation",
    "automation project quote",
    "Green Automation Solution contact",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us - Get a Free Consultation | GAS AI",
    description:
      "Book a free strategy session with GAS AI engineers. AI automation, smart home, robotics & IoT project consultation.",
    url: `${SITE_URL}/contact`,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Contact GAS AI" }],
  },
  twitter: {
    title: "Contact Us - Get a Free Consultation | GAS AI",
    description:
      "Book a free strategy session with GAS AI engineers for your automation project.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
