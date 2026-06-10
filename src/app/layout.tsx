import type { Metadata } from "next";
import { Orbitron, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Preloader } from "@/components/ui/Preloader";
import { ParticleCanvas } from "@/components/particle-canvas";
import {
  COMPANY_NAME,
  CONTACT_PHONE,
  LINKEDIN_URL,
  SITE_NAME,
  SITE_URL,
  organizationJsonLd,
  seoKeywords,
  websiteJsonLd,
} from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME} - Smart Automation Solutions`,
    default: `${SITE_NAME} - AI, IoT, Robotics & Automation Solutions | ${COMPANY_NAME}`,
  },
  description:
    "Green Automation Solution (GAS AI) delivers AI automation, IoT automation, smart home systems, industrial IoT, robotics, computer vision, and embedded product development globally.",
  keywords: seoKeywords,
  authors: [{ name: `${COMPANY_NAME} (${SITE_NAME})`, url: SITE_URL }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "512x512" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${SITE_NAME} - ${COMPANY_NAME}`,
    title: `${SITE_NAME} - AI, IoT, Robotics & Automation Solutions`,
    description:
      "AI automation, IoT automation, smart home systems, industrial IoT, robotics, and computer vision by Green Automation Solution.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - ${COMPANY_NAME} Logo`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - AI, IoT, Robotics & Automation Solutions`,
    description:
      "AI automation, IoT automation, smart home systems, industrial IoT, robotics, and computer vision by Green Automation Solution.",
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
    organizationJsonLd,
    websiteJsonLd,
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#local-business`,
      name: COMPANY_NAME,
      alternateName: SITE_NAME,
      url: SITE_URL,
      telephone: CONTACT_PHONE,
      image: `${SITE_URL}/logo.png`,
      parentOrganization: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: ["India", "Worldwide"],
      sameAs: [LINKEDIN_URL],
      priceRange: "$$",
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
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ParticleCanvas />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1 pt-20 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
