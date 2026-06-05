import type { Metadata } from "next";
import { Orbitron, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/smooth-scrolling";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ParticleField } from "@/components/three/ParticleField";
import { Preloader } from "@/components/ui/Preloader";


const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  preload: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: false,
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gasautomation.ai"),
  title: {
    template: "%s | GAS AI - Smart Automation Solutions",
    default: "GAS AI - Smart Automation, Robotics & IoT Solutions | Green Automation Solution",
  },
  description:
    "GAS AI (Green Automation Solution) delivers enterprise-grade AI automation, smart home systems, industrial IoT, robotics, and computer vision solutions globally. Build smarter with GAS.",
  keywords: [
    "GAS AI",
    "Green Automation Solution",
    "AI automation services",
    "smart home automation India",
    "industrial automation IoT",
    "robotics automation company",
    "computer vision solutions",
    "IoT solutions",
    "business automation AI",
    "smart automation systems",
    "AI internship program",
    "virtual AI labs",
    "sparkinnov8 program",
    "school robotics lab",
    "GAS virtual lab",
  ],
  authors: [{ name: "Green Automation Solution (GAS AI)", url: "https://gasautomation.ai" }],
  creator: "Green Automation Solution",
  publisher: "Green Automation Solution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://gasautomation.ai",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gasautomation.ai",
    siteName: "GAS AI - Green Automation Solution",
    title: "GAS AI - Smart Automation, Robotics & IoT Solutions",
    description:
      "Enterprise-grade AI automation, smart home systems, industrial IoT, robotics, and computer vision. Build smarter with Green Automation Solution.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "GAS AI - Green Automation Solution Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GAS AI - Smart Automation, Robotics & IoT Solutions",
    description:
      "Enterprise-grade AI automation, smart home systems, industrial IoT, robotics, and computer vision. Build smarter with GAS.",
    images: ["/logo.png"],
    creator: "@gasautomation",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://gasautomation.ai/#organization",
      name: "Green Automation Solution",
      alternateName: ["GAS AI", "GAS", "Green Automation Solution (GAS)"],
      url: "https://gasautomation.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://gasautomation.ai/logo.png",
        width: 512,
        height: 512,
      },
      description:
        "Enterprise-grade AI automation, smart home systems, industrial IoT, robotics, computer vision, and educational technology programs.",
      foundingDate: "2023",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9080785352",
          contactType: "sales",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Tamil"],
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/green-automation-solution",
        "https://www.instagram.com/gasautomation",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Smart Home Automation",
        "Industrial Automation",
        "Internet of Things",
        "Robotics",
        "Computer Vision",
        "Natural Language Processing",
        "Embedded Systems",
        "Product Development",
      ],
      serviceArea: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://gasautomation.ai/#website",
      url: "https://gasautomation.ai",
      name: "GAS AI - Green Automation Solution",
      description:
        "Official website of Green Automation Solution — AI automation, smart home, industrial IoT, robotics, and educational technology programs.",
      publisher: {
        "@id": "https://gasautomation.ai/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://gasautomation.ai/services?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable} ${poppins.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-white selection:bg-neon-green/30 selection:text-white">
        <Preloader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ParticleField />
        <SmoothScrolling>
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
