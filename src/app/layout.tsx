import type { Metadata } from "next";
import { Orbitron, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/smooth-scrolling";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
  title: "GAS AI | Smart Automation Systems",
  description: "Enterprise-grade AI smart automation, robotics, IoT, and industrial technology company.",
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
